"use client";

import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Download,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container mx-auto px-6 py-20 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold text-slate-900 mb-4 tracking-tight">
              Ryan McGuiness
            </h1>
            <p className="text-2xl text-slate-600 mb-6 font-light">
              Full Stack Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-600 mb-8">
              <a
                href="mailto:ryanmcguiness123@gmail.com"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
              >
                <Mail size={16} />
                <span>ryanmcguiness123@gmail.com</span>
              </a>
              <a
                href="tel:+17326758146"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
              >
                <Phone size={16} />
                <span>(732) 675-8146</span>
              </a>
              <a
                href="https://github.com/rmcguiness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
              >
                <Github size={16} />
                <span>github.com/rmcguiness</span>
              </a>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Full Stack Engineer with{" "}
              <span className="font-semibold text-slate-800">
                5+ years of professional experience
              </span>{" "}
              building performant, production-grade web applications across
              diverse industries. Skilled at diagnosing technical
              inefficiencies, improving development workflows, and translating
              complex requirements into dependable software.
            </p>

            <a
              href="/Ryan-McGuiness-Resume.docx"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Professional Experience
            </h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            {/* Perficient - Software Engineer */}
            <motion.div variants={fadeInUp} className="relative md:pl-20 mb-12">
              <div className="absolute left-6 top-4 w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100 hidden md:block" />
              <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Software Engineer
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      Perficient, Inc.
                    </p>
                    <p className="text-sm text-slate-500">Allentown, PA</p>
                  </div>
                  <div className="text-slate-600 mt-2 md:mt-0 md:text-right">
                    <p className="font-medium">June 2021 - Present (5 years)</p>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 shrink-0">•</span>
                    <span>
                      Served as a core engineer on a long-running enterprise
                      e-commerce platform for over 3 years, contributing{" "}
                      <span className="font-medium">200+ pull requests</span>{" "}
                      and shipping features to production across UI
                      architecture, state management, performance optimization,
                      and full-stack feature delivery for a multi-dealer
                      experience
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 shrink-0">•</span>
                    <span>
                      Diagnosed and resolved a critical React caching issue
                      where object-based function arguments bypassed memoization
                      due to reference identity mismatches. Refactored call
                      signatures to use primitive arguments,{" "}
                      <span className="font-medium">
                        reducing one high-traffic endpoint from 180+ to 6 calls
                      </span>{" "}
                      and cutting page load times by approximately 10 seconds
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 shrink-0">•</span>
                    <span>
                      Rebuilt a core customer-facing page in Next.js,
                      modernizing the UI, integrating new APIs, and improving
                      page responsiveness — achieving a{" "}
                      <span className="font-medium">
                        10-point Lighthouse score improvement
                      </span>{" "}
                      and delivering a measurably faster, more reliable user
                      experience
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 shrink-0">•</span>
                    <span>
                      Improved CI/CD pipeline reliability by introducing Jest
                      unit testing and a mock server for API simulation,{" "}
                      <span className="font-medium">
                        increasing code coverage from near zero to 90%
                      </span>{" "}
                      and significantly reducing regressions in staging and
                      production
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 shrink-0">•</span>
                    <span>
                      Delivered production-grade Next.js and TypeScript
                      applications for enterprise clients including{" "}
                      <span className="font-medium">
                        Caterpillar, Dish, Sling, TiVo, and Varsity Sports
                      </span>
                      , owning frontend architecture decisions and contributing
                      full-stack solutions across e-commerce, media, and
                      manufacturing domains
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 shrink-0">•</span>
                    <span>
                      Collaborated cross-functionally with product managers,
                      designers, and QA to scope and deliver features across
                      multi-sprint initiatives, serving as{" "}
                      <span className="font-medium">technical lead</span> on
                      several client engagements
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Perficient - Associate Software Engineer */}
            <motion.div variants={fadeInUp} className="relative md:pl-20">
              <div className="absolute left-6 top-4 w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100 hidden md:block" />
              <div className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Associate Software Engineer
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      Perficient, Inc.
                    </p>
                    <p className="text-sm text-slate-500">Allentown, PA</p>
                  </div>
                </div>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 shrink-0">•</span>
                    <span>
                      Built and maintained{" "}
                      <span className="font-medium">
                        PHP-based Magento modules
                      </span>{" "}
                      for customer-facing storefronts, implementing product
                      catalog updates, checkout logic, and backend data flows
                      tied to MySQL
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1 shrink-0">•</span>
                    <span>
                      Onboarded rapidly onto an unfamiliar legacy codebase,{" "}
                      <span className="font-medium">
                        shipping production contributions within the first month
                      </span>{" "}
                      and progressively taking on ownership of larger feature
                      areas
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white ">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Technical Skills
            </h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "JavaScript",
                  "React.js",
                  "Next.js",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "PHP", "Python"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "Supabase"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-6 border border-slate-200"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Tools & Practices
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Jest", "Figma", "CI/CD", "Docker"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Personal Projects
            </h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-8"
          >
            {/* Featured Project - Price Tracker */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold text-slate-900">
                  Price Tracker
                </h3>
              </div>
              <div className="md:flex md:gap-8">
                <div className="flex-1">
                  <p className="text-slate-600 mb-4">
                    A full-stack Next.js/TypeScript web app that aggregates
                    grocery prices from multiple sources (web scrapers, barcode
                    scanning, receipt OCR) and surfaces deals, price history
                    charts, and cross-store shopping optimization.
                  </p>
                  <p className="text-slate-600 mb-4">
                    Architected a clean service-layer backend with REST APIs,
                    SQLite, Stripe billing, and Clerk auth supporting free and
                    pro subscription tiers.
                  </p>
                  <p className="text-sm text-slate-500 mb-4">
                    <span className="font-medium">Tech Stack:</span> Next.js,
                    TypeScript, SQLite, Stripe, Clerk
                  </p>
                  <a
                    href="https://pricetracker.ryanmcguiness.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Other Projects */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Next.js Playground
                </h3>
                <p className="text-slate-600 mb-4">
                  Designed and developed a Next.js website, connected to
                  Supabase, to practice and test different Next.js development
                  strategies. Also used to mock portfolios, restaurant websites,
                  and e-commerce pages.
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  <span className="font-medium">Tech Stack:</span> Next.js,
                  React, TypeScript, Supabase
                </p>
                <a
                  href="https://nextplayground.ryanmcguiness.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  E-commerce Website
                </h3>
                <p className="text-slate-600 mb-4">
                  Built an e-commerce site with React.js and integrated Stripe
                  to handle online transactions.
                </p>
                <p className="text-sm text-slate-500 mb-4">
                  <span className="font-medium">Tech Stack:</span> React,
                  Stripe, Sanity CMS
                </p>
                <a
                  href="https://mkr-ecommerce.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row md:items-center md:justify-between bg-slate-50 rounded-xl px-8 py-6 border border-slate-200"
          >
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Education</h2>
              <p className="text-lg text-blue-600 font-medium">
                Lehigh University
              </p>
              <p className="text-slate-700">
                BS Double Major: Computer Science & Economics
              </p>
            </div>
            <div className="mt-3 md:mt-0 md:text-right">
              <p className="font-medium text-slate-600">
                January 2018 - May 2021
              </p>
              <p className="text-sm text-slate-500">Bethlehem, PA</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <p className="text-lg mb-4">Let's connect!</p>
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="mailto:ryanmcguiness123@gmail.com"
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+17326758146"
                className="hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={24} />
              </a>
              <a
                href="https://rmcguiness.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe size={24} />
              </a>
              <a
                href="https://github.com/rmcguiness"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="/Ryan-McGuiness-Resume.docx"
                download
                className="hover:text-white transition-colors"
                aria-label="Download Resume"
              >
                <Download size={24} />
              </a>
            </div>
            <p className="text-sm text-slate-400">
              © 2026 Ryan McGuiness. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
