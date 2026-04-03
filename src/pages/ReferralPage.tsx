import { DollarSign, BookOpen, TrendingUp, Shield, Heart, ArrowRight, Handshake, FileSignature, BadgeDollarSign, BarChart3, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import logoHorizontal from "@/assets/logo-horizontal.png";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuestReviewsSection from "@/components/GuestReviewsSection";
import EarningsCalculator from "@/components/EarningsCalculator";
import ContactFormSection from "@/components/ContactFormSection";
import heroImage from "@/assets/hero-maui.jpg";

const credibilityStats = [
  { value: "4.96★", label: "Average Rating" },
  { value: "18%", label: "Above Market Revenue" },
  { value: "100%", label: "Owner Retention" },
  { value: "700+", label: "5-Star Reviews" },
];

const steps = [
  {
    icon: Handshake,
    step: "1",
    title: "Refer a Client",
    description: "Send us a property owner looking for short-term rental management on Maui.",
  },
  {
    icon: FileSignature,
    step: "2",
    title: "We Sign Them",
    description: "We handle the onboarding, listing setup, and everything in between.",
  },
  {
    icon: BadgeDollarSign,
    step: "3",
    title: "You Get Paid",
    description: "Once the contract is signed, you receive a $1,200 referral fee. Simple.",
  },
];

const agentBenefits = [
  {
    icon: DollarSign,
    title: "$1,200 Per Referral",
    description: "Earn a flat $1,200 referral fee for every property owner who signs a management contract with us.",
  },
  {
    icon: ArrowRight,
    title: "Your Listings. Your Clients.",
    description: "We manage properties. We don't buy or sell them. If your referred client ever decides to sell, we refer them right back to you as their agent.",
  },
  {
    icon: BookOpen,
    title: "Your Brand in Every Property",
    description: "Your branded contact details are included in our digital guest guide sent to every guest. That's direct exposure to travelers who may be interested in buying on Maui.",
  },
  {
    icon: BarChart3,
    title: "Free Revenue Estimates",
    description: "We provide complimentary revenue projections for any properties you're listing or that your buyers are considering, with optional brokerage branding on the report.",
  },
];

const ownerBenefits = [
  {
    icon: Heart,
    title: "100% Owner Retention",
    description: "Not a single owner has left since we started. Your clients are in trusted hands.",
  },
  {
    icon: TrendingUp,
    title: "18% Above Market Average",
    description: "In 2025, our owners earned 18% higher revenue than the average Maui short-term rental.",
  },
  {
    icon: Shield,
    title: "Zero Hidden Fees",
    description: "One transparent management fee. We cover new listing photography, charge zero onboarding fees, and never mark up maintenance costs.",
  },
  {
    icon: Star,
    title: "Boutique, Personalized Care",
    description: "Every property gets individualized attention. No one-size-fits-all corporate approach.",
  },
];

const ReferralPage = () => {
  const scrollToForm = () => {
    document.getElementById("referral-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-8">
          <img
            src={logoHorizontal}
            alt="Hawaii Vacation Homes"
            className="h-10 md:h-12 shrink-0"
          />
          <div className="hidden lg:flex items-center gap-7">
            <a
              href="https://hawaiivacationhomes.com/search-results/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-sans font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Our Properties
            </a>
            <Link
              to="/management"
              className="text-sm font-sans font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Property Management
            </Link>
            <Button size="sm" className="font-sans font-medium" onClick={scrollToForm}>
              Partner with Us
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Maui coastline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
          <p className="text-primary-foreground/80 font-sans text-sm tracking-widest uppercase mb-4">
            Agent Referral Program
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground mb-3 leading-tight">
            A Property Manager Worth Referring.
          </h1>
          <p className="text-lg text-primary-foreground/80 font-sans max-w-2xl mx-auto mb-8 leading-relaxed">
            No hidden fees. No surprise charges. 18% above-market revenue for your clients. Refer with confidence and <strong className="font-semibold text-primary-foreground">earn $1,200 per signed contract.</strong>
          </p>
          <Button size="lg" variant="secondary" onClick={scrollToForm} className="font-sans font-semibold text-base px-8">
            Partner with Us
          </Button>
        </div>
      </section>

      {/* Credibility Stats Bar */}
      <div className="bg-foreground">
        <div className="container-narrow mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {credibilityStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 ${i < credibilityStats.length - 1 ? "md:border-r md:border-primary-foreground/10" : ""}`}
              >
                <p className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground leading-none">
                  {stat.value}
                </p>
                <p className="text-xs font-sans uppercase tracking-widest text-primary mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agent Benefits */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
              Why Agents Partner With Us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
              This isn't just a referral fee. It's a long-term partnership that grows your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {agentBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group bg-background border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-sans text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Benefits */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
              Why Your Clients Will Thank You
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
              When you refer an owner to us, you're connecting them with a proven, results-driven management team.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {ownerBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground font-sans text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <EarningsCalculator heading="See How Much More Your Clients Could Earn (and Save)" />

      {/* How It Works */}
      <section className="pb-16 md:pb-20 pt-4 md:pt-5 bg-card">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
              Three simple steps to earning referral income.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-sans font-semibold text-primary tracking-widest uppercase">
                  Step {step.step}
                </span>
                <h3 className="text-xl font-serif font-semibold text-foreground mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-sans text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Guest Reviews */}
      <GuestReviewsSection />

      {/* Contact Form */}
      <ContactFormSection
        formId="OjmzRHjGXQhOs1UFlifp"
        formName="Agent Referral Form"
        heading="Partner with Us"
        subheading="Fill out the form below and we'll reach out to discuss the partnership. It only takes a minute."
        sectionId="referral-form"
      />

      <Footer />
    </div>
  );
};

export default ReferralPage;
