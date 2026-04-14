"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const FIELDS = [
  { id: "name", label: "Full name", type: "text", placeholder: "Jane Smith" },
  { id: "email", label: "Email", type: "email", placeholder: "jane@company.com" },
  { id: "company", label: "Company", type: "text", placeholder: "Your company name" },
] as const;

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isDisabled =
    !form.name.trim() || !form.email.trim() || !form.company.trim() ||
    !form.message.trim() || status === "loading";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isDisabled) return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 56px;
          align-items: start;
        }
        .contact-name-email-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 14px;
        }
        .contact-left {
          min-height: 480px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
        }
        .contact-left h2 {
          text-align: center;
        }
        .contact-label {
          text-align: center;
        }
        .contact-info-grid {
          width: 100%;
          display: grid;
          gap: 18px;
        }
        .contact-info-row {
          padding: 0 0 18px;
          border-bottom: 1px solid #d8dde5;
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 12px;
          align-items: start;
          text-align: left;
        }
        .contact-bg-letter {
          position: absolute;
          right: -120px;
          top: 20px;
          font-size: clamp(280px, 42vw, 620px);
          line-height: 0.8;
          font-weight: 700;
          letter-spacing: -0.08em;
          color: #dfe7f5;
          pointer-events: none;
          user-select: none;
        }
        .contact-submit-btn {
          width: auto;
        }

        /* iPad Pro / large tablet (1024px and below) */
        @media (max-width: 1024px) {
          .contact-grid {
            gap: 36px;
          }
          .contact-bg-letter {
            right: -80px;
            font-size: clamp(200px, 38vw, 400px);
          }
        }

        /* Tablet (768px–900px) */
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-left {
            min-height: unset;
            gap: 28px;
          }
          .contact-name-email-grid {
            grid-template-columns: 1fr 1fr;
          }
          .contact-bg-letter {
            right: -60px;
            top: 10px;
            font-size: clamp(180px, 45vw, 320px);
            opacity: 0.7;
          }
          .contact-submit-btn {
            width: 100%;
          }
          .contact-info-row {
            grid-template-columns: 80px 1fr;
          }
        }

        /* Phone (below 640px) */
        @media (max-width: 640px) {
          .contact-name-email-grid {
            grid-template-columns: 1fr;
          }
          .contact-bg-letter {
            font-size: clamp(140px, 52vw, 240px);
            opacity: 0.5;
          }
          .contact-info-row {
            grid-template-columns: 72px 1fr;
          }
        }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        style={{
          position: "relative",
          padding: "clamp(64px, 10vw, 140px) 0 clamp(56px, 8vw, 120px)",
          background: "#f3f3ef",
          overflow: "hidden",
          fontFamily: "inherit",
        }}
      >
        <div aria-hidden="true" className="contact-bg-letter">S</div>

        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "0 clamp(16px, 5vw, 32px)",
            position: "relative",
            zIndex: 2,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="contact-grid">

            {/* LEFT */}
            <div className="contact-left">
              <p className="contact-label" style={{
                margin: "0 0 18px",
                fontSize: "14px",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#4b74c9",
              }}>
                Get in touch
              </p>

              <h2 style={{
                margin: "0 0 28px",
                fontSize: "clamp(3rem, 16vw, 6.2rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.07em",
                fontWeight: 700,
                color: "#111111",
                textAlign: "center",
              }}>
                LET'S BUILD
                <br />SOMETHING AMAZING
                <br />TOGETHER!
              </h2>

              <div className="contact-info-grid">
                {[
                  ["Email", "soham@sovratech.com"],
                  ["Response", "We'll respond within 24–48 hours"],
                ].map(([label, value]) => (
                  <div key={label} className="contact-info-row">
                    <span style={{
                      fontSize: "12px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#7a7a7a",
                    }}>
                      {label}
                    </span>
                    <span style={{ fontSize: "15px", lineHeight: 1.6, color: "#171717" }}>
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div style={{
              background: "#f8f8f5",
              border: "1px solid #d8dde5",
              borderRadius: "28px",
              padding: "clamp(20px, 4vw, 34px)",
              boxShadow: "0 18px 50px rgba(20, 25, 40, 0.06)",
            }}>
              {status === "success" ? (
                <div style={{ minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <h3 style={{
                    margin: "0 0 16px",
                    fontSize: "clamp(1.6rem, 5vw, 3rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.06em",
                    color: "#111111",
                  }}>
                    Thanks — we'll be in touch soon.
                  </h3>
                  <p style={{ margin: "0 0 28px", fontSize: "17px", lineHeight: 1.6, color: "#555555" }}>
                    Your message has been sent. We'll review it and get back to you with next steps.
                  </p>
                  <button onClick={() => setStatus("idle")} style={secondaryButtonStyle}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{
                    margin: "0 0 24px",
                    fontSize: "clamp(1.6rem, 5vw, 3rem)",
                    lineHeight: 1,
                    letterSpacing: "-0.06em",
                    color: "#111111",
                  }}>
                    Tell us what you're building.
                  </h3>

                  <div className="contact-name-email-grid">
                    {FIELDS.slice(0, 2).map((field) => (
                      <Field
                        key={field.id}
                        id={field.id}
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.id as keyof typeof form]}
                        onChange={handleChange}
                      />
                    ))}
                  </div>

                  <div style={{ marginBottom: "14px" }}>
                    <Field
                      id="company" label="Company" type="text"
                      placeholder="Your company name"
                      value={form.company} onChange={handleChange}
                    />
                  </div>

                  <div style={{ marginBottom: "22px" }}>
                    <label htmlFor="message" style={labelStyle}>Project brief</label>
                    <textarea
                      id="message" name="message" value={form.message}
                      onChange={handleChange}
                      placeholder="What do you need — a website, Odoo customization, AI workflow, dashboard, or something custom?"
                      rows={5}
                      style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
                    />
                  </div>

                  {status === "error" && (
                    <p style={{ margin: "0 0 16px", color: "#c53b2f", fontSize: "14px" }}>{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isDisabled}
                    style={{
                      ...primaryButtonStyle,
                      width: "100%",
                      opacity: isDisabled ? 0.45 : 1,
                      cursor: isDisabled ? "not-allowed" : "pointer",
                    }}
                  >
                    {status === "loading" ? "Sending..." : "Send inquiry"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

type FieldProps = {
  id: string; label: string; type: string;
  placeholder: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

function Field({ id, label, type, placeholder, value, onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <input id={id} name={id} type={type} placeholder={placeholder}
        value={value} onChange={onChange} style={inputStyle} />
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block", marginBottom: "8px",
  fontSize: "12px", letterSpacing: "0.16em",
  textTransform: "uppercase", color: "#777777",
};

const inputStyle: React.CSSProperties = {
  width: "100%", boxSizing: "border-box",
  padding: "14px 16px", borderRadius: "14px",
  border: "1px solid #d7dbe2", background: "#ffffff",
  color: "#111111", fontSize: "15px", outline: "none",
};

const primaryButtonStyle: React.CSSProperties = {
  border: "none", borderRadius: "999px",
  background: "#111111", color: "#ffffff",
  padding: "15px 24px", fontSize: "14px",
  fontWeight: 600, letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const secondaryButtonStyle: React.CSSProperties = {
  border: "1px solid #cfd5de", borderRadius: "999px",
  background: "#ffffff", color: "#111111",
  padding: "15px 24px", fontSize: "13px",
  fontWeight: 600, letterSpacing: "0.08em",
  textTransform: "uppercase", cursor: "pointer", width: "fit-content",
};