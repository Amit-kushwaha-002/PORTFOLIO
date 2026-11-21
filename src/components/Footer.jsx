import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-slate-300 pt-14 pb-10 border-t border-brand-navy-light" aria-label="Page Footer">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center text-white font-bold text-base shadow-sm">
                {portfolioData.personal.initials}
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {portfolioData.personal.tagline} Focused on high-performance full-stack web architectures and intelligent systems.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {portfolioData.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-brand-blue flex items-center justify-center text-slate-300 hover:text-white transition-all border border-white/10"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-brand-blue flex items-center justify-center text-slate-300 hover:text-white transition-all border border-white/10"
                aria-label="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-brand-blue flex items-center justify-center text-slate-300 hover:text-white transition-all border border-white/10"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>{portfolioData.footer.copyright}</p>
          </div>

          <div className="flex items-center gap-6">
            <span>Designed with UNESCO-inspired institutional layout</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
