'use client';

import React from 'react';
import { Handshake, Zap, Award, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const iconMap: Record<string, React.ElementType> = {
  Handshake,
  Zap,
  Award,
  ShieldCheck,
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-8 bg-surface-light border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/70">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-4 items-center">
            {/* Title Column */}
            <div className="lg:col-span-3 text-left border-b lg:border-b-0 lg:border-r border-slate-100 pb-4 lg:pb-0 lg:pr-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight leading-snug">
                Why Choose <br className="hidden lg:inline" />
                <span className="text-blue-brand">{siteConfig.name}?</span>
              </h3>
            </div>

            {/* 4 Benefits Horizontal Grid */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-4">
              {siteConfig.whyChooseUs.items.map((item, index) => {
                const IconComponent = iconMap[item.icon] || Handshake;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-brand flex items-center justify-center flex-shrink-0 group-hover:bg-blue-brand group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

