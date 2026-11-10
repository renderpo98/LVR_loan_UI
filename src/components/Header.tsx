'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Phone,
  Menu,
  X,
  Wallet,
  Home as HomeIcon,
  Store,
  Car,
  Building,
  GraduationCap,
  CreditCard,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Logo } from './common/Logo';
import { loanProducts } from '@/data/loanProducts';
import { siteConfig } from '@/data/siteConfig';

const iconMap: Record<string, React.ElementType> = {
  Wallet,
  Home: HomeIcon,
  Store,
  Car,
  Building,
  GraduationCap,
  CreditCard,
};

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors ${
                pathname === '/'
                  ? 'text-navy font-bold'
                  : 'text-text-primary hover:text-blue-brand'
              }`}
            >
              Home
            </Link>

            {/* Loan Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 ${
                  pathname.startsWith('/apply')
                    ? 'text-blue-brand font-bold'
                    : 'text-text-primary hover:text-blue-brand'
                }`}
                aria-expanded={isProductDropdownOpen}
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              >
                <span>Loan Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProductDropdownOpen ? 'rotate-180 text-blue-brand' : 'text-slate-500'
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {isProductDropdownOpen && (
                <div className="absolute top-full -left-20 w-[640px] bg-white rounded-2xl shadow-float border border-slate-100 p-5 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Explore Loan Solutions
                    </span>
                    <span className="text-xs font-semibold text-blue-brand flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 100% Free DSA Assistance
                    </span>
                  </div>

                  {loanProducts.map((product) => {
                    const IconComponent = iconMap[product.iconName] || Wallet;
                    return (
                      <Link
                        key={product.id}
                        href={`/apply/${product.slug}`}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${product.bgColor} ${product.iconColor} group-hover:scale-105 transition-transform`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-navy group-hover:text-blue-brand transition-colors">
                              {product.title}
                            </span>
                            {product.badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-brand">
                                {product.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-text-secondary line-clamp-1 mt-0.5">
                            {product.shortDescription}
                          </p>
                        </div>
                      </Link>
                    );
                  })}

                  <div className="col-span-2 mt-2 pt-2.5 border-t border-slate-100 bg-slate-50 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-navy">Need personalized advice?</p>
                      <p className="text-[11px] text-text-secondary">
                        Talk with our licensed loan advisors for free.
                      </p>
                    </div>
                    <Link
                      href="/#loan-application-form"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-brand hover:text-navy transition-colors"
                    >
                      Instant Check <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#how-it-works"
              className="text-sm font-semibold text-text-primary hover:text-blue-brand transition-colors"
            >
              Our Process
            </Link>

            <Link
              href="/#why-choose-us"
              className="text-sm font-semibold text-text-primary hover:text-blue-brand transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/#faqs"
              className="text-sm font-semibold text-text-primary hover:text-blue-brand transition-colors"
            >
              FAQs
            </Link>

            <Link
              href="/#contact"
              className="text-sm font-semibold text-text-primary hover:text-blue-brand transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 text-sm font-bold text-navy hover:text-blue-brand transition-colors px-3 py-2 rounded-xl hover:bg-slate-50"
            >
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-brand">
                <Phone className="w-4 h-4" />
              </div>
              <span>{siteConfig.phoneDisplay}</span>
            </a>

            <Link
              href="/#loan-application-form"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-bold text-white bg-navy hover:bg-navy-deep active:scale-95 transition-all shadow-sm hover:shadow"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="p-2 rounded-lg bg-blue-50 text-blue-brand"
              aria-label={`Call ${siteConfig.name}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-navy hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white z-50 overflow-y-auto border-t border-slate-100 px-5 py-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-5">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-base font-bold text-navy py-2 border-b border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Loan Products Accordion inside Mobile Menu */}
              <div className="border-b border-slate-100 pb-3">
                <div className="flex items-center justify-between py-2 text-base font-bold text-navy">
                  <span>Loan Products</span>
                  <span className="text-xs text-blue-brand font-medium">7 Solutions</span>
                </div>
                <div className="grid grid-cols-1 gap-2 mt-2 pl-2">
                  {loanProducts.map((p) => {
                    const IconComponent = iconMap[p.iconName] || Wallet;
                    return (
                      <Link
                        key={p.id}
                        href={`/apply/${p.slug}`}
                        className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-slate-50 text-sm font-medium text-text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div
                          className={`w-7 h-7 rounded-md flex items-center justify-center ${p.bgColor} ${p.iconColor}`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span>{p.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link
                href="/#how-it-works"
                className="text-base font-semibold text-text-primary py-2 border-b border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Process
              </Link>

              <Link
                href="/#why-choose-us"
                className="text-base font-semibold text-text-primary py-2 border-b border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/#faqs"
                className="text-base font-semibold text-text-primary py-2 border-b border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </Link>

              <Link
                href="/#contact"
                className="text-base font-semibold text-text-primary py-2 border-b border-slate-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-3">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-50 text-navy font-bold text-sm border border-slate-200"
            >
              <Phone className="w-4 h-4 text-blue-brand" />
              <span>Call Us: {siteConfig.phoneDisplay}</span>
            </a>

            <Link
              href="/#loan-application-form"
              className="flex items-center justify-center w-full py-3.5 rounded-xl bg-navy text-white font-bold text-sm shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Apply for a Loan Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

