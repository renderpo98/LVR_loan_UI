import {
  ApiResponse,
  ApplicationSubmissionResult,
  LoanApplicationFormData,
  OtpSession,
} from '@/types';

// Configurable API Base URL from environment variable or default fallback
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.lvr.in/v1';

// Toggle between Mock API (for frontend demo/testing) and Real API endpoint
const USE_MOCK_API = process.env.NEXT_PUBLIC_USE_MOCK_API !== 'false';

/**
 * Service to request an OTP for mobile verification
 */
export async function requestOtp(
  mobileNumber: string
): Promise<ApiResponse<OtpSession>> {
  if (USE_MOCK_API) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Validate 10-digit Indian mobile format
    const cleanNumber = mobileNumber.replace(/\D/g, '');
    if (cleanNumber.length !== 10) {
      return {
        success: false,
        message: 'Please provide a valid 10-digit Indian mobile number',
        error: 'INVALID_PHONE_NUMBER',
      };
    }

    const masked = `${cleanNumber.slice(0, 2)}******${cleanNumber.slice(8)}`;
    return {
      success: true,
      message: `OTP sent successfully to +91 ${masked} (Use demo OTP: 123456)`,
      data: {
        sessionId: `otp_sess_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
        maskedMobile: masked,
        expiresInSeconds: 300,
      },
    };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/request-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mobileNumber }),
    });
    return await response.json();
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send OTP. Please check your network connection.',
      error: String(error),
    };
  }
}

/**
 * Service to verify the OTP entered by user
 */
export async function verifyOtp(
  sessionId: string,
  otpCode: string,
  formData: LoanApplicationFormData
): Promise<ApiResponse<ApplicationSubmissionResult>> {
  if (USE_MOCK_API) {
    await new Promise((resolve) => setTimeout(resolve, 900));

    // Allow 123456 as the designated mock OTP, or any 6-digit code for testing convenience
    if (otpCode !== '123456' && otpCode.length !== 6) {
      return {
        success: false,
        message: 'Invalid OTP entered. Please try again with 123456.',
        error: 'INVALID_OTP',
      };
    }

    const appNumber = `LVR-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    return {
      success: true,
      message: 'Verification successful! Your loan application has been received.',
      data: {
        leadId: `lead_${Date.now()}`,
        applicationNumber: appNumber,
        submittedAt: new Date().toISOString(),
        status: 'VERIFIED',
      },
    };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/leads/submit-with-otp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId,
        otpCode,
        application: formData,
      }),
    });
    return await response.json();
  } catch (error) {
    return {
      success: false,
      message: 'Verification failed. Please try again.',
      error: String(error),
    };
  }
}

