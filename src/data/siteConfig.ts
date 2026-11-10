import { FAQItem, LendingPartner, StatItem, TestimonialItem } from '@/types';

export const siteConfig = {
  name: 'LVR',
  tagline: 'Loan Facilitation Services (DSA)',
  badgeText: 'Your Trusted Loan Partner',
  phone: '+91 98765 43210',
  phoneDisplay: '+91 98765 43210',
  email: 'info@lvr.in',
  address: '123, Business Park, Sector 62, Noida, Uttar Pradesh – 201309',
  hours: 'Mon – Sat: 9:30 AM – 7:00 PM IST',
  dsaRegistrationNumber: 'DSA/DEL/2021/9842',
  year: 2026,
  navLinks: [
    { label: 'Home', href: '/' },
    {
      label: 'Loan Products',
      href: '#loan-products',
      hasDropdown: true,
    },
    { label: 'Our Process', href: '#how-it-works' },
    { label: 'About Us', href: '#why-choose-us' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact Us', href: '#contact' },
  ],
  hero: {
    badge: 'Your Trusted Loan Partner',
    heading: 'Find the Right Loan for Your Needs',
    subheading:
      'Get quick, simple and hassle-free access to loans from leading Banks & NBFCs.',
    highlights: [
      {
        icon: 'Zap',
        title: 'Quick Process & Response',
      },
      {
        icon: 'ShieldCheck',
        title: 'Trusted DSA Partner',
      },
      {
        icon: 'Building2',
        title: 'Multiple Bank Options',
      },
    ],
  },
  whyChooseUs: {
    heading: 'Why Choose LVR?',
    items: [
      {
        icon: 'Handshake',
        title: 'Trusted DSA Partner',
        subtitle: 'for Leading Banks',
      },
      {
        icon: 'Zap',
        title: 'Quick & Hassle-free',
        subtitle: 'Application',
      },
      {
        icon: 'Award',
        title: 'Expert Guidance',
        subtitle: '& Support',
      },
      {
        icon: 'ShieldCheck',
        title: 'Your Data',
        subtitle: 'is 100% Secure',
      },
    ],
  },
  howItWorks: {
    badge: 'Simple & Transparent',
    heading: 'How It Works',
    subheading: 'Get your loan, in just a few simple steps.',
    steps: [
      {
        stepNumber: '1',
        title: 'Apply Online',
        description: 'Share your basic details in a few minutes',
        icon: 'FileText',
      },
      {
        stepNumber: '2',
        title: 'Verify with OTP',
        description: 'Confirm your mobile number securely',
        icon: 'Smartphone',
      },
      {
        stepNumber: '3',
        title: 'Get Expert Support',
        description: 'Our team will guide you with the best options',
        icon: 'Headphones',
      },
      {
        stepNumber: '4',
        title: 'Loan Processing',
        description: 'We help you with documentation and bank submission',
        icon: 'Landmark',
      },
    ],
  },
  stats: {
    bannerTitle: 'Trusted by Thousands of Customers',
    items: [
      {
        icon: 'Users',
        value: '25,000+',
        label: 'Loan Enquiries',
      },
      {
        icon: 'CheckCircle2',
        value: '10,000+',
        label: 'Loans Facilitated',
      },
      {
        icon: 'Star',
        value: '4.8/5',
        label: 'Customer Rating',
      },
      {
        icon: 'Calendar',
        value: '5+ Years',
        label: 'of DSA Experience',
      },
    ] as StatItem[],
  },
  partners: [
    { name: 'SBI', code: 'sbi', category: 'Bank', tagline: 'State Bank of India' },
    { name: 'HDFC BANK', code: 'hdfc', category: 'Bank', tagline: 'HDFC Bank Ltd' },
    { name: 'ICICI Bank', code: 'icici', category: 'Bank', tagline: 'ICICI Bank Ltd' },
    { name: 'AXIS BANK', code: 'axis', category: 'Bank', tagline: 'Axis Bank Ltd' },
    { name: 'kotak', code: 'kotak', category: 'Bank', tagline: 'Kotak Mahindra Bank' },
  ] as LendingPartner[],
  testimonials: [
    {
      id: 't-1',
      name: 'Rohit Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      loanType: 'Home Loan',
      quote:
        'The team guided me throughout my home loan process. It was smooth, transparent and hassle-free. Highly recommended!',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      initials: 'RS',
    },
    {
      id: 't-2',
      name: 'Priya Verma',
      location: 'Bengaluru, Karnataka',
      rating: 5,
      loanType: 'Personal Loan',
      quote:
        'Needed immediate funds for medical reasons. LVR connected me with the right bank offering the lowest rate, disbursed within 24 hours!',
      avatarUrl:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      initials: 'PV',
    },
    {
      id: 't-3',
      name: 'Amit Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      loanType: 'Business Loan',
      quote:
        'Expanding our manufacturing unit required quick working capital. Their DSA loan advisor helped structure our GST documentation effortlessly.',
      avatarUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      initials: 'AP',
    },
    {
      id: 't-4',
      name: 'Sneha Rao',
      location: 'Hyderabad, Telangana',
      rating: 5,
      loanType: 'Education Loan',
      quote:
        'Got my overseas master’s education loan sanctioned in record time without endless branch visits. The team took care of all bank paperwork.',
      avatarUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      initials: 'SR',
    },
  ] as TestimonialItem[],
  faqs: [
    {
      id: 'faq-1',
      question: 'What is a DSA?',
      answer:
        'A DSA (Direct Selling Agent) is an authorized intermediary working in liaison with leading banks and Non-Banking Financial Companies (NBFCs). We assist loan applicants by assessing eligibility, preparing documentation, and facilitating loan processing with the most suitable lending partner for your profile.',
    },
    {
      id: 'faq-2',
      question: 'Do you charge any fees for loan enquiry?',
      answer:
        'No, LVR does not charge any upfront or hidden consultation fees from customers for loan enquiries and eligibility evaluations. Our facilitation services for customers are completely free. Standard bank processing fees, if applicable, are directly collected by the sanctioning bank during disbursement.',
    },
    {
      id: 'faq-3',
      question: 'Which banks and NBFCs do you work with?',
      answer:
        'We facilitate loans through premier public, private, and NBFC institutions across India including SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, Bajaj Finserv, Tata Capital, and other leading financial institutions.',
    },
    {
      id: 'faq-4',
      question: 'How long does the loan process take?',
      answer:
        'Turnaround time varies by loan product and bank. Unsecured personal loans and credit cards can be approved and disbursed in 24 to 48 hours. Secured products like Home Loans and Loans Against Property usually take 4 to 10 working days, depending on legal verification and property valuation.',
    },
    {
      id: 'faq-5',
      question: 'What documents are required?',
      answer:
        'Standard requirements across most loans include PAN card, Aadhaar card, proof of address, latest 3-6 months bank account statements, and income documents (such as latest salary slips / Form 16 for salaried individuals, or 2 years ITR with computation for self-employed applicants). Specific products like Home Loans will also require property title deeds.',
    },
  ] as FAQItem[],
  disclaimer:
    'Disclaimer: LVR is a Direct Selling Agent (DSA) and loan facilitator. We do not act as a lender or provide loans directly. Approval of loans, interest rates, sanctioned amounts, processing fees, and disbursal timelines are at the sole discretion of the respective banks and NBFCs, subject to their credit policies, RBI guidelines, and verification of applicant credentials.',
};

