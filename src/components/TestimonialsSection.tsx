'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = siteConfig.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft h-full flex flex-col justify-between">
      <div>
        {/* Section Heading */}
        <div className="mb-6">
          <h3 className="text-2xl font-extrabold text-navy tracking-tight">
            What Our Customers Say
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Real experiences from people who got their loans through us.
          </p>
        </div>

        {/* Carousel Card with Side Navigation */}
        <div className="relative bg-slate-50/70 border border-slate-100 rounded-2xl p-5 sm:p-6 mb-6">
          {/* Previous Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-navy hover:text-blue-brand hover:scale-105 active:scale-95 transition-all z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center text-navy hover:text-blue-brand hover:scale-105 active:scale-95 transition-all z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            {/* Customer Photo */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border-2 border-white">
              <Image
                src={current.avatarUrl}
                alt={current.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            {/* Testimonial Quote & Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="relative">
                <Quote className="w-4 h-4 text-blue-300 absolute -top-1 -left-2 sm:-left-3 opacity-40" />
                <p className="text-sm text-navy/90 font-medium leading-relaxed italic pl-3 sm:pl-3">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-200/60 pt-3">
                <div>
                  <h4 className="text-sm font-bold text-navy">{current.name}</h4>
                  <p className="text-[11px] text-text-secondary">
                    {current.location} • <span className="font-semibold text-blue-brand">{current.loanType}</span>
                  </p>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center justify-center sm:justify-end gap-0.5 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-6 h-2 bg-blue-brand'
                : 'w-2 h-2 bg-slate-200 hover:bg-slate-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

