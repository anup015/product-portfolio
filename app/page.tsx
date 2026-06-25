"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
  FileText,
  Mail,
  Menu,
  Phone,
  X
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBE2] font-sans antialiased text-[#03045E] pb-16">
      {/* Header/Navbar */}
      <header className="w-full bg-[#FDFBE2] sticky top-0 z-40 border-b border-[#03045E]/10 bg-[#FDFBE2]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <span className="text-xl font-bold tracking-tight text-[#03045E]">Anup Thakre</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className="text-sm font-bold text-[#03045E] hover:opacity-75 transition-opacity cursor-pointer">Home</button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-bold text-[#03045E] hover:opacity-75 transition-opacity cursor-pointer">About</button>
            <button onClick={() => scrollToSection("product-thinking")} className="text-sm font-bold text-[#03045E] hover:opacity-75 transition-opacity cursor-pointer">Product Thinking</button>
            <button onClick={() => scrollToSection("projects")} className="text-sm font-bold text-[#03045E] hover:opacity-75 transition-opacity cursor-pointer">Work</button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-bold text-[#03045E] hover:opacity-75 transition-opacity cursor-pointer">Contact</button>
          </nav>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="mailto:anupthakre.works@gmail.com"
              className="text-[#03045E] hover:opacity-75"
              aria-label="Email"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://github.com/anup015"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#03045E] hover:opacity-75"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/anup-thakre/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#03045E] hover:opacity-75"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>

          {/* Mobile Nav Button */}
          <button
            className="flex md:hidden items-center justify-center p-2 text-[#03045E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#03045E] bg-[#FDFBE2] px-6 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("hero")} className="text-left text-sm font-bold text-[#03045E] py-1">Home</button>
            <button onClick={() => scrollToSection("about")} className="text-left text-sm font-bold text-[#03045E] py-1">About</button>
            <button onClick={() => scrollToSection("product-thinking")} className="text-left text-sm font-bold text-[#03045E] py-1">Product Thinking</button>
            <button onClick={() => scrollToSection("projects")} className="text-left text-sm font-bold text-[#03045E] py-1">Work</button>
            <button onClick={() => scrollToSection("contact")} className="text-left text-sm font-bold text-[#03045E] py-1">Contact</button>
            <div className="flex gap-4 pt-2 border-t border-gray-200">
              <a href="https://github.com/anup015" target="_blank" rel="noopener noreferrer" className="text-[#03045E] text-xs font-bold">GitHub</a>
              <a href="https://linkedin.com/in/anup-thakre/" target="_blank" rel="noopener noreferrer" className="text-[#03045E] text-xs font-bold">LinkedIn</a>
              <a href="mailto:anupthakre.works@gmail.com" className="text-[#03045E] text-xs font-bold">Email</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-12 md:py-24 bg-[#FDFBE2]">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

          {/* Left Text Column */}
          <div className="md:col-span-7 flex flex-col gap-4">
            <span className="text-lg font-bold text-[#03045E]">Hello, I'm Anup,</span>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#03045E] leading-[0.9] flex flex-col">
              <span>Product</span>
              <span>Builder</span>
            </h1>

            <span className="text-lg font-bold text-[#03045E] mt-2">based in Nagpur.</span>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/Anup%20Thakre%20-%20Product.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-sm border border-[#03045E] bg-[#F5E88F] px-8 text-sm font-bold text-[#03045E] hover:bg-[#ebd96e] transition-colors shadow-[3.5px_3.5px_0px_0px_#03045E] cursor-pointer"
              >
                View Resume
              </a>
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex h-11 items-center justify-center rounded-sm border border-[#03045E] bg-transparent px-8 text-sm font-bold text-[#03045E] hover:bg-[#03045E]/5 transition-colors cursor-pointer"
              >
                Explore Work
              </button>
            </div>
          </div>

          {/* Right Circular Photo Column */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative">
              {/* Star/Plus decorations at top right */}
              <div className="absolute -top-6 -right-6 text-[#4A5D11] flex flex-col items-center">
                <span className="text-3xl font-light font-sans leading-none">+</span>
                <span className="text-xl font-light font-sans leading-none -mt-2 ml-4">+</span>
              </div>

              {/* Background offset circle outline */}
              <div className="absolute top-2 -left-4 w-64 h-64 md:w-80 md:h-80 rounded-full border border-[#4A5D11] z-0"></div>

              {/* Circular Border and Image */}
              <div className="relative z-10 h-64 w-64 md:h-80 md:w-80 rounded-full border border-[#03045E] overflow-hidden bg-[#FAF9D8]">
                {/* User Portrait Photo */}
                <img
                  src="/my-photo.jpeg"
                  alt="Anup Thakre Portrait"
                  className="w-full h-full object-cover object-[center_6%]"
                />
              </div>

              {/* Slashes decorations at bottom left */}
              <div className="absolute -bottom-2 -left-8 text-2xl font-bold font-mono tracking-tighter text-[#4A5D11] deco-slashes">
                /////
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[#03045E]/10 max-w-5xl mx-auto" />

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-[#FDFBE2]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-2">
            <h2 className="display-header display-header-about">about.</h2>

            <div className="max-w-3xl font-serif text-lg md:text-xl text-[#03045E]/90 leading-relaxed space-y-6 mt-6 tracking-normal">
              <p>
                I am a Computer Science student at <strong className="font-bold text-[#03045E]">IIIT Nagpur</strong> specializing in <strong className="font-bold text-[#03045E]">Human Computer Interaction (HCI)</strong>. My background centers on bridging high-fidelity code construction with human-centered product strategy, RAG-backed systems, and stakeholder management.
              </p>
              <p>
                I write specifications, manage development backlogs, conduct user research, and ship fullstack MVPs. Currently seeking opportunities in Product Management, AI-driven products, and Founder's Office roles.
              </p>
            </div>

            {/* Timeline bullet points matching Figma & LaTeX style */}
            <div className="mt-16 max-w-3xl space-y-6">
              <h3 className="text-xl font-black uppercase tracking-wider text-[#03045E] border-b-2 border-[#03045E] pb-3 mb-6">Leadership & Experience</h3>

              {/* Exp 1 */}
              <div className="border border-[#03045E] bg-white p-6 shadow-[3px_3px_0px_0px_#03045E] rounded-sm hover:shadow-[5px_5px_0px_0px_#03045E] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#03045E]/10 pb-3 mb-3">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-black text-[#03045E] tracking-tight">Team Lead (2x)</h4>
                    <span className="text-xs font-bold text-[#4A5D11] uppercase tracking-wider mt-0.5">Smart India Hackathon</span>
                  </div>
                  <span className="inline-flex items-center self-start sm:self-auto rounded-sm border border-[#03045E] bg-[#F5E88F] px-2.5 py-0.5 text-xs font-bold font-mono text-[#03045E]">
                    2024 – 2025
                  </span>
                </div>
                <ul className="text-sm text-[#5C6274] space-y-2 list-disc list-outside pl-4 leading-relaxed">
                  <li>Owned product delivery for a <strong className="text-[#03045E]">6-member team</strong> from problem definition to launch under <strong className="text-[#03045E]">36-hour sprint conditions</strong>.</li>
                  <li>Translated ambiguous problem statements into structured roadmaps – <strong className="text-[#03045E]">National Winner</strong> 2025 (SAKSHAM portal), <strong className="text-[#03045E]">Grand Finalist</strong> 2024.</li>
                </ul>
              </div>

              {/* Exp 2 */}
              <div className="border border-[#03045E] bg-white p-6 shadow-[3px_3px_0px_0px_#03045E] rounded-sm hover:shadow-[5px_5px_0px_0px_#03045E] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#03045E]/10 pb-3 mb-3">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-black text-[#03045E] tracking-tight">Lead</h4>
                    <span className="text-xs font-bold text-[#4A5D11] uppercase tracking-wider mt-0.5">Startup Expo, E-Summit 2025</span>
                  </div>
                  <span className="inline-flex items-center self-start sm:self-auto rounded-sm border border-[#03045E] bg-[#F5E88F] px-2.5 py-0.5 text-xs font-bold font-mono text-[#03045E]">
                    2025
                  </span>
                </div>
                <ul className="text-sm text-[#5C6274] space-y-2 list-disc list-outside pl-4 leading-relaxed">
                  <li>Managed onboarding of startup founders and exhibitors, aligning expectations with event goals and timelines.</li>
                  <li>Coordinated cross-functional execution across logistics and communication for seamless on-time delivery.</li>
                </ul>
              </div>

              {/* Exp 3 */}
              <div className="border border-[#03045E] bg-white p-6 shadow-[3px_3px_0px_0px_#03045E] rounded-sm hover:shadow-[5px_5px_0px_0px_#03045E] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#03045E]/10 pb-3 mb-3">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-black text-[#03045E] tracking-tight">Hospitality Co-Lead</h4>
                    <span className="text-xs font-bold text-[#4A5D11] uppercase tracking-wider mt-0.5">Tantrafiesta 2025</span>
                  </div>
                  <span className="inline-flex items-center self-start sm:self-auto rounded-sm border border-[#03045E] bg-[#F5E88F] px-2.5 py-0.5 text-xs font-bold font-mono text-[#03045E]">
                    2025
                  </span>
                </div>
                <ul className="text-sm text-[#5C6274] space-y-2 list-disc list-outside pl-4 leading-relaxed">
                  <li>Led guest experience operations across venue, logistics, and participant touchpoints for the annual technical fest at IIIT Nagpur.</li>
                  <li>Resolved real-time coordination challenges under pressure with strong <strong className="text-[#03045E]">stakeholder communication</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights Stat Cards */}
      <section className="py-12 bg-[#FDFBE2]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="border border-[#03045E] bg-white/40 p-6 shadow-[3px_3px_0px_0px_#03045E]">
              <span className="text-[10px] font-bold text-[#4A5D11] uppercase tracking-wider block">SIH National Winner</span>
              <span className="text-3xl font-black text-[#03045E] block mt-1">2025</span>
              <p className="text-xs text-[#5C6274] mt-1">First prize at nationwide finals for SAKSHAM.</p>
            </div>

            <div className="border border-[#03045E] bg-white/40 p-6 shadow-[3px_3px_0px_0px_#03045E]">
              <span className="text-[10px] font-bold text-[#4A5D11] uppercase tracking-wider block">National Finalist</span>
              <span className="text-3xl font-black text-[#03045E] block mt-1">2024</span>
              <p className="text-xs text-[#5C6274] mt-1">Advance placement in nationwide hackathon track.</p>
            </div>

            <div className="border border-[#03045E] bg-white/40 p-6 shadow-[3px_3px_0px_0px_#03045E]">
              <span className="text-[10px] font-bold text-[#4A5D11] uppercase tracking-wider block">Case Study Standings</span>
              <span className="text-3xl font-black text-[#03045E] block mt-1">West Zone</span>
              <p className="text-xs text-[#5C6274] mt-1">Consecutive years Finalist (2025 and 2026).</p>
            </div>

            <div className="border border-[#03045E] bg-white/40 p-6 shadow-[3px_3px_0px_0px_#03045E]">
              <span className="text-[10px] font-bold text-[#4A5D11] uppercase tracking-wider block">University Standings</span>
              <span className="text-3xl font-black text-[#03045E] block mt-1">8.90 CGPA</span>
              <p className="text-xs text-[#5C6274] mt-1">Consistent academic records at IIIT Nagpur.</p>
            </div>

            <div className="border border-[#03045E] bg-white/40 p-6 shadow-[3px_3px_0px_0px_#03045E]">
              <span className="text-[10px] font-bold text-[#4A5D11] uppercase tracking-wider block">Projects Deployed</span>
              <span className="text-3xl font-black text-[#03045E] block mt-1">3+ Live</span>
              <p className="text-xs text-[#5C6274] mt-1">Active systems mapped to real-world user loops.</p>
            </div>

            <div className="border border-[#03045E] bg-white/40 p-6 shadow-[3px_3px_0px_0px_#03045E]">
              <span className="text-[10px] font-bold text-[#4A5D11] uppercase tracking-wider block">User Reach Deployed</span>
              <span className="text-3xl font-black text-[#03045E] block mt-1">800+ Active</span>
              <p className="text-xs text-[#5C6274] mt-1">Students and faculty users actively using tools.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[#03045E]/10 max-w-5xl mx-auto" />

      {/* Product Thinking Section */}
      <section id="product-thinking" className="py-20 md:py-28 bg-[#FDFBE2]">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="display-header display-header-product">product thinking.</h2>
          <p className="text-[#5C6274] text-sm md:text-base mt-6">Core mental models and execution approaches I bring to building software.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="border border-[#03045E] bg-white/20 p-6 shadow-[2px_2px_0px_0px_#03045E]">
              <h3 className="font-bold text-[#03045E] text-base">User Research</h3>
              <p className="text-xs text-[#5C6274] mt-2 leading-relaxed">
                Conducting contextual interviews and mapping user journeys to translate raw qualitative pain points into clear PRD definitions.
              </p>
            </div>

            <div className="border border-[#03045E] bg-white/20 p-6 shadow-[2px_2px_0px_0px_#03045E]">
              <h3 className="font-bold text-[#03045E] text-base">Prioritization</h3>
              <p className="text-xs text-[#5C6274] mt-2 leading-relaxed">
                Applying rigorous frameworks like RICE and MoSCoW to balance engineering complexity, customer value, and timeline goals.
              </p>
            </div>

            <div className="border border-[#03045E] bg-white/20 p-6 shadow-[2px_2px_0px_0px_#03045E]">
              <h3 className="font-bold text-[#03045E] text-base">Metrics & Analytics</h3>
              <p className="text-xs text-[#5C6274] mt-2 leading-relaxed">
                Defining core North Star metrics and mapping secondary funnel triggers (AARRR) to measure success and drive product iteration.
              </p>
            </div>

            <div className="border border-[#03045E] bg-white/20 p-6 shadow-[2px_2px_0px_0px_#03045E]">
              <h3 className="font-bold text-[#03045E] text-base">Stakeholder Alignment</h3>
              <p className="text-xs text-[#5C6274] mt-2 leading-relaxed">
                Translating needs between engineering, design, and operations to align teams around single roadmaps and remove blocker ambiguity.
              </p>
            </div>

            <div className="border border-[#03045E] bg-white/20 p-6 shadow-[2px_2px_0px_0px_#03045E]">
              <h3 className="font-bold text-[#03045E] text-base">AI Products</h3>
              <p className="text-xs text-[#5C6274] mt-2 leading-relaxed">
                Designing product loops, RAG context templates, and prompt workflows that add utility and solve real problems.
              </p>
            </div>

            <div className="border border-[#03045E] bg-white/20 p-6 shadow-[2px_2px_0px_0px_#03045E]">
              <h3 className="font-bold text-[#03045E] text-base">Product Strategy</h3>
              <p className="text-xs text-[#5C6274] mt-2 leading-relaxed">
                Conducting competitor deep-dives, specifying MVPs, and designing core feedback systems for compound organic growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[#03045E]/10 max-w-5xl mx-auto" />

      {/* Work Section */}
      <section id="projects" className="py-20 md:py-28 bg-[#FDFBE2]">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="display-header display-header-work">work.</h2>
          <p className="text-[#5C6274] text-sm md:text-base mt-2">A record of digital applications and operational systems designed from scratch.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">

            {/* Project 1: SAKSHAM */}
            <div className="flex flex-col border border-[#03045E] bg-white p-6 md:p-8 shadow-[4px_4px_0px_0px_#03045E] hover:shadow-[6px_6px_0px_0px_#03045E] transition-all rounded-sm gap-5 justify-between">
              <div className="flex flex-col gap-4">
                {/* Deployed Unsplash Image for SAKSHAM */}
                <div className="aspect-[16/10] w-full border border-[#03045E] overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                    alt="SAKSHAM Workflow UI"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 text-[9px] uppercase font-mono tracking-widest text-[#03045E] bg-[#F5E88F] px-2.5 py-1 border border-[#03045E] font-bold">
                    SIH 2025 Winner
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold font-mono text-[#4A5D11]">SIH 2025 National Winner</span>
                  <h3 className="text-2xl font-black text-[#03045E]">SAKSHAM -- Internship Portal</h3>

                  <div className="flex flex-wrap gap-2 my-2">
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">PRD</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">RBAC</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">Recommendation System</span>
                  </div>
                </div>

                <ul className="text-sm text-[#5C6274] leading-relaxed space-y-3 list-disc list-outside pl-4">
                  <li>Identified <strong className="text-[#03045E]">fragmented internship workflows</strong> as the core user pain point → defined product requirements and designed a unified application and approval system → reduced coordination effort by <strong className="text-[#03045E]">40%</strong> across <strong className="text-[#03045E]">500+ users</strong>.</li>
                  <li>Mapped multi-role coordination challenges through user research → prioritized <strong className="text-[#03045E]">role-based access and structured workflows</strong> → enabled secure, scalable interactions across <strong className="text-[#03045E]">4 distinct user roles</strong> (Student, Mentor, TPO, Employer).</li>
                  <li>Diagnosed low opportunity-match relevance as a key drop-off driver → scoped and shipped an <strong className="text-[#03045E]">AI-powered FastAPI recommendation microservice</strong> → improved matching relevance and reduced search time by <strong className="text-[#03045E]">35%</strong>.</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-[#03045E]/10">
                <Link
                  href="/case-studies/saksham"
                  className="inline-flex h-9 items-center justify-center rounded-sm border border-[#03045E] bg-white px-4 text-xs font-bold text-[#03045E] hover:bg-[#F5E88F] transition-all shadow-[1.5px_1.5px_0px_0px_#03045E]"
                >
                  Read Case Study ↗
                </Link>
                <a
                  href="https://sih25-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-sm border border-[#03045E] bg-[#F5E88F] px-4 text-xs font-bold text-[#03045E] hover:bg-[#ebd96e] transition-all shadow-[1.5px_1.5px_0px_0px_#03045E]"
                >
                  Live Link ↗
                </a>
              </div>
            </div>

            {/* Project 2: Acadence */}
            <div className="flex flex-col border border-[#03045E] bg-white p-6 md:p-8 shadow-[4px_4px_0px_0px_#03045E] hover:shadow-[6px_6px_0px_0px_#03045E] transition-all rounded-sm gap-5 justify-between">
              <div className="flex flex-col gap-4">
                {/* Deployed Unsplash Image for Acadence */}
                <div className="aspect-[16/10] w-full border border-[#03045E] overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
                    alt="Acadence Study Hub UI"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 text-[9px] uppercase font-mono tracking-widest text-[#03045E] bg-[#F5E88F] px-2.5 py-1 border border-[#03045E] font-bold">
                    Campus App
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold font-mono text-[#4A5D11]">Deployed Campus Platform</span>
                  <h3 className="text-2xl font-black text-[#03045E]">Acadence -- Academic Platform</h3>

                  <div className="flex flex-wrap gap-2 my-2">
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">MVP Scoping</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">User Feedback</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">Multi-role Access</span>
                  </div>
                </div>

                <ul className="text-sm text-[#5C6274] leading-relaxed space-y-3 list-disc list-outside pl-4">
                  <li>Identified <strong className="text-[#03045E]">fragmented academic resources</strong> as the primary barrier to student productivity → defined MVP scope covering notes, PYQs, announcements, and collaboration → improved accessibility for <strong className="text-[#03045E]">300+ students</strong>.</li>
                  <li>Synthesized student feedback revealing inefficient workflows → prioritized and shipped <strong className="text-[#03045E]">query systems (Query Desk), study groups, and discussion spaces</strong> → increased collaboration efficiency by <strong className="text-[#03045E]">45%</strong>.</li>
                  <li>Mapped multi-role access as a trust requirement → designed role-based access control for <strong className="text-[#03045E]">4 key user roles</strong> (Students, Academic Reps, Faculty, Admins) → enabled secure resource approval pipelines.</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-[#03045E]/10">
                <Link
                  href="/case-studies/acadence"
                  className="inline-flex h-9 items-center justify-center rounded-sm border border-[#03045E] bg-white px-4 text-xs font-bold text-[#03045E] hover:bg-[#F5E88F] transition-all shadow-[1.5px_1.5px_0px_0px_#03045E]"
                >
                  Read Case Study ↗
                </Link>
                <a
                  href="https://acadence-one.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-sm border border-[#03045E] bg-[#F5E88F] px-4 text-xs font-bold text-[#03045E] hover:bg-[#ebd96e] transition-all shadow-[1.5px_1.5px_0px_0px_#03045E]"
                >
                  Live Link ↗
                </a>
              </div>
            </div>

            {/* Project 3: AskYourSenior */}
            <div className="flex flex-col border border-[#03045E] bg-white p-6 md:p-8 shadow-[4px_4px_0px_0px_#03045E] hover:shadow-[6px_6px_0px_0px_#03045E] transition-all rounded-sm gap-5 justify-between">
              <div className="flex flex-col gap-4">
                {/* Deployed Unsplash Image for AskYourSenior */}
                <div className="aspect-[16/10] w-full border border-[#03045E] overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                    alt="AskYourSenior Network UI"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 text-[9px] uppercase font-mono tracking-widest text-[#03045E] bg-[#F5E88F] px-2.5 py-1 border border-[#03045E] font-bold">
                    Featured Product Case Study
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold font-mono text-[#4A5D11]">Mentorship & Career Ecosystem</span>
                  <h3 className="text-2xl font-black text-[#03045E]">AskYourSenior</h3>

                  <div className="flex flex-wrap gap-2 my-2">
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">Product Strategy</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">Prompt Engineering</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">User Research</span>
                  </div>
                </div>

                <p className="text-sm text-[#5C6274] leading-relaxed">
                  Students miss key referral loops, direct alumni mentorship opportunities, and structural support pathways due to highly fragmented chat channels. Mapped user responses and prioritised resume check points. AskYourSenior acts as an AI-powered college networking and referral ecosystem to lower networking barriers.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-[#03045E]/10">
                <Link
                  href="/case-studies/ask-your-senior"
                  className="inline-flex h-9 items-center justify-center rounded-sm border border-[#03045E] bg-[#F5E88F] px-4 text-xs font-bold text-[#03045E] hover:bg-[#ebd96e] transition-all shadow-[1.5px_1.5px_0px_0px_#03045E]"
                >
                  Read Case Study ↗
                </Link>
              </div>
            </div>

            {/* Project 4: AR/VR Landing Page */}
            <div className="flex flex-col border border-[#03045E] bg-white p-6 md:p-8 shadow-[4px_4px_0px_0px_#03045E] hover:shadow-[6px_6px_0px_0px_#03045E] transition-all rounded-sm gap-5 justify-between">
              <div className="flex flex-col gap-4">
                {/* Deployed Unsplash Image for AR/VR */}
                <div className="aspect-[16/10] w-full border border-[#03045E] overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800&q=80"
                    alt="AR/VR Physics App UI"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 text-[9px] uppercase font-mono tracking-widest text-[#03045E] bg-[#F5E88F] px-2.5 py-1 border border-[#03045E] font-bold">
                    UI/UX Design
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold font-mono text-[#4A5D11]">Figma UI/UX & Prototyping</span>
                  <h3 className="text-2xl font-black text-[#03045E]">AR/VR Landing Page</h3>

                  <div className="flex flex-wrap gap-2 my-2">
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">Figma</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">Wireframing</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">Usability Testing</span>
                  </div>
                </div>

                <ul className="text-sm text-[#5C6274] leading-relaxed space-y-3 list-disc list-outside pl-4">
                  <li>Diagnosed <strong className="text-[#03045E]">low engagement and poor navigation</strong> through usability analysis → redesigned user flows and layouts → reduced navigation friction by <strong className="text-[#03045E]">30%</strong>.</li>
                  <li>Ran iterative design cycles using <strong className="text-[#03045E]">wireframes and high-fidelity prototypes</strong> → validated solutions early with stakeholders → reduced iteration cycles by <strong className="text-[#03045E]">25%</strong> and improved interaction clarity.</li>
                  <li>Incorporated <strong className="text-[#03045E]">user feedback</strong> to refine journeys → improved navigation efficiency and increased user retention by <strong className="text-[#03045E]">20%</strong>.</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-[#03045E]/10">
                <a
                  href="https://shorturl.at/fqJFT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center justify-center rounded-sm border border-[#03045E] bg-[#F5E88F] px-4 text-xs font-bold text-[#03045E] hover:bg-[#ebd96e] transition-all shadow-[1.5px_1.5px_0px_0px_#03045E]"
                >
                  Live Link ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <hr className="border-[#03045E]/10 max-w-5xl mx-auto" />

      {/* Notion Case Study Section */}
      <section id="notion-case-study" className="py-20 md:py-28 bg-[#FDFBE2]">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="display-header display-header-work">case study.</h2>
          <p className="text-[#5C6274] text-sm md:text-base mt-6">Notion AI — 0 to 1 Launch (Product Scoping & Integration Case Study)</p>

          <div className="mt-12 max-w-3xl">
            <div className="border border-[#03045E] bg-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-[4px_4px_0px_0px_#03045E] rounded-sm hover:shadow-[6px_6px_0px_0px_#03045E] transition-all">
              <div>
                <h3 className="font-extrabold text-lg text-[#03045E]">Notion AI — 0 to 1 Launch</h3>
                <p className="text-xs md:text-sm text-[#5C6274] mt-2 leading-relaxed max-w-xl font-serif">
                  Strategic launch teardown examining Notion's native LLM feature scoping and integration model. Explores the \"opt-in vs on by default\" product bifurcation risk and metrics framework.
                </p>
              </div>
              <Link
                href="/case-studies/notion-ai"
                className="shrink-0 inline-flex h-10 items-center justify-center rounded-sm border border-[#03045E] bg-[#F5E88F] px-6 text-sm font-bold text-[#03045E] hover:bg-[#ebd96e] transition-colors shadow-[1.5px_1.5px_0px_0px_#03045E]"
              >
                Read Case Study ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[#03045E]/10 max-w-5xl mx-auto" />

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-28 bg-[#FDFBE2]">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="display-header display-header-skills">skills.</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
            {/* PM */}
            <div>
              <div className="border-b border-[#03045E] pb-2 mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A5D11]">Product & Design</h3>
              </div>
              <ul className="space-y-1 text-sm text-[#03045E] font-medium">
                <li>Stakeholder Management</li>
                <li>User Research</li>
                <li>Feature Prioritization</li>
                <li>Requirement Gathering (PRDs)</li>
                <li>MVP Scoping</li>
                <li>Market Research</li>
                <li>UI/UX Design</li>
                <li>Wireframing</li>
                <li>User Workflows</li>
                <li>Design Systems</li>
              </ul>
            </div>

            {/* Tech */}
            <div>
              <div className="border-b border-[#03045E] pb-2 mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A5D11]">Technologies</h3>
              </div>
              <ul className="space-y-1 text-sm text-[#03045E] font-medium">
                <li>Python</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>SQL</li>
                <li>C++</li>
                <li>Next.js</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>PostgreSQL</li>
              </ul>
            </div>

            {/* AI */}
            <div>
              <div className="border-b border-[#03045E] pb-2 mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A5D11]">AI & Systems</h3>
              </div>
              <ul className="space-y-1 text-sm text-[#03045E] font-medium">
                <li>Generative AI</li>
                <li>RAG Systems</li>
                <li>Agentic AI</li>
                <li>Recommendation Systems</li>
                <li>Machine Learning</li>
                <li>Scalable Backends</li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <div className="border-b border-[#03045E] pb-2 mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A5D11]">Tools & Courses</h3>
              </div>
              <ul className="space-y-1 text-sm text-[#03045E] font-medium">
                <li>Jira, Notion</li>
                <li>Google Analytics</li>
                <li>Figma, Git, GitHub</li>
                <li>Docker, VS Code</li>
                <li>DSA, OOP, DBMS</li>
                <li>Operating Systems</li>
                <li>Computer Networks</li>
                <li>SDLC, HCI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[#03045E]/10 max-w-5xl mx-auto" />

      {/* Achievements Section */}
      <section id="achievements" className="py-20 md:py-28 bg-[#FDFBE2]">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="display-header display-header-about">achievements.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl">
            <div className="border border-[#03045E] bg-white p-6 shadow-[3px_3px_0px_0px_#03045E] rounded-sm flex gap-4 hover:shadow-[5px_5px_0px_0px_#03045E] transition-all">
              <span className="text-2xl shrink-0 text-[#4A5D11] font-bold">🏆</span>
              <div className="space-y-1">
                <h3 className="font-extrabold text-sm text-[#03045E]">Smart India Hackathon 2025 Winner</h3>
                <p className="text-xs text-[#5C6274] leading-relaxed">
                  National Winner by leading end-to-end product development, defining user-centric solutions, and delivering SAKSHAM internship portal.
                </p>
              </div>
            </div>

            <div className="border border-[#03045E] bg-white p-6 shadow-[3px_3px_0px_0px_#03045E] rounded-sm flex gap-4 hover:shadow-[5px_5px_0px_0px_#03045E] transition-all">
              <span className="text-2xl shrink-0 text-[#4A5D11] font-bold">🏆</span>
              <div className="space-y-1">
                <h3 className="font-extrabold text-sm text-[#03045E]">Smart India Hackathon 2024 Finalist</h3>
                <p className="text-xs text-[#5C6274] leading-relaxed">
                  National Finalist. Recognized for strong product thinking, problem structuring, and effective execution among top teams.
                </p>
              </div>
            </div>

            <div className="border border-[#03045E] bg-white p-6 shadow-[3px_3px_0px_0px_#03045E] rounded-sm flex gap-4 hover:shadow-[5px_5px_0px_0px_#03045E] transition-all">
              <span className="text-2xl shrink-0 text-[#4A5D11] font-bold">🏆</span>
              <div className="space-y-1">
                <h3 className="font-extrabold text-sm text-[#03045E]">Nation Building Case Study 2026 West Zone Finalist</h3>
                <p className="text-xs text-[#5C6274] leading-relaxed">
                  Top 10 among 50,000+ participants by proposing local micro-mobility transit layouts.
                </p>
              </div>
            </div>

            <div className="border border-[#03045E] bg-white p-6 shadow-[3px_3px_0px_0px_#03045E] rounded-sm flex gap-4 hover:shadow-[5px_5px_0px_0px_#03045E] transition-all">
              <span className="text-2xl shrink-0 text-[#4A5D11] font-bold">🏆</span>
              <div className="space-y-1">
                <h3 className="font-extrabold text-sm text-[#03045E]">Nation Building Case Study 2025 West Zone Finalist</h3>
                <p className="text-xs text-[#5C6274] leading-relaxed">
                  Top 10 among 50,000+ participants by proposing multi-modal transit coordination frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-[#03045E]/10 max-w-5xl mx-auto" />

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-[#FDFBE2]">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="display-header display-header-contact">contact.</h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-8 items-center">

            {/* Left Stationery SVG Mockup */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] aspect-[4/3] border border-[#03045E] bg-white p-4 shadow-[3px_3px_0px_0px_#03045E] relative">
                {/* Envelope fold styling inside SVG */}
                <svg className="w-full h-full text-[#03045E]" viewBox="0 0 100 80" fill="none">
                  {/* Base envelope */}
                  <path d="M10 15H90V65H10V15Z" stroke="currentColor" strokeWidth="2" fill="#FAF9D8" />
                  {/* Flap lines */}
                  <path d="M10 15L50 45L90 15" stroke="currentColor" strokeWidth="2" />
                  {/* Pen diagonal line */}
                  <path d="M20 65L80 20" stroke="#4A5D11" strokeWidth="3" strokeLinecap="round" />
                  <path d="M75 23L80 20L77 26" stroke="#4A5D11" strokeWidth="3" strokeLinecap="round" fill="#4A5D11" />
                </svg>
              </div>
            </div>

            {/* Right Contact details */}
            <div className="md:col-span-7 flex flex-col gap-6">
              <p className="text-[#03045E] text-base md:text-lg font-medium leading-relaxed max-w-md">
                Interested in discussing product, AI, startups, or opportunities? Let's connect.
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                <a
                  href="mailto:anupthakre.works@gmail.com"
                  className="inline-flex h-12 items-center gap-3 rounded-sm border border-[#03045E] bg-white px-6 text-sm font-bold text-[#03045E] hover:bg-[#F5E88F] transition-all shadow-[2px_2px_0px_0px_#03045E]"
                  title="Send Email"
                >
                  <span className="text-lg">📧</span>
                  <span>Email</span>
                </a>

                <a
                  href="https://linkedin.com/in/anup-thakre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-3 rounded-sm border border-[#03045E] bg-white px-6 text-sm font-bold text-[#03045E] hover:bg-[#F5E88F] transition-all shadow-[2px_2px_0px_0px_#03045E]"
                  title="LinkedIn Profile"
                >
                  <span className="text-lg">💼</span>
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://github.com/anup015"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-3 rounded-sm border border-[#03045E] bg-white px-6 text-sm font-bold text-[#03045E] hover:bg-[#F5E88F] transition-all shadow-[2px_2px_0px_0px_#03045E]"
                  title="GitHub Profile"
                >
                  <span className="text-lg">💻</span>
                  <span>GitHub</span>
                </a>

                <a
                  href="tel:+918999572681"
                  className="inline-flex h-12 items-center gap-3 rounded-sm border border-[#03045E] bg-white px-6 text-sm font-bold text-[#03045E] hover:bg-[#F5E88F] transition-all shadow-[2px_2px_0px_0px_#03045E]"
                  title="Call Me"
                >
                  <span className="text-lg">📞</span>
                  <span>Call Me</span>
                </a>
              </div>

              <div className="text-xs text-[#5C6274] mt-6">
                <span>© {new Date().getFullYear()} Anup Thakre. Styled in Figma template.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
