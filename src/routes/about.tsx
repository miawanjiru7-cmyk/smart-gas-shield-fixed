import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, ShieldCheck, Cpu, Building2, CheckCircle2, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { CtaBand } from "@/components/site/CtaBand";
import leakDetection from "@/assets/leak-detection.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GasGuard — Safety-First Gas Engineering in Kenya" },
      {
        name: "description",
        content:
          "GasGuard is a safety-first gas reticulation and engineering company in Kenya. Discover our mission, vision, values and certified technical team.",
      },
      { property: "og:title", content: "About GasGuard — Safety-First Gas Engineering" },
      {
        property: "og:description",
        content: "Our mission, vision and the certified engineers behind zero-leak gas systems.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To eliminate gas-related risk in every home and business through precision engineering, smart automation and uncompromising safety standards.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To become East Africa's most trusted name in smart gas reticulation — setting the benchmark for safe, modern gas infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-First Philosophy",
    desc: "Safety is never a feature — it's the foundation. Every system we touch is pressure-tested to a zero-leak standard.",
  },
];

const values = [
  { title: "Engineering Precision", desc: "Millimetre-accurate installations using premium materials and rigorous testing." },
  { title: "Modern Infrastructure", desc: "Future-ready systems built around smart sensors and automated protection." },
  { title: "Total Transparency", desc: "Clear reporting, honest pricing and full compliance documentation." },
  { title: "Relentless Reliability", desc: "Fast response, dependable maintenance and systems that simply work." },
];

const stats = [
  { value: 2400, suffix: "+", label: "Projects Completed" },
  { value: 320, suffix: "+", label: "Commercial Clients" },
  { value: 100, suffix: "%", label: "Leak-Free Installations" },
  { value: 9800, suffix: "+", label: "Safety Inspections" },
];

const team = [
  { name: "David Otieno", role: "Lead Gas Engineer", tag: "EPRA Certified" },
  { name: "Grace Mwangi", role: "Safety & Compliance Head", tag: "10+ Years" },
  { name: "Samuel Kiprono", role: "Commercial Systems Lead", tag: "Hotel Specialist" },
  { name: "Aisha Hassan", role: "Smart Systems Engineer", tag: "IoT Automation" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About GasGuard"
        title={
          <>
            Engineering trust into <span className="text-gradient">every connection</span>
          </>
        }
        description="We are a team of certified engineers obsessed with one outcome: gas systems that are absolutely safe, beautifully built and intelligently protected."
      />

      {/* MISSION / VISION / PHILOSOPHY */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl glass p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary glow-ring">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl glass-panel shadow-elegant">
              <img
                src={leakDetection}
                alt="GasGuard certified engineer performing a leak detection inspection"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Our Approach
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Modern infrastructure, engineered to outlast
            </h2>
            <p className="mt-4 text-muted-foreground">
              GasGuard was founded on a simple frustration: too many gas installations in Kenya were
              unsafe, outdated and invisible to the people relying on them. We set out to change that
              with engineering discipline, smart technology and a safety-first culture.
            </p>
            <div className="mt-7 space-y-4">
              {[
                { icon: Cpu, t: "Smart-first design", d: "Sensors, automation and live monitoring built into every system." },
                { icon: Building2, t: "Built for scale", d: "From single apartments to multi-outlet commercial kitchens." },
                { icon: Award, t: "Fully compliant", d: "EPRA-aligned standards and complete documentation." },
              ].map((x) => (
                <div key={x.t} className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <x.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{x.t}</h4>
                    <p className="text-sm text-muted-foreground">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-2xl glass p-7 text-center">
                <div className="text-4xl font-bold text-gradient sm:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Company Values
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What we stand for</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="flex h-full gap-4 rounded-2xl glass p-6">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">{v.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Certified technicians</h2>
          <p className="mt-4 text-muted-foreground">
            Accredited, trained and relentlessly precise — the engineers who keep you safe.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <div className="group h-full overflow-hidden rounded-2xl glass p-6 text-center">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary/30 to-primary/5 text-2xl font-bold text-primary glow-ring">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-semibold">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.role}</p>
                <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {m.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
