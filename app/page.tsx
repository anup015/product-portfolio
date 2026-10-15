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
            <button onClick={() => scrollToSection("achievements")} className="text-sm font-bold text-[#03045E] hover:opacity-75 transition-opacity cursor-pointer">Achievements</button>
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
            <button onClick={() => scrollToSection("achievements")} className="text-left text-sm font-bold text-[#03045E] py-1">Achievements</button>
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
                href="/Anup%20Thakre%20-%20Product%20v2.pdf"
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
                Currently a <strong className="font-bold text-[#03045E]">Product Intern at Unyfy Technologies (Fintech)</strong> in Bangalore, and a Computer Science student at <strong className="font-bold text-[#03045E]">IIIT Nagpur</strong> specializing in <strong className="font-bold text-[#03045E]">Human Computer Interaction (HCI)</strong>. My background centers on bridging rigorous product strategy, fintech systems, and regulatory scoping with high-fidelity software execution.
              </p>
              <p>
                I write end-to-end PRDs, evaluate unit economics, design multi-channel lifecycle notification systems, and align engineering and compliance teams around complex financial roadmaps.
              </p>
            </div>

            {/* Timeline / Experience Sections */}
            <div className="mt-16 max-w-3xl space-y-10">

              {/* Work Experience - Unyfy */}
              <div>
                <h3 className="text-xl font-black uppercase tracking-wider text-[#03045E] border-b-2 border-[#03045E] pb-3 mb-6 flex items-center justify-between">
                  <span>Work Experience</span>
                  <span className="text-xs font-mono font-bold bg-[#F5E88F] text-[#03045E] px-2.5 py-0.5 border border-[#03045E] rounded-sm shadow-[1px_1px_0px_0px_#03045E]">
                    Fintech
                  </span>
                </h3>

                {/* Unyfy Card */}
                <div className="border-2 border-[#03045E] bg-white p-6 md:p-8 shadow-[4px_4px_0px_0px_#03045E] rounded-sm hover:shadow-[6px_6px_0px_0px_#03045E] transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b-2 border-[#03045E]/10 pb-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-xl font-black text-[#03045E] tracking-tight">Product Intern</h4>
                        <span className="inline-flex items-center rounded-sm border border-[#4A5D11] bg-[#4A5D11]/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#4A5D11]">
                          Current Role
                        </span>
                      </div>
                      <div className="text-sm font-bold text-[#4A5D11] tracking-wide mt-1">
                        Unyfy Technologies (Fintech) <span className="text-[#03045E]/40 font-normal">· Bangalore</span>
                      </div>
                    </div>
                    <span className="inline-flex items-center self-start sm:self-auto rounded-sm border border-[#03045E] bg-[#F5E88F] px-3 py-1 text-xs font-bold font-mono text-[#03045E] shadow-[1.5px_1.5px_0px_0px_#03045E]">
                      July 2026 – Present
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-[#03045E] font-serif leading-relaxed mb-5 bg-[#FAF9D8]/50 p-3 border border-[#03045E]/20 rounded-sm">
                    A summary of the product areas owned and evaluated as Product Intern at Unyfy, a fintech app spanning digital gold investing, payments, and financial savings.
                  </p>

                  {/* 5 Product Tracks */}
                  <div className="space-y-4 text-sm text-[#5C6274] leading-relaxed">
                    <div className="border-l-2 border-[#03045E] pl-3 py-0.5">
                      <h5 className="font-black text-xs uppercase tracking-wider text-[#03045E]">Digital Gold Investing Feature (SafeGold Integration)</h5>
                      <ul className="list-disc list-outside pl-4 space-y-1 mt-1 text-xs md:text-sm">
                        <li>Owned the end-to-end PRD for a SafeGold integrated digital gold investing feature, mapping <strong className="text-[#03045E]">buy, sell, SIP, and redemption user flows</strong>.</li>
                        <li>Worked through open compliance questions on <strong className="text-[#03045E]">GST treatment and SEBI's unregulated status</strong> for digital gold, coordinating with the compliance team before finalizing the specification.</li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-[#03045E] pl-3 py-0.5">
                      <h5 className="font-black text-xs uppercase tracking-wider text-[#03045E]">Notification Engine (In-App and WhatsApp)</h5>
                      <ul className="list-disc list-outside pl-4 space-y-1 mt-1 text-xs md:text-sm">
                        <li>Designed a notification engine covering <strong className="text-[#03045E]">7 trigger categories and 26 notification types</strong>, with channel routing across push, in-app, and email, and frequency capping logic to balance engagement against user fatigue.</li>
                        <li>Built a <strong className="text-[#03045E]">12-template WhatsApp Business API</strong> notification system for gold nudges, transaction alerts, and credit card reminders, restructuring four templates to qualify as genuine <strong className="text-[#03045E]">Utility messaging rather than Marketing</strong> under WhatsApp's classification rules.</li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-[#03045E] pl-3 py-0.5">
                      <h5 className="font-black text-xs uppercase tracking-wider text-[#03045E]">Payments Feature Exploration</h5>
                      <ul className="list-disc list-outside pl-4 space-y-1 mt-1 text-xs md:text-sm">
                        <li>Evaluated mechanisms for a credit card-based tuition fee payment feature against <strong className="text-[#03045E]">current RBI and NPCI rules</strong>, found the initially proposed routes blocked, and helped shape a phased approach (<strong className="text-[#03045E]">RuPay UPI merchant payments, a PPI licensed wallet, and a CRED-style bill payment model</strong>) for the team to take forward.</li>
                        <li>Contributed to scoping a bill utility feature that tracks user bills such as electricity, DTH, and mobile recharge via SMS and email, and funds payment through <strong className="text-[#03045E]">discounted Amazon Pay vouchers</strong>, aiming to keep the flow inside the Unyfy app.</li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-[#03045E] pl-3 py-0.5">
                      <h5 className="font-black text-xs uppercase tracking-wider text-[#03045E]">Competitive and Vendor Research</h5>
                      <ul className="list-disc list-outside pl-4 space-y-1 mt-1 text-xs md:text-sm">
                        <li>Led competitive pricing research across 4 fintech platforms (<strong className="text-[#03045E]">Paytm, PhonePe, Jar, and Gullak</strong>) to benchmark digital gold markup strategy.</li>
                        <li>Built a payout vendor comparison covering <strong className="text-[#03045E]">Razorpay, Cashfree, and Easebuzz</strong>, including a full unit economics workbook, to support a payment infrastructure decision.</li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-[#03045E] pl-3 py-0.5">
                      <h5 className="font-black text-xs uppercase tracking-wider text-[#03045E]">Marketplace Payments Exploration</h5>
                      <ul className="list-disc list-outside pl-4 space-y-1 mt-1 text-xs md:text-sm">
                        <li>Evaluated <strong className="text-[#03045E]">Cashfree's Easy Split</strong> for a potential marketplace vertical, flagging open questions on Unyfy's commission structure and vendor payout model, along with technical risks such as <strong className="text-[#03045E]">non-atomic split calls and refund clawback after instant settlement</strong>.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-6 pt-4 border-t border-[#03045E]/10">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#4A5D11] block mb-2">Core Skills Demonstrated:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Regulatory Scoping (RBI, NPCI, SEBI, GST)",
                        "Engineering & Compliance Collaboration",
                        "SafeGold Integration",
                        "Notification & Lifecycle Design",
                        "WhatsApp Utility Classification",
                        "Competitive Benchmarking",
                        "Vendor & Unit Economics",
                        "Cashfree Easy Split Architecture"
                      ].map((sk, i) => (
                        <span key={i} className="text-[10px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm text-[#03045E]">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action link */}
                  <div className="mt-5 pt-3 flex items-center justify-end">
                    <Link
                      href="/case-studies/unyfy"
                      className="inline-flex h-9 items-center justify-center rounded-sm border border-[#03045E] bg-[#F5E88F] px-5 text-xs font-bold text-[#03045E] hover:bg-[#ebd96e] transition-all shadow-[1.5px_1.5px_0px_0px_#03045E]"
                    >
                      Read PRD Case Study ↗
                    </Link>
                  </div>
                </div>
              </div>

              {/* Campus Leadership & Hackathons */}
              <div>
                <h3 className="text-xl font-black uppercase tracking-wider text-[#03045E] border-b-2 border-[#03045E] pb-3 mb-6">Campus Leadership & Hackathons</h3>

                <div className="space-y-6">
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

            {/* Featured Project: Unyfy Technologies */}
            <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row border-2 border-[#03045E] bg-white p-6 md:p-8 shadow-[5px_5px_0px_0px_#03045E] hover:shadow-[7px_7px_0px_0px_#03045E] transition-all rounded-sm gap-8 justify-between">
              <div className="md:w-5/12 flex flex-col gap-4">
                <div className="aspect-[16/10] w-full border border-[#03045E] overflow-hidden relative group">
                  <img
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
                    alt="Unyfy Fintech App & Architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 text-[9px] uppercase font-mono tracking-widest text-[#03045E] bg-[#F5E88F] px-2.5 py-1 border border-[#03045E] font-bold">
                    Fintech Internship · July 2026 – Present
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold font-mono text-[#4A5D11]">Unyfy Technologies · Bangalore</span>
                  <h3 className="text-2xl md:text-3xl font-black text-[#03045E]">Unyfy — Fintech App</h3>
                  <p className="text-xs text-[#5C6274] font-medium mt-1">
                    Digital Gold Investing (SafeGold), Lifecycle Notification Engine, & Payments Rails
                  </p>

                  <div className="flex flex-wrap gap-1.5 my-2">
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">SafeGold PRD</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">Notification Engine</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">WhatsApp Business API</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">RBI & NPCI Rules</span>
                    <span className="text-[9px] font-bold bg-[#FAF9D8] border border-[#03045E]/20 px-2 py-0.5 rounded-sm">Unit Economics</span>
                  </div>
                </div>
              </div>

              <div className="md:w-7/12 flex flex-col justify-between gap-5">
                <ul className="text-sm text-[#5C6274] leading-relaxed space-y-3 list-disc list-outside pl-4">
                  <li>Owned the <strong className="text-[#03045E]">end-to-end PRD for SafeGold-integrated digital gold investing</strong>, mapping Buy, Sell, SIP, and redemption user flows while resolving complex <strong className="text-[#03045E]">GST & SEBI compliance questions</strong>.</li>
                  <li>Architected a <strong className="text-[#03045E]">7-category, 26-type notification engine</strong> with frequency capping logic across push, in-app, and email, alongside a 12-template WhatsApp Business API system restructured for <strong className="text-[#03045E]">Utility messaging classification</strong>.</li>
                  <li>Evaluated tuition payment mechanics against <strong className="text-[#03045E]">RBI and NPCI mandates</strong> (unblocking a phased RuPay UPI & PPI wallet model) and scoped an in-app utility tracker funded via <strong className="text-[#03045E]">discounted Amazon Pay vouchers</strong>.</li>
                  <li>Benchmarked gold markups across 4 competitors (<strong className="text-[#03045E]">Paytm, PhonePe, Jar, Gullak</strong>) and modeled payout vendor unit economics across Razorpay, Cashfree, and Easebuzz.</li>
                  <li>Evaluated Cashfree Easy Split for a potential marketplace vertical, flagging commission structures, vendor payout models, and <strong className="text-[#03045E]">instant settlement refund clawback risks</strong>.</li>
                </ul>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-[#03045E]/10">
                  <Link
                    href="/case-studies/unyfy"
                    className="inline-flex h-9 items-center justify-center rounded-sm border border-[#03045E] bg-[#F5E88F] px-5 text-xs font-bold text-[#03045E] hover:bg-[#ebd96e] transition-all shadow-[1.5px_1.5px_0px_0px_#03045E]"
                  >
                    Read PRD Case Study ↗
                  </Link>
                </div>
              </div>
            </div>

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
                  <li>Identified <strong className="text-[#03045E]">fragmented internship workflows</strong> as the core user pain point → defined product requirements and designed a unified application and approval system → reduced coordination effort by <strong className="text-[#03045E]">40%</strong> across all university channels.</li>
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
                  <li>Identified <strong className="text-[#03045E]">fragmented academic resources</strong> as the primary barrier to student productivity → defined MVP scope covering notes, PYQs, announcements, and collaboration → improved resource accessibility and visibility.</li>
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

                <ul className="text-sm text-[#5C6274] leading-relaxed space-y-3 list-disc list-outside pl-4">
                  <li>Conceptualized and scoped a college-focused professional networking and mentorship platform to bridge placement and referral gaps between students and alumni.</li>
                  <li>Designed a searchable directory and structured channels (Mentorship, Referrals, Resume Reviews) to prevent senior messaging fatigue.</li>
                  <li>Structured a centralized Placement Knowledge Repository and Company Intelligence system to preserve interview experiences and hiring statistics across batches.</li>
                  <li>Formulated a future AI Roadmap incorporating personalized mentor matching, intelligent referral assistance, and custom career roadmap generators.</li>
                </ul>
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
                  <li>Established a responsive visual layout for an AR/VR physics application using Figma, curating custom typography, color harmony, and futuristic design tokens.</li>
                  <li>Developed high-fidelity interactive prototypes to simulate dynamic user navigation, hover transitions, and responsive content scaling.</li>
                  <li>Conducted comparative usability reviews on various wireframe layouts to refine component spacing, visual hierarchy, and CTA placement.</li>
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
            {/* PM & Fintech */}
            <div>
              <div className="border-b border-[#03045E] pb-2 mb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A5D11]">Product & Fintech</h3>
              </div>
              <ul className="space-y-1 text-sm text-[#03045E] font-medium">
                <li>Regulatory Scoping (RBI, NPCI, SEBI, GST)</li>
                <li>Vendor & Unit Economics Evaluation</li>
                <li>Notification Engine & Frequency Capping</li>
                <li>WhatsApp Business API Utility Messaging</li>
                <li>Competitive Benchmarking</li>
                <li>Requirement Gathering (PRDs)</li>
                <li>Feature Prioritization (RICE/MoSCoW)</li>
                <li>Stakeholder & Compliance Alignment</li>
                <li>User Workflows & Journey Mapping</li>
                <li>MVP Scoping & Launch</li>
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
