import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, AlertTriangle, Loader2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { socialLinks } from "@/lib/social-links";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactMessage } from "@/lib/api/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GasGuard — Book Your Free Gas Safety Audit | Kenya" },
      {
        name: "description",
        content:
          "Contact GasGuard for smart gas reticulation, emergency support and a free 10-point safety audit. Call, email or visit our Nairobi office.",
      },
      { property: "og:title", content: "Contact GasGuard — Free Safety Audit" },
      {
        property: "og:description",
        content: "Get in touch for smart gas systems, emergency support and a free safety audit in Kenya.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});
type FormValues = z.infer<typeof schema>;

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+254 700 000 000", sub: "Mon–Sat, 8am–6pm" },
  { icon: Mail, label: "Email", value: "hello@gasguard.co.ke", sub: "We reply within 24h" },
  { icon: MapPin, label: "Office", value: "Westlands, Nairobi", sub: "The Mirage, Tower 2" },
  { icon: Clock, label: "Emergency", value: "+254 711 911 911", sub: "24/7 rapid response" },
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      await submitContactMessage({ data: values });
      toast.success("Message sent", {
        description: `Thanks ${values.name.split(" ")[0]} — our team will be in touch shortly.`,
      });
      reset();
    } catch (error) {
      console.error("Failed to submit contact message:", error);
      toast.error("Something went wrong sending your message. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let's make it <span className="text-gradient">safe</span>
          </>
        }
        description="Book a free safety audit, request a quote or reach our emergency team. We respond fast."
      />

      {/* EMERGENCY BANNER */}
      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-destructive/30 bg-destructive/10 p-6 sm:flex-row">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-destructive/20 text-destructive">
                <AlertTriangle className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-semibold">Smell gas? Act now.</h3>
                <p className="text-sm text-muted-foreground">
                  Don't switch anything on or off. Ventilate and call our 24/7 emergency line.
                </p>
              </div>
            </div>
            <Button asChild variant="destructive" size="lg" className="shrink-0">
              <a href="tel:+254711911911">Call Emergency Line</a>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* CONTACT GRID */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info + form */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold sm:text-3xl">Quick inquiry</h2>
              <p className="mt-2 text-muted-foreground">
                Send us a message and we'll get back within 24 hours.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4 rounded-2xl glass-panel p-6 shadow-elegant sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Jane Wanjiku" {...register("name")} />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+254 700 000 000" {...register("phone")} />
                    {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@email.com" {...register("email")} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={4} placeholder="Tell us about your space and what you need…" {...register("message")} />
                  {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Reveal>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.06}>
                  <div className="h-full rounded-2xl glass p-5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1 font-semibold">{c.value}</p>
                    <p className="text-xs text-muted-foreground">{c.sub}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl glass-panel shadow-elegant">
                <iframe
                  title="GasGuard office location"
                  src="https://www.google.com/maps?q=Westlands,Nairobi,Kenya&output=embed"
                  className="h-72 w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex items-center justify-between rounded-2xl glass p-5">
                <span className="text-sm font-medium text-muted-foreground">Follow us</span>
                <div className="flex gap-3">
                  {socialLinks.map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-9 w-9 place-items-center rounded-lg glass text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FREE AUDIT STRIP */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <Reveal>
          <motion.div className="relative overflow-hidden rounded-3xl glass-panel p-10 text-center shadow-elegant">
            <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Free Offer
              </span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Free 10-Point <span className="text-gradient">Gas Safety Audit</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Certified engineers, a full inspection and a clear safety report — at no cost.
              </p>
              <Button variant="hero" size="xl" className="mt-8" asChild>
                <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  Book Your Audit
                </a>
              </Button>
            </div>
          </motion.div>
        </Reveal>
      </section>
    </>
  );
}
