import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Home,
  ChefHat,
  Power,
  Radar,
  RefreshCw,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import residential from "@/assets/residential.jpg";
import commercial from "@/assets/commercial-kitchen.jpg";
import shutoff from "@/assets/smart-shutoff.jpg";
import leak from "@/assets/leak-detection.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Gas Reticulation, Shut-Off & Safety | GasGuard" },
      {
        name: "description",
        content:
          "Residential & commercial gas reticulation, smart emergency shut-off systems, leak detection, retrofitting and annual maintenance contracts in Kenya.",
      },
      { property: "og:title", content: "GasGuard Services — Smart Gas Engineering" },
      {
        property: "og:description",
        content: "End-to-end gas reticulation, smart safety systems and maintenance for homes and businesses.",
      },
    ],
  }),
  component: ServicesPage,
});

interface Service {
  icon: typeof Home;
  title: string;
  blurb: string;
  image?: string;
  benefits: string[];
  process: string[];
}

const services: Service[] = [
  {
    icon: Home,
    title: "Residential Gas Reticulation",
    blurb: "Luxury hidden gas systems for homes and apartments — clean, concealed and engineered for everyday safety.",
    image: residential,
    benefits: ["Concealed, elegant piping", "Flexible corrugated stainless tubing", "Per-appliance isolation valves", "Zero-leak pressure tested"],
    process: ["Site survey & design", "Material selection", "Concealed installation", "Pressure test & handover"],
  },
  {
    icon: ChefHat,
    title: "Commercial Kitchen Systems",
    blurb: "Robust gas infrastructure for restaurants, hotels, schools and cloud kitchens — built for high output and strict compliance.",
    image: commercial,
    benefits: ["High-capacity manifolds", "Multi-burner distribution", "Emergency cut-off integration", "Full compliance documentation"],
    process: ["Load & capacity analysis", "Infrastructure design", "Phased installation", "Certification & training"],
  },
  {
    icon: Power,
    title: "Smart Emergency Shut-Off Systems",
    blurb: "Automated emergency gas protection technology that detects danger and cuts supply instantly — no human needed.",
    image: shutoff,
    benefits: ["Automatic gas isolation", "App & remote control", "Seismic & leak triggers", "Live status monitoring"],
    process: ["Risk assessment", "Sensor placement", "Valve integration", "Automation testing"],
  },
  {
    icon: Radar,
    title: "Gas Leak Detection & Safety Audits",
    blurb: "Professional inspections and pressure testing to find and eliminate risk before it becomes a hazard.",
    image: leak,
    benefits: ["10-point safety audit", "Precision leak sensors", "Pressure & integrity testing", "Detailed safety report"],
    process: ["System inspection", "Leak & pressure test", "Risk grading", "Recommendations"],
  },
  {
    icon: RefreshCw,
    title: "Retrofitting & Upgrades",
    blurb: "Replacing outdated, unsafe gas setups — especially dangerous rubber hoses and exposed piping — with modern systems.",
    benefits: ["Rubber-hose elimination", "Modern fittings & valves", "Smart sensor add-ons", "Minimal downtime"],
    process: ["Existing system audit", "Upgrade proposal", "Safe replacement", "Re-certification"],
  },
  {
    icon: CalendarCheck,
    title: "Annual Maintenance Contracts",
    blurb: "Recurring commercial safety maintenance that keeps your systems compliant, efficient and leak-free year-round.",
    benefits: ["Scheduled inspections", "Priority emergency support", "Compliance renewals", "Predictable budgeting"],
    process: ["Contract scoping", "Maintenance schedule", "Routine servicing", "Annual reporting"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Complete gas safety, <span className="text-gradient">end to end</span>
          </>
        }
        description="From luxury homes to high-output commercial kitchens, we design, install, automate and maintain gas systems engineered for absolute safety."
      />

      <section className="mx-auto max-w-7xl space-y-20 px-5 py-24 sm:px-8">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={0.04}>
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {s.image ? (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative overflow-hidden rounded-2xl glass-panel shadow-elegant"
                >
                  <img
                    src={s.image}
                    alt={s.title}
                    className="aspect-[4/3] h-full w-full object-cover"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </motion.div>
              ) : (
                <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl glass-panel shadow-elegant grid-mask">
                  <s.icon className="h-24 w-24 text-primary/40" />
                </div>
              )}

              <div>
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary glow-ring">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-2xl font-bold sm:text-3xl">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.blurb}</p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">
                      Benefits
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-primary">
                      Process
                    </h4>
                    <ol className="mt-3 space-y-2">
                      {s.process.map((p, idx) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-[10px] font-bold text-primary">
                            {idx + 1}
                          </span>
                          {p}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Request this service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <CtaBand />
    </>
  );
}
