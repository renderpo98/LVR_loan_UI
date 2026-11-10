import { LoanProductInfo } from '@/types';

export const loanProducts: LoanProductInfo[] = [
  {
    id: 'personal-loan',
    slug: 'personal-loan',
    title: 'Personal Loan',
    tagline: 'Quick, collateral-free funds for immediate financial needs',
    shortDescription: 'Quick funds for your personal needs',
    longDescription:
      'Access instant unsecured funds for medical emergencies, wedding expenses, home renovation, vacations, or debt consolidation with minimal documentation and swift disbursal.',
    interestRateFrom: '10.49% p.a.',
    maxTenure: 'Up to 5 Years',
    maxAmount: 'Up to ₹40 Lakhs',
    badge: 'Popular',
    iconName: 'Wallet',
    bgColor: 'bg-[#EBF4FE]',
    iconBgColor: 'bg-[#2476DB]',
    iconColor: 'text-[#2476DB]',
    borderColor: 'border-blue-100',
    benefits: [
      {
        title: 'Zero Collateral Required',
        description: 'No pledging of gold, property or securities required.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Disbursal in 24 Hours',
        description: 'Rapid approval and lightning-fast direct bank transfer.',
        icon: 'Zap',
      },
      {
        title: 'Flexible Repayment',
        description: 'Choose repayment tenures ranging from 12 to 60 months.',
        icon: 'Calendar',
      },
      {
        title: 'Competitive Rates',
        description: 'Compare offers from top banks to get the lowest EMI.',
        icon: 'Percent',
      },
    ],
    eligibility: [
      { label: 'Age Criteria', value: '21 to 58 years' },
      { label: 'Employment Type', value: 'Salaried or Self-Employed' },
      { label: 'Minimum Monthly Income', value: '₹25,000 / month' },
      { label: 'Credit Score (CIBIL)', value: '680+ preferred' },
      { label: 'Work Experience', value: 'Minimum 1 year total, 6 months current' },
    ],
    documentsRequired: [
      'PAN Card & Aadhaar Card (Identity & Address Proof)',
      'Last 3 months salary slips or latest ITR with computation',
      'Last 6 months bank statement showing salary/business credits',
      'Recent passport-size photograph',
    ],
    faqs: [
      {
        question: 'How fast can a personal loan be disbursed?',
        answer:
          'Once your documentation is verified and approved by our partner banks, personal loans can be disbursed in as little as 24 to 48 hours directly into your bank account.',
      },
      {
        question: 'Can I prepay or foreclose my personal loan early?',
        answer:
          'Yes, most leading banks allow prepayment or foreclosure after completing a minimum period (usually 6 to 12 EMIs). Part-payment terms depend on the specific lender.',
      },
      {
        question: 'Does applying through LVR affect my CIBIL score?',
        answer:
          'No, initial eligibility checks through LVR perform a soft inquiry that does not adversely affect your credit score.',
      },
    ],
  },
  {
    id: 'home-loan',
    slug: 'home-loan',
    title: 'Home Loan',
    tagline: 'Turn your dream home into reality with low interest rates',
    shortDescription: 'Own your dream home with easy financing',
    longDescription:
      'Turn your dream home into reality with competitive interest rates, extended repayment tenures up to 30 years, and tax benefits under Section 80C and 24(b).',
    interestRateFrom: '8.35% p.a.',
    maxTenure: 'Up to 30 Years',
    maxAmount: 'Up to ₹10 Crores',
    badge: 'Low Interest',
    iconName: 'Home',
    bgColor: 'bg-[#FEECEF]',
    iconBgColor: 'bg-[#E13B6B]',
    iconColor: 'text-[#E13B6B]',
    borderColor: 'border-pink-100',
    benefits: [
      {
        title: 'Lowest Interest Rates',
        description: 'Starting from 8.35% p.a. from premier Indian banks.',
        icon: 'Percent',
      },
      {
        title: 'Long Tenures up to 30 Yrs',
        description: 'Lower your monthly EMIs with flexible long-term tenure.',
        icon: 'Clock',
      },
      {
        title: 'Tax Deductions',
        description: 'Save up to ₹3.5 Lakhs annually under Sections 80C & 24(b).',
        icon: 'Receipt',
      },
      {
        title: 'Balance Transfer Option',
        description: 'Transfer existing high-interest home loan and save lakhs.',
        icon: 'ArrowRightLeft',
      },
    ],
    eligibility: [
      { label: 'Age Criteria', value: '21 to 65 years' },
      { label: 'Resident Status', value: 'Resident Indian or NRI' },
      { label: 'Minimum Monthly Income', value: '₹30,000 / month' },
      { label: 'Credit Score (CIBIL)', value: '700+ preferred' },
      { label: 'Property Title', value: 'Clear & approved legal title' },
    ],
    documentsRequired: [
      'KYC documents (PAN, Aadhaar, Passport / Voter ID)',
      'Income proofs: Form 16, Salary slips (3 months) or ITR (2 years)',
      'Last 6 months updated bank statement',
      'Property documents: Sale agreement, Allotment letter, Title deeds',
    ],
    faqs: [
      {
        question: 'What is the maximum financing percentage available for home loans?',
        answer:
          'Banks typically fund between 75% to 90% of the registered property agreement value, depending on loan amount and lender guidelines (RBI regulatory cap).',
      },
      {
        question: 'Can I add a co-applicant to increase my loan eligibility?',
        answer:
          'Yes, adding an earning family member (spouse, parents, or children) as a co-applicant enhances your combined loan eligibility significantly.',
      },
    ],
  },
  {
    id: 'business-loan',
    slug: 'business-loan',
    title: 'Business Loan',
    tagline: 'Fuel enterprise growth and scale operations effortlessly',
    shortDescription: 'Grow your business with flexible funding',
    longDescription:
      'Empower your company or MSME with collateral-free and secured business loans. Fund inventory, working capital, machinery, or business expansion with customized terms.',
    interestRateFrom: '12.00% p.a.',
    maxTenure: 'Up to 7 Years',
    maxAmount: 'Up to ₹75 Lakhs',
    badge: 'High Growth',
    iconName: 'Store',
    bgColor: 'bg-[#EBF7F2]',
    iconBgColor: 'bg-[#18A070]',
    iconColor: 'text-[#18A070]',
    borderColor: 'border-emerald-100',
    benefits: [
      {
        title: 'Collateral-Free Options',
        description: 'Unsecured funding without putting up business assets.',
        icon: 'Unlock',
      },
      {
        title: 'Working Capital & Machinery',
        description: 'Flexible overdraft, term loans, or equipment financing.',
        icon: 'Layers',
      },
      {
        title: 'Tailored for MSMEs',
        description: 'Government schemes (CGTMSE / Mudra) assistance available.',
        icon: 'Building2',
      },
      {
        title: 'Minimal Financial Paperwork',
        description: 'Quick digital underwriting based on GST and banking.',
        icon: 'FileText',
      },
    ],
    eligibility: [
      { label: 'Business Vintage', value: 'Minimum 2 years of active operations' },
      { label: 'Annual Turnover', value: '₹20 Lakhs or higher' },
      { label: 'GST Filing', value: 'Consistent and timely GST returns' },
      { label: 'Credit Score', value: 'CIBIL 650+ for promoters' },
      { label: 'Business Constitution', value: 'Proprietorship, Partnership, Pvt Ltd, LLP' },
    ],
    documentsRequired: [
      'Promoter KYC (PAN Card, Aadhaar Card)',
      'Business Registration Proof (GST Certificate, Shop Act, MSME Udyam)',
      'Last 12 months primary current bank account statement',
      'Past 2 years ITR with Balance Sheet & Profit/Loss statements',
    ],
    faqs: [
      {
        question: 'Can early-stage startups get a business loan?',
        answer:
          'Most commercial bank business loans require at least 1-2 years of operational vintage with verified GST filings. However, special government-backed schemes may apply depending on your sector.',
      },
      {
        question: 'Do I need collateral to get a business loan?',
        answer:
          'Unsecured business loans up to ₹50-75 Lakhs do not require collateral and are approved based on cash flow, turnover, and banking track record.',
      },
    ],
  },
  {
    id: 'car-loan',
    slug: 'car-loan',
    title: 'Car Loan',
    tagline: 'Hit the open road with affordable auto financing',
    shortDescription: 'Drive your dream car with affordable EMIs',
    longDescription:
      'Get behind the wheel of your dream car—new or pre-owned—with up to 100% on-road financing, flexible repayment tenures up to 7 years, and minimal processing time.',
    interestRateFrom: '8.75% p.a.',
    maxTenure: 'Up to 7 Years',
    maxAmount: 'Up to 100% On-Road',
    badge: 'Fast Track',
    iconName: 'Car',
    bgColor: 'bg-[#F4EFFE]',
    iconBgColor: 'bg-[#8244E2]',
    iconColor: 'text-[#8244E2]',
    borderColor: 'border-purple-100',
    benefits: [
      {
        title: 'Up to 100% On-Road Funding',
        description: 'Finance vehicle ex-showroom, registration, and insurance.',
        icon: 'Sparkles',
      },
      {
        title: 'New & Pre-Owned Cars',
        description: 'Financing solutions for both brand new and used cars.',
        icon: 'Car',
      },
      {
        title: 'Instant Approval',
        description: 'Get sanctioned in minutes with simple digital verification.',
        icon: 'CheckCircle',
      },
      {
        title: 'Pocket-Friendly EMIs',
        description: 'Fixed interest rates ensure your monthly EMI stays predictable.',
        icon: 'CreditCard',
      },
    ],
    eligibility: [
      { label: 'Age Criteria', value: '21 to 65 years' },
      { label: 'Employment', value: 'Salaried or Self-Employed' },
      { label: 'Minimum Income', value: '₹20,000 / month' },
      { label: 'Credit Score', value: '650+ preferred' },
    ],
    documentsRequired: [
      'Identity & Address Proof (Aadhaar / PAN)',
      'Income Proof (3 months salary slips or latest ITR)',
      'Last 3 to 6 months bank statement',
      'Dealer proforma quotation or RC copy for used car',
    ],
    faqs: [
      {
        question: 'Can I finance electric vehicles (EVs)?',
        answer:
          'Yes, our partner banks offer attractive discounted interest rates and extended tenures specifically for green electric vehicles.',
      },
    ],
  },
  {
    id: 'loan-against-property',
    slug: 'loan-against-property',
    title: 'Loan Against Property',
    tagline: 'Unlock the real market equity hidden in your property',
    shortDescription: 'Leverage your property for higher loan amounts',
    longDescription:
      'Unlock substantial liquidity by mortgaging your residential, commercial, or industrial property. Enjoy lower interest rates than personal loans and longer tenures up to 15 years.',
    interestRateFrom: '9.00% p.a.',
    maxTenure: 'Up to 15 Years',
    maxAmount: 'Up to ₹25 Crores',
    badge: 'High Value',
    iconName: 'Building',
    bgColor: 'bg-[#FFF7E8]',
    iconBgColor: 'bg-[#D98A18]',
    iconColor: 'text-[#D98A18]',
    borderColor: 'border-amber-100',
    benefits: [
      {
        title: 'High Loan Quantum',
        description: 'Get up to 70% of the current market value of your property.',
        icon: 'DollarSign',
      },
      {
        title: 'Substantially Lower Rates',
        description: 'Much cheaper than unsecured loans due to underlying security.',
        icon: 'TrendingDown',
      },
      {
        title: 'Retain Property Ownership',
        description: 'Continue using or leasing your property during repayment.',
        icon: 'Key',
      },
      {
        title: 'Flexible Multi-Purpose Use',
        description: 'Use funds for business expansion, weddings, or debt clearance.',
        icon: 'Briefcase',
      },
    ],
    eligibility: [
      { label: 'Age Criteria', value: '25 to 65 years' },
      { label: 'Property Types', value: 'Self-occupied, Rented residential or commercial' },
      { label: 'Property Clear Title', value: 'Free from legal dispute or encumbrance' },
      { label: 'Minimum Income', value: '₹40,000 / month' },
    ],
    documentsRequired: [
      'Full KYC Documents of all co-owners',
      'Property title deeds, sanctioned map, chain documents (13-30 yrs)',
      'Income proofs: Form 16, Salary slips or 3 yrs Audited Financials',
      'Last 12 months bank statements',
    ],
    faqs: [
      {
        question: 'Can I apply for LAP if the property has multiple owners?',
        answer:
          'Yes, all legal co-owners must join as co-applicants on the loan application.',
      },
    ],
  },
  {
    id: 'education-loan',
    slug: 'education-loan',
    title: 'Education Loan',
    tagline: 'Empower academic aspirations without financial constraints',
    shortDescription: 'Fund your higher education in India or abroad',
    longDescription:
      'Finance your undergraduate or postgraduate studies at top universities in India and abroad. Comprehensive coverage includes tuition fees, accommodation, travel, and laptop expenses.',
    interestRateFrom: '9.25% p.a.',
    maxTenure: 'Up to 15 Years',
    maxAmount: 'Up to ₹1.5 Crores',
    badge: 'Global Studies',
    iconName: 'GraduationCap',
    bgColor: 'bg-[#EBF7FD]',
    iconBgColor: 'bg-[#129BD2]',
    iconColor: 'text-[#129BD2]',
    borderColor: 'border-sky-100',
    benefits: [
      {
        title: 'Studies in India & Abroad',
        description: 'Financing for 500+ recognized global universities & STEM courses.',
        icon: 'Globe',
      },
      {
        title: 'Moratorium Period',
        description: 'Repayment starts only 6 to 12 months after course completion.',
        icon: 'Clock',
      },
      {
        title: '100% Cost Coverage',
        description: 'Covers tuition fees, living expenses, books, travel & visa.',
        icon: 'BookOpen',
      },
      {
        title: 'Section 80E Tax Benefits',
        description: '100% tax deduction on interest paid with no upper cap for 8 yrs.',
        icon: 'FileCheck',
      },
    ],
    eligibility: [
      { label: 'Admission Status', value: 'Confirmed admission / offer letter' },
      { label: 'Eligible Courses', value: 'Degree/Diploma in recognized university' },
      { label: 'Co-applicant', value: 'Parent, guardian, or spouse with income' },
      { label: 'Academic Record', value: 'Consistent minimum 55% in past exams' },
    ],
    documentsRequired: [
      'Student & Co-Applicant KYC',
      'University Admission Letter & Fee Structure breakdown',
      'Academic marksheets (10th, 12th, Graduation, GRE/GMAT/IELTS/TOEFL)',
      'Co-applicant income proofs & 6 months bank statement',
    ],
    faqs: [
      {
        question: 'When do I need to start paying the education loan EMIs?',
        answer:
          'Repayment begins after your course duration plus a moratorium (grace) period, typically 6 months after graduation or after finding employment, whichever comes earlier.',
      },
    ],
  },
  {
    id: 'credit-card',
    slug: 'credit-card',
    title: 'Credit Card',
    tagline: 'Maximize rewards, cashback, and global airport lounge access',
    shortDescription: 'Get a credit card with great rewards and benefits',
    longDescription:
      'Compare and apply for premium lifestyle, fuel, cashback, shopping, and travel credit cards from India’s leading issuers with complimentary lounge access and welcome bonuses.',
    interestRateFrom: 'Special Offers',
    maxTenure: 'Revolving Credit',
    maxAmount: 'Up to ₹10 Lakhs Limit',
    badge: 'Zero Joining Fee Options',
    iconName: 'CreditCard',
    bgColor: 'bg-[#EFF3FE]',
    iconBgColor: 'bg-[#3E5BD6]',
    iconColor: 'text-[#3E5BD6]',
    borderColor: 'border-indigo-100',
    benefits: [
      {
        title: 'Complimentary Airport Lounge',
        description: 'Enjoy free domestic and international lounge visits.',
        icon: 'Plane',
      },
      {
        title: 'Up to 5% Cashback',
        description: 'Instant cashback on dining, fuel, groceries & shopping.',
        icon: 'Percent',
      },
      {
        title: 'Reward Points & Miles',
        description: 'Redeem points for flight tickets, hotels, and gift vouchers.',
        icon: 'Gift',
      },
      {
        title: 'Up to 50 Days Interest-Free',
        description: 'Enjoy interest-free credit period on daily expenditures.',
        icon: 'Shield',
      },
    ],
    eligibility: [
      { label: 'Age Criteria', value: '18 to 65 years' },
      { label: 'Minimum Income', value: '₹20,000 / month (Salaried/Self-Employed)' },
      { label: 'Credit Score', value: '720+ preferred for premium cards' },
    ],
    documentsRequired: [
      'Identity & Address Proof (Aadhaar & PAN)',
      'Latest Salary Slip or Form 16 / ITR copy',
      'Bank statement showing recent credit',
    ],
    faqs: [
      {
        question: 'Are there Lifetime Free (LTF) credit cards available?',
        answer:
          'Yes, several partner banks offer lifetime free credit cards with no annual or joining fees, subject to applicant eligibility.',
      },
    ],
  },
];

