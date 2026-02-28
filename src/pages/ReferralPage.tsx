import { useEffect } from "react";
import { DollarSign, Users, BookOpen, TrendingUp, Shield, Heart, ArrowRight, Handshake, FileSignature, BadgeDollarSign, Home, BarChart3, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import heroImage from "@/assets/hero-maui.jpg";

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
    title: "Your Listings Stay Yours",
    description: "We manage properties — we don't buy or sell them. If your referred client ever decides to sell, we refer them right back to you as their agent.",
  },
  {
    icon: BookOpen,
    title: "Your Brand in Every Property",
    description: "Your branded contact details are included in our digital guest guide sent to every guest. That's direct exposure to travelers who may be interested in buying on Maui.",
  },
  {
    icon: BarChart3,
    title: "Free Revenue Estimates",
    description: "We provide complimentary revenue projections for any properties you're listing or that your buyers are considering — with optional brokerage branding on the report.",
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
    title: "15% Above Market Average",
    description: "In 2025, our owners earned 15% higher revenue than the average Maui short-term rental.",
  },
  {
    icon: Users,
    title: "80%+ Owner Referrals",
    description: "The majority of our business comes from happy owners referring other owners — a testament to our results.",
  },
  {
    icon: Shield,
    title: "Zero Hidden Fees",
    description: "One transparent management fee. We cover new listing photography, charge zero onboarding fees, and never mark up maintenance costs.",
  },
  {
    icon: Star,
    title: "Boutique, Personalized Care",
    description: "Every property gets individualized attention — not a one-size-fits-all corporate approach.",
  },
];

const ReferralPage = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const scrollToForm = () => {
    document.getElementById("referral-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Maui coastline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
          <p className="text-primary-foreground/80 font-sans text-sm tracking-widest uppercase mb-4">
            Real Estate Agent Referral Program
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground mb-6 leading-tight">
            Partner With Us. Earn $1,200 Per Referral.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 font-sans max-w-2xl mx-auto mb-8 leading-relaxed">
            Refer property owners to Maui's most trusted boutique vacation rental manager — and get paid for every signed contract. We manage. You earn. Your clients win.
          </p>
          <Button size="lg" variant="secondary" onClick={scrollToForm} className="font-sans font-semibold text-base px-8">
            Start Referring Today
          </Button>
        </div>
      </section>

      {/* Agent Benefits */}
      <section className="section-padding bg-card">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
              Why Agents Partner With Us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
              This isn't just a referral fee — it's a long-term partnership that grows your business.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* How It Works */}
      <section className="section-padding bg-card">
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

      {/* Contact Form */}
      <section id="referral-form" className="section-padding bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Start Referring Today
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans mb-8 leading-relaxed">
            Fill out the form below and we'll reach out to discuss the partnership. It only takes a minute.
          </p>
          <div className="bg-card rounded-lg p-6 md:p-8 border border-border">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/NIkdCb3EJxwZ7DtCplGq"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
              id="referral-inline-NIkdCb3EJxwZ7DtCplGq"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Property Management - Competitor Form"
              data-height="593"
              data-layout-iframe-id="referral-inline-NIkdCb3EJxwZ7DtCplGq"
              data-form-id="NIkdCb3EJxwZ7DtCplGq"
              title="Referral Program Contact Form"
              scrolling="no"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReferralPage;
