'use client';

import React from 'react';
import {
  FileText,
  Smartphone,
  Headphones,
  Landmark,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Smartphone,
  Headphones,
  Landmark,
};

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-brand text-xs font-bold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{siteConfig.howItWorks.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
            {siteConfig.howItWorks.heading}
          </h2>

          <p className="mt-3 text-base text-text-secondary">
            {siteConfig.howItWorks.subheading}
          </p>
        </div>

        {/* 4 Steps Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {siteConfig.howItWorks.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon] || FileText;
              const isLast = index === siteConfig.howItWorks.steps.length - 1;

              return (
                <div key={index} className="flex flex-col items-center text-center relative group">
                  {/* Step Icon with circular background */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-full bg-[#EBF3FC] text-blue-brand flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-brand group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-7 h-7 stroke-[1.8]" />
                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-navy mb-1.5">
                    {step.stepNumber}. {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-secondary max-w-[200px] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connecting Arrow for Desktop */}
                  {!isLast && (
                    <div className="hidden md:flex absolute top-8 -right-3 lg:-right-4 text-slate-300 transform translate-x-1/2">
                      <ArrowRight className="w-5 h-5 text-slate-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

