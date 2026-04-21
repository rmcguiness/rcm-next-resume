export const resumeData = {
  name: "Ryan McGuiness",
  title: "Full Stack Engineer",
  contact: {
    email: "ryanmcguiness123@gmail.com",
    phone: "(732) 675-8146",
    github: "github.com/rmcguiness",
  },
  summary:
    "Full Stack Engineer with 5+ years of professional experience building performant, production-grade web applications across diverse industries. Skilled at diagnosing technical inefficiencies, improving development workflows, and translating complex requirements into dependable software.",
  experience: [
    {
      role: "Software Engineer",
      company: "Perficient, Inc.",
      location: "Allentown, PA",
      period: "June 2021 - Present",
      highlights: [
        "Core engineer on enterprise e-commerce platform for 3+ years, contributing 200+ pull requests across UI architecture, state management, and performance optimization",
        "Resolved critical React caching issue — reduced high-traffic endpoint from 180+ to 6 calls, cutting page load times by ~10 seconds",
        "Rebuilt core customer-facing page in Next.js, achieving a 10-point Lighthouse score improvement",
        "Introduced Jest unit testing and mock server for API simulation, increasing code coverage from near zero to 90%",
        "Delivered production apps for Caterpillar, Dish, Sling, TiVo, and Varsity Sports across e-commerce, media, and manufacturing",
        "Served as technical lead on several client engagements, collaborating cross-functionally with PMs, designers, and QA",
      ],
    },
    {
      role: "Associate Software Engineer",
      company: "Perficient, Inc.",
      location: "Allentown, PA",
      highlights: [
        "Built and maintained PHP-based Magento modules for customer-facing storefronts with MySQL backend",
        "Shipped production contributions within the first month, progressively taking ownership of larger feature areas",
      ],
    },
  ],
  skills: {
    frontend: [
      "TypeScript",
      "JavaScript",
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
    backend: ["Node.js", "PHP", "Python"],
    databases: ["PostgreSQL", "Supabase"],
    tools: ["Git", "Jest", "Figma", "CI/CD", "Docker"],
  },
  projects: [
    {
      name: "Price Tracker",
      url: "pricetracker.ryanmcguiness.com",
      description:
        "Full-stack Next.js/TypeScript app aggregating grocery prices from web scrapers, barcode scanning, and receipt OCR",
      stack: ["Next.js", "TypeScript", "SQLite", "Stripe", "Clerk"],
    },
    {
      name: "Next.js Playground",
      url: "nextplayground.ryanmcguiness.com",
      description:
        "Next.js site connected to Supabase for testing development strategies, mock portfolios, and e-commerce pages",
      stack: ["Next.js", "React", "TypeScript", "Supabase"],
    },
    {
      name: "E-commerce Website",
      url: "mkr-ecommerce.vercel.app",
      description:
        "E-commerce site with React.js and Stripe for online transactions",
      stack: ["React", "Stripe", "Sanity CMS"],
    },
  ],
  education: {
    school: "Lehigh University",
    degree: "BS Double Major: Computer Science & Economics",
    period: "January 2018 - May 2021",
    location: "Bethlehem, PA",
  },
};

export type ResumeData = typeof resumeData;
