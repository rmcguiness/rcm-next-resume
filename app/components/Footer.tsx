import { Github, Mail, Phone, Download } from "lucide-react";

export default function Footer() {
  return (
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
  );
}
