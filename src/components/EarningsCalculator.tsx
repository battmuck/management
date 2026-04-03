import { useState } from "react";
import { TrendingUp, Tag, Building2, Home, ShieldCheck, Star, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Constants ────────────────────────────────────────────────────────────────

const REVENUE_MULTIPLIER = 1.18;
const SLIDER_MIN = 30_000;
const SLIDER_MAX = 300_000;
const SLIDER_STEP = 5_000;
const SLIDER_DEFAULT = 100_000;
const SLIDER_TICKS = [30_000, 100_000, 200_000, 300_000];

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

function fmtInput(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

// ─── Component ────────────────────────────────────────────────────────────────

interface EarningsCalculatorProps {
  heading?: string;
}

export default function EarningsCalculator({ heading }: EarningsCalculatorProps = {}) {
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

  const enabled  = FEE_DEFINITIONS.filter((f) => active[f.key]);
  const feesMin  = enabled.reduce((s, f) => s + f.min, 0);
  const feesMax  = enabled.reduce((s, f) => s + f.max, 0);
  const feesMid  = (feesMin + feesMax) / 2;
  const hvhRev   = Math.round(revenue * REVENUE_MULTIPLIER);
  const revGain  = hvhRev - revenue;
  const advantage = revGain + feesMid;

  const sliderPct = `${((revenue - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100}%`;

  return (
    <section id="earnings-calculator" className="section-padding !pt-8 md:!pt-14 bg-card">
      <div className="container-narrow">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-3">
            {heading ?? "See How Much More You Could Earn"}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-sans max-w-xl mx-auto">
            Not all property managers are created equal. See how we compare.
          </p>
        </div>

        {/* ── Main card ── */}
        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border bg-background">

          {/* ── Section 1: Revenue slider ── */}
          <div className="px-6 md:px-8 pt-7 pb-6">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-sans font-bold text-foreground text-base leading-tight">Your Annual Gross Revenue</p>
                  <p className="font-sans text-xs text-muted-foreground mt-0.5">Slide to estimate your current property performance</p>
                </div>
              </div>
              {/* Editable revenue value */}
              <div className="flex items-baseline gap-0 shrink-0">
                <span className="text-3xl md:text-4xl font-serif font-bold text-primary">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={inputVal}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onBlur={handleInputBlur}
                  size={Math.max(3, inputVal.length)}
                  className="text-3xl md:text-4xl font-serif font-bold text-primary bg-transparent border-none outline-none text-right tabular-nums focus:underline decoration-primary/40"
                  aria-label="Annual gross booking revenue"
                />
              </div>
            </div>

            {/* Slider */}
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

            {/* Tick marks — corrected for thumb half-width offset (thumb=20px) */}
            <div className="relative mt-2 h-6">
              {SLIDER_TICKS.map((t) => {
                const pct = ((t - SLIDER_MIN) / (SLIDER_MAX - SLIDER_MIN)) * 100;
                // Browser pulls thumb inward by half its width at each end
                const thumbPx = (0.5 - pct / 100) * 20;
                return (
                  <div
                    key={t}
                    className="absolute flex flex-col items-center gap-1 -translate-x-1/2"
                    style={{ left: `calc(${pct}% + ${thumbPx}px)` }}
                  >
                    <div className="w-px h-1.5 bg-border" />
                    <span className="text-xs font-sans text-muted-foreground/60 whitespace-nowrap">
                      ${t / 1000}K
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mx-0" />

          {/* ── Section 2: Fee toggles ── */}
          <div className="px-6 md:px-8 py-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Tag className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-sans font-bold text-foreground text-base leading-tight">Fees Other Managers Charge</p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">Most management companies charge these additional fees on top of their commission.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {FEE_DEFINITIONS.map((fee) => (
                <button
                  key={fee.key}
                  onClick={() => toggle(fee.key)}
                  className={cn(
                    "flex items-center gap-2 text-sm font-sans font-medium px-4 py-2.5 rounded-full border transition-all duration-150",
                    active[fee.key]
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-muted-foreground"
                  )}
                >
                  {active[fee.key] && (
                    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {fee.label}
                  <span className={cn(
                    "font-normal text-xs",
                    active[fee.key] ? "text-primary-foreground/70" : "text-muted-foreground/50"
                  )}>
                    ${fee.min.toLocaleString()}–${fee.max.toLocaleString()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Section 3: Comparison cards ── */}
          <div className="bg-muted/40 px-6 md:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Other Managers */}
            <div className="bg-background rounded-xl border border-border p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-muted-foreground" />
                </div>
                <span className="font-sans font-bold text-foreground text-base">Other Managers</span>
              </div>

              <div className="mb-5">
                <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 mb-2">
                  <TrendingUp className="w-3 h-3" /> Gross Revenue
                </p>
                <p className="text-3xl font-serif font-bold text-foreground tabular-nums">{fmt(revenue)}</p>
              </div>

              <div>
                <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5 mb-2">
                  <Tag className="w-3 h-3" /> Required Hidden Fees
                </p>
                {enabled.length > 0 ? (
                  <>
                    <p className="text-2xl font-serif font-bold text-destructive tabular-nums">
                      {fmt(feesMin)} – {fmt(feesMax)}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                      <span className="text-xs font-sans text-destructive/80">Estimated hidden costs</span>
                    </div>
                  </>
                ) : (
                  <p className="text-2xl font-serif font-bold text-muted-foreground">—</p>
                )}
              </div>
            </div>

            {/* Hawaii Vacation Homes */}
            <div className="bg-primary rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                  <Home className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-sans font-bold text-primary-foreground text-base">Hawaii Vacation Homes</span>
              </div>

              <div className="mb-5">
                <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-primary-foreground/70 flex items-center gap-1.5 mb-2">
                  <TrendingUp className="w-3 h-3" /> Gross Revenue
                </p>
                <p className="text-3xl font-serif font-bold text-primary-foreground tabular-nums">{fmt(hvhRev)}</p>
                <div className="inline-flex items-center gap-1 mt-2 bg-primary-foreground/20 rounded-full px-2.5 py-1">
                  <TrendingUp className="w-3 h-3 text-primary-foreground/80" />
                  <span className="text-xs font-sans font-medium text-primary-foreground">+18% vs. market average</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-primary-foreground/70 flex items-center gap-1.5 mb-2">
                  <ShieldCheck className="w-3 h-3" /> Required Hidden Fees
                </p>
                <p className="text-3xl font-serif font-bold text-primary-foreground tabular-nums">$0</p>
                <div className="flex items-center gap-1.5 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary-foreground/80" />
                  <span className="text-xs font-sans text-primary-foreground/80">100% transparent pricing</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Section 4: The Advantage ── */}
          <div className="bg-foreground px-6 md:px-8 py-7">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

              {/* Left — numbers */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-primary">The Hawaii Vacation Homes Advantage</p>
                </div>
                <p className="text-sm font-sans text-primary-foreground/60 mb-1">Total estimated increase in profit:</p>
                <div className="flex items-baseline gap-1.5">
                  <p className="text-5xl md:text-6xl font-serif font-bold text-primary-foreground tabular-nums">
                    {fmt(advantage)}
                  </p>
                  <span className="text-base font-sans text-primary-foreground/50">/ yr</span>
                </div>
                {/* Breakdown pills */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="inline-flex items-center gap-1 bg-foreground border border-primary-foreground/20 rounded-full px-3 py-1 text-xs font-sans font-medium text-primary-foreground">
                    +{fmt(revGain)} revenue
                  </span>
                  {feesMid > 0 && (
                    <>
                      <span className="text-primary-foreground/30 text-sm">+</span>
                      <span className="inline-flex items-center gap-1 bg-foreground border border-primary-foreground/20 rounded-full px-3 py-1 text-xs font-sans font-medium text-primary-foreground">
                        ~{fmt(feesMid)} fees saved
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Right — CTA */}
              <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                <a
                  href="#hero"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold text-sm px-7 py-4 rounded-xl transition-colors duration-150"
                >
                  Get Your Free Estimate
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-primary-foreground/40" />
                  <span className="text-xs font-sans text-primary-foreground/40">No commitment required</span>
                </div>
              </div>
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
