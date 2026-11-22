import React from 'react';
import { ArrowRight, Mail, FolderGit2, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-border-default bg-white">
      {/* Decorative UNESCO subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation - UNESCO Style */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-text-muted mb-6" aria-label="Breadcrumb">
          <span className="hover:text-brand-blue cursor-default">Portfolio</span>
          <span className="text-text-subtle">/</span>
          <span className="hover:text-brand-blue cursor-default">Profile</span>
          <span className="text-text-subtle">/</span>
          <span className="text-brand-blue font-medium">{portfolioData.personal.role}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-brand-blue-tint text-brand-blue border border-brand-blue-border">
                <Sparkles className="w-3.5 h-3.5" />
                {portfolioData.personal.role}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {portfolioData.personal.status}
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading tracking-tight leading-[1.12]">
              {portfolioData.personal.name}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl md:text-2xl text-text-muted font-normal leading-relaxed max-w-3xl">
              {portfolioData.personal.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-blue text-white font-semibold text-base hover:bg-brand-blue-dark shadow-sm hover:shadow-md transition-all active:translate-y-0 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-brand-blue text-brand-blue font-semibold text-base hover:bg-brand-blue-tint transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics / Institutional Sidebar Card - UNESCO Style */}
          <div className="lg:col-span-4">
            <div className="bg-surface-page border border-border-default rounded-xl p-6 shadow-unesco-card space-y-4">
              <div className="border-b border-border-default pb-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-text-muted">
                  Technical Profile Overview
                </span>
                <h2 className="text-base font-bold text-text-heading mt-0.5">
                  Core Specialization
                </h2>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-heading">Primary Stack: </span>
                    <span className="text-text-body">MERN (React, Node.js, Express, MongoDB)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-heading">Core Skills: </span>
                    <span className="text-text-body">C, C++, Python, RESTful APIs, OOPs,</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-heading">AI Integration: </span>
                    <span className="text-text-body">Deep Learning Models, Voice Assistants</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-heading">Collaboration: </span>
                    <span className="text-text-body">Git, GitHub</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-border-default">
                <div className="flex items-center justify-between text-xs text-text-muted">
                  <span>Location</span>
                  <span className="font-semibold text-text-heading">{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
