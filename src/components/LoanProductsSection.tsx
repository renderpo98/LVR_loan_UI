'use client';

import React from 'react';
import Link from 'next/link';
import {
  Wallet,
  Home as HomeIcon,
  Store,
  Car,
  Building,
  GraduationCap,
  CreditCard,
  ArrowRight,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { loanProducts } from '@/data/loanProducts';

const iconMap: Record<string, React.ElementType> = {
  Wallet,
  Home: HomeIcon,
  Store,
  Car,
  Building,
  GraduationCap,
  CreditCard,
};

export const LoanProductsSection: React.FC = () => {
  return (
    <section id="loan-products" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-brand text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Loan Products</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            Explore Our Loan Solutions
          </h2>

          <p className="mt-3 text-base sm:text-lg text-text-secondary">
            Choose from a wide range of loan products to meet your personal and business goals.
          </p>
        </div>

        {/* 4-Column x 2-Row Bento Grid matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {loanProducts.map((product) => {
            const IconComponent = iconMap[product.iconName] || Wallet;

            return (
              <div
                key={product.id}
                className={`group relative rounded-2xl p-6 ${product.bgColor} border ${product.borderColor} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card flex flex-col justify-between`}
              >
                <div>
                  {/* Product Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl ${product.iconBgColor} text-white flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy group-hover:text-blue-brand transition-colors mb-2">
                    {product.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Apply Now CTA */}
                <div>
                  <Link
                    href={`/apply/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-navy group-hover:text-blue-brand transition-colors py-1"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* 8th Card: Bento Chart Graphic matching the reference */}
          <div className="relative rounded-2xl p-6 bg-gradient-to-br from-[#F0F7FF] via-[#E6F0FA] to-[#EDF6FF] border border-blue-100/80 flex flex-col justify-between overflow-hidden group">
            {/* Background graphic */}
            <div className="absolute right-0 bottom-0 w-36 h-28 opacity-90 pointer-events-none">
              <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bars */}
                <rect x="20" y="70" width="22" height="40" rx="4" fill="#93C5FD" fillOpacity="0.7" />
                <rect x="52" y="48" width="22" height="62" rx="4" fill="#60A5FA" fillOpacity="0.8" />
                <rect x="84" y="24" width="22" height="86" rx="4" fill="#2476DB" />
                <rect x="116" y="8" width="22" height="102" rx="4" fill="#102B50" />
                {/* Ascending Trend Line */}
                <path
                  d="M10 90C45 75 75 40 145 12"
                  stroke="#2476DB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                <path
                  d="M135 12H145V22"
                  stroke="#2476DB"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-brand flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy">Compare &amp; Save</h3>
              <p className="text-xs text-text-secondary mt-1 max-w-[170px]">
                Save up to ₹2.5 Lakhs on interest by comparing top banks.
              </p>
            </div>

            <div className="relative z-10 mt-6">
              <Link
                href="#loan-application-form"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-brand hover:text-navy transition-colors"
              >
                <span>Check Rates</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

