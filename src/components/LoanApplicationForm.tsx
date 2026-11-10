'use client';

import React, { useState } from 'react';
import {
  Clock,
  ShieldCheck,
  ChevronDown,
  User,
  Phone,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  AlertCircle,
  Sparkles,
  X,
} from 'lucide-react';
import { LoanType, LoanApplicationFormData } from '@/types';
import { loanProducts } from '@/data/loanProducts';
import { requestOtp, verifyOtp } from '@/services/api';

interface LoanApplicationFormProps {
  initialLoanType?: LoanType | '';
  className?: string;
  isCompact?: boolean;
  onSuccess?: (appId: string) => void;
}

export const LoanApplicationForm: React.FC<LoanApplicationFormProps> = ({
  initialLoanType = '',
  className = '',
  isCompact = false,
  onSuccess,
}) => {
  // Form input state
  const [formData, setFormData] = useState<LoanApplicationFormData>({
    loanType: initialLoanType,
    loanAmount: '',
    fullName: '',
    mobileNumber: '',
  });

  // UI & flow states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isRequestingOtp, setIsRequestingOtp] = useState(false);
  const [otpSessionId, setOtpSessionId] = useState<string | null>(null);
  const [otpValue, setOtpValue] = useState(['', '', '', '', '', '']);
  const [otpError, setOtpError] = useState<string | null>(null);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [resendTimer, setResendTimer] = useState(45);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    applicationNumber: string;
    submittedAt: string;
  } | null>(null);

  // Format amount with Indian comma system
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '');
    if (!rawVal) {
      setFormData((prev) => ({ ...prev, loanAmount: '' }));
      return;
    }
    const num = parseInt(rawVal, 10);
    // Format to Indian currency string
    const formatted = new Intl.NumberFormat('en-IN').format(num);
    setFormData((prev) => ({ ...prev, loanAmount: formatted }));
    if (errors.loanAmount) {
      setErrors((prev) => ({ ...prev, loanAmount: '' }));
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const clean = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, mobileNumber: clean }));
    if (errors.mobileNumber) {
      setErrors((prev) => ({ ...prev, mobileNumber: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.loanType) {
      newErrors.loanType = 'Please select a loan type';
    }

    const cleanAmount = formData.loanAmount.replace(/,/g, '');
    if (!cleanAmount || parseInt(cleanAmount, 10) < 10000) {
      newErrors.loanAmount = 'Minimum loan amount is ₹10,000';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters';
    }

    const cleanMobile = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanMobile) {
      newErrors.mobileNumber = 'Please enter your mobile number';
    } else if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      newErrors.mobileNumber = 'Enter a valid 10-digit Indian mobile number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsRequestingOtp(true);
    setOtpError(null);

    try {
      const response = await requestOtp(formData.mobileNumber);
      if (response.success && response.data) {
        setOtpSessionId(response.data.sessionId);
        setShowOtpModal(true);
        startResendCountdown();
      } else {
        setErrors((prev) => ({
          ...prev,
          mobileNumber: response.message || 'Failed to send OTP. Try again.',
        }));
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        mobileNumber: 'Network error. Please try again.',
      }));
    } finally {
      setIsRequestingOtp(false);
    }
  };

  const startResendCountdown = () => {
    setResendTimer(45);
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleOtpBoxChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otpValue];
    newOtp[index] = value.slice(-1);
    setOtpValue(newOtp);
    setOtpError(null);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpValue[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const code = otpValue.join('');
    if (code.length !== 6) {
      setOtpError('Please enter the complete 6-digit OTP code');
      return;
    }

    setIsVerifyingOtp(true);
    setOtpError(null);

    try {
      const response = await verifyOtp(otpSessionId || 'sess_mock', code, formData);
      if (response.success && response.data) {
        setSubmissionSuccess({
          applicationNumber: response.data.applicationNumber,
          submittedAt: new Date().toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          }),
        });
        setShowOtpModal(false);
        if (onSuccess) {
          onSuccess(response.data.applicationNumber);
        }
      } else {
        setOtpError(response.message || 'Invalid OTP code. Please use demo OTP: 123456');
      }
    } catch {
      setOtpError('Error verifying OTP. Please try again.');
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleResendOtp = async () => {
    if (resendTimer > 0) return;
    setIsRequestingOtp(true);
    setOtpError(null);
    try {
      const response = await requestOtp(formData.mobileNumber);
      if (response.success && response.data) {
        setOtpSessionId(response.data.sessionId);
        startResendCountdown();
      }
    } catch {
      setOtpError('Could not resend OTP. Please try again.');
    } finally {
      setIsRequestingOtp(false);
    }
  };

  const resetForm = () => {
    setFormData({
      loanType: initialLoanType,
      loanAmount: '',
      fullName: '',
      mobileNumber: '',
    });
    setSubmissionSuccess(null);
    setOtpValue(['', '', '', '', '', '']);
    setErrors({});
  };

  return (
    <div
      id="loan-application-form"
      className={`bg-white rounded-3xl p-6 sm:p-7 shadow-float border border-slate-100 transition-all ${className}`}
    >
      {/* SUCCESS STATE */}
      {submissionSuccess ? (
        <div className="py-6 px-2 text-center animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-brand mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Application Submitted
          </span>

          <h3 className="text-2xl font-extrabold text-navy">Thank You, {formData.fullName}!</h3>
          <p className="text-sm text-text-secondary mt-1 max-w-sm mx-auto">
            Your loan application has been registered with our DSA expert panel.
          </p>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 my-5 text-left max-w-sm mx-auto space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">Application Ref No.</span>
              <span className="font-mono font-bold text-navy text-sm">
                {submissionSuccess.applicationNumber}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">Requested Loan</span>
              <span className="font-bold text-navy capitalize">
                {formData.loanType.replace('-', ' ')} (₹{formData.loanAmount})
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 font-medium">Verified Phone</span>
              <span className="font-semibold text-slate-700">+91 {formData.mobileNumber}</span>
            </div>
            <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-200">
              <span className="text-slate-500 font-medium">Status</span>
              <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                DSA In Review
              </span>
            </div>
          </div>

          <div className="p-3 bg-blue-50/60 rounded-xl text-left text-xs text-navy/80 mb-5 max-w-sm mx-auto">
            <p className="font-semibold mb-1">What happens next?</p>
            <p className="text-slate-600">
              A dedicated DSA relationship executive will contact you shortly to compare bank rates
              and arrange document collection.
            </p>
          </div>

          <button
            type="button"
            onClick={resetForm}
            className="w-full max-w-sm mx-auto py-3 rounded-xl bg-navy text-white text-sm font-bold hover:bg-navy-deep active:scale-95 transition-all shadow-md"
          >
            Apply for Another Loan
          </button>
        </div>
      ) : (
        /* REGULAR FORM STATE */
        <div>
          {/* Header */}
          <div className="flex items-start gap-3 mb-5">
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 text-navy">
              <Clock className="w-5 h-5 text-blue-brand" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight leading-tight">
                Apply for a Loan
              </h3>
              <p className="text-xs text-text-secondary font-medium mt-0.5">
                It&apos;s quick, easy and 100% free!
              </p>
            </div>
          </div>

          <form onSubmit={handleInitialSubmit} className="space-y-4">
            {/* Field: Loan Type */}
            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">
                Select Loan Type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.loanType}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      loanType: e.target.value as LoanType,
                    }));
                    if (errors.loanType) {
                      setErrors((prev) => ({ ...prev, loanType: '' }));
                    }
                  }}
                  className={`w-full appearance-none bg-slate-50/80 hover:bg-slate-50 border rounded-xl py-3 px-3.5 pr-10 text-sm font-medium text-navy transition-all focus:outline-none focus:ring-2 focus:ring-blue-brand focus:bg-white ${
                    errors.loanType ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                  }`}
                >
                  <option value="" disabled>
                    Select Loan Type
                  </option>
                  {loanProducts.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              {errors.loanType && (
                <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.loanType}</p>
              )}
            </div>

            {/* Field: Required Loan Amount */}
            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">
                Required Loan Amount <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                  ₹
                </div>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter amount (e.g. 5,00,000)"
                  value={formData.loanAmount}
                  onChange={handleAmountChange}
                  className={`w-full bg-slate-50/80 hover:bg-slate-50 border rounded-xl py-3 pl-8 pr-3.5 text-sm font-semibold text-navy placeholder:text-slate-400 placeholder:font-normal transition-all focus:outline-none focus:ring-2 focus:ring-blue-brand focus:bg-white ${
                    errors.loanAmount ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                  }`}
                />
              </div>
              {errors.loanAmount && (
                <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.loanAmount}</p>
              )}
            </div>

            {/* Field: Full Name */}
            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, fullName: e.target.value }));
                    if (errors.fullName) {
                      setErrors((prev) => ({ ...prev, fullName: '' }));
                    }
                  }}
                  className={`w-full bg-slate-50/80 hover:bg-slate-50 border rounded-xl py-3 pl-10 pr-3.5 text-sm font-medium text-navy placeholder:text-slate-400 placeholder:font-normal transition-all focus:outline-none focus:ring-2 focus:ring-blue-brand focus:bg-white ${
                    errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Field: Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-navy mb-1.5">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1 text-slate-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs font-bold text-slate-600 pl-0.5">+91</span>
                </div>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="Enter 10-digit mobile number"
                  value={formData.mobileNumber}
                  onChange={handleMobileChange}
                  className={`w-full bg-slate-50/80 hover:bg-slate-50 border rounded-xl py-3 pl-16 pr-3.5 text-sm font-semibold text-navy placeholder:text-slate-400 placeholder:font-normal transition-all focus:outline-none focus:ring-2 focus:ring-blue-brand focus:bg-white tracking-wide ${
                    errors.mobileNumber ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                  }`}
                />
              </div>
              {errors.mobileNumber && (
                <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.mobileNumber}</p>
              )}
            </div>

            {/* Submit Button: Get OTP & Continue */}
            <button
              type="submit"
              disabled={isRequestingOtp}
              className="w-full mt-2 py-3.5 px-5 rounded-xl bg-navy hover:bg-navy-deep active:scale-[0.98] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-75 disabled:cursor-not-allowed group"
            >
              {isRequestingOtp ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Sending Secure OTP...</span>
                </>
              ) : (
                <>
                  <span>Get OTP & Continue</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            {/* Trust badge */}
            <div className="pt-2 flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Your information is safe & secure with us.</span>
            </div>
          </form>
        </div>
      )}

      {/* OTP VERIFICATION MODAL */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowOtpModal(false)}
              className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-brand flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-navy">Verify Mobile Number</h3>
              <p className="text-xs text-text-secondary mt-1">
                Enter the 6-digit code sent to{' '}
                <span className="font-bold text-navy">+91 {formData.mobileNumber}</span>
              </p>
              <div className="mt-2 inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-semibold border border-emerald-100">
                Demo OTP: <span className="font-mono font-bold tracking-wider">123456</span>
              </div>
            </div>

            {/* OTP 6-box input */}
            <div className="flex justify-center gap-2 sm:gap-2.5 mb-4">
              {otpValue.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpBoxChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  className="w-11 h-12 sm:w-12 sm:h-14 text-center text-lg font-bold text-navy bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-brand focus:bg-white focus:border-blue-brand transition-all"
                  autoFocus={index === 0}
                />
              ))}
            </div>

            {otpError && (
              <div className="flex items-center justify-center gap-1.5 text-xs text-red-500 mb-4 bg-red-50 p-2 rounded-lg">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{otpError}</span>
              </div>
            )}

            {/* Resend OTP */}
            <div className="text-center text-xs text-slate-500 mb-5">
              {resendTimer > 0 ? (
                <span>
                  Resend code in <strong className="text-navy">{resendTimer}s</strong>
                </span>
              ) : (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={isRequestingOtp}
                  className="text-blue-brand font-bold hover:underline inline-flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" /> Resend OTP Code
                </button>
              )}
            </div>

            {/* Verify CTA */}
            <button
              type="button"
              onClick={handleVerifyOtp}
              disabled={isVerifyingOtp}
              className="w-full py-3.5 rounded-xl bg-blue-brand hover:bg-blue-600 active:scale-95 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-75"
            >
              {isVerifyingOtp ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying Code...</span>
                </>
              ) : (
                <>
                  <span>Verify & Submit Application</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-slate-400 mt-3">
              By submitting, you agree to our Terms of Use and Privacy Policy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

