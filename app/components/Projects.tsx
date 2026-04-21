import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { fadeInUp, stagger } from "@/app/lib/animations";

export default function Projects() {
  return (
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
                  SQLite, Stripe billing, and Clerk auth supporting free and pro
                  subscription tiers.
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
            <ProjectCard
              name="Next.js Playground"
              description="Designed and developed a Next.js website, connected to Supabase, to practice and test different Next.js development strategies. Also used to mock portfolios, restaurant websites, and e-commerce pages."
              stack="Next.js, React, TypeScript, Supabase"
              url="https://nextplayground.ryanmcguiness.com"
            />
            <ProjectCard
              name="E-commerce Website"
              description="Built an e-commerce site with React.js and integrated Stripe to handle online transactions."
              stack="React, Stripe, Sanity CMS"
              url="https://mkr-ecommerce.vercel.app"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  name,
  description,
  stack,
  url,
}: {
  name: string;
  description: string;
  stack: string;
  url: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
    >
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{name}</h3>
      <p className="text-slate-600 mb-4">{description}</p>
      <p className="text-sm text-slate-500 mb-4">
        <span className="font-medium">Tech Stack:</span> {stack}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
      >
        View Project <ExternalLink size={14} />
      </a>
    </motion.div>
  );
}
