"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/app/lib/resume-data";
import ToggleBar from "@/app/components/ToggleBar";
import SyntaxHighlighter from "@/app/components/SyntaxHighlighter";
import Hero from "@/app/components/Hero";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Education from "@/app/components/Education";
import Footer from "@/app/components/Footer";

export default function Home() {
  const [viewSource, setViewSource] = useState(false);

  return (
    <>
      <ToggleBar viewSource={viewSource} onToggle={() => setViewSource(!viewSource)} />

      <AnimatePresence mode="wait">
        {viewSource ? (
          <motion.div
            key="source"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SyntaxHighlighter data={resumeData} />
          </motion.div>
        ) : (
          <motion.div
            key="resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
              <Hero />
              <Experience />
              <Skills />
              <Projects />
              <Education />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
