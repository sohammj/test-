import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function renderTemplate(template: string, vars: Record<string, string>) {
  let out = template;
  for (const [k, v] of Object.entries(vars)) {
    out = out.split(`{{${k}}}`).join(v);
  }
  return out;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const company = String(body?.company ?? "").trim();
    const message = String(body?.message ?? "").trim();

    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const toAdmin = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    const autoSubject =
      process.env.AUTO_REPLY_SUBJECT || "We received your message - SovraTech";
    const autoTemplate =
      process.env.AUTO_REPLY_BODY ||
      `Hi {{name}},\n\nThank you for reaching out to SovraTech.\n\nWe've received your message and will get back to you within 24 hours.\n\nBest,\nSovraTech`;

    if (!process.env.RESEND_API_KEY || !toAdmin || !from) {
      return NextResponse.json(
        { ok: false, error: "Resend env not set" },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const adminEmail = await resend.emails.send({
      from,
      to: [toAdmin],
      subject: `SovraTech Contact: ${company} — ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #0b1220; color: #f4f7fb; border-radius: 18px; overflow: hidden;">
          <div style="padding: 22px 28px; border-bottom: 1px solid rgba(255,255,255,0.08); background: linear-gradient(90deg, rgba(59,130,246,0.16), rgba(255,255,255,0.02));">
            <p style="margin: 0; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #7fb0ff;">
              New inquiry
            </p>
          </div>

          <div style="padding: 30px 28px;">
            <h2 style="margin: 0 0 22px; font-size: 28px; line-height: 1; color: #ffffff;">
              New SovraTech inquiry
            </h2>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; width: 110px; color: rgba(255,255,255,0.55); font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em;">Name</td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 15px;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: rgba(255,255,255,0.55); font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em;">Email</td>
                <td style="padding: 10px 0; color: #8eb8ff; font-size: 15px;">${safeEmail}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: rgba(255,255,255,0.55); font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em;">Company</td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 15px;">${safeCompany}</td>
              </tr>
            </table>

            <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 18px 20px;">
              <p style="margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.45);">
                Message
              </p>
              <p style="margin: 0; font-size: 15px; line-height: 1.7; color: rgba(255,255,255,0.88);">
                ${safeMessage}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (adminEmail.error) {
      return NextResponse.json(
        { ok: false, error: adminEmail.error.message },
        { status: 500 }
      );
    }

    const autoText = renderTemplate(autoTemplate, { name, company });

    const autoReply = await resend.emails.send({
      from,
      to: [email],
      subject: autoSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; background: #f8f8f5; color: #111111; border-radius: 18px; overflow: hidden; border: 1px solid #e5e7eb;">
          <div style="padding: 22px 28px; border-bottom: 1px solid #e5e7eb; background: #ffffff;">
            <p style="margin: 0; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase; color: #4b74c9;">
              SovraTech
            </p>
          </div>

          <div style="padding: 30px 28px;">
            <h1 style="margin: 0 0 16px; font-size: 32px; line-height: 1; letter-spacing: -0.04em; color: #111111;">
              Hi ${safeName},
            </h1>

            <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.75; color: #3f3f46;">
              Thank you for reaching out to SovraTech.
            </p>

            <p style="margin: 0 0 22px; font-size: 16px; line-height: 1.75; color: #3f3f46;">
              We’ve received your message regarding <strong>${safeCompany}</strong> and will get back to you within 24 hours.
            </p>

            <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 14px; padding: 18px 20px; margin-bottom: 22px;">
              <p style="margin: 0 0 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; color: #71717a;">
                Your message
              </p>
              <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #52525b;">
                ${safeMessage}
              </p>
            </div>

            <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #3f3f46;">
              Best,<br />
              Soham<br />
              SovraTech
            </p>
          </div>
        </div>
      `,
      text: autoText,
    });

    if (autoReply.error) {
      return NextResponse.json(
        { ok: false, error: autoReply.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Server error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}