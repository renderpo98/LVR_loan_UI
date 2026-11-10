import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const viewport: Viewport = {
  themeColor: '#102B50',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'LVR | Trusted Loan Facilitation Services (DSA) in India',
  description:
    'Find and apply for Personal Loans, Home Loans, Business Loans, Car Loans, Education Loans, Loan Against Property and Credit Cards with India’s leading Banks & NBFCs.',
  keywords: [
    'DSA loan',
    'LVR',
    'LVR loans',
    'Personal loan online',
    'Home loan rates',
    'Business loan for MSME',
    'Car loan EMI',
    'Loan against property',
    'Education loan India',
    'Direct Selling Agent',
  ],
  authors: [{ name: 'LVR Facilitation Services' }],
  openGraph: {
    title: 'LVR | Your Trusted Loan Partner',
    description:
      'Get quick, simple and hassle-free access to loans from leading Banks & NBFCs.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'LVR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen flex flex-col bg-surface-light text-text-primary antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
