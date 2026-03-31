import { useState } from "react";
import { TrendingUp, Receipt, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Constants ────────────────────────────────────────────────────────────────

const REVENUE_MULTIPLIER = 1.18;
const SLIDER_MIN = 30_000;
const SLIDER_MAX = 300_000;
const SLIDER_STEP = 5_000;
const SLIDER_DEFAULT = 100_000;

type FeeKey = "techFee" | "marketingFee" | "linenFee" | "onboardingFee" | "photographyFee";

const FEE_DEFINITIONS: { key: FeeKey; label: string; min: number; max: number }[] = [
  { key: "techFee",        label: "Tech Fee",        min: 120,  max: 600   },
  { key: "marketingFee",   label: "Marketing Fee",   min: 200,  max: 500   },
  { key: "linenFee",       label: "Linen Fee",       min: 600,  max: 1_800 },
  { key: "onboardingFee",  label: "Onboarding Fee",  min: 500,  max: 1_500 },
  { key: "photographyFee", label: "Photography Fee", min: 500,  max: 1_500 },
];

// ─── Utilities ────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

// Format number with commas for the editable input display
function fmtInput(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function EarningsCalculator() {
  const [revenue, setRevenue] = useState(SLIDER_DEFAULT);
  const [inputVal, setInputVal] = useState(fmtInput(SLIDER_DEFAULT));
  const [active, setActive] = useState<Record<FeeKey, boolean>>({
    techFee: true, marketingFee: true, linenFee: true,
    onboardingFee: true, photographyFee: true,
  });

  const toggle = (k: FeeKey) => setActive((p) => ({ ...p, [k]: !p[k] }));

  const handleSlider = (n: number) => {
    setRevenue(n);
    setInputVal(fmtInput(n));
  };

  const handleInputChange = (val: string) => {
    // Strip commas so user can type freely
    const raw = val.replace(/,/g, "");
    setInputVal(raw);
    const n = Number(raw);
    if (!isNaN(n) && n > 0) setRevenue(n);
  };

  const handleInputBlur = () => {
    const clamped = Math.round(
      Math.max(SLIDER_MIN, Math.min(SLIDER_MAX, revenue)) / SLIDER_STEP
    ) * SLIDER_STEP;
    setRevenue(clamped);
    setInputVal(fmtInput(clamped));
  };

  const enabled   = FEE_DEFINITIONS.filter((f) => active[f.key]);
  const feesMin   = enabled.reduce((s, f) => s + f.min, 0);
  const feesMax   = enabled.reduce((s, f) => s + f.max, 0);
  const feesMid   = (feesMin + feesMax) / 2;
  const hvhRev    = Math.round(revenue * REVENUE_MULTIPLIER);
  const advantage = (hvhRev - revenue) + feesMid;

  const sliderPct = `${((revenue - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100}%`;

  return (
    <section id="earnings-calculator" className="section-padding !pt-8 md:!pt-14 bg-card">
      <div className="container-narrow">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-3">
            See How Much More You Could Earn (and Save)
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-sans max-w-xl mx-auto">
            Not all property managers are created equal. See how we compare.
          </p>
        </div>

        {/* Single card */}
        <div className="max-w-3xl mx-auto bg-background border border-border rounded-2xl overflow-hidden shadow-sm">

          {/* ── Input section ── */}
          <div className="px-6 pt-8 pb-6 md:px-10 md:pt-10 border-b border-border">

            {/* Revenue — editable number + slider */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between mb-4">
              <p className="text-base font-sans font-semibold text-foreground">
                Your Annual Gross Revenue
              </p>
              <div className="flex items-baseline gap-0">
                <span className="text-3xl font-serif font-bold text-primary">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={inputVal}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onBlur={handleInputBlur}
                  size={Math.max(3, inputVal.length)}
                  className="text-3xl font-serif font-bold text-primary bg-transparent border-none outline-none text-right tabular-nums focus:underline decoration-primary/40"
                  aria-label="Annual gross booking revenue"
                />
              </div>
            </div>

            <input
              type="range"
              min={SLIDER_MIN}
              max={SLIDER_MAX}
              step={SLIDER_STEP}
              value={revenue}
              onChange={(e) => handleSlider(Number(e.target.value))}
              className="slider-teal"
              style={{ ["--slider-pct" as string]: sliderPct } as React.CSSProperties}
              aria-label="Annual gross booking revenue slider"
            />
            <div className="flex justify-between mt-1.5">
              <span className="text-xs font-sans text-muted-foreground/60">$30K</span>
              <span className="text-xs font-sans text-muted-foreground/60">$300K</span>
            </div>

            {/* Fee chips */}
            <div className="mt-6">
              <p className="text-base font-sans font-semibold text-foreground mb-0.5">
                Typical Fees Charged by Other Managers
              </p>
              <p className="text-xs font-sans text-muted-foreground mb-2.5">
                Toggle fees to include or exclude them from the comparison
              </p>
              <div className="flex flex-wrap gap-2">
                {FEE_DEFINITIONS.map((fee) => (
                  <button
                    key={fee.key}
                    onClick={() => toggle(fee.key)}
                    className={cn(
                      "flex items-center gap-1.5 text-xs font-sans font-medium px-3 py-2 rounded-full border transition-all duration-150",
                      active[fee.key]
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-muted-foreground border-border hover:border-muted-foreground"
                    )}
                  >
                    {active[fee.key] && <Check className="w-3 h-3 shrink-0" />}
                    {fee.label}
                    <span className={cn(
                      "font-normal",
                      active[fee.key] ? "text-primary-foreground/60" : "text-muted-foreground/50"
                    )}>
                      ${fee.min.toLocaleString()}–${fee.max.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── Comparison table ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2">

            {/* Other Managers column */}
            <div className="px-6 md:px-8 pt-6 pb-6 sm:pb-0 border-b border-border sm:border-b-0 sm:border-r">
              <p className="text-base font-sans font-bold text-foreground text-center pb-4 border-b border-border/50">
                Other Property Managers
              </p>

              {/* Revenue */}
              <div className="py-5 border-b border-border/50">
                <div className="flex items-center gap-1.5 mb-2">
                  <TrendingUp className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <p className="text-xs font-sans text-muted-foreground uppercase tracking-wide">Revenue</p>
                </div>
                <p className="text-2xl font-serif font-semibold text-foreground tabular-nums">
                  {fmt(revenue)}
                </p>
              </div>

              {/* Fees */}
              <div className="py-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <Receipt className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <p className="text-xs font-sans text-muted-foreground uppercase tracking-wide">Add'l Fees</p>
                </div>
                {enabled.length > 0 ? (
                  <div className="inline-block bg-destructive/6 rounded-lg px-3 py-2">
                    <p className="text-xl font-serif font-semibold text-destructive tabular-nums">
                      {fmt(feesMin)} – {fmt(feesMax)}
                    </p>
                    <p className="text-xs font-sans text-muted-foreground mt-0.5">estimated annual range</p>
                  </div>
                ) : (
                  <p className="text-2xl font-serif font-semibold text-muted-foreground">—</p>
                )}
              </div>
            </div>

            {/* HVH column — solid teal panel */}
            <div className="bg-primary px-6 md:px-8 pt-6 pb-0">
              <p className="text-base font-sans font-bold text-primary-foreground text-center pb-4 border-b border-primary-foreground/20">
                Hawaii Vacation Homes
              </p>

              {/* Revenue */}
              <div className="py-5 border-b border-primary-foreground/20">
                <div className="flex items-center gap-1.5 mb-2">
                  <TrendingUp className="w-3.5 h-3.5 text-primary-foreground/70 shrink-0" />
                  <p className="text-xs font-sans text-primary-foreground/70 uppercase tracking-wide">Revenue</p>
                </div>
                <p className="text-2xl font-serif font-semibold text-primary-foreground tabular-nums">
                  {fmt(hvhRev)}
                </p>
                <p className="text-xs font-sans text-primary-foreground/70 mt-1">+18% vs. market avg.</p>
              </div>

              {/* Fees */}
              <div className="py-5">
                <div className="flex items-center gap-1.5 mb-2">
                  <Receipt className="w-3.5 h-3.5 text-primary-foreground/70 shrink-0" />
                  <p className="text-xs font-sans text-primary-foreground/70 uppercase tracking-wide">Add'l Fees</p>
                </div>
                <p className="text-2xl font-serif font-semibold text-primary-foreground tabular-nums">$0</p>
                <p className="text-xs font-sans text-primary-foreground/70 mt-1">no hidden fees</p>
              </div>
            </div>
          </div>

          {/* ── The Hawaii Vacation Homes Difference ── */}
          <div className="bg-foreground px-6 md:px-10 py-7">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
              <div className="text-center sm:text-left">
                <p className="text-base font-sans font-bold uppercase tracking-widest text-primary-foreground mb-1">
                  The Hawaii Vacation Homes Difference
                </p>
                <p className="text-sm font-sans text-primary-foreground/70">
                  {fmt(hvhRev - revenue)} more revenue
                  {feesMid > 0 && ` · ~${fmt(feesMid)} in fees saved`}
                </p>
              </div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground tabular-nums sm:shrink-0">
                {fmt(advantage)}
                <span className="text-base font-sans font-normal text-primary-foreground/50 ml-2">/yr</span>
              </p>
            </div>
            <div className="border-t border-primary-foreground/10 pt-5 text-center">
              <p className="text-sm font-sans text-primary-foreground/60 mb-3">
                Ready to see what your property could actually earn?
              </p>
              <a
                href="#hero"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold text-sm px-7 py-3 rounded-full transition-colors duration-150"
              >
                Get Your Free Revenue Estimate
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <p className="text-xs font-sans text-muted-foreground/60 text-center mt-5 max-w-2xl mx-auto leading-relaxed">
          Results are estimates only. Past performance is not a guarantee of future results.
          18% revenue figure based on outperforming the Maui market in 2025.
          Competitor fees vary; ranges based on typical industry averages.
        </p>

      </div>
    </section>
  );
}
