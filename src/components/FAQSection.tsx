'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface FAQSectionProps {
  customFaqs?: Array<{ question: string; answer: string }>;
  title?: string;
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  customFaqs,
  title = 'Frequently Asked Questions',
  className = '',
}) => {
  const faqsToRender = customFaqs || siteConfig.faqs;
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      id="faqs"
      className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-2xl font-extrabold text-navy tracking-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-text-secondary mt-1">
          Everything you need to know about loan facilitation &amp; DSA processes.
        </p>
      </div>

      <div className="space-y-3">
        {faqsToRender.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-blue-200 bg-blue-50/20 shadow-sm'
                  : 'border-slate-100 hover:border-slate-200 bg-white'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full py-4 px-5 flex items-center justify-between text-left gap-3 focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-bold text-navy leading-snug">
                  {faq.question}
                </span>
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-blue-brand text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-slate-100/60 animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

