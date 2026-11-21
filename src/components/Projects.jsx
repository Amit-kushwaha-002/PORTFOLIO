import React, { useState, useMemo } from 'react';
import { Search, FolderGit2, ExternalLink, Filter, Check, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return portfolioData.projects.filter((project) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'All' || project.categories.includes(selectedCategory);

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.bullets.some((b) => b.toLowerCase().includes(query)) ||
        project.techStack.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white border-b border-border-default">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue-tint text-brand-blue border border-brand-blue-border mb-2">
            Portfolio Measures & Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-heading tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-2 text-text-muted text-base max-w-2xl">
            Hands-on software systems spanning full-stack web applications, authentication engines, and AI implementations.
          </p>
        </div>

        {/* Filter & Search Toolbar - UNESCO Policy Platform Pattern */}
        <div className="bg-surface-page border border-border-default rounded-xl p-4 sm:p-5 mb-8 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by keyword, tech or feature..."
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-border-default rounded-lg text-text-body placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all"
                aria-label="Search projects"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-medium text-text-muted hover:text-text-body"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs sm:text-sm font-medium text-text-muted">
              Showing <span className="font-bold text-text-heading">{filteredProjects.length}</span> of {portfolioData.projects.length} projects
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-2 border-t border-border-default flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none" role="tablist" aria-label="Project Categories">
            <span className="text-xs font-semibold text-text-muted flex items-center gap-1.5 shrink-0 mr-1 hidden sm:inline-flex">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>

            {portfolioData.projectCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-brand-blue text-white shadow-sm'
                      : 'bg-white text-text-body border border-border-default hover:bg-surface-muted hover:text-brand-blue'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid: 3-col on 1440px desktop, 2-col on 768px tablet, 1-col on 375px mobile */}
        {filteredProjects.length === 0 ? (
          <div className="bg-white border border-border-default rounded-xl p-12 text-center space-y-3">
            <p className="text-base font-semibold text-text-heading">No projects match your filter criteria.</p>
            <p className="text-sm text-text-muted">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-2 px-4 py-2 text-xs font-semibold rounded-md bg-brand-blue text-white hover:bg-brand-blue-dark transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-white border border-border-default rounded-xl p-6 shadow-unesco-card card-lift flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pills Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.categories.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-blue-tint text-brand-blue border border-brand-blue-border"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-text-heading group-hover:text-brand-blue transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs font-medium text-text-muted mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-6 text-sm text-text-body">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack & Action Links Footer */}
                <div className="pt-4 border-t border-border-default space-y-4">
                  {/* Tech Stack Pills */}
                  <div>
                    <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider block mb-2">
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-medium rounded bg-surface-muted text-text-body border border-border-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link (GitHub) */}
                  <div className="pt-1 flex items-center justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark group-hover:translate-x-0.5 transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FolderGit2 className="w-4 h-4" />
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <span className="text-xs text-text-subtle font-mono">
                      [PASTE REPO LINK]
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
