// Shared lead-intake handler for all site forms.
// Emails via SMTP when configured; always logs the lead server-side.
//
// To enable email delivery, set these env vars (e.g. in Vercel):
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_TO (defaults to info@mosleyprime.com)

export async function handleLead(request, type) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  // Basic validation + trivial honeypot support
  if (!data || typeof data !== "object" || data.website) {
    return Response.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }

  const lead = {
    type,
    receivedAt: new Date().toISOString(),
    ...Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, String(v).slice(0, 2000)])
    ),
  };

  console.log(`[LEAD:${type}]`, JSON.stringify(lead));

  // Optional SMTP delivery — only attempted when configured
  if (process.env.SMTP_HOST) {
    try {
      const nodemailer = (await import("nodemailer")).default;
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: `"Mosley Prime Website" <${process.env.SMTP_USER}>`,
        to: process.env.LEAD_TO || "info@mosleyprime.com",
        replyTo: lead.email,
        subject: `New ${type} — ${lead.name || lead.reference || "website lead"}`,
        text: Object.entries(lead)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n"),
      });
    } catch (err) {
      console.error(`[LEAD:${type}] email delivery failed`, err);
      // Lead is still logged — don't fail the user's request
    }
  }

  return Response.json({ ok: true });
}
