import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Flame,
  Radar,
  Power,
  Home,
  ChefHat,
  Gauge,
  Cpu,
  Award,
  Clock,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { AuditForm } from "@/components/site/AuditForm";
import heroKitchen from "@/assets/hero-kitchen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GasGuard — Zero Leaks. Total Protection. | Smart Gas Safety Kenya" },
      {
        name: "description",
        content:
          "Smart gas reticulation and automated safety systems for modern homes and commercial spaces in Kenya. Book a free 10-point gas safety audit.",
      },
      { property: "og:title", content: "GasGuard — Zero Leaks. Total Protection." },
      {
        property: "og:description",
        content:
          "Smart gas reticulation & automated safety systems for modern homes and commercial spaces in Kenya.",
      },
    ],
  }),
  component: Index,
});

const trustBadges = [
  { icon: Award, label: "Certified Technicians" },
  { icon: Radar, label: "Leak Detection" },
  { icon: Power, label: "Emergency Shutoff" },
  { icon: ShieldCheck, label: "EPRA-Compliant Systems" },
];

const services = [
  {
    icon: Home,
    title: "Residential Gas Systems",
    desc: "Luxury hidden gas reticulation for homes and apartments.",
  },
  {
    icon: ChefHat,
    title: "Commercial Kitchens",
    desc: "High-capacity gas infrastructure for restaurants and hotels.",
  },
  {
    icon: Radar,
    title: "Leak Detection",
    desc: "Precision sensors and professional pressure testing.",
  },
  {
    icon: Power,
    title: "Smart Shutoff Systems",
    desc: "Automated emergency gas protection technology.",
  },
];

const whyChoose = [
  { icon: ShieldCheck, title: "Zero-Leak Engineering", desc: "Pressure-tested systems engineered to an uncompromising leak-free standard." },
  { icon: Flame, title: "Premium Installations", desc: "Concealed, clean and elegant gas infrastructure built to last." },
  { icon: Award, title: "Certified Experts", desc: "EPRA-compliant, fully trained and accredited gas engineers." },
  { icon: Clock, title: "Fast Response", desc: "Rapid emergency support and quick turnaround on every project." },
  { icon: Cpu, title: "Smart Automation", desc: "IoT shut-off valves, leak sensors and live pressure monitoring." },
  { icon: Gauge, title: "Total Compliance", desc: "Every installation meets and exceeds national safety regulations." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroKitchen}
            alt="Luxury modern kitchen with smart gas system and hidden piping"
            className="h-full w-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
        </div>
        <div className="absolute inset-0 grid-mask" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pt-24 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
              Smart Gas Safety Engineering · Kenya
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
              Zero Leaks.
              <br />
              <span className="text-gradient glow-text">Total Protection.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Smart gas reticulation & automated safety systems for modern homes and commercial
              spaces. Engineered for absolute safety.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Book Free Safety Audit <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustBadges.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2.5 rounded-xl glass px-3 py-3"
                >
                  <b.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-xs font-medium leading-tight">{b.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Engineering-grade gas solutions</h2>
          <p className="mt-4 text-muted-foreground">
            From luxury residences to high-output commercial kitchens, we design and install safe,
            smart gas systems.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl glass p-6 transition-colors hover:border-primary/40"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary transition-all group-hover:glow-ring">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden border-y border-border bg-card/30 py-24">
        <div className="absolute inset-0 grid-mask opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Why GasGuard
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Precision you can trust</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl glass p-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FREE SAFETY AUDIT CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Limited Offer
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Free 10-Point <span className="text-gradient">Gas Safety Audit</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our certified engineers inspect your entire gas system — connections, pressure,
              ventilation and shut-off — and give you a clear safety report. Zero cost. Zero
              obligation.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Full connection & fitting inspection",
                "Pressure & leak testing",
                "Ventilation & compliance assessment",
                "Personalised safety recommendations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl glass-panel p-6 shadow-elegant sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/60 glow-ring">
                  <Wrench className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">Book your audit</h3>
                  <p className="text-xs text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>
              <AuditForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
