import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Privacy Policy | LVR DSA',
  description: 'Learn how LVR protects your personal data and privacy.',
};

export default function PrivacyPolicyPage() {
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
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-navy">Privacy Policy</h1>
            <p className="text-xs text-text-secondary mt-1">Last updated: January 2026</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-text-secondary leading-relaxed space-y-4">
          <p>
            At {siteConfig.name} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we take the security and confidentiality of your financial and personal data with utmost priority. As an authorized Direct Selling Agent (DSA), we adhere strictly to the Information Technology Act, 2000, and Reserve Bank of India (RBI) guidelines regarding customer data protection.
          </p>

          <h2 className="text-lg font-bold text-navy pt-2">1. Information We Collect</h2>
          <p>
            When you enquire about or apply for a loan through our platform, we collect information that helps evaluate your initial eligibility. This includes: Full Name, Contact Details (Mobile Number, Email), Requested Loan Amount, Employment Information, and KYC identifiers.
          </p>

          <h2 className="text-lg font-bold text-navy pt-2">2. How We Use Your Data</h2>
          <p>
            Your information is used exclusively to evaluate your loan eligibility across our partner Banks and NBFCs, facilitate submission of your application, and communicate real-time updates regarding your loan status. We never sell or lease your contact information to unauthorized third-party marketers.
          </p>

          <h2 className="text-lg font-bold text-navy pt-2">3. Data Security &amp; Encryption</h2>
          <p>
            We implement 256-bit SSL encryption for data transmission and store all lead records on secure, firewalled cloud infrastructure compliant with Indian data localization norms.
          </p>
        </div>
      </div>
    </div>
  );
}

