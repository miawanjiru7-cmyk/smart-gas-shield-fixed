import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — What Our Clients Say | GasGuard" },
      {
        name: "description",
        content:
          "Read success stories from homeowners, restaurants, hotels and developers who trust GasGuard for safe, smart gas systems in Kenya.",
      },
      { property: "og:title", content: "GasGuard Testimonials" },
      {
        property: "og:description",
        content: "Success stories from homeowners, restaurants, hotels and developers across Kenya.",
      },
    ],
  }),
  component: TestimonialsPage,
});

interface Testimonial {
  name: string;
  role: string;
  type: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  { name: "James Mwangi", role: "Homeowner", type: "Residential", rating: 5, quote: "GasGuard replaced our old rubber-hose setup with a fully concealed system. It's invisible, silent and I finally sleep easy at night." },
  { name: "Chef Amara N.", role: "Head Chef, The Tamarind", type: "Restaurant", rating: 5, quote: "Their commercial kitchen install is flawless. The emergency cut-off has already saved us once — worth every shilling." },
  { name: "Brian Otieno", role: "Property Developer", type: "Developer", rating: 5, quote: "We use GasGuard across all our apartment projects. Reliable, compliant and the smart shut-off systems sell units." },
  { name: "Sarah Kimani", role: "GM, Serene Hotel", type: "Hotel", rating: 5, quote: "Professional from survey to handover. The maintenance contract keeps us audit-ready year round." },
  { name: "Peter Wambua", role: "Restaurant Owner", type: "Restaurant", rating: 5, quote: "Fast, clean and certified. They retrofitted our entire kitchen in two days with zero disruption to service." },
  { name: "Linda Achieng", role: "Apartment Resident", type: "Residential", rating: 5, quote: "The leak sensors and app monitoring give me complete peace of mind. This is how gas should be done." },
];

const stats = [
  { value: 4.9, suffix: "/5", label: "Average Rating", decimal: true },
  { value: 1200, suffix: "+", label: "Happy Clients" },
  { value: 98, suffix: "%", label: "Would Recommend" },
];

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Trusted by those who <span className="text-gradient">value safety</span>
          </>
        }
        description="Homeowners, restaurants, hotels and developers across Kenya rely on GasGuard for gas systems that simply work — safely."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-2xl glass p-7 text-center">
                <div className="text-4xl font-bold text-gradient sm:text-5xl">
                  {s.decimal ? `${s.value}${s.suffix}` : <Counter to={s.value} suffix={s.suffix} />}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="flex h-full flex-col rounded-2xl glass p-7"
              >
                <Quote className="h-8 w-8 text-primary/40" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary/30 to-primary/5 text-sm font-bold text-primary">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{t.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <span className="ml-auto shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary">
                    {t.type}
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Join hundreds of safe homes & businesses" subtitle="Experience the GasGuard difference with a free safety audit." />
    </>
  );
}
