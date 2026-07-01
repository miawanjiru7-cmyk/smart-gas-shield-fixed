import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Server functions invoked from the audit request form (homepage) and the
// contact page form. Both run server-side only (Cloudflare Worker), so this
// is where real delivery lives — every submission is logged, and emailed
// via Resend when configured.
//
// Required env vars (set as Cloudflare Pages secrets/variables):
//   RESEND_API_KEY     - your Resend API key (required to actually send)
//   CONTACT_TO_EMAIL   - inbox that receives requests (defaults below)
//   CONTACT_FROM_EMAIL - verified sender in Resend (defaults to Resend's
//                        shared onboarding@resend.dev sender, which only
//                        delivers to the email on your Resend account
//                        until you verify your own domain)

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendEmail(subject: string, html: string, replyTo?: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY is not set — skipping email send.");
    return { sent: false as const, reason: "missing_api_key" as const };
  }

  const to = process.env.CONTACT_TO_EMAIL || "hello@gasguard.co.ke";
  const from = process.env.CONTACT_FROM_EMAIL || "GasGuard <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      ...(replyTo ? { reply_to: replyTo } : {}),
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Resend API error (${response.status}): ${body}`);
  }

  return { sent: true as const };
}

// ---- Free safety audit request (homepage AuditForm) ----------------------

const auditRequestSchema = z.object({
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

export const submitAuditRequest = createServerFn({ method: "POST" })
  .inputValidator(auditRequestSchema)
  .handler(async ({ data }) => {
    console.log("[contact] New free audit request:", {
      ...data,
      receivedAt: new Date().toISOString(),
    });

    try {
      const html = `
        <h2>New free safety audit request</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Property type:</strong> ${escapeHtml(data.propertyType)}</p>
        <p><strong>Location:</strong> ${escapeHtml(data.location)}</p>
      `;
      const result = await sendEmail(`New audit request — ${data.name}`, html);
      if (!result.sent) console.warn("[contact] Email not sent:", result.reason);
    } catch (error) {
      // Don't fail the visitor's submission just because email delivery
      // failed — the request is already captured in the log above.
      console.error("[contact] Failed to send audit request email:", error);
    }

    return { success: true as const };
  });

// ---- General contact form (contact page) ---------------------------------

const contactMessageSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator(contactMessageSchema)
  .handler(async ({ data }) => {
    console.log("[contact] New contact message:", {
      ...data,
      receivedAt: new Date().toISOString(),
    });

    try {
      const html = `
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
        <p><strong>Message:</strong><br />${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
      `;
      const result = await sendEmail(`New message — ${data.name}`, html, data.email);
      if (!result.sent) console.warn("[contact] Email not sent:", result.reason);
    } catch (error) {
      console.error("[contact] Failed to send contact message email:", error);
    }

    return { success: true as const };
  });
