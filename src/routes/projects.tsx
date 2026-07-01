import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import commercial from "@/assets/commercial-kitchen.jpg";
import residential from "@/assets/residential.jpg";
import shutoff from "@/assets/smart-shutoff.jpg";
import leak from "@/assets/leak-detection.jpg";
import hero from "@/assets/hero-kitchen.jpg";
import grid from "@/assets/grid-bg.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Portfolio — Gas Installations | GasGuard" },
      {
        name: "description",
        content:
          "Explore GasGuard's portfolio: commercial kitchens, hidden residential piping, smart valve installations, pressure testing and before/after upgrades.",
      },
      { property: "og:title", content: "GasGuard Projects & Portfolio" },
      {
        property: "og:description",
        content: "A premium showcase of our commercial and residential gas safety installations.",
      },
    ],
  }),
  component: ProjectsPage,
});

const categories = ["All", "Commercial", "Residential", "Smart Systems", "Inspections"] as const;
type Category = (typeof categories)[number];

interface Project {
  title: string;
  category: Exclude<Category, "All">;
  location: string;
  image: string;
  result: string;
  span?: boolean;
}

const projects: Project[] = [
  { title: "Luxury Penthouse Reticulation", category: "Residential", location: "Kilimani, Nairobi", image: residential, result: "Fully concealed flexible piping with per-room isolation.", span: true },
  { title: "5-Star Hotel Kitchen", category: "Commercial", location: "Westlands, Nairobi", image: commercial, result: "24-burner manifold with emergency cut-off." },
  { title: "Smart Shut-Off Retrofit", category: "Smart Systems", location: "Karen, Nairobi", image: shutoff, result: "Automated leak-triggered isolation valves." },
  { title: "Cloud Kitchen Cluster", category: "Commercial", location: "Industrial Area", image: hero, result: "Multi-tenant gas distribution with sub-metering." },
  { title: "Pressure Testing & Audit", category: "Inspections", location: "Lavington", image: leak, result: "Full 10-point audit, zero leaks certified." },
  { title: "Apartment Block Upgrade", category: "Residential", location: "Kileleshwa", image: grid, result: "Rubber-hose elimination across 48 units.", span: true },
];

function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Projects & Portfolio"
        title={
          <>
            Precision installations, <span className="text-gradient">proven results</span>
          </>
        }
        description="A showcase of commercial and residential gas systems we've engineered — clean, concealed and certified leak-free."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === c
                  ? "bg-gradient-to-r from-primary to-primary/70 text-primary-foreground glow-ring"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-2xl glass-panel shadow-elegant ${
                  p.span ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={1024}
                    height={768}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs font-medium text-primary">
                    {p.category}
                  </span>
                  <div className="grid absolute right-4 top-4 h-9 w-9 place-items-center rounded-full glass text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-primary" /> {p.location}
                  </p>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {p.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CtaBand title="Have a project in mind?" subtitle="Tell us about your space and we'll design a safe, smart gas system for it." cta="Start Your Project" />
    </>
  );
}
