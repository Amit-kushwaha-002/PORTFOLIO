import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Optional mailto trigger
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-border-default">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-blue-tint text-brand-blue border border-brand-blue-border mb-2">
            Communication Channel
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-heading tracking-tight">
            Contact & Connect
          </h2>
          <p className="mt-2 text-text-muted text-base max-w-2xl">
            {portfolioData.contact.note}
          </p>
        </div>

        {/* 2-Column Split: Direct Contact Cards vs. Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Direct Communication Channels Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-text-heading mb-4">
              Direct Contact Details
            </h3>

            {/* Email Card with Copy Action */}
            <div className="bg-surface-page border border-border-default rounded-xl p-5 shadow-unesco-card card-lift space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue-tint text-brand-blue flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Direct Email
                    </span>
                    <p className="text-sm sm:text-base font-bold text-text-heading break-all">
                      {portfolioData.contact.email}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-md hover:bg-white text-text-muted hover:text-brand-blue border border-transparent hover:border-border-default transition-all"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="pt-2 border-t border-border-default flex items-center justify-between">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="text-xs font-semibold text-brand-blue hover:text-brand-blue-dark flex items-center gap-1"
                >
                  <span>Open in Mail Client</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                {copied && (
                  <span className="text-xs font-medium text-emerald-600">Copied to clipboard!</span>
                )}
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-surface-page border border-border-default rounded-xl p-5 shadow-unesco-card card-lift group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Professional Network
                    </span>
                    <p className="text-sm sm:text-base font-bold text-text-heading group-hover:text-brand-blue transition-colors">
                      LinkedIn Profile
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-text-subtle group-hover:text-brand-blue transition-colors" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-surface-page border border-border-default rounded-xl p-5 shadow-unesco-card card-lift group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                      Source Code Repository
                    </span>
                    <p className="text-sm sm:text-base font-bold text-text-heading group-hover:text-brand-blue transition-colors">
                      GitHub Profile
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-text-subtle group-hover:text-brand-blue transition-colors" />
              </div>
            </a>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-surface-page border border-border-default rounded-xl p-6 sm:p-8 shadow-unesco-card">
              <h3 className="text-lg font-bold text-text-heading mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-text-muted mb-6">
                Fill out the form below. Submitted messages will directly populate your mail client or confirm delivery.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">
                    Message Prepared & Sent!
                  </h4>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto">
                    Thank you, {formData.name}. Your message draft has been formatted and opened in your email client.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-3 px-4 py-2 text-xs font-semibold rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-text-heading mb-1.5">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-text-body placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                        errors.name ? 'border-red-500 focus:ring-red-200' : 'border-border-default'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-text-heading mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-text-body placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all ${
                        errors.email ? 'border-red-500 focus:ring-red-200' : 'border-border-default'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-text-heading mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide details about your project, inquiry, or engineering collaboration..."
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-text-body placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all resize-none ${
                        errors.message ? 'border-red-500 focus:ring-red-200' : 'border-border-default'
                      }`}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="text-xs text-red-600 mt-1 font-medium">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-dark shadow-sm hover:shadow transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
