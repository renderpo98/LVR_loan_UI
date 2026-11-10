import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Wallet,
  Home as HomeIcon,
  Store,
  Car,
  Building,
  GraduationCap,
  CreditCard,
  CheckCircle2,
  ShieldCheck,
  Percent,
  Clock,
  ArrowRight,
  FileCheck,
  Zap,
  Sparkles,
  Award,
} from 'lucide-react';
import { loanProducts } from '@/data/loanProducts';
import { LoanApplicationForm } from '@/components/LoanApplicationForm';
import { FAQSection } from '@/components/FAQSection';
import { siteConfig } from '@/data/siteConfig';

const iconMap: Record<string, React.ElementType> = {
  Wallet,
  Home: HomeIcon,
  Store,
  Car,
  Building,
  GraduationCap,
  CreditCard,
  Zap,
  CheckCircle2,
  Clock,
  Percent,
  Award,
};

interface PageProps {
  params: {
    loanSlug: string;
  };
}

export async function generateStaticParams() {
  return loanProducts.map((product) => ({
    loanSlug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = loanProducts.find((p) => p.slug === params.loanSlug);
  if (!product) {
    return { title: 'Loan Not Found | LVR' };
  }

  return {
    title: `Apply for ${product.title} | Low Interest & Fast Disbursal | LVR DSA`,
    description: `${product.longDescription} Compare bank offers, check eligibility, and apply online through LVR DSA.`,
    openGraph: {
      title: `${product.title} - Best Interest Rates & Fast Approval | LVR`,
      description: product.shortDescription,
    },
  };
}

export default function LoanLandingPage({ params }: PageProps) {
  const product = loanProducts.find((p) => p.slug === params.loanSlug);

  if (!product) {
    notFound();
  }

  const ProductIcon = iconMap[product.iconName] || Wallet;

  return (
    <div className="min-h-screen bg-surface-light">
      {/* LOAN-SPECIFIC HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#08264A] via-[#0E2F59] to-[#102B50] text-white pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#loan-products" className="hover:text-white transition-colors">
              Loans
            </Link>
            <span>/</span>
            <span className="text-blue-300 font-semibold">{product.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
            {/* Left Hero Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-bold text-blue-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{product.badge || 'Verified DSA Partner'}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Apply for {product.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                {product.longDescription}
              </p>

              {/* Key Quick Highlights Cards */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-slate-300 block">
                    Interest From
                  </span>
                  <span className="text-base sm:text-xl font-extrabold text-white mt-1 block">
                    {product.interestRateFrom}
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-slate-300 block">
                    Tenure
                  </span>
                  <span className="text-base sm:text-xl font-extrabold text-white mt-1 block">
                    {product.maxTenure}
                  </span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <span className="text-[11px] uppercase tracking-wider text-slate-300 block">
                    Amount
                  </span>
                  <span className="text-base sm:text-xl font-extrabold text-white mt-1 block">
                    {product.maxAmount}
                  </span>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Zero DSA Service Fee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>Fast Track Disbursal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-300" />
                  <span>Doorstep Document Pickup</span>
                </div>
              </div>
            </div>

            {/* Right Application Form preselected with current loan */}
            <div className="lg:col-span-5 w-full">
              <LoanApplicationForm initialLoanType={product.id} />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
              Key Benefits of {product.title}
            </h2>
            <p className="text-sm text-text-secondary mt-2">
              Why thousands of borrowers choose LVR to facilitate their loan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-surface-light border border-slate-200/80 hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-brand flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-navy mb-1.5">{b.title}</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY & DOCUMENTATION SECTION */}
      <section className="py-16 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Eligibility Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-brand flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">Eligibility Criteria</h3>
                  <p className="text-xs text-text-secondary">Basic requirements to qualify</p>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {product.eligibility.map((item, idx) => (
                  <div key={idx} className="py-3 flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-text-secondary font-medium">{item.label}</span>
                    <span className="text-navy font-bold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Checklist Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy">Documents Required</h3>
                  <p className="text-xs text-text-secondary">Keep these ready for quick disbursal</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                {product.documentsRequired.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LOAN SPECIFIC FAQS */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            customFaqs={product.faqs}
            title={`${product.title} – Frequently Asked Questions`}
          />
        </div>
      </section>

      {/* BOTTOM APPLY CTA BANNER */}
      <section className="py-14 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
            Ready to get your {product.title}?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Compare rates from 40+ leading Banks and NBFCs with zero facilitation fee.
          </p>
          <Link
            href="#loan-application-form"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-navy font-bold text-sm sm:text-base hover:bg-slate-100 transition-all shadow-lg active:scale-95"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

