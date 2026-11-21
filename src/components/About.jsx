import React from 'react';
import { User, Code2, Cpu, GitBranch, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-surface-alt border-b border-border-default">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue-tint text-brand-blue border border-brand-blue-border mb-2">
            Professional Profile
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-heading tracking-tight">
            About
          </h2>
          <p className="mt-2 text-text-muted text-base max-w-2xl">
            Computer Science undergrad focused on production-ready MERN backends, clean frontend UX, and applied AI.</p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Biography Text Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-border-default rounded-xl p-6 sm:p-8 shadow-unesco-card space-y-5">
              <h3 className="text-xl font-bold text-text-heading flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-brand-blue" />
                <span>Full Stack Engineering & Problem Solving</span>
              </h3>

              <p className="text-base sm:text-lg text-text-body leading-relaxed">
              </p>

              <div className="pt-4 border-t border-border-default grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-surface-page border border-border-default">
                  <div className="flex items-center gap-2 font-semibold text-text-heading text-sm mb-1">
                    <Cpu className="w-4 h-4 text-brand-blue" />
                    <span>Scalable Web Architecture</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Developing modular MERN backends and interactive React frontends designed for high throughput and clean maintainability.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface-page border border-border-default">
                  <div className="flex items-center gap-2 font-semibold text-text-heading text-sm mb-1">
                    <ShieldCheck className="w-4 h-4 text-brand-blue" />
                    <span>Security & Optimization</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Implementing JWT auth mechanisms, MVC structure, and strong algorithmic problem-solving with C++ and OOP principles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Photo Placeholder & Fact Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-border-default rounded-xl p-6 shadow-unesco-card text-center space-y-4">
              {/* Profile Photo */}
              <div className="mx-auto w-52 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-brand-blue-border shadow-md relative group bg-slate-100">
                <img
                  src={portfolioData.personal.photo}
                  alt={portfolioData.personal.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h4 className="text-lg font-bold text-text-heading">
                  {portfolioData.personal.name}
                </h4>
                <p className="text-xs font-medium text-text-muted mt-0.5">
                  {portfolioData.personal.role}
                </p>
              </div>

              <div className="pt-3 border-t border-border-default space-y-2 text-left text-xs">
                <div className="flex justify-between py-1 border-b border-surface-alt">
                  <span className="text-text-muted">Specialization</span>
                  <span className="font-semibold text-text-heading">MERN Stack</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-alt">
                  <span className="text-text-muted">Problem Solving</span>
                  <span className="font-semibold text-text-heading">C++ & OOPs</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-text-muted">Version Control</span>
                  <span className="font-semibold text-text-heading">Git / GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
