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
    feature: "Local Maui-Based Team",
    us: "yes",
    them: "no",
    usNote: "100% Hawaii-based staff",
    themNote: "Mainland call centers",
  },
  {
    feature: "Transparent Fee Structure",
    us: "yes",
    them: "partial",
    usNote: "No hidden fees, ever",
    themNote: "Additional charges for marketing, photos",
  },
  {
    feature: "24/7 Owner Communication",
    us: "yes",
    them: "partial",
    usNote: "Direct line to your property manager",
    themNote: "Ticket-based support",
  },
  {
    feature: "Dynamic Pricing Optimization",
    us: "yes",
    them: "yes",
    usNote: "AI + local market expertise",
    themNote: "Algorithm-only approach",
  },
  {
    feature: "Professional Photography Included",
    us: "yes",
    them: "no",
    usNote: "Included in management",
    themNote: "Additional $300-500 charge",
  },
  {
    feature: "Direct Booking Website",
    us: "yes",
    them: "partial",
    usNote: "Custom property page",
    themNote: "Generic template only",
  },
  {
    feature: "In-Person Property Inspections",
    us: "yes",
    them: "no",
    usNote: "Weekly walkthrough included",
    themNote: "Photo-only verification",
  },
  {
    feature: "Owner Portal & Reporting",
    us: "yes",
    them: "yes",
    usNote: "Real-time revenue dashboard",
    themNote: "Monthly reports only",
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
      </div>
    </section>
  );
};

export default ComparisonSection;
