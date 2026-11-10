import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = true,
}) => {
  const isLight = variant === 'light';

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Wave / Bridge Icon matching the reference */}
      <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 transition-transform duration-300 group-hover:scale-105"
        >
          {/* Bridge curved arches */}
          <path
            d="M6 34C10 24 18 16 34 10"
            stroke={isLight ? '#38BDF8' : '#2476DB'}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M12 36C16 27 23 20 38 16"
            stroke={isLight ? '#60A5FA' : '#102B50'}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M18 38C22 30 28 24 40 21"
            stroke={isLight ? '#24B8A5' : '#24B8A5'}
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Base foundation dot */}
          <circle cx="9" cy="35" r="2.5" fill={isLight ? '#38BDF8' : '#2476DB'} />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`text-2xl font-black tracking-tight leading-none ${
            isLight ? 'text-white' : 'text-navy'
          }`}
        >
          LV<span className="text-blue-brand">R</span>
        </span>
        {showTagline && (
          <span
            className={`text-[9.5px] font-medium tracking-wide uppercase mt-1 ${
              isLight ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Loan Facilitation Services (DSA)
          </span>
        )}
      </div>
    </Link>
  );
};

