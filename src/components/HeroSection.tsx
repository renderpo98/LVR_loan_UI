'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Zap,
  ShieldCheck,
  Building2,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import { LoanApplicationForm } from './LoanApplicationForm';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08264A] via-[#0E2F59] to-[#102B50] text-white pt-10 pb-16 lg:pt-14 lg:pb-20">
      {/* Background Decorative Radial Shapes & Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-teal-brand/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle geometric circles matching the reference image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] border border-blue-400/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] border border-blue-400/15 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* LEFT COLUMN: Hero Copy & Trust Badges */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Small trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-300" />
              <span className="text-xs font-semibold text-blue-100 tracking-wide">
                Your Trusted Loan Partner
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Find the Right <br className="hidden sm:inline" />
              Loan for Your Needs
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-lg">
              Get quick, simple and hassle-free access to loans from leading Banks &amp; NBFCs.
            </p>

            {/* Three Trust Highlights */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-300">
                  <Zap className="w-4 h-4 text-amber-300" />
                </div>
                <span className="text-sm font-semibold text-white tracking-wide">
                  Quick Process &amp; Response
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-sm font-semibold text-white tracking-wide">
                  Trusted DSA Partner
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-300">
                  <Building2 className="w-4 h-4 text-sky-300" />
                </div>
                <span className="text-sm font-semibold text-white tracking-wide">
                  Multiple Bank Options
                </span>
              </div>
            </div>

            {/* Prominent Apply for a Loan Button */}
            <div className="pt-3">
              <Link
                href="#loan-application-form"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 active:scale-95 text-navy font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all group"
              >
                <span>Apply for a Loan</span>
                <ArrowRight className="w-4 h-4 text-navy group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CENTER / VISUAL ELEMENT: Professional Indian Couple Thumbs Up */}
          <div className="lg:col-span-3 flex justify-center items-end relative min-h-[280px] sm:min-h-[340px] lg:min-h-[420px]">
            {/* Soft decorative backdrop glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-blue-600/30 to-teal-400/25 blur-xl" />
            </div>

            {/* Couple Image Container */}
            <div className="relative z-10 w-full max-w-[320px] lg:max-w-none flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 group">
                {/* Real photo of happy smiling Indian couple thumbs up */}
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=700"
                  alt="Happy Indian couple getting approved for home and personal loan"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 320px"
                />
                {/* Subtle gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />

                {/* Floating trust pill on image */}
                <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-navy truncate">
                      Sanctioned in 24 Hours
                    </p>
                    <p className="text-[10px] text-slate-500 truncate">
                      Verified DSA Facilitation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Prominent Application Form Card */}
          <div className="lg:col-span-4 w-full">
            <LoanApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

