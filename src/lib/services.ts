export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceOffer = {
  title: string;
  description: string;
};

export type ServicePoint = {
  title: string;
  description: string;
};

export type ServiceProject = {
  title: string;
  description: string;
  href: string;
  cta: string;
  image?: string;
};

export type ServicePageData = {
  slug: string;
  navTitle: string;
  heroTitle: string;
  heroText: string;
  heroImage: string;
  offerTitle: string;
  offers: ServiceOffer[];
  philosophyTitle: string;
  philosophy: ServicePoint[];
  showcaseTitle: string;
  showcaseItems: ServiceProject[];
  faqTitle: string;
  faqs: ServiceFAQ[];
  ctaTitle: string;
  ctaText: string;
};

export const services: ServicePageData[] = [
  {
    slug: "web-development",
    navTitle: "Web Development",
    heroTitle: "Websites that Speak Your Brand’s Language - Fully Custom. Fully Coded.",
    heroText:
      "No templates. No drag-and-drop. Every SovraTech site is handcrafted for complete design freedom and performance.",
    heroImage: "/webdev.jpg",
    offerTitle: "What We Offer",
    offers: [
      {
        title: "Custom Design & Animation",
        description:
          "Pixel-perfect layouts and seamless motion for a fluid, modern experience that fits your brand’s rhythm.",
      },
      {
        title: "End-to-End Development",
        description:
          "From concept to launch - we manage design, build, and deployment with precision and care.",
      },
      {
        title: "Full Customization",
        description:
          "Every element, feature, and layout is built from scratch to match your exact requirements.",
      },
      {
        title: "Performance & SEO",
        description:
          "Optimized for speed, discoverability, and flawless cross-device performance.",
      },
      {
        title: "Maintenance & Scaling",
        description:
          "We ensure your site grows smoothly with your business through seamless updates and monitoring.",
      },
    ],
    philosophyTitle: "Our DAQ Philosophy",
    philosophy: [
      {
        title: "Design",
        description:
          "Sleek UI and animations that resonate with your brand.",
      },
      {
        title: "Automation",
        description:
          "Smart workflows and custom integrations for smooth operations.",
      },
      {
        title: "Quality",
        description:
          "Handcrafted, reliable, and high-performance builds made to last.",
      },
    ],
    showcaseTitle: "Client Projects",
    showcaseItems: [
      {
        title: "Enso Mind Matters",
        description:
          "A therapy and mental wellness platform designed to feel safe, calm, and human. Focused on clarity, accessibility, and emotional trust.",
        href: "#",
        cta: "Visit Project",
        image: "/projects/enso.jpg",
      },
      {
        title: "Hridmann",
        description:
          "A mindful psychology consultancy website - visually calm yet deeply human. A showcase of minimal design and trust-focused UI.",
        href: "#",
        cta: "Visit Project",
        image: "/projects/hridmann.jpg",
      },
      {
        title: "Truckin' Taste",
        description:
          "A vibrant food truck website with bold visuals and smooth animations. Built to capture the energy and flavor of street food culture.",
        href: "#",
        cta: "Visit Project",
        image: "/projects/truckin-taste.jpg",
      },
    ],
    faqTitle: "FAQs",
    faqs: [
      {
        question: "Can you build both portfolio and business websites?",
        answer:
          "Yes. We design and develop both portfolio-led and business-focused websites, fully tailored to the brand, goals, and structure required.",
      },
      {
        question: "Do you provide hosting and domain setup?",
        answer:
          "Yes. We can help with deployment, hosting guidance, and domain connection so the website is launch-ready end to end.",
      },
      {
        question: "Will I be able to edit content myself?",
        answer:
          "Yes. Where needed, we can structure the build so selected content areas are easier to update without affecting the overall design quality.",
      },
      {
        question: "How long does a project typically take?",
        answer:
          "That depends on scope, number of pages, content readiness, and interactions, but timelines are always planned clearly before development begins.",
      },
      {
        question: "Can you redesign my existing website?",
        answer:
          "Yes. We can rework an existing website with stronger structure, better responsiveness, more refined visuals, and improved performance.",
      },
    ],
    ctaTitle: "Let’s Build Something That Represents You.",
    ctaText:
      "A website should not just exist - it should communicate trust, clarity, and quality the moment someone lands on it.",
  },
  {
    slug: "odoo-customization",
    navTitle: "Odoo Customization",
    heroTitle: "Transform Workflows with Odoo Customization",
    heroText:
      "We extend and optimize Odoo ERP - crafting automation, dashboards, and integrations that make your business run smarter and faster.",
    heroImage: "/odoo.jpg",
    offerTitle: "What We Offer",
    offers: [
      {
        title: "Custom Module Development",
        description:
          "End-to-end modules - from Sales and CRM automation to custom workflows that fit your operations perfectly.",
      },
      {
        title: "UI/UX Enhancements",
        description:
          "Polished Odoo interfaces that improve usability, accessibility, and efficiency across all devices.",
      },
      {
        title: "Integration Solutions",
        description:
          "Seamlessly connect Odoo with WhatsApp, Google Drive, payment gateways, or your internal systems.",
      },
      {
        title: "Performance Optimization",
        description:
          "Database tuning, caching, and workflow refactoring for faster, smoother performance.",
      },
      {
        title: "Maintenance & Version Upgrades",
        description:
          "Long-term support for updates, bug fixes, and migration to newer Odoo versions.",
      },
    ],
    philosophyTitle: "Signature Project",
    philosophy: [
      {
        title: "WhatsApp Integration Module",
        description:
          "Our in-house developed WhatsApp integration allows real-time customer communication directly from Odoo CRM and Sales Orders.",
      },
      {
        title: "Connected Communication",
        description:
          "Send updates, track messages, and automate alerts - all within your ERP dashboard.",
      },
      {
        title: "Built for Efficiency",
        description:
          "A practical customization focused on making internal operations and customer communication smoother.",
      },
    ],
    showcaseTitle: "Signature Project",
    showcaseItems: [
      {
        title: "WhatsApp Integration Module for Odoo 18",
        description:
          "Our in-house developed WhatsApp integration allows real-time customer communication directly from Odoo CRM and Sales Orders. Send updates, track messages, and automate alerts - all within your ERP dashboard.",
        href: "#",
        cta: "View on Odoo Store",
        image: "/projects/whatsapp-odoo.jpg",
      },
    ],
    faqTitle: "FAQs",
    faqs: [
      {
        question: "Can you customize existing Odoo modules?",
        answer:
          "Yes. Existing modules can be extended or refined to better match your workflows, reporting requirements, or UI expectations.",
      },
      {
        question: "Do you build custom modules from scratch?",
        answer:
          "Yes. We create custom modules when your business logic or process needs go beyond standard Odoo functionality.",
      },
      {
        question: "Which Odoo versions do you support?",
        answer:
          "Support depends on the project context, but customization, migration planning, and optimization can be handled across modern Odoo versions.",
      },
      {
        question: "Can you integrate third-party APIs like WhatsApp or Google Drive?",
        answer:
          "Yes. External services, communication tools, document systems, and internal platforms can be integrated where relevant.",
      },
      {
        question: "Do you provide deployment and hosting?",
        answer:
          "Yes. We can help with deployment strategy, server setup guidance, and making sure the system is production-ready.",
      },
    ],
    ctaTitle: "Ready to Automate with Odoo?",
    ctaText:
      "A well-customized ERP should reduce friction, improve visibility, and help teams move faster without creating complexity.",
  },
  {
    slug: "ai-dashboard-solutions",
    navTitle: "AI & Dashboard Solutions",
    heroTitle: "Turning Data into Decisions.",
    heroText:
      "We design AI-powered dashboards that go beyond visuals - uncovering patterns, automating insights, and helping you make smarter business decisions in real time.",
    heroImage: "/ai.jpg",
    offerTitle: "What We Offer",
    offers: [
      {
        title: "AI-Driven Insights",
        description:
          "Go beyond static dashboards. We implement machine learning models that detect trends, predict outcomes, and flag anomalies automatically.",
      },
      {
        title: "Custom Data Visualizations",
        description:
          "We craft intuitive visuals - from KPIs and growth funnels to interactive filters and geospatial data maps.",
      },
      {
        title: "Multi-Source Integration",
        description:
          "Merge all your data into one intelligent dashboard. From Odoo to Google Sheets - everything stays in sync.",
      },
      {
        title: "Automation & Alerts",
        description:
          "Get automated email and chat alerts based on business triggers or AI-detected anomalies.",
      },
      {
        title: "End-to-End Setup",
        description:
          "We handle everything - data cleaning, backend setup, UI design, and secure cloud deployment.",
      },
    ],
    philosophyTitle: "Our DAQ Philosophy",
    philosophy: [
      {
        title: "Design",
        description:
          "Elegant, responsive dashboards that present complex data simply and beautifully.",
      },
      {
        title: "Automation",
        description:
          "AI pipelines that update your visuals automatically - no manual refreshes or queries.",
      },
      {
        title: "Quality",
        description:
          "Accurate, consistent, and optimized dashboards that scale with your data and business.",
      },
    ],
    showcaseTitle: "Intelligent Dashboard Showcase",
    showcaseItems: [
      {
        title: "Agro-Food Sector CO₂ Emissions Dashboard",
        description:
          "An intelligent, AI-powered analytical dashboard designed to track and forecast CO₂ emissions across the agro-food sector globally. The system visualizes trends in drained organic soils, fertilizer use, temperature variations, and national emission patterns - enabling policy planners to identify critical intervention points for sustainable food systems.",
        href: "#",
        cta: "View Dashboard",
      },
    ],
    faqTitle: "FAQs",
    faqs: [
      {
        question: "What kinds of dashboards do you build?",
        answer:
          "We build custom dashboards for analytics, monitoring, reporting, operational tracking, and insight-led decision-making.",
      },
      {
        question: "Can you integrate our existing data sources?",
        answer:
          "Yes. We can connect data from multiple sources so your dashboard becomes a unified view of the business.",
      },
      {
        question: "Do you use cloud services like Google Cloud or AWS?",
        answer:
          "Yes, where the project requires it. The final architecture depends on scale, deployment needs, and data flow.",
      },
      {
        question: "Can AI actually generate insights automatically?",
        answer:
          "Yes. Depending on the system, AI can identify patterns, anomalies, trends, and predictive signals to support faster decisions.",
      },
      {
        question: "Is the data secure?",
        answer:
          "Yes. Security, structured access, and responsible handling are built into how the solution is designed and deployed.",
      },
    ],
    ctaTitle: "Build Dashboards that Think for You.",
    ctaText:
      "The best dashboards do not just show information - they help teams understand what matters, what changed, and what to do next.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}