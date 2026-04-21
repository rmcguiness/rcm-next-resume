import { motion } from "framer-motion";
import { Github, Mail, Phone, Download } from "lucide-react";

export default function Hero() {
  return (
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
            diverse industries. Skilled at diagnosing technical inefficiencies,
            improving development workflows, and translating complex
            requirements into dependable software.
          </p>

          <a
            href="/Ryan-McGuiness-Resume.docx"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            <Download size={18} />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
