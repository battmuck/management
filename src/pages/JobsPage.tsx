import { useEffect } from "react";
import { MapPin, Clock, DollarSign, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScX-hROhClS-JnTzx-bh8lip9MRkE4jKQ_yaB1Wl9L2y8JDvg/viewform";

const chips = [
  { icon: MapPin, label: "Kihei, HI" },
  { icon: Clock, label: "5–10 hrs/week" },
  { icon: DollarSign, label: "$25–$30/hr" },
  { icon: Briefcase, label: "1099 Contractor" },
];

const responsibilities = [
  {
    title: "Property Onboarding",
    items: [
      "Collect, document, and organize all required information when onboarding new properties",
      "Support setup and readiness of properties for short-term rental operations",
    ],
  },
  {
    title: "Inventory & Package Management",
    items: [
      "Receive, track, organize, and deliver inventory, supplies, and packages",
      "Ensure properties are properly stocked and operational",
    ],
  },
  {
    title: "Property Inspections",
    items: [
      "Conduct periodic on-site inspections to maintain quality, cleanliness, and functionality standards",
      "Identify issues early and communicate clearly with the team",
    ],
  },
  {
    title: "Key & Access Management",
    items: [
      "Manage keys, lockboxes, and access systems securely",
      "Coordinate access for team members, vendors, and guests as needed",
    ],
  },
  {
    title: "Light Maintenance & Upkeep",
    items: [
      "Perform basic maintenance tasks (changing batteries, light bulbs, etc.)",
      "Identify maintenance issues requiring vendor or team escalation",
    ],
  },
  {
    title: "Project Management",
    items: [
      "Support boots-on-the-ground projects from problem identification to implementation",
      "Coordinate with team and vendors; own execution and follow-through",
    ],
  },
  {
    title: "Guest Support / On-Call",
    items: [
      "Provide occasional on-call support for guest issues",
      "Resolve minor issues quickly and professionally",
    ],
  },
  {
    title: "Local Travel",
    items: ["Drive locally between properties in and around Kihei"],
  },
];

const candidateQualities = [
  "Strong problem solver with a sense of ownership and initiative",
  "Hospitality-minded with a guest-first mentality",
  "Detail-oriented with high standards for quality",
  "Reliable, organized, and proactive",
  "Comfortable working independently with minimal supervision",
];

const requirements = [
  "Must live in Kihei, HI",
  "Reliable personal transportation",
  "Comfortable with basic technology (phone, apps, email)",
  "Background check required",
];

const JobsPage = () => {
  useEffect(() => {
    document.title = "On-Site Property Coordinator | Hawaii Vacation Homes";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Join Hawaii Vacation Homes as an On-Site Property Coordinator in Kihei, Maui. Part-time 1099 contractor role, $25–$30/hr."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header / Hero */}
      <header className="section-padding pb-10 md:pb-14">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Hawaii Vacation Homes
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 leading-tight">
            On-Site Property Coordinator
          </h1>

          {/* Metadata chips - inline */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
            {chips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-sm font-sans text-muted-foreground"
              >
                <Icon className="w-4 h-4 text-muted-foreground" />
                {label}
              </span>
            ))}
          </div>

          <Button asChild size="lg" className="font-sans font-medium text-base px-8">
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              Submit Your Application
            </a>
          </Button>

          <hr className="border-border mt-10" />
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-24 space-y-16">
        {/* About */}
        <Section title="About Hawaii Vacation Homes">
          <p>
            Hawaii Vacation Homes is a small, boutique short-term rental property
            management company based in Kihei, Maui. We currently manage about 14
            properties located throughout South Maui. As a small business, we truly
            care about the people we work with, including our guests, our homeowners,
            and our team, and we take pride in giving each property and relationship a
            high level of personal attention.
          </p>
          <p>
            We believe in treating people well, communicating openly, and doing the
            right thing, even when it takes extra effort. We are looking to build a
            long-term relationship with a reliable on-site property coordinator who
            takes pride in their work, cares about others, and wants to be part of a
            supportive, people-first company.
          </p>
        </Section>

        {/* Role Purpose */}
        <Section title="Role Purpose">
          <p>
            The On-Site Property Coordinator is a critical "boots-on-the-ground" role
            responsible for supporting the daily operations, onboarding, and upkeep of
            short-term rental properties. This role ensures properties are guest-ready,
            well-maintained, properly stocked, and operating at a high hospitality
            standard.
          </p>
          <p>
            This position requires ownership, problem-solving, and follow-through. You
            are the eyes, ears, and hands on the ground — helping protect guest
            experience and support scalable operations.
          </p>
        </Section>

        {/* Key Responsibilities */}
        <Section title="Key Responsibilities">
          <div className="space-y-8">
            {responsibilities.map((r) => (
              <div key={r.title}>
                <h3 className="text-sm font-sans font-bold tracking-[0.12em] uppercase text-foreground mb-3">
                  {r.title}
                </h3>
                <BulletList items={r.items} />
              </div>
            ))}
          </div>
        </Section>

        {/* Ideal Candidate */}
        <Section title="Ideal Candidate Qualities">
          <BulletList items={candidateQualities} />
        </Section>

        {/* Time & Compensation */}
        <Section title="Time & Compensation">
          <BulletList
            items={[
              "1099 independent contractor",
              "Approximately 5–10 hours per week with growth potential",
              "$25/hr starting rate",
              "Increase to $30/hr after 6–9 months for strong performance",
            ]}
          />
        </Section>

        {/* Requirements */}
        <Section title="Requirements">
          <BulletList items={requirements} />
        </Section>

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
            Interested?
          </h2>
          <Button asChild size="lg" className="font-sans font-medium text-base px-8">
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              Submit Your Application
            </a>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm font-sans text-muted-foreground">
          © {new Date().getFullYear()} Hawaii Vacation Homes · Kihei, Maui
        </p>
      </footer>
    </div>
  );
};

/* ─── Reusable sub-components ─── */

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
      {title}
    </h2>
    <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
      {children}
    </div>
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-muted-foreground font-sans leading-relaxed">
        <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
        {item}
      </li>
    ))}
  </ul>
);

export default JobsPage;
