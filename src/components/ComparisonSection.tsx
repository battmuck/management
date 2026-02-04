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
    usNote: "Direct access to the owner for personalized owner relations support",
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
    themNote: "Additional admin, marketing, linen, and ancillary fees may apply",
  },
  {
    feature: "Listing Photography",
    us: "yes",
    them: "no",
    usNote: "Professional photography included for new owners",
    themNote: "Photography often billed at owner's expense",
  },
];

const StatusIcon = ({ status, isUs = false }: { status: "yes" | "no" | "partial"; isUs?: boolean }) => {
  if (status === "yes") {
    return (
      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isUs ? "bg-primary/30" : "bg-primary/20"}`}>
        <Check className={`w-6 h-6 ${isUs ? "text-primary" : "text-primary/80"}`} strokeWidth={3} />
      </div>
    );
  }
  if (status === "no") {
    return (
      <div className="w-10 h-10 rounded-full bg-destructive/15 flex items-center justify-center">
        <X className="w-6 h-6 text-destructive/70" strokeWidth={2.5} />
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-full bg-warning/15 flex items-center justify-center">
      <Minus className="w-6 h-6 text-warning/80" strokeWidth={2.5} />
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
          <p className="text-lg md:text-xl text-muted-foreground font-sans max-w-2xl mx-auto leading-relaxed">
            An honest, side-by-side look at what you get with Hawaii Vacation Homes versus MyPerfectStays.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-border shadow-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-5 font-sans font-semibold text-foreground bg-muted border-b border-border">Feature</th>
                <th className="text-center p-5 py-6 font-serif font-bold text-xl text-primary bg-primary/15 border-b border-primary/20">
                  Hawaii Vacation Homes
                </th>
                <th className="text-center p-5 py-6 font-serif font-bold text-xl text-muted-foreground bg-muted border-b border-border">
                  MyPerfectStays
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr 
                  key={item.feature} 
                  className="group transition-colors hover:bg-muted/30"
                >
                  <td className={`p-5 font-sans font-medium text-foreground border-b border-border/50 ${index % 2 === 1 ? "bg-muted/30" : "bg-card"}`}>
                    {item.feature}
                  </td>
                  <td className={`p-5 border-b border-primary/10 ${index % 2 === 1 ? "bg-primary/15" : "bg-primary/10"}`}>
                    <div className="flex flex-col items-center gap-2">
                      <StatusIcon status={item.us} isUs={true} />
                      {item.usNote && (
                        <span className="text-sm text-foreground/90 text-center font-medium max-w-[220px] leading-snug">{item.usNote}</span>
                      )}
                    </div>
                  </td>
                  <td className={`p-5 border-b border-border/50 ${index % 2 === 1 ? "bg-muted/30" : "bg-card"}`}>
                    <div className="flex flex-col items-center gap-2">
                      <StatusIcon status={item.them} />
                      {item.themNote && (
                        <span className="text-sm text-muted-foreground text-center max-w-[220px] leading-snug">{item.themNote}</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {comparisonData.map((item) => (
            <div key={item.feature} className="bg-card border border-border rounded-xl p-4 shadow-sm">
              <h3 className="font-sans font-semibold text-foreground mb-4 text-center">{item.feature}</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center gap-2 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="text-xs font-sans font-bold text-primary uppercase tracking-wide">Hawaii Vacation Homes</span>
                  <StatusIcon status={item.us} isUs={true} />
                  {item.usNote && (
                    <span className="text-xs text-foreground/80 text-center font-medium">{item.usNote}</span>
                  )}
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg border border-border">
                  <span className="text-xs font-sans font-bold text-muted-foreground uppercase tracking-wide">MyPerfectStays</span>
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
          Comparison based on publicly available information and typical service structures at the time of writing. Offerings, processes, and fees may vary by property.
        </p>
      </div>
    </section>
  );
};

export default ComparisonSection;
