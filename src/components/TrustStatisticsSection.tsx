'use client';

import React from 'react';
import { Users, CheckCircle2, Star, Calendar } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const iconMap: Record<string, React.ElementType> = {
  Users,
  CheckCircle2,
  Star,
  Calendar,
};

export const TrustStatisticsSection: React.FC = () => {
  return (
    <section className="py-6 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Navy Block */}
            <div className="lg:col-span-4 bg-navy p-6 sm:p-8 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight relative z-10 leading-snug">
                {siteConfig.stats.bannerTitle}
              </h3>
              <div className="w-16 h-1 bg-blue-brand rounded-full mt-3" />
            </div>

            {/* Right Statistics Grid */}
            <div className="lg:col-span-8 p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-center justify-between divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {siteConfig.stats.items.map((stat, index) => {
                const IconComponent = iconMap[stat.icon] || Users;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center sm:items-start text-center sm:text-left pt-4 sm:pt-0 sm:px-4 first:pt-0 first:pl-0"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-brand flex items-center justify-center mb-2.5">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-text-secondary mt-0.5">
                      {stat.label}
                    </span>
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

