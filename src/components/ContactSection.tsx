/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Copy, Check, Send, Github, Linkedin, Database, Sparkles, MessageSquare, User, Code2, Phone, FileText } from 'lucide-react';
import { personalInfo } from '../data';

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? 'e058e61f-5e0d-4caf-a87a-2514ae6ecfbf';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(personalInfo.email)}`;

async function submitViaWeb3Forms(payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
      subject: `Portfolio Inquiry from ${payload.name}`,
    }),
  });

  const result = (await response.json()) as { success?: boolean };
  return response.ok && Boolean(result.success);
}

async function submitViaFormSubmit(payload: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
      _subject: `Portfolio Inquiry from ${payload.name}`,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  const result = (await response.json()) as { success?: boolean | string; message?: string };
  const isSuccess = result.success === true || result.success === 'true';

  if (!isSuccess) {
    throw new Error(result.message || 'Form submission failed');
  }
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'validation-error' | 'submit-error'>('idle');

  // Copy email to clipboard helper
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Input change handler with phone numbers-only sanitization
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;
    if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneDigits = formData.phone.replace(/\D/g, '');

    if (
      !formData.name ||
      !formData.email ||
      !emailRegex.test(formData.email) ||
      !formData.message ||
      phoneDigits.length !== 10
    ) {
      setSubmitStatus('validation-error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      const sentViaWeb3Forms = await submitViaWeb3Forms(payload);
      if (!sentViaWeb3Forms) {
        await submitViaFormSubmit(payload);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('submit-error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pt-10 md:pt-12 pb-20 md:pb-28 relative overflow-hidden bg-brand-bg">
      <div className="absolute bottom-[10%] left-[-5%] w-80 h-80 bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid: Left details, Right Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details Overview */}
          <motion.div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Header info */}
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-brand-cyan uppercase block mb-2">
                GET IN TOUCH
              </span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight">
                Let's <span className="bg-gradient-to-r from-brand-cyan to-blue-400 bg-clip-text text-transparent">Connect</span>
              </h2>
              <div className="w-16 h-[3px] bg-brand-cyan mt-4 mb-6" />
              
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Looking for a dedicated Data Analyst? Send a direct message through the inquiry form or connect via professional platforms.
              </p>
            </div>

            {/* List Contact Elements */}
            <div className="space-y-6">
              
              {/* Official Email */}
              <div className="p-4 rounded-xl bg-slate-950/40 border border-white/5 hover:border-brand-cyan/20 transition-all flex items-center space-x-4">
                <div className="w-11 h-11 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <span className="text-[9px] font-mono font-bold text-slate-500 tracking-wider uppercase block">
                    OFFICIAL EMAIL
                  </span>
                  <span className="text-sm md:text-base font-semibold text-white truncate block">
                    {personalInfo.email}
                  </span>
                </div>
                
                {/* Click Copy Button element */}
                <button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="p-2 rounded hover:bg-white/5 text-slate-500 hover:text-white transition-colors focus:outline-none"
                  title="Copy to Clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-brand-emerald animate-in fade-in" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Work Location */}
              <div className="p-4 rounded-xl bg-slate-950/40 border border-white/5 hover:border-brand-cyan/20 transition-all flex items-center space-x-4">
                <div className="w-11 h-11 rounded-lg bg-brand-emerald/10 flex items-center justify-center text-brand-emerald shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-mono font-bold text-slate-500 tracking-wider uppercase block">
                    WORK LOCATION
                  </span>
                  <span className="text-sm md:text-base font-semibold text-slate-300 block">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center space-x-3 text-xs font-mono">
                <Sparkles className="w-4 h-4 animate-pulse shrink-0" />
                <span>Open for full-time Data Analyst roles & technical co-ops.</span>
              </div>

            </div>

            {/* Social Grid */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold text-slate-500 tracking-widest uppercase block">
                PROFESSIONAL & CODING PROFILES
              </span>

              <div className="flex flex-wrap gap-4">
                <a
                  id="contact-github-link"
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2.5 px-4.5 py-3 rounded-xl bg-slate-950 border border-slate-900 hover:border-brand-cyan/40 text-slate-400 hover:text-white transition-all shadow-md"
                >
                  <Github className="w-4.5 h-4.5 group-hover:text-brand-cyan group-hover:scale-110 transition-all" />
                  <span className="font-display font-semibold text-xs tracking-wide">GitHub</span>
                </a>

                <a
                  id="contact-linkedin-link"
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2.5 px-4.5 py-3 rounded-xl bg-slate-950 border border-slate-900 hover:border-brand-cyan/40 text-slate-400 hover:text-white transition-all shadow-md"
                >
                  <Linkedin className="w-4.5 h-4.5 group-hover:text-brand-cyan group-hover:scale-110 transition-all" />
                  <span className="font-display font-semibold text-xs tracking-wide">LinkedIn</span>
                </a>

                <a
                  id="contact-leetcode-link"
                  href={personalInfo.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2.5 px-4.5 py-3 rounded-xl bg-slate-950 border border-slate-900 hover:border-brand-cyan/40 text-slate-400 hover:text-white transition-all shadow-md"
                >
                  <Code2 className="w-4.5 h-4.5 group-hover:text-brand-cyan group-hover:scale-110 transition-all" />
                  <span className="font-display font-semibold text-xs tracking-wide">LeetCode</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Inquiry Form Card */}
          <motion.div className="lg:col-span-7 relative">
            {/* Orbiting Tech Symbols on Card Border */}
            <div className="absolute inset-0 pointer-events-none z-10">

              {/* Python Symbol */}
              <div className="absolute animate-orbit-python pointer-events-none">
                <div className="pointer-events-auto group/symbol relative p-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-lg hover:border-[#3776AB]/50 hover:shadow-[0_0_15px_rgba(55,118,171,0.4)] transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 md:w-6 h-6" fill="currentColor">
                    <path d="M14.25.18c.9 0 1.66.73 1.66 1.65v2.77h-3.72a2.21 2.21 0 0 0-2.22 2.21v2.77H7.19A2.21 2.21 0 0 0 5 11.8v3.88c0 .91.75 1.66 1.66 1.66h.55V14.6c0-2.02 1.64-3.66 3.66-3.66h3.6c2.02 0 3.66-1.64 3.66-3.66v-3.6A3.67 3.67 0 0 0 17.84.18H14.25z" fill="#3776AB"/>
                    <path d="M9.75 23.82c-.9 0-1.66-.73-1.66-1.65v-2.77h3.72a2.21 2.21 0 0 0 2.22-2.21v-2.77h2.78a2.21 2.21 0 0 0 2.19-2.21V8.33c0-.91-.75-1.66-1.66-1.66h-.55v2.77c0 2.02-1.64 3.66-3.66 3.66h-3.6c-2.02 0-3.66 1.64-3.66 3.66v3.6a3.67 3.67 0 0 0 3.66 3.66h3.59z" fill="#FFD343"/>
                    <circle cx="9.02" cy="3.5" r="0.75" fill="#F8FAFC"/>
                    <circle cx="14.98" cy="20.5" r="0.75" fill="#1E293B"/>
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-950 text-[10px] text-slate-300 font-mono py-1 px-2 rounded border border-white/10 opacity-0 group-hover/symbol:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
                    Python
                  </span>
                </div>
              </div>

              {/* Excel Symbol */}
              <div className="absolute animate-orbit-excel pointer-events-none">
                <div className="pointer-events-auto group/symbol relative p-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-lg hover:border-[#107C41]/50 hover:shadow-[0_0_15px_rgba(16,124,65,0.4)] transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 md:w-6 h-6">
                    <rect x="3" y="3" width="18" height="18" rx="3" fill="#107C41" />
                    <path d="M10 6h8v12h-8z" fill="#fff" opacity="0.15" />
                    <path d="M10 10h8M10 14h8M14 6v12" stroke="#fff" strokeWidth="1" opacity="0.3" />
                    <rect x="4.5" y="7.5" width="7" height="9" rx="1" fill="#fff" />
                    <path d="M6 9.5l4 5M10 9.5L6 14.5" stroke="#107C41" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-950 text-[10px] text-slate-300 font-mono py-1 px-2 rounded border border-white/10 opacity-0 group-hover/symbol:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
                    Excel
                  </span>
                </div>
              </div>

              {/* MySQL Symbol */}
              <div className="absolute animate-orbit-mysql pointer-events-none">
                <div className="pointer-events-auto group/symbol relative p-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-lg hover:border-[#00758F]/50 hover:shadow-[0_0_15px_rgba(0,117,143,0.4)] transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 md:w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 6c0-1.657 3.582-3 8-3s8 1.343 8 3M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6" stroke="#00758F" />
                    <path d="M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" stroke="#F29111" />
                    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00758F" fillOpacity="0.2" />
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-950 text-[10px] text-slate-300 font-mono py-1 px-2 rounded border border-white/10 opacity-0 group-hover/symbol:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
                    MySQL
                  </span>
                </div>
              </div>

              {/* Power BI Symbol */}
              <div className="absolute animate-orbit-powerbi pointer-events-none">
                <div className="pointer-events-auto group/symbol relative p-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-lg hover:border-[#F2C811]/50 hover:shadow-[0_0_15px_rgba(242,200,17,0.4)] transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 md:w-6 h-6" fill="none">
                    <rect x="4" y="12" width="3.5" height="8" rx="0.8" fill="#F2C811" />
                    <rect x="10.25" y="7" width="3.5" height="13" rx="0.8" fill="#F29F05" />
                    <rect x="16.5" y="3" width="3.5" height="17" rx="0.8" fill="#E27602" />
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-950 text-[10px] text-slate-300 font-mono py-1 px-2 rounded border border-white/10 opacity-0 group-hover/symbol:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
                    Power BI
                  </span>
                </div>
              </div>

              {/* Tableau Symbol */}
              <div className="absolute animate-orbit-tableau pointer-events-none">
                <div className="pointer-events-auto group/symbol relative p-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 shadow-lg hover:border-brand-purple/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-300 transform hover:scale-110 cursor-pointer">
                  <svg viewBox="0 0 24 24" className="w-5.5 h-5.5 md:w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" stroke="var(--season-accent)" opacity="0.8" />
                    <circle cx="12" cy="12" r="2.5" fill="var(--season-primary)" />
                    <circle cx="12" cy="5" r="1.5" fill="var(--season-secondary)" />
                    <circle cx="12" cy="19" r="1.5" fill="var(--season-secondary)" />
                    <circle cx="5" cy="12" r="1.5" fill="var(--season-secondary)" />
                    <circle cx="21" cy="12" r="1.5" fill="var(--season-secondary)" />
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-slate-950 text-[10px] text-slate-300 font-mono py-1 px-2 rounded border border-white/10 opacity-0 group-hover/symbol:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md z-20">
                    Tableau
                  </span>
                </div>
              </div>
            </div>

            <div
              id="inquiry-form-card"
              className="relative rounded-3xl bg-brand-card/75 border border-white/5 p-5 pb-10 md:p-6 md:pb-12 shadow-2xl overflow-hidden group hover:border-brand-cyan/25 transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

              {/* Card Header information */}
              <div className="mb-4 text-left">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-6 h-6 text-brand-cyan shrink-0" />
                  <h3 className="font-display font-extrabold text-xl text-white tracking-tight">
                    Inquiry Form
                  </h3>
                </div>
                <p className="text-xs text-slate-400 font-light mt-1">
                  Your details will be directly sent to: <span className="text-brand-cyan font-mono border-b border-brand-cyan/40 pb-0.5">{personalInfo.email}</span>
                </p>
              </div>

              {/* Alert Status messages */}
              {submitStatus === 'success' && (
                <div id="contact-success-alert" className="mb-6 p-4 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald text-sm text-left animate-in fade-in zoom-in-95 duration-150">
                  <strong>Success!</strong> Your professional inquiry has been sent to Ravi Teja. He will coordinate with your recruitment desk shortly.
                </div>
              )}

              {submitStatus === 'validation-error' && (
                <div id="contact-error-alert" className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm text-left animate-in fade-in zoom-in-95 duration-150">
                  <strong>Validation Alert!</strong> Please populate all mandatory inputs: Full Name, a valid Email address, a message, and a 10-digit Phone number before dispatch.
                </div>
              )}

              {submitStatus === 'submit-error' && (
                <div id="contact-submit-error-alert" className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm text-left animate-in fade-in zoom-in-95 duration-150">
                  <strong>Dispatch Failed!</strong> Your inquiry could not be sent right now. Please try again or email directly at {personalInfo.email}.
                </div>
              )}

              {/* Ingestion In-Flight Form */}
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {/* Name */}
                <div className="space-y-1.5 group/field">
                  <label htmlFor="form-name" className="text-[11px] font-display font-semibold text-orange-400 tracking-wide flex items-center uppercase transition-all duration-300 group-focus-within/field:translate-x-1 cursor-pointer">
                    <User className="w-3.5 h-3.5 mr-1.5 text-orange-400 transition-all duration-300 group-focus-within/field:scale-110" />
                    FULL NAME *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your professional name"
                      className="w-full bg-slate-950/80 rounded-xl px-4.5 py-2.5 text-sm text-white placeholder-slate-600 border border-brand-cyan/30 focus:border-brand-cyan/50 focus:outline-none transition-all shadow-inner"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5 group/field">
                  <label htmlFor="form-email" className="text-[11px] font-display font-semibold text-orange-400 tracking-wide flex items-center uppercase transition-all duration-300 group-focus-within/field:translate-x-1 cursor-pointer">
                    <Mail className="w-3.5 h-3.5 mr-1.5 text-orange-400 transition-all duration-300 group-focus-within/field:scale-110" />
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="corporate@company.com"
                    className="w-full bg-slate-950/80 rounded-xl px-4.5 py-2.5 text-sm text-white placeholder-slate-600 border border-brand-cyan/30 focus:border-brand-cyan/50 focus:outline-none transition-all shadow-inner"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5 group/field">
                  <label htmlFor="form-phone" className="text-[11px] font-display font-semibold text-orange-400 tracking-wide flex items-center uppercase transition-all duration-300 group-focus-within/field:translate-x-1 cursor-pointer">
                    <Phone className="w-3.5 h-3.5 mr-1.5 text-orange-400 transition-all duration-300 group-focus-within/field:scale-110" />
                    PHONE NUMBER (10 DIGITS) *
                  </label>
                  <input
                    type="tel"
                    id="form-phone"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit number"
                    className="w-full bg-slate-950/80 rounded-xl px-4.5 py-2.5 text-sm text-white placeholder-slate-600 border border-brand-cyan/30 focus:border-brand-cyan/50 focus:outline-none transition-all shadow-inner"
                  />
                </div>

                {/* Message context */}
                <div className="space-y-1.5 group/field">
                  <label htmlFor="form-message" className="text-[11px] font-display font-semibold text-orange-400 tracking-wide flex items-center uppercase transition-all duration-300 group-focus-within/field:translate-x-1 cursor-pointer">
                    <FileText className="w-3.5 h-3.5 mr-1.5 text-orange-400 transition-all duration-300 group-focus-within/field:scale-110" />
                    LINE OF INQUIRY *
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share the context of your inquiry, role, or project in a few clear lines..."
                    className="w-full bg-slate-950/80 rounded-xl px-4.5 py-2.5 text-sm text-white placeholder-slate-600 border border-brand-cyan/30 focus:border-brand-cyan/50 focus:outline-none transition-all shadow-inner resize-none"
                  />
                </div>

                {/* Submition dispatch button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-xl bg-brand-cyan hover:bg-brand-cyan/95 disabled:bg-slate-800 text-brand-bg disabled:text-slate-500 font-display font-black tracking-widest uppercase transition-all shadow-lg hover:shadow-[0_4px_25px_rgba(14,165,233,0.3)] transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer focus:outline-none ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                >
                  <Send className="w-4.5 h-4.5" />
                  <span>{isSubmitting ? 'DISPATCHING...' : 'SEND INQUIRY'}</span>
                </button>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
