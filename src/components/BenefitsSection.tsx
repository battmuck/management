import { TrendingUp, Users, Shield, Home, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximize Your Revenue",
    description: "In 2025, Hawaii Vacation Homes generated an average of 32% higher nightly revenue compared to comparable properties",
  },
  {
    icon: Users,
    title: "Boutique Management",
    description: "Every owner, guest, and listing receives personalized attention—not a one-size-fits-all approach.",
  },
  {
    icon: Shield,
    title: "Complete Transparency",
    description: "One simple management fee. No surprise charges for photography, marketing, or markups.",
  },
  {
    icon: Home,
    title: "Property Protection",
    description: "Proactive maintenance keeps your home in top condition and protects your investment.",
  },
  {
    icon: Clock,
    title: "100% Owner Retention",
    description: "Our owners stay because we deliver results. Not a single owner has left since we started.",
  },
  {
    icon: Award,
    title: "5-Star Guest Experience",
    description: "Happy guests mean better reviews and more bookings. Our average rating: 4.9 stars.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Why Owners Switch to Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            When you partner with Hawaii Vacation Homes, you get the benefits of boutique management with the performance of a market leader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
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
  );
};

export default BenefitsSection;
