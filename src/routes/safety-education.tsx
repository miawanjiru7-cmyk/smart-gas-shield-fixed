import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  AlertTriangle,
  Flame,
  Cable,
  ShieldOff,
  Power,
  Radar,
  Activity,
  Gauge,
  Award,
  GraduationCap,
  Star,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/safety-education")({
  head: () => ({
    meta: [
      { title: "Gas Safety Education — Risks, Tech & Trust | GasGuard" },
      {
        name: "description",
        content:
          "Learn the real dangers of unsafe gas setups, the smart technology that prevents disasters, and why certified installation matters. Gas safety education by GasGuard.",
      },
      { property: "og:title", content: "Gas Safety Education | GasGuard" },
      {
        property: "og:description",
        content: "Reality check, tech showcase and trust — everything you need to know about gas safety.",
      },
    ],
  }),
  component: SafetyEducationPage,
});

const dangers = [
  { icon: Cable, title: "Unsafe Rubber Hoses", desc: "Cheap rubber hoses crack, perish and leak — the leading cause of home gas fires." },
  { icon: ShieldOff, title: "Exposed Piping", desc: "Unprotected pipes are easily damaged, corroded and tampered with." },
  { icon: AlertTriangle, title: "Poor Installations", desc: "Untrained fitters skip pressure testing and leave dangerous connections behind." },
  { icon: Flame, title: "Undetected Leak Risks", desc: "Without sensors, small leaks build silently into catastrophic hazards." },
];

const tech = [
  { icon: Power, title: "Emergency Stop Valves", desc: "Instantly isolate gas supply at the first sign of danger." },
  { icon: Radar, title: "Smart Shutoff Systems", desc: "Automated valves that act faster than any human could." },
  { icon: Activity, title: "Leak Sensors", desc: "24/7 monitoring that detects gas in parts-per-million." },
  { icon: Gauge, title: "Pressure Monitoring", desc: "Live readings flag abnormalities before they escalate." },
];

const trust = [
  { icon: Award, title: "Certifications", desc: "EPRA-aligned standards and full compliance documentation on every job." },
  { icon: GraduationCap, title: "Technician Training", desc: "Continuous accreditation and rigorous internal safety training." },
  { icon: Star, title: "Client Reviews", desc: "Trusted by homeowners, restaurants, hotels and developers across Kenya." },
  { icon: ClipboardCheck, title: "Safety Procedures", desc: "Documented protocols and pressure testing on 100% of installations." },
];

const articles = [
  { tag: "Guide", title: "5 Signs Your Gas System Needs an Upgrade", read: "4 min read" },
  { tag: "Safety", title: "Why Rubber Hoses Should Be Banned in Every Home", read: "5 min read" },
  { tag: "Tech", title: "How Smart Shut-Off Valves Prevent Disasters", read: "6 min read" },
];

function SafetyEducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety Education"
        title={
          <>
            Know the risk. <span className="text-gradient">Trust the tech.</span>
          </>
        }
        description="Most gas accidents are preventable. Here's what goes wrong, the technology that stops it, and why certified installation is non-negotiable."
      />

      {/* SECTION 1 — REALITY CHECK */}
      <section id="safety-insights" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 scroll-mt-24">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-destructive/15 text-destructive">
              <AlertTriangle className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-destructive">
                Reality Check
              </span>
              <h2 className="text-2xl font-bold sm:text-3xl">The dangers most people ignore</h2>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dangers.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-destructive/20 bg-destructive/5 p-6">
                <d.icon className="h-7 w-7 text-destructive" />
                <h3 className="mt-4 font-semibold">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 2 — TECH SHOWCASE */}
      <section className="relative overflow-hidden border-y border-border bg-card/30 py-24">
        <div className="absolute inset-0 grid-mask opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary glow-ring">
                <Power className="h-5 w-5" />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Tech Showcase
                </span>
                <h2 className="text-2xl font-bold sm:text-3xl">Technology that protects you</h2>
              </div>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tech.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full rounded-2xl glass p-6 transition-colors hover:border-primary/40"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
                    <t.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — TRUST & CREDIBILITY */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Trust & Credibility
              </span>
              <h2 className="text-2xl font-bold sm:text-3xl">Why clients trust GasGuard</h2>
            </div>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trust.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.06}>
              <div className="flex h-full gap-4 rounded-2xl glass p-6">
                <t.icon className="h-7 w-7 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <section className="border-t border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Learn More
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Gas safety insights</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <motion.a
                  href="#safety-insights"
                  whileHover={{ y: -6 }}
                  className="group flex h-full flex-col rounded-2xl glass p-6 transition-colors hover:border-primary/40"
                >
                  <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {a.tag}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{a.read}</p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24" />
      <CtaBand title="Unsure if your system is safe?" subtitle="Get a free 10-point safety audit and a clear, honest report from certified engineers." />
    </>
  );
}
