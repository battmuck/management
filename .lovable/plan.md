- Plan: Real Estate Agent Referral Program Landing Page

### New Route

- Add `/referral` route in `App.tsx`

### New Page: `src/pages/ReferralPage.tsx`

A single-page landing page at `/referral` using existing components (Header, Footer) and the site's established design patterns. Sections:

1. **Hero Section** — Teal background with hero image overlay. Headline: "Partner With Us. Earn $1,200 Per Referral." Subtext about the referral program. CTA button scrolling to the contact form.
2. **How It Works** — 3-step visual flow (Refer → We Sign → You Get Paid). Clean cards with icons.
3. **Value for You (Agent Benefits)** — Key selling points in a grid:
  - **$1,200 referral fee** per signed contract
  - **We're not competitors** — we manage, not buy/sell. If the owner sells, we refer them back to you.
  - **Your brand in every property** — agent contact details included in the digital guest guide sent to every guest (exposure to potential Maui buyers).
4. **Value for Your Clients (Owner Benefits)** — Why referring to us is good for their clients:
  - 100% owner retention rate
  - 15% higher revenue than Maui market average in 2025
  - 80%+ business from owner referrals
  - Zero hidden fees
  - Boutique, personalized management
5. **Testimonials** — Reuse existing `TestimonialsSection` component
6. **CTA / Contact Form** — Reuse the existing embedded form pattern (iframe) with agent-specific heading like "Start Referring Today"
7. Include on a page a mention that we will provide free revenue estimates for any properties they are listing or properties their buyers may be interested in buying. Optionally, we can even add their brokerage branding on the revenue estimate 

### Files to Create

- `src/pages/ReferralPage.tsx`

### Files to Edit

- `src/App.tsx` — add `/referral` route