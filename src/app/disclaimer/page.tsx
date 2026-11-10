import React from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Statutory Disclaimer | LVR DSA',
  description: 'Statutory financial and regulatory disclaimer for LVR loan facilitation.',
};

export default function DisclaimerPage() {
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
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-navy">Regulatory Disclaimer</h1>
            <p className="text-xs text-text-secondary mt-1">Direct Selling Agent (DSA) Disclosure</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-text-secondary leading-relaxed space-y-4">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 font-medium">
            {siteConfig.disclaimer}
          </div>

          <h2 className="text-lg font-bold text-navy pt-2">1. Intermediary Status</h2>
          <p>
            {siteConfig.name} operates purely as a Direct Selling Agent (DSA) and channel partner for recognized scheduled commercial banks and Non-Banking Financial Companies (NBFCs) registered with the Reserve Bank of India.
          </p>

          <h2 className="text-lg font-bold text-navy pt-2">2. Processing Fees and Repayments</h2>
          <p>
            All legitimate loan processing fees, stamp duty charges, legal inspection charges, and EMIs are to be paid directly to the sanctioning bank or NBFC via official banking channels. No representative of LVR is authorized to accept cash payments or transfers into personal accounts.
          </p>

          <h2 className="text-lg font-bold text-navy pt-2">3. Trademark &amp; Partner Logos</h2>
          <p>
            All partner bank names, logos, and trademarks displayed on this website belong to their respective corporate entities and are referenced solely for identification purposes to illustrate authorized DSA sourcing arrangements.
          </p>
        </div>
      </div>
    </div>
  );
}

