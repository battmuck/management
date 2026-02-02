import { Check, X, Minus } from "lucide-react";

interface ComparisonItem {
  feature: string;
  us: "yes" | "no" | "partial";
  them: "yes" | "no" | "partial";
  usNote?: string;
  themNote?: string;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: "Multi-Channel Marketing",
    us: "yes",
    them: "yes",
    usNote: "Across Airbnb, Vrbo, Booking.com, and all major channels",
  },
  {
    feature: "Revenue Management & Dynamic Pricing",
    us: "yes",
    them: "yes",
  },
  {
    feature: "Guest Marketing & Direct Bookings",
    us: "yes",
    them: "yes",
    usNote: "Including outreach to past guests",
  },
  {
    feature: "Owner Portal & Reporting",
    us: "yes",
    them: "yes",
  },
  {
    feature: "Airbnb Review Rating",
    us: "yes",
    them: "partial",
    usNote: "4.96 / 5 average rating",
    themNote: "4.70 / 5 average rating",
  },
  {
    feature: "Management Model",
    us: "yes",
    them: "partial",
    usNote: "Boutique management with personalized attention",
    themNote: "Large-scale management across a high-volume portfolio",
  },
  {
    feature: "Revenue Management Strategy",
    us: "yes",
    them: "partial",
    usNote: "Individual pricing strategy customized per listing",
    themNote: "Group-based pricing changes applied across similar units",
  },
  {
    feature: "Owner Communication & Support",
    us: "yes",
    them: "partial",
    usNote: "Direct access to a dedicated owner relations contact (Matt)",
    themNote: "Team-based support structure",
  },
  {
    feature: "Flexibility & Customization",
    us: "yes",
    them: "partial",
    usNote: "Flexible, property-specific approach tailored to each owner",
    themNote: "Standardized processes designed for consistency",
  },
  {
    feature: "Fee Structure",
    us: "yes",
    them: "no",
    usNote: "Transparent pricing with no admin, marketing, or linen fees",
    themNote: "Additional admin, marketing, linen, and ancillary fees",
  },
  {
    feature: "Photography",
    us: "yes",
    them: "no",
    usNote: "Professional photography included",
    themNote: "Photography often billed separately",
  },
];

const StatusIcon = ({ status }: { status: "yes" | "no" | "partial" }) => {
  if (status === "yes") {
    return (
      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
        <Check className="w-5 h-5 text-primary" />
      </div>
    );
  }
  if (status === "no") {
    return (
      <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
        <X className="w-5 h-5 text-destructive" />
      </div>
    );
  }
  return (
    <div className="w-8 h-8 rounded-full bg-warning/20 flex items-center justify-center">
      <Minus className="w-5 h-5 text-warning" />
    </div>
  );
};

const ComparisonSection = () => {
  return (
    <section id="comparison" className="section-padding bg-card">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            How We Compare
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            An honest, side-by-side look at what you get with Hawaii Vacation Homes versus MyPerfectStays.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-lg border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="text-left p-4 font-sans font-semibold text-foreground">Feature</th>
                <th className="text-center p-4 font-sans font-semibold text-primary">Hawaii Vacation Homes</th>
                <th className="text-center p-4 font-sans font-semibold text-muted-foreground">MyPerfectStays</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr 
                  key={item.feature} 
                  className={index % 2 === 0 ? "bg-card" : "bg-muted/50"}
                >
                  <td className="p-4 font-sans font-medium text-foreground">{item.feature}</td>
                  <td className="p-4">
                    <div className="flex flex-col items-center gap-1">
                      <StatusIcon status={item.us} />
                      {item.usNote && (
                        <span className="text-xs text-muted-foreground text-center">{item.usNote}</span>
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col items-center gap-1">
                      <StatusIcon status={item.them} />
                      {item.themNote && (
                        <span className="text-xs text-muted-foreground text-center">{item.themNote}</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((item) => (
            <div key={item.feature} className="bg-card border border-border rounded-lg p-4">
              <h3 className="font-sans font-semibold text-foreground mb-3">{item.feature}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center gap-2 p-3 bg-primary/5 rounded-lg">
                  <span className="text-xs font-sans font-medium text-primary">Hawaii Vacation Homes</span>
                  <StatusIcon status={item.us} />
                  {item.usNote && (
                    <span className="text-xs text-muted-foreground text-center">{item.usNote}</span>
                  )}
                </div>
                <div className="flex flex-col items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <span className="text-xs font-sans font-medium text-muted-foreground">MyPerfectStays</span>
                  <StatusIcon status={item.them} />
                  {item.themNote && (
                    <span className="text-xs text-muted-foreground text-center">{item.themNote}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credibility disclaimer */}
        <p className="text-xs text-muted-foreground text-center mt-8 font-sans">
          Comparison based on publicly available information and typical service structures. Offerings and fees may vary by property.
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;
