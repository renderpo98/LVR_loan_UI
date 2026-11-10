import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Terms & Conditions | LVR DSA',
  description: 'Terms and conditions governing the use of LVR facilitation platform.',
};

export default function TermsConditionsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-brand hover:text-navy mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-brand flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-navy">Terms &amp; Conditions</h1>
            <p className="text-xs text-text-secondary mt-1">Effective Date: January 2026</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-text-secondary leading-relaxed space-y-4">
          <p>
            Please read these Terms and Conditions carefully before submitting any enquiry or loan application through {siteConfig.name}. By submitting your information or verifying via OTP, you confirm your acceptance of these terms.
          </p>

          <h2 className="text-lg font-bold text-navy pt-2">1. Nature of Services (DSA Role)</h2>
          <p>
            {siteConfig.name} is an authorized Direct Selling Agent (DSA). We facilitate and coordinate loan applications between prospective borrowers and authorized financial institutions (Banks and NBFCs). We are not a banking company, non-banking financial institution, or direct lender.
          </p>

          <h2 className="text-lg font-bold text-navy pt-2">2. No Guarantee of Sanction or Interest Rates</h2>
          <p>
            All loan sanctions, credit decisions, interest rates, tenure allowances, processing fees, and disbursements are governed solely by the respective lender’s internal credit policy, CIBIL underwriting norms, and RBI guidelines. LVR does not guarantee loan approval or specific interest rates.
          </p>

          <h2 className="text-lg font-bold text-navy pt-2">3. Zero Upfront Facilitation Fee</h2>
          <p>
            LVR does not charge any consultation or facilitation fee from applicants. If any person claiming to represent LVR requests cash or personal bank transfers for loan approval, please contact us immediately at {siteConfig.email}.
          </p>
        </div>
      </div>
    </div>
  );
}

