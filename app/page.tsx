'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Phone, Globe, ExternalLink } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
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
            <p className="text-2xl text-slate-600 mb-8 font-light">
              Software Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-600">
              <a href="mailto:ryanmcguiness123@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail size={20} />
                <span>ryanmcguiness123@gmail.com</span>
              </a>
              <a href="tel:+17326758146" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone size={20} />
                <span>(732) 675-8146</span>
              </a>
              <a href="https://rmcguiness.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Globe size={20} />
                <span>rmcguiness.com</span>
              </a>
              <a href="https://github.com/rmcguiness" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Github size={20} />
                <span>github.com/rmcguiness</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              Software Engineer with <span className="font-semibold text-slate-900">5 years of professional experience</span> building enterprise-level, 
              scalable web applications. Specializes in modern JavaScript frameworks including React, Next.js, and TypeScript. 
              Proven track record of delivering high-quality code across multiple client engagements, improving test coverage and code quality, 
              and collaborating effectively with cross-functional teams. Passionate about frontend development, performance optimization, 
              and creating exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-900 mb-12 text-center"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'JavaScript', 'React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PHP', 'Python'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['SQL', 'Firebase'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Tools & Practices</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Jest', 'CI/CD', 'Figma', 'TDD', 'Agile'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-900 mb-12 text-center"
          >
            Professional Experience
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            {/* Perficient - Software Engineer */}
            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Software Engineer</h3>
                  <p className="text-lg text-blue-600 font-medium">Perficient, Inc.</p>
                </div>
                <div className="text-slate-600 mt-2 md:mt-0 md:text-right">
                  <p className="font-medium">June 2021 - Present (4+ years)</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Built <span className="font-medium">enterprise-level, scalable, high-performing applications</span> utilizing TypeScript, Next.js, React.js, HTML, and CSS for clients across diverse industries including telecommunications, sports media, and manufacturing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Spearheaded testing initiative that <span className="font-medium">increased code coverage from 40% to over 90%</span> by implementing comprehensive Jest test suite, significantly enhancing code reliability and quality</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Collaborated with cross-functional teams of 2-8 developers alongside Project Managers, Business Analysts, and QA teams to plan, design, build, test, and deploy technical solutions that fulfill and exceed project requirements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Designed and developed applications using <span className="font-medium">test-driven development</span> and best practices, translating Figma designs into production-ready code with Tailwind CSS and custom styling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Proactively identified and resolved existing and potential bugs arising from new features, maintaining high code quality standards across multiple client projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Successfully delivered features across <span className="font-medium">4 major client engagements</span>, consistently meeting deadlines and project requirements</span>
                </li>
              </ul>
            </motion.div>

            {/* Lapis Health */}
            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-8 border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Mobile Developer Intern</h3>
                  <p className="text-lg text-blue-600 font-medium">Lapis Health</p>
                </div>
                <div className="text-slate-600 mt-2 md:mt-0 md:text-right">
                  <p className="font-medium">September 2020 - January 2021</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Assisted in the design and development of a production-grade mobile application using <span className="font-medium">Flutter, Dart, and Firebase</span></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Implemented mobile-first design principles and UI/UX best practices to create responsive applications that work seamlessly across all screen sizes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Contributed to building features for a healthcare-focused mobile platform, gaining experience in the intersection of technology and healthcare</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-900 mb-12 text-center"
          >
            Projects
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Basic Social Media Platform</h3>
              <p className="text-slate-600 mb-4">
                A full-stack social media application built with Next.js frontend connected to a Node.js backend. 
                Features include user authentication, post creation and management, and real-time updates.
              </p>
              <p className="text-sm text-slate-500 mb-4">
                <span className="font-medium">Tech Stack:</span> Next.js, React, Node.js, TypeScript
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://social-media-desktop.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View Project <ExternalLink size={14} />
                </a>
                <a 
                  href="https://github.com/rmcguiness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-700 font-medium text-sm"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">MKR E-commerce</h3>
              <p className="text-slate-600 mb-4">
                A fully functional e-commerce storefront with shopping cart state management and integrated payment processing. 
                Built to practice designing modern e-commerce interfaces and handling secure transactions.
              </p>
              <p className="text-sm text-slate-500 mb-4">
                <span className="font-medium">Tech Stack:</span> React, Next.js, Stripe API, Sanity CMS
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://mkr-ecommerce.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View Project <ExternalLink size={14} />
                </a>
                <a 
                  href="https://github.com/rmcguiness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-700 font-medium text-sm"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">NextPlayground</h3>
              <p className="text-slate-600 mb-4">
                An experimental application built to implement and explore advanced concepts from Next.js official documentation. 
                Serves as a testing ground for new features including server components, routing patterns, and optimization techniques.
              </p>
              <p className="text-sm text-slate-500 mb-4">
                <span className="font-medium">Tech Stack:</span> Next.js, React, TypeScript
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://next-playground-rcm.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View Project <ExternalLink size={14} />
                </a>
                <a 
                  href="https://github.com/rmcguiness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-700 font-medium text-sm"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-900 mb-12 text-center"
          >
            Education
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-slate-50 rounded-xl p-8 border border-slate-200"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Lehigh University</h3>
                <p className="text-lg text-blue-600 font-medium">B.A. Computer Science</p>
              </div>
              <div className="text-slate-600 mt-2 md:mt-0 md:text-right">
                <p className="font-medium">January 2018 - May 2021</p>
              </div>
            </div>
            <p className="text-slate-700">
              <span className="font-medium">Relevant Coursework:</span> Design and Analysis of Algorithms, Programming Languages, Software Engineering, Systems Software
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-900 mb-12 text-center"
          >
            Interests
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Actively exploring opportunities at the intersection of frontend development and emerging technologies including 
              <span className="font-medium text-slate-900"> cryptocurrency</span>, 
              <span className="font-medium text-slate-900"> blockchain</span>, and 
              <span className="font-medium text-slate-900"> artificial intelligence</span> applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <p className="text-lg mb-4">Let's connect!</p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="mailto:ryanmcguiness123@gmail.com" className="hover:text-white transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
              <a href="tel:+17326758146" className="hover:text-white transition-colors" aria-label="Phone">
                <Phone size={24} />
              </a>
              <a href="https://rmcguiness.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Website">
                <Globe size={24} />
              </a>
              <a href="https://github.com/rmcguiness" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                <Github size={24} />
              </a>
            </div>
            <p className="text-sm text-slate-400">
              © 2024 Ryan McGuiness. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
