type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

export async function sendEmail(payload: EmailPayload): Promise<void> {
  // Log in development; integrate SMTP/Resend in production via env vars
  if (process.env.NODE_ENV === "development") {
    console.info("[Email]", payload.subject, "→", payload.to);
    return;
  }

  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;
  if (adminEmail && payload.to === adminEmail) {
    console.info("[Email Notification]", payload.subject);
  }
}

export async function sendContactConfirmation(
  email: string,
  fullName: string
): Promise<void> {
  await sendEmail({
    to: email,
    subject: "We received your inquiry — GoAbroadly",
    html: `
      <h2>Thank you, ${fullName}!</h2>
      <p>We have received your inquiry and our team will contact you within 24 hours.</p>
      <p>Best regards,<br/>GoAbroadly Team</p>
    `,
  });
}

export async function sendAdminNotification(
  type: "contact" | "consultation",
  data: Record<string, string>
): Promise<void> {
  const adminEmail =
    process.env.ADMIN_NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL;

  if (!adminEmail) return;

  const rows = Object.entries(data)
    .map(([key, value]) => `<tr><td><strong>${key}</strong></td><td>${value}</td></tr>`)
    .join("");

  await sendEmail({
    to: adminEmail,
    subject: `New ${type} submission — GoAbroadly`,
    html: `<table>${rows}</table>`,
  });
}
