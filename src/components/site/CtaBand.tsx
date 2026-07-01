import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

interface CtaBandProps {
  title?: string;
  subtitle?: string;
  cta?: string;
}

export function CtaBand({
  title = "Ready to make your gas system safe?",
  subtitle = "Book a free 10-point safety audit with our certified engineers today.",
  cta = "Book Free Safety Audit",
}: CtaBandProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass-panel p-10 text-center shadow-elegant sm:p-16">
          <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
          <div className="relative">
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{subtitle}</p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/contact">{cta}</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
