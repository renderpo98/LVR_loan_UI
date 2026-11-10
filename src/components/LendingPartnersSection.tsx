'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const LendingPartnersSection: React.FC = () => {
  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Section Heading with underline */}
          <div className="flex-shrink-0 text-center lg:text-left">
            <h3 className="text-lg font-bold text-navy">
              Our Lending Partners
            </h3>
            <div className="w-12 h-1 bg-blue-brand rounded-full mt-1.5 mx-auto lg:mx-0" />
          </div>

          {/* Partner Badges / Stylized Placeholders */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* SBI */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
              <div className="w-5 h-5 rounded-full bg-[#0082CA] flex items-center justify-center text-white text-[9px] font-black">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <span className="text-sm font-black text-[#0082CA] tracking-wide">
                SBI
              </span>
            </div>

            {/* HDFC Bank */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
              <div className="w-4 h-4 bg-[#ED232A] flex items-center justify-center text-white text-[9px] font-black rounded-sm">
                <div className="w-2 h-2 bg-[#004C8F]"></div>
              </div>
              <span className="text-sm font-black text-[#004C8F] tracking-tight">
                HDFC BANK
              </span>
            </div>

            {/* ICICI Bank */}
            <div className="flex items-center gap-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
              <div className="w-4 h-4 rounded-full bg-[#B8261A] text-white flex items-center justify-center text-[10px] font-bold">
                i
              </div>
              <span className="text-sm font-extrabold text-[#B8261A] tracking-tight">
                ICICI Bank
              </span>
            </div>

            {/* Axis Bank */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
              <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[12px] border-b-[#97144D]" />
              <span className="text-sm font-black text-[#97144D] tracking-wide">
                AXIS BANK
              </span>
            </div>

            {/* Kotak Bank */}
            <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/40 transition-colors">
              <div className="w-4 h-4 rounded-full bg-[#ED1C24] flex items-center justify-center text-white text-[9px] font-bold">
                ∞
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-black text-[#ED1C24] lowercase">
                  kotak
                </span>
                <span className="text-[7px] font-medium text-slate-500">
                  Kotak Mahindra Bank
                </span>
              </div>
            </div>

            {/* & More button */}
            <Link
              href="#loan-application-form"
              className="inline-flex items-center gap-1 px-3.5 py-2.5 rounded-xl bg-blue-50 text-blue-brand text-xs font-bold hover:bg-blue-100 transition-colors"
            >
              <span>&amp; 40+ More</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

