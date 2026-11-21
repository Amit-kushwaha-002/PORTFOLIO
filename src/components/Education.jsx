import React from 'react';
import { GraduationCap, Calendar, Building2, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-white border-b border-border-default">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue-tint text-brand-blue border border-brand-blue-border mb-2">
            Academic Background
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-heading tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-2 text-text-muted text-base max-w-2xl">
            Formal engineering foundations and computer science degree program.
          </p>
        </div>

        {/* Education Timeline Card - UNESCO Institutional Record Style */}
        <div className="max-w-4xl space-y-6">
          {portfolioData.education.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-border-default border-l-4 border-l-brand-blue rounded-r-xl rounded-l-md p-6 sm:p-8 shadow-unesco-card card-lift"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-tint text-brand-blue flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-text-heading leading-tight">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-text-muted mt-1">
                      <Building2 className="w-4 h-4 text-text-subtle" />
                      <span className="font-medium text-text-body">{item.institution}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface-muted text-text-body border border-border-default">
                    <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {item.status}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-border-default">
                <p className="text-sm text-text-body leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-surface-alt text-text-muted border border-border-default font-medium">
                  Data Structures & Algorithms
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-alt text-text-muted border border-border-default font-medium">
                  Object-Oriented Programming (OOP)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-alt text-text-muted border border-border-default font-medium">
                  Database Management Systems
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-alt text-text-muted border border-border-default font-medium">
                  Full Stack Web Development
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
