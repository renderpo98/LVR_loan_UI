export type LoanType =
  | 'personal-loan'
  | 'home-loan'
  | 'business-loan'
  | 'car-loan'
  | 'loan-against-property'
  | 'education-loan'
  | 'credit-card';

export interface LoanProductInfo {
  id: LoanType;
  title: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  interestRateFrom: string;
  maxTenure: string;
  maxAmount: string;
  badge?: string;
  iconName: string;
  bgColor: string;
  iconBgColor: string;
  iconColor: string;
  borderColor: string;
  slug: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  eligibility: {
    label: string;
    value: string;
  }[];
  documentsRequired: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface LoanApplicationFormData {
  loanType: LoanType | '';
  loanAmount: string;
  fullName: string;
  mobileNumber: string;
  email?: string;
  city?: string;
  employmentType?: 'Salaried' | 'Self-Employed' | 'Business Owner';
  monthlyIncome?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface OtpSession {
  sessionId: string;
  maskedMobile: string;
  expiresInSeconds: number;
}

export interface ApplicationSubmissionResult {
  leadId: string;
  applicationNumber: string;
  submittedAt: string;
  status: 'RECEIVED' | 'IN_REVIEW' | 'VERIFIED';
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  loanType: string;
  quote: string;
  avatarUrl: string;
  initials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
  description?: string;
}

export interface LendingPartner {
  name: string;
  category: 'Bank' | 'NBFC';
  code: string;
  tagline?: string;
}

