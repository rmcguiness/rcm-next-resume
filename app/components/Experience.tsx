import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../lib/animations";

export default function Experience() {
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
                    <span className="font-medium">200+ pull requests</span> and
                    shipping features to production across UI architecture,
                    state management, performance optimization, and full-stack
                    feature delivery for a multi-dealer experience
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1 shrink-0">•</span>
                  <span>
                    Diagnosed and resolved a critical React caching issue where
                    object-based function arguments bypassed memoization due to
                    reference identity mismatches. Refactored call signatures to
                    use primitive arguments,{" "}
                    <span className="font-medium">
                      reducing one high-traffic endpoint from 180+ to 6 calls
                    </span>{" "}
                    and cutting page load times by approximately 10 seconds
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1 shrink-0">•</span>
                  <span>
                    Rebuilt a core customer-facing page in Next.js, modernizing
                    the UI, integrating new APIs, and improving page
                    responsiveness — achieving a{" "}
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
                    Improved CI/CD pipeline reliability by introducing Jest unit
                    testing and a mock server for API simulation,{" "}
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
                    catalog updates, checkout logic, and backend data flows tied
                    to MySQL
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
  );
}
