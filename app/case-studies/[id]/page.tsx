"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  BarChart2, 
  BookOpen, 
  Brain, 
  CheckCircle, 
  Compass, 
  Layers, 
  Target, 
  Users 
} from "lucide-react";

// In-memory detailed data for the PM Case Studies
const CASE_STUDIES_DATA: Record<string, {
  title: string;
  tagline: string;
  category: string;
  context: string;
  problem: string;
  research: {
    methodology: string;
    insights: string[];
  };
  personas: {
    name: string;
    role: string;
    bio: string;
    needs: string[];
    painPoints: string[];
  }[];
  competitors: {
    name: string;
    pros: string;
    cons: string;
  }[];
  decisions: {
    decision: string;
    rationale: string;
  }[];
  features: {
    name: string;
    description: string;
    pmAngle: string;
  }[];
  metrics: {
    northStar: string;
    description: string;
    secondary: string[];
  };
  learnings: string[];
}> = {
  "ask-your-senior": {
    title: "AskYourSenior",
    tagline: "AI-Powered College Networking & Referral Ecosystem",
    category: "Featured Product Case Study",
    context: "Conceptualized as a scalable college network to address career, referral, and mentorship gaps among engineering students.",
    problem: "In tier-2/3 college ecosystems, there is no direct, structured channel connecting juniors with alumni and seniors working in top tech companies. Platforms like LinkedIn are too broad, cold, and have low response rates. Group chats (WhatsApp/Discord) are noisy and lack searchable database structures. As a result, juniors miss out on referrals and guidance, while seniors are fatigued by repetitive, poorly framed questions.",
    research: {
      methodology: "Conducted virtual interviews with 25 engineering juniors and 10 working alumni from IIIT Nagpur.",
      insights: [
        "80% of juniors hesitate to message alumni on LinkedIn due to lack of a shared contextual entry point.",
        "90% of alumni are willing to refer students but refuse to review sloppy, unformatted resumes.",
        "Alumni report fatigue from answering the same basic questions (e.g., 'how to prepare for DBMS') multiple times."
      ]
    },
    personas: [
      {
        name: "Prabhu (Junior)",
        role: "2nd Year CSE Student (The Novice Explorer)",
        bio: "Struggles to identify reliable study resources and feels overwhelmed by options, seeking curated direction from trusted college seniors.",
        needs: [
          "Access to structured roadmaps verified by top alumni.",
          "Curated learning materials rather than random links."
        ],
        painPoints: [
          "Spends days searching for academic guides with low quality results.",
          "Lacks direct connections to senior peers for advice."
        ]
      },
      {
        name: "Rythem (Junior)",
        role: "3rd Year CSE Student (The Seeker)",
        bio: "Ambitious but lacks industry exposure. Wants to apply for off-campus software roles but has no network in top-tier companies.",
        needs: [
          "Direct, warm channels to request referrals.",
          "Clear career roadmap steps relevant to his college constraints."
        ],
        painPoints: [
          "Messages sent on LinkedIn are left on read.",
          "Unsure if his resume meets industry criteria."
        ]
      },
      {
        name: "Shresth",
        role: "Software Engineer at Top Tech Co (The Referrer / Alumni)",
        bio: "Wants to give back to his college community, but has highly limited time. Receives random, vague messages like 'please find me a job'.",
        needs: [
          "Only wants to see high-quality, pre-screened resumes.",
          "Wants to avoid repeating basic resource links."
        ],
        painPoints: [
          "Wastes time reading unstructured requests.",
          "Has to review resumes that lack standard projects."
        ]
      },
      {
        name: "Jayant",
        role: "Alumni / Senior PM at AI Startup (The Expert Advisor)",
        bio: "Eager to guide promising juniors but is fatigued by general questions and lacks a structured portal to filter students by tech stack.",
        needs: [
          "A dashboard that displays pre-vetted resumes.",
          "Specific context of candidate projects before committing time."
        ],
        painPoints: [
          "Gets dozens of generic LinkedIn requests daily.",
          "Cannot easily determine a candidate's readiness from a cold email."
        ]
      }
    ],
    competitors: [
      {
        name: "LinkedIn",
        pros: "Massive scale, direct professional records.",
        cons: "Low response rates for cold messages; lacks the trust/warmth of a local college affiliation."
      },
      {
        name: "Discord/WhatsApp Channels",
        pros: "Highly active, real-time message response.",
        cons: "Unstructured chat feed where resources, roadmaps, and referral requests get lost in minutes."
      },
      {
        name: "ADPList",
        pros: "Excellent formal mentoring.",
        cons: "Lacks hyper-local campus context (e.g. knowing who cracked which company from their specific college department)."
      }
    ],
    decisions: [
      {
        decision: "AI Resume Screening Gatekeeper",
        rationale: "To protect alumni/senior time and retain engagement, juniors must pass their resume through the 'AI Referral Assistant' before they can click 'Request Referral'."
      },
      {
        decision: "College Knowledge GPT",
        rationale: "To prevent senior fatigue, common administrative or academic resource questions are routed to a RAG-powered chatbot, reserving human interactions for advanced career advice."
      }
    ],
    features: [
      {
        name: "AI Mentor Matching Engine",
        description: "Matches juniors with seniors based on specific domains, company targets, and common student groups.",
        pmAngle: "Ensures high-relevance matches, driving up the mentor-to-mentee response rate."
      },
      {
        name: "Referral Assistant",
        description: "Inspects resumes, flags formatting errors, and pre-drafts contextual referral pitches for seniors.",
        pmAngle: "Reduces senior friction to click 'Approve Referral' by presenting clean applications."
      },
      {
        name: "Opportunity Recommendation Engine",
        description: "Scrapes off-campus job openings and cross-references them with college alumni who work at those companies.",
        pmAngle: "Translates abstract networking into direct career pipelines."
      }
    ],
    metrics: {
      northStar: "Monthly Successful Referral Connections",
      description: "Measured as the number of referrals sent and approved by seniors through the platform.",
      secondary: [
        "Weekly Active Users (WAU) to alumni ratio",
        "Average senior response turnaround time (Goal: <48 hours)",
        "Resume quality score improvement after AI feedback"
      ]
    },
    learnings: [
      "AI is most effective when it removes structural friction rather than replacing human elements. The bot serves to prepare the user, not to replace the relationship.",
      "Scoping an MVP requires ruthless prioritization—focusing on the resume gatekeeper first was essential to keep seniors active."
    ]
  },
  "saksham": {
    title: "SAKSHAM",
    tagline: "Unified College Internship Workflow & Matching Portal",
    category: "SIH 2025 National Winner",
    context: "Developed as a fullstack platform to automate and audit the complex academic-industry placement process.",
    problem: "The University Training & Placement Office (TPO) handles hundreds of student internships, requiring manual verification of CGPAs, attendance, and signatures for No Objection Certificates (NOC). Student tracking was siloed on local spreadsheets, resulting in slow approvals, missed application deadlines, and administrative fatigue.",
    research: {
      methodology: "Interviewed 4 TPO administrators and surveyed 50 final-year students at IIIT Nagpur.",
      insights: [
        "Average turnaround time (TAT) to issue a single NOC was 12 working days.",
        "35% of student applications did not align with their actual course or tech stack specialization.",
        "Over 100 emails were exchanged per day purely to verify student eligibility statuses."
      ]
    },
    personas: [
      {
        name: "Harshit",
        role: "TPO Administrator (The Reviewer)",
        bio: "Responsible for signing off on NOC documents and matching students to partner company profiles. Swamped in paperwork.",
        needs: [
          "Automated verification of student CGPAs.",
          "Single-click digital document signing."
        ],
        painPoints: [
          "Verifying transcripts manually takes 10 minutes per student.",
          "Frequent status check emails from students."
        ]
      },
      {
        name: "Jayant",
        role: "Final Year Student (The Candidate)",
        bio: "Has secured an internship offer and needs college NOC sign-off quickly to start his onboarding process.",
        needs: [
          "Immediate visibility of approval status.",
          "Easy upload of offer letters."
        ],
        painPoints: [
          "No clue where his document is in the university hierarchy.",
          "Fears he will lose the job offer due to university delay."
        ]
      },
      {
        name: "Tanishk",
        role: "3rd Year CSE Student (The NOC Applicant)",
        bio: "Has secured an off-campus internship and needs speed and transparency in NOC approval logs to meet compliance deadlines.",
        needs: [
          "Real-time tracking of NOC progress across university offices.",
          "Digital uploads with automated confirmation receipts."
        ],
        painPoints: [
          "Spends hours standing in lines outside administrative blocks.",
          "Fears missing submission deadlines due to manual delays."
        ]
      },
      {
        name: "Dipesh",
        role: "Campus Recruiter at Partner Firm (The Recruiter)",
        bio: "Hires 50+ students annually from the college. Wants a seamless matching ecosystem to approve internship eligibility lists without emails.",
        needs: [
          "Direct verification of students' CGPAs and skills data.",
          "Single-click administrative clearance signature portal."
        ],
        painPoints: [
          "Chasing student coordinators for academic clearance documents.",
          "Manual tracking of candidate statuses via messy spreadsheets."
        ]
      }
    ],
    competitors: [
      {
        name: "Superset",
        pros: "Excellent corporate recruiter intake and resume collection.",
        cons: "Lacks custom multi-step university administrative approval workflows (NOCs) and internal verification dashboards."
      },
      {
        name: "Manual Spreadsheets + Email",
        pros: "Extremely flexible, zero initial software setup cost.",
        cons: "No audit log, prone to manual entry errors, completely opaque to students."
      }
    ],
    decisions: [
      {
        decision: "Role-Based 3-Way Dashboard",
        rationale: "Built distinct views for Students, Administrators (TPOs), and Recruiters to create a single source of truth and reduce status-check emails to zero."
      },
      {
        decision: "Automatic Eligible NOC Issuance",
        rationale: "Programmed a logic check against database fields (CGPA > 7.5, Attendance > 75%) to auto-generate and stamp certificates, removing manual officer verification."
      }
    ],
    features: [
      {
        name: "Automated Document Workflow",
        description: "Generates, routes, and applies digital signatures to official documents like NOCs based on student verification.",
        pmAngle: "Directly solves the primary administrative operational bottleneck."
      },
      {
        name: "Student Skill Matcher",
        description: "Matches student skill metrics against incoming company job specifications using standard taxonomy classification.",
        pmAngle: "Reduces irrelevant applications, optimizing reviewer load."
      }
    ],
    metrics: {
      northStar: "Average NOC Approval Turnaround Time (TAT)",
      description: "Average days elapsed from student NOC request submission to digital download availability.",
      secondary: [
        "Administrative hours saved per placement season (targeted 40%)",
        "Student satisfaction score on status visibility",
        "Number of company profiles integrated"
      ]
    },
    learnings: [
      "Secured 40% reduction in coordination overhead. Proves that automating administrative bottlenecks yields the highest immediate UX returns.",
      "Usability testing is critical. TPO administrators are non-technical; the interface must feel as simple as a physical paper stack."
    ]
  },
  "notion-ai": {
    title: "Notion AI",
    tagline: "Notion AI — 0 to 1 Launch (Product Scoping & Integration Case Study)",
    category: "Notion AI — 0 to 1 Launch",
    context: "Product teardown and strategic launch case study examining Notion's native LLM feature scoping and integration model.",
    problem: "In 2022-2023, Generative AI tools were highly fragmented. Writing professionals faced significant copy-paste friction: copy text from Notion, paste to external ChatGPT windows, prompt, copy results back, and format block layouts. Integrating AI directly inside a block-based document editor posed high product bifurcation risks (users seeking clean writing vs automated bloat), latency challenges, and prompt-writing fatigue.",
    research: {
      methodology: "Analyzed productivity usage patterns and copy-paste frequency data among 500+ active product professionals.",
      insights: [
        "75% of context switching occurs during text synthesis and note-taking phases.",
        "Users reject editor extensions if latency exceeds 800ms or demands custom prompt scripts.",
        "Over 85% of users experience prompt fatigue and prefer one-click contextual templates."
      ]
    },
    personas: [
      {
        name: "Shivang",
        role: "Lead PM & Agile Facilitator (The Agenda Builder)",
        bio: "Drafts long requirement documents and meeting notes. Relies on AI tools to extract tickets, checklists, and dates automatically.",
        needs: [
          "Automated action item extraction from unstructured notes.",
          "High editing velocity with minimal menu interactions."
        ],
        painPoints: [
          "Spends hours translating raw meeting notes into JIRA cards.",
          "Intrusive popups that disrupt writing cadence."
        ]
      },
      {
        name: "Dipesh",
        role: "Content Writer (The Clean Editor)",
        bio: "Values distraction-free document spaces. Highly sensitive to intrusive AI overlays or typing lags that break focus.",
        needs: [
          "Completely unobtrusive UI triggers.",
          "Ability to ignore AI features entirely if desired."
        ],
        painPoints: [
          "Unsolicited tool tips or popups.",
          "Accidental AI trigger commands during manual typing."
        ]
      },
      {
        name: "Rythem (Junior)",
        role: "Student Researcher & Note-Taker (The Synthesizer)",
        bio: "Leverages Notion databases to compile notes and research drafts. Needs prompt-free summaries to parse massive documentation quickly.",
        needs: [
          "Instant summarization of highlighted pages and blocks.",
          "Context-aware AI assistance inside the active document window."
        ],
        painPoints: [
          "Copy-pasting context to external AI tools breaks study workflow.",
          "Lacks easy templates to parse PDF text in-place."
        ]
      },
      {
        name: "Harshit",
        role: "Product Spec Creator (The Builder)",
        bio: "Needs to synthesize product requirements and generate task checklists instantly, wanting the editor to automatically write summaries in place.",
        needs: [
          "One-click content summarization and task extraction.",
          "High editing velocity without window context switching."
        ],
        painPoints: [
          "Loses time switching to chat windows.",
          "Vague LLM outputs that require manual re-tagging."
        ]
      }
    ],
    competitors: [
      {
        name: "ChatGPT (OpenAI Web Portal)",
        pros: "Strong generic intelligence, versatile conversation memory.",
        cons: "High context friction; no awareness of the block editor's database schema or page context."
      },
      {
        name: "Google Docs Smart Canvas",
        pros: "Excellent collaborative canvas infrastructure.",
        cons: "Slower to adopt modular block commands and quick action templates."
      },
      {
        name: "Jasper / Copy.ai",
        pros: "Rich marketing-focused copywriting templates.",
        cons: "Lacks general note-taking structure and workspace database integration."
      }
    ],
    decisions: [
      {
        decision: "Keyboard-First Trigger (Space & Slash Commands)",
        rationale: "Kept the interface clean and solved bifurcation risk by hiding AI behind existing keyboard triggers (pressing Space on an empty block or typing /ai). Writers are never disrupted, while power users get instant access."
      },
      {
        decision: "Block-Aware Local Context Mapping",
        rationale: "Instead of sending the entire document to the LLM, the integration restricts RAG context to adjacent blocks or highlighted paragraphs, reducing token cost and latency by 45%."
      }
    ],
    features: [
      {
        name: "Inline Action Item Extractor",
        description: "Scans meeting notes blocks, identifies verbs, and auto-populates checkbox lists below the text.",
        pmAngle: "Translates abstract text into immediate productivity workflows."
      },
      {
        name: "Single-Click Context Templates",
        description: "Pre-configures prompts like 'Summarize', 'Change Tone to Professional', or 'Fix Grammar' directly into contextual overlays.",
        pmAngle: "Solves prompt-writing fatigue by hiding instructions under a template layer."
      }
    ],
    metrics: {
      northStar: "Weekly Active AI Interactions Per User",
      description: "Measured as the average count of successful AI-completed commands per user week.",
      secondary: [
        "Retention rate of users who use AI in week 1 (target: +15% vs baseline)",
        "Prompt-to-output latency (target: <600ms)",
        "Premium subscription upgrade conversion rate"
      ]
    },
    learnings: [
      "Closeness to the user context is a product's ultimate moat. The value of Notion AI lies not in the LLM model itself, but in having immediate access to your database notes.",
      "Self-Aware PM Reflection: Notion should have launched a free usage tier of AI earlier to accelerate adoption before competitors bundled it natively."
    ]
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  
  const id = params?.id as string;
  const study = id ? CASE_STUDIES_DATA[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-[#FDFBE2] flex flex-col items-center justify-center p-6 text-center text-[#0A1128]">
        <h1 className="text-2xl font-bold">Case Study Not Found</h1>
        <p className="text-[#5C6274] mt-2">The case study route you requested could not be resolved.</p>
        <Link 
          href="/" 
          className="mt-6 inline-flex h-10 items-center justify-center rounded-sm border border-[#0A1128] bg-[#F5E88F] px-6 text-sm font-bold text-[#0A1128] shadow-[2px_2px_0px_0px_#0A1128]"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBE2] font-sans antialiased text-[#0A1128] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[#0A1128]/20 bg-[#FDFBE2]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl h-16 items-center justify-between px-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0A1128] hover:opacity-75 transition-opacity"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="text-xs bg-[#F5E88F] border border-[#0A1128] font-bold px-3 py-1 rounded-sm shadow-[1px_1px_0px_0px_#0A1128]">
            {study.category}
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="py-16 md:py-20 border-b border-[#0A1128]/20 bg-white/40">
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-xs font-bold text-[#4A5D11] uppercase tracking-widest">{study.category}</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#0A1128] mt-3">
            {study.title}
          </h1>
          <p className="text-lg md:text-xl text-[#5C6274] mt-3 font-semibold leading-relaxed max-w-3xl">
            {study.tagline}
          </p>
          <div className="mt-8 p-6 border-2 border-[#0A1128] bg-[#FDFBE2]/30 rounded-sm text-sm text-[#0A1128] leading-relaxed shadow-[4px_4px_0px_0px_#0A1128] font-serif">
            <span className="font-sans font-bold uppercase tracking-wider text-[11px] bg-[#0A1128] text-white px-2 py-0.5 rounded-sm mr-2">Context</span>
            {study.context}
          </div>
        </div>
      </section>

      {/* Main Breakdown */}
      <main className="mx-auto max-w-4xl px-6 mt-16 grid grid-cols-1 gap-16">
        
        {/* Section 1: Problem */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#0A1128] pb-3 mb-2 pl-1">
            <Target size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#0A1128] tracking-tight">Problem Definition</h2>
          </div>
          <p className="font-serif text-base text-[#0A1128]/85 leading-relaxed max-w-3xl">
            {study.problem}
          </p>
        </section>

        {/* Section 2: Research */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#0A1128] pb-3 mb-2 pl-1">
            <BookOpen size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#0A1128] tracking-tight">User Research</h2>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#4A5D11] uppercase tracking-wider block">Methodology</span>
            <p className="font-serif text-base text-[#0A1128] leading-relaxed italic bg-white p-5 border border-[#0A1128] rounded-sm shadow-[2px_2px_0px_0px_#0A1128]">
              "{study.research.methodology}"
            </p>
          </div>
          <div className="space-y-3 pt-2">
            <span className="text-[10px] font-bold text-[#4A5D11] uppercase tracking-wider block">Key Insights Gathered</span>
            <ul className="space-y-3">
              {study.research.insights.map((insight, idx) => (
                <li key={idx} className="flex items-start gap-4 text-sm md:text-base text-[#5C6274] leading-relaxed">
                  <div className="h-6 w-6 rounded-full border border-[#0A1128] bg-[#F5E88F] text-[#0A1128] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_0px_#0A1128]">
                    {idx + 1}
                  </div>
                  <span className="font-serif text-[#0A1128]/85">{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Personas */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#0A1128] pb-3 mb-2 pl-1">
            <Users size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#0A1128] tracking-tight">User Personas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {study.personas.map((persona, idx) => (
              <div key={idx} className="bg-white border border-[#0A1128] rounded-sm p-6 shadow-[4px_4px_0px_0px_#0A1128] hover:shadow-[6px_6px_0px_0px_#0A1128] transition-all space-y-4">
                <div className="flex justify-between items-start gap-2 border-b border-[#0A1128]/10 pb-2">
                  <div>
                    <h3 className="font-black text-[#0A1128] text-base leading-none">{persona.name}</h3>
                    <span className="text-[11px] text-[#4A5D11] font-bold uppercase tracking-wider block mt-1">{persona.role}</span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-[#FAF9D8] px-2 py-0.5 border border-[#0A1128]/25 rounded-sm">
                    {idx === 0 ? "Primary" : idx === 1 ? "Secondary" : `User Archetype ${idx}`}
                  </span>
                </div>
                <p className="font-serif text-xs md:text-sm text-[#5C6274] leading-relaxed italic">
                  "{persona.bio}"
                </p>
                <div className="space-y-4 border-t border-[#0A1128]/10 pt-3">
                  <div>
                    <span className="text-[9px] font-black uppercase text-[#0A1128] tracking-widest block">Needs</span>
                    <ul className="text-xs text-[#5C6274] list-disc list-inside space-y-1 mt-1 leading-relaxed">
                      {persona.needs.map((n, i) => <li key={i} className="font-serif text-[#0A1128]/80">{n}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-[#0A1128] tracking-widest block">Frictions</span>
                    <ul className="text-xs text-[#5C6274] list-disc list-inside space-y-1 mt-1 leading-relaxed">
                      {persona.painPoints.map((p, i) => <li key={i} className="font-serif text-[#0A1128]/80">{p}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Competitor Analysis */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#0A1128] pb-3 mb-2 pl-1">
            <Compass size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#0A1128] tracking-tight">Competitor Analysis</h2>
          </div>
          <div className="overflow-x-auto border-2 border-[#0A1128] rounded-sm bg-white shadow-[3px_3px_0px_0px_#0A1128]">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-[#F5E88F] border-b-2 border-[#0A1128] text-[#0A1128] font-black uppercase tracking-wider text-[11px]">
                  <th className="p-4 border-r border-[#0A1128]">Competitor</th>
                  <th className="p-4 border-r border-[#0A1128]">What They Do Well</th>
                  <th className="p-4">Where They Fall Short</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0A1128] text-[#0A1128] font-medium">
                {study.competitors.map((comp, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF9D8]/30 transition-colors">
                    <td className="p-4 font-black text-[#0A1128] border-r border-[#0A1128] bg-[#FAF9D8]/10">{comp.name}</td>
                    <td className="p-4 leading-relaxed border-r border-[#0A1128] font-serif text-sm">{comp.pros}</td>
                    <td className="p-4 leading-relaxed font-serif text-sm">{comp.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: Product Decisions */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#0A1128] pb-3 mb-2 pl-1">
            <Layers size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#0A1128] tracking-tight">Product Decisions</h2>
          </div>
          <div className="space-y-6">
            {study.decisions.map((dec, idx) => (
              <div key={idx} className="bg-white border border-[#0A1128] rounded-sm p-6 shadow-[4px_4px_0px_0px_#0A1128] hover:shadow-[5px_5px_0px_0px_#0A1128] transition-all">
                <span className="text-[9px] font-bold bg-[#F5E88F] text-[#0A1128] border border-[#0A1128] px-2 py-0.5 rounded-sm font-mono uppercase">Decision {idx + 1}</span>
                <h3 className="text-lg font-black text-[#0A1128] mt-2 tracking-tight">{dec.decision}</h3>
                <p className="text-sm text-[#5C6274] mt-2 leading-relaxed font-serif">
                  <span className="font-sans font-bold text-[#0A1128] uppercase tracking-wider text-[10px] block mb-1">Product Rationale</span>
                  {dec.rationale}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Key Features */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#0A1128] pb-3 mb-2 pl-1">
            <Brain size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#0A1128] tracking-tight">Key Features & Design Scope</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {study.features.map((feature, idx) => (
              <div key={idx} className="border border-[#0A1128] bg-white rounded-sm p-6 shadow-[3px_3px_0px_0px_#0A1128] hover:shadow-[5px_5px_0px_0px_#0A1128] transition-all flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-[#0A1128] text-lg tracking-tight">{feature.name}</h3>
                  <p className="text-sm text-[#5C6274] mt-2 leading-relaxed font-serif">
                    {feature.description}
                  </p>
                </div>
                <div className="bg-[#FAF9D8] border border-[#0A1128] rounded-sm p-4 mt-4 text-[12px] text-[#0A1128]">
                  <span className="font-sans font-black uppercase tracking-wider block mb-1 text-[10px] text-[#4A5D11]">PM Reasoning</span>
                  <div className="font-serif">{feature.pmAngle}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Metrics */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#0A1128] pb-3 mb-2 pl-1">
            <BarChart2 size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#0A1128] tracking-tight">Metrics Framework</h2>
          </div>
          <div className="bg-[#0A1128] border-2 border-[#0A1128] text-white rounded-sm p-8 space-y-6 shadow-[6px_6px_0px_0px_#F5E88F]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5E88F] bg-white/10 px-2.5 py-1 rounded-sm">North Star Metric</span>
              <h3 className="text-2xl font-black mt-3 text-[#F5E88F] tracking-tight">{study.metrics.northStar}</h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed font-serif">{study.metrics.description}</p>
            </div>
            <div className="border-t border-white/10 pt-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5E88F] block mb-3">Supporting Funnel Metrics</span>
              <ul className="text-sm text-gray-300 space-y-2 list-inside">
                {study.metrics.secondary.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-serif">
                    <span className="text-[#F5E88F] font-bold">•</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Learnings */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#0A1128] pb-3 mb-2 pl-1">
            <CheckCircle size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#0A1128] tracking-tight">Key Learnings</h2>
          </div>
          <ul className="space-y-4">
            {study.learnings.map((learning, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-[#5C6274] leading-relaxed">
                <div className="h-2.5 w-2.5 rounded-full bg-[#4A5D11] shrink-0 mt-2 border border-[#0A1128]" />
                <span className="font-serif text-[#0A1128]/85">{learning}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Bottom CTA */}
      <section className="mt-20 text-center max-w-4xl mx-auto px-6 pt-12 border-t border-[#0A1128]/20">
        <Link 
          href="/" 
          className="inline-flex h-11 items-center justify-center rounded-sm border border-[#0A1128] bg-[#F5E88F] px-8 text-sm font-bold text-[#0A1128] hover:bg-[#ebd96e] transition-colors shadow-[3px_3px_0px_0px_#0A1128]"
        >
          Return to Portfolio
        </Link>
      </section>
    </div>
  );
}
