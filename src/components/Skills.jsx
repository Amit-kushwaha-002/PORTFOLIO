import React from 'react';
import { Layers, Terminal, Layout, Server, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Languages':
        return <Terminal className="w-4 h-4 text-brand-blue" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-brand-blue" />;
      case 'Backend':
        return <Server className="w-4 h-4 text-brand-blue" />;
      case 'Database':
        return <Database className="w-4 h-4 text-brand-blue" />;
      case 'Tools':
        return <Wrench className="w-4 h-4 text-brand-blue" />;
      default:
        return <Layers className="w-4 h-4 text-brand-blue" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 bg-surface-alt border-b border-border-default">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue-tint text-brand-blue border border-brand-blue-border mb-2">
            Technical Taxonomy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-heading tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-2 text-text-muted text-base max-w-2xl">
            Structured skill areas categorized according to core development domains.
          </p>
        </div>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-white border border-border-default rounded-xl p-6 shadow-unesco-card card-lift flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-default">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-brand-blue-tint flex items-center justify-center">
                      {getCategoryIcon(skillGroup.category)}
                    </div>
                    <h3 className="text-base font-bold text-text-heading">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-surface-muted text-text-muted">
                    {skillGroup.items.length} {skillGroup.items.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>

                {/* Tag / Chip Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-surface-page text-text-body border border-border-default hover:border-brand-blue-border hover:bg-brand-blue-tint hover:text-brand-blue transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-5 pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted">
                <span className="font-medium text-text-subtle">Domain Category</span>
                <span className="font-semibold text-text-body">{skillGroup.category} Matrix</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
