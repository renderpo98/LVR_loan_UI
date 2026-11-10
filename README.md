# LVR – Premium DSA Loan Facilitation Website

A modern, responsive, trust-first fintech web application for an Indian Direct Selling Agent (DSA) loan facilitation business. Built with Next.js 14, React 18, TypeScript, and Tailwind CSS, inspired by high-end financial services design.

---

## 🎨 Design Direction

- **Style:** Trust-First Fintech
- **Palette:**
  - **Primary Navy:** `#102B50`
  - **Deep Navy:** `#08264A`
  - **Primary Blue:** `#2476DB`
  - **Accent Teal:** `#24B8A5`
  - **Light Background:** `#F4F7FB`
  - **White:** `#FFFFFF`
  - **Primary Text:** `#142B4A`
  - **Secondary Text:** `#64748B`

---

## 🚀 Key Features

### 1. Homepage Sections (Exact Reference Alignment)
1. **Header / Navigation:** Sticky navbar, LVR bridge-wave logo, Loan Products mega dropdown, quick contact call link (`+91 98765 43210`), "Apply Now" button, and responsive mobile drawer.
2. **Hero Section:** Navy blue gradient with glowing radial accents, "Your Trusted Loan Partner" badge, bold typography, 3 trust highlights with icons, "Apply for a Loan" button, photo of smiling Indian couple thumbs up, and right-side application card.
3. **Interactive Loan Application Form:**
   - Dropdown for all 7 loan categories.
   - Currency input with Indian numbering formatting (`₹ 5,00,000`).
   - Full name input with validation.
   - 10-digit Indian mobile number validation (`+91`).
   - Realistic OTP flow with 6-digit box modal, countdown timer, resend button, and demo code (`123456`).
   - Success confirmation screen displaying confirmed Application Ref No. (`LB-2026-XXXXXX`).
4. **Loan Products Section:** 4x2 Bento grid with pastel cards, customized icons, descriptions, and "Apply Now" routing for all 7 loan products + 8th financial growth chart graphic.
5. **Why Choose Us Section:** Horizontal trust bar with line icons highlighting verified DSA credentials.
6. **How It Works Section:** 4 numbered steps (Apply Online → Verify with OTP → Get Expert Support → Loan Processing) with circular badges and connecting arrows (responsive vertical on mobile).
7. **Trust Statistics Section:** Left navy banner ("Trusted by Thousands of Customers") and 4 statistics cards with vertical dividers.
8. **Lending Partners Section:** Brand badges for SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and "& 40+ More".
9. **Two-Column Lower Section:**
   - **Testimonials:** Interactive carousel with customer avatar, 5 stars, quote, and pagination dots.
   - **FAQs:** Accordion with expand/collapse states answering key DSA questions.
10. **Footer:** Dark navy footer with regulatory DSA disclosure, quick links, loan links, contact coordinates, and social media handles.

---

## 📄 Reusable Loan Landing Pages

Dedicated SEO-optimized landing pages for all 7 loan products:
- `/apply/personal-loan`
- `/apply/home-loan`
- `/apply/business-loan`
- `/apply/car-loan`
- `/apply/loan-against-property`
- `/apply/education-loan`
- `/apply/credit-card`

Each landing page features:
- Loan-specific hero banner with interest rates, maximum tenure, and credit amount.
- Comprehensive benefits breakdown.
- Eligibility criteria table.
- Required documents checklist.
- Pre-filled interactive application form.
- Product-specific FAQs.
- Bottom Apply CTA.

---

## 🔌 Backend API Integration Readiness

The application contains a clean, decoupled service layer in `src/services/api.ts`:
- Configurable base URL via `NEXT_PUBLIC_API_BASE_URL`.
- Toggle between mock simulation and production endpoint via `NEXT_PUBLIC_USE_MOCK_API`.
- Typed interfaces for all payloads and responses (`src/types/index.ts`).
- Ready for SMS gateway integration (e.g. Twilio, MSG91, Gupshup, Exotel).

---

## 🛠️ Project Structure

```text
├── src/
│   ├── app/
│   │   ├── apply/[loanSlug]/page.tsx  # Dynamic landing pages for all 7 loans
│   │   ├── disclaimer/page.tsx        # Regulatory DSA disclaimer
│   │   ├── privacy-policy/page.tsx    # Privacy policy
│   │   ├── terms-and-conditions/page.tsx # Terms of use
│   │   ├── globals.css                # Global styles & Tailwind layers
│   │   ├── layout.tsx                 # Root layout with Header and Footer
│   │   └── page.tsx                   # Full homepage layout
│   ├── components/
│   │   ├── common/Logo.tsx            # SVG Bridge Logo
│   │   ├── Header.tsx                 # Sticky navigation & mega menu
│   │   ├── HeroSection.tsx            # Navy Hero with couple image & copy
│   │   ├── LoanApplicationForm.tsx    # Interactive form with OTP verification
│   │   ├── LoanProductsSection.tsx    # Bento 4x2 grid of 7 loans + chart
│   │   ├── WhyChooseUsSection.tsx     # Horizontal benefits bar
│   │   ├── HowItWorksSection.tsx      # 4-step process with arrows
│   │   ├── TrustStatisticsSection.tsx # Statistics banner
│   │   ├── LendingPartnersSection.tsx # Partner bank logo badges
│   │   ├── TestimonialsSection.tsx    # Carousel with customer reviews
│   │   ├── FAQSection.tsx             # Accordion component
│   │   └── Footer.tsx                 # Dark navy 4-column footer
│   ├── data/
│   │   ├── loanProducts.ts            # Detailed content for all 7 loan products
│   │   └── siteConfig.ts               # Configurable company details, FAQs, stats
│   ├── services/
│   │   └── api.ts                     # Centralized API service layer
│   └── types/
│       └── index.ts                   # TypeScript interfaces
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 💻 Available Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Compiles production build with static generation for all routes.
- `npm run start`: Starts production server.
- `npm run lint`: Runs ESLint checks.

