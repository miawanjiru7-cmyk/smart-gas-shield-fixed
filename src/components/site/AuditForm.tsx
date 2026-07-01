import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitAuditRequest } from "@/lib/api/contact.functions";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+()\s-]+$/, "Enter a valid phone number"),
  propertyType: z.string().min(1, "Select a property type"),
  location: z.string().trim().min(2, "Enter your location").max(120),
});

type FormValues = z.infer<typeof schema>;

const propertyTypes = ["Residential Home", "Apartment", "Restaurant / Hotel", "School / Institution", "Cloud Kitchen", "Other Commercial"];

export function AuditForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", propertyType: "", location: "" },
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);
    try {
      await submitAuditRequest({ data: values });
      toast.success("Audit request received", {
        description: `Thanks ${values.name.split(" ")[0]} — our team will call you within 24 hours.`,
      });
      reset();
    } catch (error) {
      console.error("Failed to submit audit request:", error);
      toast.error("Something went wrong sending your request. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Jane Wanjiku" {...register("name")} />
        {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="+254 700 000 000" {...register("phone")} />
        {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="propertyType">Property Type</Label>
        <Select
          value={watch("propertyType")}
          onValueChange={(v) => setValue("propertyType", v, { shouldValidate: true })}
        >
          <SelectTrigger id="propertyType">
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent>
            {propertyTypes.map((p) => (
              <SelectItem key={p} value={p}>
                {p}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.propertyType && (
          <p className="text-xs text-destructive">{errors.propertyType.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="Westlands, Nairobi" {...register("location")} />
        {errors.location && <p className="text-xs text-destructive">{errors.location.message}</p>}
      </div>

      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Request Free Audit"
        )}
      </Button>
    </form>
  );
}
