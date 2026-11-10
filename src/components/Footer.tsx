'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Youtube,
  ShieldAlert,
} from 'lucide-react';
import { Logo } from './common/Logo';
import { loanProducts } from '@/data/loanProducts';
import { siteConfig } from '@/data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#051A33] text-white pt-16 pb-10 border-t border-navy-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed pt-2">
              We are a trusted DSA (Direct Selling Agent) providing loan facilitation services
              for Personal Loan, Home Loan, Business Loan, Car Loan, Loan Against Property,
              Education Loan and Credit Card from leading Banks &amp; NBFCs.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>DSA Reg. No: {siteConfig.dsaRegistrationNumber}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-blue-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#why-choose-us" className="hover:text-blue-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-blue-300 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-blue-300 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-blue-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Loan Products */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Loan Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {loanProducts.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/apply/${p.slug}`}
                    className="hover:text-blue-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            {/* Social Icons matching reference */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.name} LinkedIn`}
                className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-brand transition-colors border border-navy-light/40"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.name} Instagram`}
                className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-brand transition-colors border border-navy-light/40"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${siteConfig.name} YouTube`}
                className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-brand transition-colors border border-navy-light/40"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory DSA Disclaimer banner */}
        <div className="my-6 p-4 rounded-xl bg-navy-deep/60 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
          <p>{siteConfig.disclaimer}</p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {siteConfig.year} {siteConfig.name}. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/terms-and-conditions" className="hover:text-slate-200 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/disclaimer" className="hover:text-slate-200 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

