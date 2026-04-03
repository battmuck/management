import { useEffect } from "react";
import { Phone, TrendingUp, Users, Shield, Home, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-maui.jpg";
import mattJulia from "@/assets/Matt-Julia.jpg";
import imgLivingRoom from "@/assets/P207-living-room.jpg";
import imgDrone from "@/assets/Maalaea-Kai-Drone.jpg";
import imgBedroom from "@/assets/Maalaea-Kai-Bedroom.jpg";
import logoHorizontal from "@/assets/logo-horizontal.png";
import { Button } from "@/components/ui/button";
import EarningsCalculator from "@/components/EarningsCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import GuestReviewsSection from "@/components/GuestReviewsSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

const FORM_ID = "RhDA78jWo8HwM8qSO3kN";
const FORM_NAME = "Property Management - General";

const stats = [
  { value: "4.96★", label: "Average Rating" },
  { value: "18%", label: "Above Market Revenue" },
  { value: "100%", label: "Owner Retention" },
  { value: "700+", label: "5-Star Reviews" },
];

const approaches = [
  {
    icon: Shield,
    title: "Transparent Fees",
    description:
      "One flat management fee applied only to accommodation revenue. No markups on maintenance, no onboarding costs, no surprises.",
  },
  {
    icon: TrendingUp,
    title: "Dynamic Pricing",
    description:
      "Daily market analysis keeps your property priced to maximize occupancy and revenue across every season and booking window.",
  },
  {
    icon: Users,
    title: "Boutique Service",
    description:
      "Every property gets hands-on, personalized care. Your home isn't just a number in a portfolio. It gets individualized attention from a team that treats it like their own.",
  },
  {
    icon: Home,
    title: "Asset Protection",
    description:
      "Proactive maintenance and a local presence on Maui means issues get caught early. We care for your property the way we'd care for our own home.",
  },
];

const services = [
  {
    title: "Guest Experience",
    description:
      "We ensure your guests have a seamless 5-star experience from booking to check-out.",
    bullets: [
      "Rapid Guest Communication",
      "24/7 Message Monitoring",
      "Detailed House Manuals",
      "24/7 Emergency Local Contact",
    ],
    image: "living-room",
  },
  {
    title: "Property Care",
    description:
      "We take care of your physical asset as if it were our own luxury home.",
    bullets: [
      "Professional Cleaning Coordination",
      "Routine Maintenance & Repairs",
      "Preventative Maintenance Schedule",
      "Periodic Deep Cleanings",
    ],
    image: "bedroom",
  },
  {
    title: "Marketing & Revenue",
    description:
      "We maximize your property's visibility and earnings across all channels.",
    bullets: [
      "Professional Photography Included",
      "Multi-Channel Distribution",
      "SEO-Optimized Listings",
      "Dynamic Daily Pricing",
      "Targeted Email & Social Marketing",
    ],
    image: "drone",
  },
];

const ManagementPage = () => {
  useEffect(() => {
    document.title =
      "Maui Vacation Rental Property Management | Hawaii Vacation Homes";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Hawaii Vacation Homes offers full-service vacation rental management in Maui. We maximize owner revenue with expert Airbnb management, guest services, and local support. Get a free revenue estimate."
      );
    }
    if (
      !document.querySelector(
        'script[src="https://link.msgsndr.com/js/form_embed.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-8">
          <a href="https://hawaiivacationhomes.com">
            <img
              src={logoHorizontal}
              alt="Hawaii Vacation Homes"
              className="h-10 md:h-12 shrink-0"
            />
          </a>

          <div className="flex items-center gap-4">
            {/* Nav — desktop only */}
            <nav className="hidden lg:flex items-center gap-7 mr-2">
              {[
                { label: "Why Choose Us", id: "benefits" },
                { label: "Calculate Earnings", id: "earnings-calculator" },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-sans font-medium text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://hawaiivacationhomes.com/search-results/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Our Properties
              </a>
            </nav>
            <a
              href="tel:8087935372"
              className="hidden md:flex items-center gap-2 text-sm font-sans font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              808-793-5372
            </a>
            <Button
              size="sm"
              className="font-sans font-medium"
              onClick={() => scrollTo("contact-form")}
            >
              Get Free Evaluation
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-56 md:pb-52"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-foreground/60" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left — text */}
              <div className="text-center lg:text-left">
                <p className="text-primary-foreground font-sans text-base md:text-lg font-medium tracking-wide uppercase mb-4 animate-fade-in">
                  Maui Vacation Rental Management
                </p>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground mb-6 leading-tight animate-fade-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  Expert Vacation Rental Management in Maui.{" "}
                  <span className="text-[hsl(173_45%_72%)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                    More Revenue, Zero Stress
                  </span>
                </h1>
                <p
                  className="text-lg md:text-xl text-primary-foreground/85 font-sans font-light max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Full-service vacation rental management for Maui property owners. We handle listing optimization, guest services, and maintenance coordination so you earn more and manage nothing.
                </p>
              </div>

              {/* Right — form */}
              <div
                className="bg-background/95 backdrop-blur-sm rounded-lg p-4 md:p-5 shadow-2xl animate-fade-in min-h-[500px] md:min-h-[550px]"
                style={{ animationDelay: "0.2s" }}
              >
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mt-1 mb-1 text-center">
                  Free Revenue Estimate
                </h2>
                <p className="text-muted-foreground font-sans text-sm md:text-base mb-0 text-center">
                  See what your Maui vacation rental could earn with professional management.
                </p>
                <iframe
                  src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "450px",
                    border: "none",
                    borderRadius: "3px",
                  }}
                  id={`inline-${FORM_ID}`}
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name={FORM_NAME}
                  data-height="593"
                  data-layout-iframe-id={`inline-${FORM_ID}`}
                  data-form-id={FORM_ID}
                  title={FORM_NAME}
                  scrolling="no"
                />
              </div>

            </div>
          </div>

          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`px-4 ${i < stats.length - 1 ? "md:border-r md:border-primary-foreground/10" : ""}`}
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
        </section>

        {/* ── Overview ── */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left — text */}
              <div>
                <p className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-primary mb-5 leading-relaxed">
                  A Boutique, Locally Based Approach to High-Performing<br />
                  Maui Vacation Rental Management
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 leading-tight">
                  Your Trusted Partner For Maui Property Management
                </h2>
                {/* Dotted divider */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 28 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                  ))}
                </div>
                <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed mb-5">
                  Owning a vacation rental on Maui should feel rewarding, not overwhelming. At Hawaii Vacation Homes, we offer hands-on, performance-driven management designed to protect your investment, maximize revenue, and deliver exceptional guest experiences. As a locally based, family-run team, we're on-island every day, ensuring your property is cared for with the same attention and pride as our own.
                </p>
                <p className="text-base md:text-lg text-muted-foreground font-sans leading-relaxed mb-8">
                  From high-performing marketing and transparent pricing to professional cleaning, maintenance coordination, and 24/7 guest support, we handle every detail so you never have to stress about your home.
                </p>
                <Button
                  size="lg"
                  onClick={() => scrollTo("contact-form")}
                  className="font-sans font-semibold tracking-widest text-sm uppercase rounded-full px-10 py-6"
                >
                  Get a Free Revenue Estimate
                </Button>
              </div>

              {/* Right — image */}
              <div className="relative">
                <div
                  className="w-full h-[420px] md:h-[520px] bg-cover bg-top rounded-2xl shadow-xl"
                  style={{ backgroundImage: `url(${mattJulia})` }}
                />
                {/* Floating accent */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/15 -z-10" />
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/10 -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Approach ── */}
        <section id="benefits" className="section-padding bg-background">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
                Our Approach
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
                A Boutique Standard of Care
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
                We treat every home as our own, blending high-end hospitality
                with data-driven revenue management to deliver exceptional
                results for discerning owners.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approaches.map((item) => (
                <div
                  key={item.title}
                  className="bg-card border border-border/40 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <item.icon className="w-8 h-8 text-primary mb-5" />
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Full-Service Management ── */}
        <section className="section-padding bg-card">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-sans font-semibold uppercase tracking-widest text-primary mb-3">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
                Full-Service Management
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
                We handle every detail from high-end marketing to late-night
                emergencies, so you can enjoy passive income without the
                operational stress.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => {
                const imgSrc =
                  service.image === "living-room" ? imgLivingRoom
                  : service.image === "bedroom" ? imgBedroom
                  : imgDrone;
                return (
                <div
                  key={service.title}
                  className="bg-background rounded-xl overflow-hidden border border-border shadow-sm"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${imgSrc})` }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2 text-sm font-sans text-foreground/80"
                        >
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );})}
            </div>

            {/* CTA below services */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="font-sans font-semibold px-10"
                onClick={() => scrollTo("contact-form")}
              >
                Learn More About Our Services →
              </Button>
            </div>
          </div>
        </section>

        <EarningsCalculator />
        <TestimonialsSection />
        <GuestReviewsSection />
        <ContactFormSection />
      </main>

      <Footer />
    </div>
  );
};

export default ManagementPage;
