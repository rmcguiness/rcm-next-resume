"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "./lib/resume-data";
import ToggleBar from "./components/ToggleBar";
import SyntaxHighlighter from "./components/SyntaxHighlighter";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

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
