'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Globe, ExternalLink } from 'lucide-react';

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
              Ryan C. McGuiness
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
              Software Engineer with over <span className="font-semibold text-slate-900">4 years of professional experience</span> developing full-stack software solutions, 
              specializing in front-end technologies. Proven track record of being a reliable teammate and developer, 
              capable of solving problems and delivering high-quality code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-900 mb-12 text-center"
          >
            Experience
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            {/* Perficient - Software Engineer */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Software Engineer</h3>
                  <p className="text-lg text-blue-600 font-medium">Perficient, Inc.</p>
                </div>
                <div className="text-slate-600 mt-2 md:mt-0 md:text-right">
                  <p className="font-medium">June 2022 - Present</p>
                  <p className="text-sm">Allentown, PA</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Developed and optimized headless e-commerce websites using <span className="font-medium">Next.js</span> and <span className="font-medium">TypeScript</span>. Utilized Next.js' client and server components to improve performance, SEO, and UI/UX.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Spearheaded multiple high-priority items for clients, such as initializing <span className="font-medium">Jest</span> for robust testing, and setting up Mock Service Workers to simulate API responses. Resulting in <span className="font-medium">improving code coverage by 90%</span> on the entire codebase.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Collaborated with management, developers, and quality assurance to create tasks, assign deadlines, and deliver software solutions on time in accordance with project goals and expectations.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Leveraged Figma blueprints, translating them into code while adhering to best coding practices for enhanced readability and performance optimization. Styled pages using CSS, Tailwind, or Sass.</span>
                </li>
              </ul>
            </motion.div>

            {/* Perficient - Associate Software Engineer */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Associate Software Engineer</h3>
                  <p className="text-lg text-blue-600 font-medium">Perficient, Inc.</p>
                </div>
                <div className="text-slate-600 mt-2 md:mt-0 md:text-right">
                  <p className="font-medium">June 2021 - June 2022</p>
                  <p className="text-sm">Allentown, PA</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Leveraged <span className="font-medium">PHP, HTML, CSS, JavaScript, and MySQL</span> on the Magento framework to design, build, and deploy business and customer-facing e-commerce web pages.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Quickly adapted to new projects by rapidly learning new programming languages and mastering extensive codebases, enabling meaningful contributions and solutions promptly.</span>
                </li>
              </ul>
            </motion.div>

            {/* Lapis Health */}
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Software Engineer Intern</h3>
                  <p className="text-lg text-blue-600 font-medium">Lapis Health</p>
                </div>
                <div className="text-slate-600 mt-2 md:mt-0 md:text-right">
                  <p className="font-medium">September 2020 - December 2020</p>
                  <p className="text-sm">Remote</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Assisted in building a production-grade <span className="font-medium">React</span> application using Redux, Stripe, Slate.js, and the Material-UI library.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Contributed to a RESTful <span className="font-medium">Python</span> backend using Flask with a PostgreSQL database for persistent storage and a comprehensive test suite.</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl font-bold text-slate-900 mb-12 text-center"
          >
            Skills
          </motion.h2>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">5+ Years</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React.js', 'HTML', 'CSS', 'Git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">3-4 Years</h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Node.js', 'Python', 'PHP'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">1-2 Years</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'C/C++', 'React Native'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
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
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Next.js Playground</h3>
              <p className="text-slate-600 mb-4">
                Designed and developed a Next.js website, connected to Supabase, to practice and test different Next.js development strategies. 
                Also used to mock portfolios, restaurant pages, and e-commerce pages.
              </p>
              <a 
                href="https://next-playground-swart-alpha.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                View Project <ExternalLink size={16} />
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">E-commerce Website</h3>
              <p className="text-slate-600 mb-4">
                Built an e-commerce site with React.js connected to a Sanity database and integrated Stripe to handle online transactions.
              </p>
              <a 
                href="https://mkr-ecommerce.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                View Project <ExternalLink size={16} />
              </a>
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
            variants={stagger}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Lehigh University</h3>
                  <p className="text-lg text-blue-600 font-medium">BA Double Major: Computer Science & Economics</p>
                </div>
                <div className="text-slate-600 mt-2 md:mt-0 md:text-right">
                  <p className="font-medium">January 2018 - May 2021</p>
                  <p className="text-sm">Bethlehem, PA</p>
                </div>
              </div>
              <p className="text-slate-700">
                <span className="font-medium">Relevant Coursework:</span> Design and Analysis of Algorithms, Programming Languages, Software Engineering, Systems Software
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Udemy Certifications</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>MERN Fullstack Guide: MongoDB, Express, React, Node.js</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>React - The Complete Guide: React, Hooks, Redux, React Router, Next.js, and Best Practices</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <p className="text-lg mb-4">Let's connect!</p>
            <div className="flex justify-center gap-6 mb-6">
              <a href="mailto:ryanmcguiness123@gmail.com" className="hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+17326758146" className="hover:text-white transition-colors">
                <Phone size={24} />
              </a>
              <a href="https://rmcguiness.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Globe size={24} />
              </a>
            </div>
            <p className="text-sm text-slate-400">
              © 2024 Ryan C. McGuiness. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
