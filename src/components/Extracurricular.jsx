import React from 'react';
import { Users2, GitPullRequest, Trophy, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Extracurricular() {
  return (
    <section className="py-14 sm:py-16 bg-surface-alt border-b border-border-default">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-brand-blue-border rounded-xl p-6 sm:p-8 shadow-unesco-card card-lift relative overflow-hidden">
          {/* Subtle top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-brand-blue" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue-tint text-brand-blue border border-brand-blue-border">
                <Trophy className="w-3.5 h-3.5" />
                <span>{portfolioData.extracurricular.badge}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-text-heading">
                {portfolioData.extracurricular.title}
              </h2>

              <p className="text-sm sm:text-base text-text-body leading-relaxed">
                {portfolioData.extracurricular.description}
              </p>
            </div>

            {/* Highlights List */}
            <div className="lg:max-w-md w-full bg-surface-page border border-border-default rounded-lg p-4 space-y-2.5 text-xs sm:text-sm">
              <span className="font-semibold text-text-heading block mb-1">
                Collaborative Principles
              </span>
              {portfolioData.extracurricular.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-text-body">
                  <GitPullRequest className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
