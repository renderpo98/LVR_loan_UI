import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { LoanProductsSection } from '@/components/LoanProductsSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { TrustStatisticsSection } from '@/components/TrustStatisticsSection';
import { LendingPartnersSection } from '@/components/LendingPartnersSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section with Application Form */}
      <HeroSection />

      {/* 2. Loan Products Section (Bento Grid) */}
      <LoanProductsSection />

      {/* 3. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 4. How It Works Section */}
      <HowItWorksSection />

      {/* 5. Trust Statistics Section */}
      <TrustStatisticsSection />

      {/* 6. Lending Partners Section */}
      <LendingPartnersSection />

      {/* 7. Lower Two-Column Section: Testimonials & FAQs */}
      <section className="py-16 sm:py-20 bg-surface-light border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Testimonial Carousel */}
            <div className="lg:col-span-6 h-full">
              <TestimonialsSection />
            </div>

            {/* Right Column: FAQ Accordion */}
            <div className="lg:col-span-6 h-full">
              <FAQSection />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

