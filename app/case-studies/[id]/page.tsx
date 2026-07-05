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
  Users,
  Frown
} from "lucide-react";

interface TargetUser {
  role: string;
  description: string;
}

interface PainPoint {
  role: string;
  points: string[];
}

interface UserStory {
  role: string;
  story: string;
  benefit: string;
}

interface FeaturePriority {
  feature: string;
  impact: "High" | "Medium" | "Low";
  effort: "High" | "Medium" | "Low";
  priority: "High" | "Medium" | "Low";
}

interface CaseStudy {
  title: string;
  tagline: string;
  category: string;
  context: string;
  problemStatement: string;
  goals: string[];
  targetUsers: TargetUser[];
  painPoints: PainPoint[];
  userStories: UserStory[];
  featurePrioritization: FeaturePriority[];
  successMetrics: {
    northStar: {
      name: string;
      description: string;
    };
    secondary: string[];
  };
  conclusion: string;
}

// Detailed PRD data for Case Studies
const CASE_STUDIES_DATA: Record<string, CaseStudy> = {
  "ask-your-senior": {
    title: "AskYourSenior",
    tagline: "College-Centric Professional Networking & Mentorship Platform",
    category: "Featured Product Case Study",
    context: "Inspired by first-hand friction encountered while applying for off-campus internships. Finding the right senior for guidance or referrals was difficult, even when alumni from the same college worked at the target firm. Existing networks like LinkedIn lack hyper-local campus context, forcing students to rely on fragmented WhatsApp chats or outdated databases.",
    problemStatement: "Students preparing for placements face critical bottlenecks: discovering which alumni work at specific firms; missing referral deadlines due to cold outreach latency; career guidance getting scattered across WhatsApp, Discord, and emails; institutional hiring logs and preparation resources disappearing when seniors graduate; and busy mentors getting flooded with unstructured spam requests.",
    goals: [
      "Bridge career, referral, and mentorship gaps between current students and alumni.",
      "Protect senior and alumnus bandwidth using structured interaction channels.",
      "Preserve institutional placement knowledge, preparation resources, and stats across batches.",
      "Minimize cold outreach friction by building a trusted college-focused professional ecosystem."
    ],
    targetUsers: [
      {
        role: "Juniors (CSE/Engineering Students)",
        description: "Looking for career roadmaps, resume review checkpoints, and off-campus referral opportunities."
      },
      {
        role: "Working Alumni / Seniors",
        description: "Willing to help their college peers but have limited free time and are fatigued by generic requests."
      }
    ],
    painPoints: [
      {
        role: "Juniors",
        points: [
          "80% hesitate to message alumni on LinkedIn due to lack of a shared contextual entry point.",
          "Messages sent to cold contacts are left on read, causing missed application deadlines.",
          "Preparation logs and resources are scattered across private drives and group chats."
        ]
      },
      {
        role: "Alumni / Seniors",
        points: [
          "Flood of vague, unstructured LinkedIn requests (e.g., 'please find me a job').",
          "Reviewing unvetted, sloppy, or improperly formatted resume files wasting time.",
          "Repeating answers to basic, recurring preparation questions (e.g., 'how to prepare for DBMS')."
        ]
      }
    ],
    userStories: [
      {
        role: "Junior",
        story: "filter our campus alumni directory by specific companies and departments",
        benefit: "I can identify and connect with the right seniors best positioned to help me, instead of sending cold messages on LinkedIn."
      },
      {
        role: "Junior",
        story: "request a referral using structured, standard templates",
        benefit: "I don't have to write a custom, stressful pitch letter and can upload my resume and job details in one step."
      },
      {
        role: "Alumnus",
        story: "receive pre-screened referral requests with student profile summaries",
        benefit: "I can submit student referrals in under 5 minutes without dealing with unstructured emails and inbox clutter."
      },
      {
        role: "Alumnus",
        story: "have basic preparation questions (like 'how to prepare for DBMS') routed to a central archive or chatbot",
        benefit: "I can reserve my limited free time for advanced, high-value career discussions."
      }
    ],
    featurePrioritization: [
      {
        feature: "Searchable Student & Alumni Directory",
        impact: "High",
        effort: "Medium",
        priority: "High"
      },
      {
        feature: "Structured Referral System & Templates",
        impact: "High",
        effort: "Medium",
        priority: "High"
      },
      {
        feature: "Placement Knowledge Repository & Co. Intelligence",
        impact: "High",
        effort: "High",
        priority: "High"
      },
      {
        feature: "AI Roadmap (Mentor Match, Resume Guard, Chatbot)",
        impact: "High",
        effort: "High",
        priority: "Medium"
      }
    ],
    successMetrics: {
      northStar: {
        name: "Monthly Structured Referral Connections",
        description: "Measured as the volume of referral applications successfully initiated and approved through the platform's standardized senior templates."
      },
      secondary: [
        "Average senior response turnaround time (TAT) (Goal: <48 hours)",
        "Knowledge repository document download & search volumes",
        "Weekly Active Users (WAU) to alumni match ratio"
      ]
    },
    conclusion: "AskYourSenior transforms the college career search from a cold, fragmented struggle into a centralized professional ecosystem. By replacing open chat with structured, purpose-specific channels, the platform protects alumni bandwidth while opening warm referral pipelines for incoming batches."
  },
  "saksham": {
    title: "SAKSHAM",
    tagline: "National Internship & Placement Mission Portal",
    category: "SIH 2025 National Winner",
    context: "Developed as a full-stack, enterprise-grade portal to automate and secure the end-to-end internship/placement lifecycle and issue No Objection Certificates (NOCs) across Indian higher education institutions.",
    problemStatement: "India has over 1,000+ higher education institutions, each following different processes for internships and campus placements. The current ecosystem is highly fragmented, with communication spread across emails, WhatsApp groups, spreadsheets, ERP systems, and physical approvals. Students often miss opportunities because they are unaware of openings or struggle to identify jobs matching their skills. Faculty mentors manually verify eligibility and approve applications, resulting in delays. Placement cells spend significant effort managing company onboarding, student records, and recruitment drives, while employers receive hundreds of applications without an efficient mechanism to identify suitable candidates. These disconnected workflows create inefficiencies across every stakeholder involved in campus recruitment. The absence of a centralized, intelligent platform leads to poor visibility of internship opportunities, manual verification and approval processes, low-quality employer-student matching, delayed communication, lack of analytics for placement cells, and poor student experience during placements. SAKSHAM was built to solve these challenges by creating a unified AI-powered placement ecosystem connecting Students, Faculty Mentors, Placement Cells, and Employers.",
    goals: [
      "Centralize and digitize the complete internship and placement lifecycle on a single unified platform.",
      "Reduce manual administrative workload and paper-based signature delays across institutions.",
      "Improve the quality of employer-student matching using intelligent candidate recommendation algorithms.",
      "Standardize internship management workflows and increase successful internship conversions.",
      "Provide actionable analytics dashboards for placement cells to monitor institutional performance."
    ],
    targetUsers: [
      {
        role: "Students",
        description: "Looking for internships and placement opportunities, tracking application stages, scheduling interviews, and building profiles."
      },
      {
        role: "Faculty Mentors",
        description: "Responsible for reviewing student eligibility, approving requests, tracking progress, and reducing manual paperwork."
      },
      {
        role: "Placement Cell",
        description: "Institution administrators managing company approvals, monitoring drives, inspecting analytics, and managing relationships."
      },
      {
        role: "Employers",
        description: "Companies posting opportunities, screening candidates, scheduling interviews, tracking pipelines, and issuing certificates."
      }
    ],
    painPoints: [
      {
        role: "Students",
        points: [
          "Opportunities scattered across multiple platforms with manual resume submissions.",
          "No visibility into application status or interview scheduling updates.",
          "Repeated profile creation and CV submissions for different companies."
        ]
      },
      {
        role: "Faculty",
        points: [
          "Manual approvals and large volumes of applications to review under short timelines.",
          "Lack of centralized student records and difficulty tracking mentee placement progress."
        ]
      },
      {
        role: "Placement Cell",
        points: [
          "Managing company drives manually through complex spreadsheets and folders.",
          "High administrative workload and difficult cross-role coordination without dashboard analytics."
        ]
      },
      {
        role: "Employers",
        points: [
          "High screening fatigue from receiving large volumes of irrelevant candidate applications.",
          "Time-consuming candidate screening and manual interview scheduling loops."
        ]
      }
    ],
    userStories: [
      {
        role: "Student",
        story: "create a verified digital profile and upload my resume once",
        benefit: "I don't have to repeatedly enter application details and can apply with a single click."
      },
      {
        role: "Student",
        story: "receive AI-recommended internships based on my skills and track my application states",
        benefit: "I can discover relevant opportunities quickly and monitor my hiring progress."
      },
      {
        role: "Faculty Mentor",
        story: "review pending student applications and provide remarks",
        benefit: "I can approve eligible candidates efficiently and guide students."
      },
      {
        role: "Placement Officer",
        story: "approve employer registrations and monitor placement dashboards",
        benefit: "I can oversee institutional performance and protect students from unverified employers."
      },
      {
        role: "Employer",
        story: "receive AI candidate recommendations and auto-schedule interviews on Google Calendar & Meet",
        benefit: "I can save time screening applicants and avoid back-and-forth scheduling."
      }
    ],
    featurePrioritization: [
      {
        feature: "Role-Based Authentication & Profiles",
        impact: "High",
        effort: "Medium",
        priority: "High"
      },
      {
        feature: "AI-Powered Hybrid Recommendation Engine",
        impact: "High",
        effort: "High",
        priority: "High"
      },
      {
        feature: "Automated Multi-Stage NOC Approval Pipeline",
        impact: "High",
        effort: "High",
        priority: "High"
      },
      {
        feature: "Google Calendar & Meet Scheduler Integration",
        impact: "High",
        effort: "Medium",
        priority: "High"
      },
      {
        feature: "Analytics & Placement Stats Dashboard",
        impact: "Medium",
        effort: "Medium",
        priority: "High"
      }
    ],
    successMetrics: {
      northStar: {
        name: "Average Turnaround Time (TAT) from Application to Interview",
        description: "Tracks the end-to-end efficiency of the recruitment funnel, including institutional approvals, matching, and final scheduling."
      },
      secondary: [
        "Application-to-interview and interview-to-offer conversion rates",
        "Average NOC approval turnaround time (Goal: cut from 12 days to <48 hours)",
        "Placement and internship conversion rates across graduating batches"
      ]
    },
    conclusion: "SAKSHAM re-imagines campus recruitment by uniting students, faculty, placement cells, and employers on a single intelligent platform. By integrating vector-similarity matching, automated NOC pipelines, dynamic calendars, and dashboard analytics, it eliminates administrative overhead and matches candidates with recruiters at scale."
  },
  "acadence": {
    title: "Acadence",
    tagline: "Centralized Academic Management & Collaboration Platform",
    category: "Campus Platform MVP",
    context: "Conceptualized and deployed as a central hub for student resources, peer discussions, scheduling, and query resolution in a collegiate ecosystem, replacing fragmented channels with a unified role-based system.",
    problemStatement: "Traditional academic systems rely on disconnected platforms. Resources are scattered across WhatsApp, Google Drive, and personal emails, making them difficult to find and indexing poor. Course queries lack tracking, leading to unanswered concerns and faculty fatigue. Academic announcements are lost in noisy chat feeds, timetables and calendars are shared as static, hard-to-access PDFs, and student records are kept isolated from daily tools. Course feedback is collected only at semester end, limiting opportunities for timely course corrections.",
    goals: [
      "Centralize all academic resources (lecture notes, tutorials, PYQs) in a searchable repository.",
      "Streamline communication between students and faculty through dedicated course channels.",
      "Provide transparent academic support via a structured Query Desk ticketing system.",
      "Simplify access to dynamic schedules (interactive timetables, calendars, announcements).",
      "Empower administrators with platform analytics to drive data-backed curriculum updates."
    ],
    targetUsers: [
      {
        role: "Students",
        description: "Need single-click access to verified notes, exam PYQs, timetables, and a clear path to resolve academic concerns."
      },
      {
        role: "Faculty Members",
        description: "Need an organized workspace to distribute course materials, publish notices, and handle student queries without email overload."
      },
      {
        role: "Academic Representatives",
        description: "Coordinate resource uploads and assist faculty in moderating branch-wide peer discussions."
      },
      {
        role: "Administrators",
        description: "Need to manage timetables/calendars, control permissions, and inspect platform engagement logs."
      }
    ],
    painPoints: [
      {
        role: "Students",
        points: [
          "Wasting hours searching across WhatsApp channels for exam question papers.",
          "Lacking a formal channel to query grading policies or timetables anonymously.",
          "Missing official department announcements mixed in general chat feeds."
        ]
      },
      {
        role: "Faculty",
        points: [
          "Spending hours replying to duplicate student emails regarding schedules and materials.",
          "Distrusting student-created folders for official course syllabus distribution."
        ]
      },
      {
        role: "Academic Representatives",
        points: [
          "Repetitive files forwarding to 100+ students on group messaging apps."
        ]
      },
      {
        role: "Administrators",
        points: [
          "Timetable updates require physical notice board printouts and static document re-distribution.",
          "Lacking data on platform engagement or resource demands."
        ]
      }
    ],
    userStories: [
      {
        role: "Student",
        story: "search and download lecture notes and PYQs by branch and semester from a single repository",
        benefit: "I can prepare for exams efficiently without relying on informal file sharing."
      },
      {
        role: "Student",
        story: "submit academic queries to a structured Query Desk and track their resolution status",
        benefit: "I can get official answers transparently from faculty without sending formal emails."
      },
      {
        role: "Faculty",
        story: "publish materials and notices on a dedicated Course Connect channel",
        benefit: "I can ensure students get authoritative resources and reduce my repetitive email inbox load."
      },
      {
        role: "Administrator",
        story: "update timetable entries on a dynamic dashboard",
        benefit: "I can propagate schedule changes to all student viewports instantly."
      }
    ],
    featurePrioritization: [
      {
        feature: "Academic Resource & PYQ Hub",
        impact: "High",
        effort: "Medium",
        priority: "High"
      },
      {
        feature: "Query Desk (Structured Ticketing)",
        impact: "High",
        effort: "High",
        priority: "High"
      },
      {
        feature: "Interactive Timetables & Calendars",
        impact: "Medium",
        effort: "Medium",
        priority: "High"
      },
      {
        feature: "Administrative Analytics Dashboard",
        impact: "Medium",
        effort: "High",
        priority: "Medium"
      }
    ],
    successMetrics: {
      northStar: {
        name: "Weekly Active Document Downloads & Query Resolutions",
        description: "Measures the utility students derive from study materials and the responsiveness of faculty support."
      },
      secondary: [
        "Average query resolution time (Goal: <24 hours)",
        "Daily Active Users (DAU) peak during exam preparation windows",
        "Material upload accuracy (Auto-Approved vs Pending verification ratio)"
      ]
    },
    conclusion: "Acadence centralizes fragmented academic communication into a unified digital workspace. By combining resource hubs, structured query management, scheduling, and admin dashboards under a role-based gateway, it improves academic velocity and transparency."
  },
  "notion-ai": {
    title: "Notion AI",
    tagline: "Notion AI — 0 to 1 Launch (Product Scoping & Integration Case Study)",
    category: "Notion AI — 0 to 1 Launch",
    context: "Strategic launch teardown examining Notion's native LLM feature scoping and integration model. Explores the 'opt-in vs on by default' product bifurcation risk and metrics framework.",
    problemStatement: "In 2022-2023, Generative AI tools were highly fragmented. Writing professionals faced significant copy-paste friction: copying text from Notion, pasting into external ChatGPT windows, prompting, copying results back, and re-formatting block layouts. Integrating AI directly inside a block-based editor posed high product bifurcation risks (users seeking clean writing spaces vs automated clutter), latency challenges, and prompt-writing fatigue.",
    goals: [
      "Eliminate copy-paste context switching by embedding LLM features directly inside the block editor.",
      "Preserve a distraction-free editing canvas for writers who prefer not to use AI.",
      "Solve prompt-writing fatigue through one-click contextual formatting templates.",
      "Optimize local context mapping to minimize API token usage and response latency."
    ],
    targetUsers: [
      {
        role: "Content Writers",
        description: "Value clean, distraction-free document spaces and are sensitive to lag or unsolicited intrusive overlays."
      },
      {
        role: "Lead Product Managers & Agilists",
        description: "Regularly draft long specification documents and seek automated checklists extraction."
      }
    ],
    painPoints: [
      {
        role: "Content Writers",
        points: [
          "Interrupting writing velocity to switch windows and copy-paste text to external LLMs.",
          "Unsolicited tooltips or intrusive AI suggestions disrupting creative focus.",
          "API response latency exceeding acceptable limits (target: <600ms)."
        ]
      },
      {
        role: "Product Managers",
        points: [
          "Spending manual editing time converting unstructured meeting logs into action items.",
          "Writing repetitive custom prompts to format blocks to professional templates."
        ]
      }
    ],
    userStories: [
      {
        role: "Writer",
        story: "activate AI using a simple keyboard command (Space on an empty block or /ai)",
        benefit: "I can trigger AI features instantly without breaking my writing posture or taking my hands off the keyboard."
      },
      {
        role: "Writer",
        story: "highlight text and select formatting presets like 'Summarize' or 'Professional Tone'",
        benefit: "I can optimize my document styling instantly without writing custom prompts."
      },
      {
        role: "PM",
        story: "have AI scan meeting blocks and extract an actionable checklist",
        benefit: "I can generate my tasks list instantly and reduce follow-up overhead."
      }
    ],
    featurePrioritization: [
      {
        feature: "Keyboard-First Triggers (Space & Slash Commands)",
        impact: "High",
        effort: "Low",
        priority: "High"
      },
      {
        feature: "Single-Click Context Templates",
        impact: "High",
        effort: "Medium",
        priority: "High"
      },
      {
        feature: "Block-Aware Local Context Mapping (RAG)",
        impact: "High",
        effort: "High",
        priority: "High"
      },
      {
        feature: "Inline Action Item Extractor",
        impact: "Medium",
        effort: "Medium",
        priority: "Medium"
      }
    ],
    successMetrics: {
      northStar: {
        name: "Weekly Active AI Interactions Per User",
        description: "Measured as the average count of successful AI-completed commands per active user week."
      },
      secondary: [
        "First-week retention rate of users who triggered AI presets",
        "API prompt-to-output latency (Goal: <600ms)",
        "AI premium plan upgrade conversion rate"
      ]
    },
    conclusion: "Notion AI demonstrates that context is a product's ultimate moat. By placing generative power directly in the block-level workspace, it solves context switching and prompt fatigue, establishing AI as an essential component of document editing."
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  
  const id = params?.id as string;
  const study = id ? CASE_STUDIES_DATA[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen bg-[#FDFBE2] flex flex-col items-center justify-center p-6 text-center text-[#03045E]">
        <h1 className="text-2xl font-bold">Case Study Not Found</h1>
        <p className="text-[#5C6274] mt-2">The case study route you requested could not be resolved.</p>
        <Link 
          href="/" 
          className="mt-6 inline-flex h-10 items-center justify-center rounded-sm border border-[#03045E] bg-[#F5E88F] px-6 text-sm font-bold text-[#03045E] shadow-[2px_2px_0px_0px_#03045E]"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBE2] font-sans antialiased text-[#03045E] pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[#03045E]/20 bg-[#FDFBE2]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl h-16 items-center justify-between px-6">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#03045E] hover:opacity-75 transition-opacity"
          >
            <ArrowLeft size={16} />
            <span>Back to Portfolio</span>
          </Link>
          <div className="text-xs bg-[#F5E88F] border border-[#03045E] font-bold px-3 py-1 rounded-sm shadow-[1px_1px_0px_0px_#03045E]">
            {study.category}
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <section className="py-16 md:py-20 border-b border-[#03045E]/20 bg-white/40">
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-xs font-bold text-[#4A5D11] uppercase tracking-widest">{study.category}</span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#03045E] mt-3">
            {study.title}
          </h1>
          <p className="text-lg md:text-xl text-[#5C6274] mt-3 font-semibold leading-relaxed max-w-3xl">
            {study.tagline}
          </p>
          <div className="mt-8 p-6 border-2 border-[#03045E] bg-[#FDFBE2]/30 rounded-sm text-sm text-[#03045E] leading-relaxed shadow-[4px_4px_0px_0px_#03045E] font-serif">
            <span className="font-sans font-bold uppercase tracking-wider text-[11px] bg-[#03045E] text-white px-2 py-0.5 rounded-sm mr-2">Context</span>
            {study.context}
          </div>
        </div>
      </section>

      {/* Main breakdown - PRD layout */}
      <main className="mx-auto max-w-4xl px-6 mt-16 grid grid-cols-1 gap-16">
        
        {/* Section 1: Problem Statement */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#03045E] pb-3 mb-2 pl-1">
            <Target size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#03045E] tracking-tight">1. Problem Statement</h2>
          </div>
          <p className="font-serif text-base text-[#03045E]/85 leading-relaxed max-w-3xl">
            {study.problemStatement}
          </p>
        </section>

        {/* Section 2: Goals & Objectives */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#03045E] pb-3 mb-2 pl-1">
            <Compass size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#03045E] tracking-tight">2. Goals & Objectives</h2>
          </div>
          <ul className="space-y-3">
            {study.goals.map((goal, idx) => (
              <li key={idx} className="flex items-start gap-4 text-sm md:text-base text-[#03045E] leading-relaxed">
                <div className="h-6 w-6 rounded-full border border-[#03045E] bg-[#F5E88F] text-[#03045E] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-[1px_1px_0px_0px_#03045E]">
                  {idx + 1}
                </div>
                <span className="font-serif text-[#03045E]/85">{goal}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 3: Target Users */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#03045E] pb-3 mb-2 pl-1">
            <Users size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#03045E] tracking-tight">3. Target Users</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {study.targetUsers.map((user, idx) => (
              <div key={idx} className="bg-white border border-[#03045E] rounded-sm p-6 shadow-[3px_3px_0px_0px_#03045E] flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-black uppercase text-[#4A5D11] tracking-widest block">Role Archetype {idx + 1}</span>
                  <h3 className="font-black text-[#03045E] text-base mt-1 leading-none">{user.role}</h3>
                  <p className="font-serif text-sm text-[#5C6274] mt-3 leading-relaxed">
                    {user.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: User Pain Points */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#03045E] pb-3 mb-2 pl-1">
            <Frown size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#03045E] tracking-tight">4. User Pain Points</h2>
          </div>
          <div className="space-y-6">
            {study.painPoints.map((pane, idx) => (
              <div key={idx} className="bg-white/40 border border-[#03045E] rounded-sm p-6 shadow-[2px_2px_0px_0px_#03045E]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#4A5D11] border-b border-[#03045E]/10 pb-2 mb-3">{pane.role} Frictions</h3>
                <ul className="space-y-3">
                  {pane.points.map((pt, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-[#03045E] leading-relaxed">
                      <span className="text-[#03045E] mt-0.5">•</span>
                      <span className="font-serif text-[#03045E]/85">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: User Stories */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#03045E] pb-3 mb-2 pl-1">
            <BookOpen size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#03045E] tracking-tight">5. User Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {study.userStories.map((story, idx) => (
              <div key={idx} className="bg-white border border-[#03045E] rounded-sm p-6 shadow-[4px_4px_0px_0px_#03045E] flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-[#FAF9D8] px-2 py-0.5 border border-[#03045E]/20 rounded-sm">Story {idx + 1}</span>
                  <div className="mt-3 space-y-2">
                    <p className="text-xs text-[#5C6274] leading-normal font-sans">
                      <strong className="text-[#03045E] font-black uppercase text-[9px] block">As a {story.role}:</strong>
                      <span className="font-serif italic text-sm text-[#03045E] block mt-1">"I want to {story.story}..."</span>
                    </p>
                    <p className="text-xs text-[#5C6274] leading-normal font-sans border-t border-[#03045E]/5 pt-2">
                      <strong className="text-[#4A5D11] font-black uppercase text-[9px] block">So that:</strong>
                      <span className="font-serif text-sm text-[#03045E] block mt-1">{story.benefit}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Feature Prioritization */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#03045E] pb-3 mb-2 pl-1">
            <Layers size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#03045E] tracking-tight">6. Feature Prioritization</h2>
          </div>
          <div className="overflow-x-auto border-2 border-[#03045E] rounded-sm bg-white shadow-[3px_3px_0px_0px_#03045E]">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-[#F5E88F] border-b-2 border-[#03045E] text-[#03045E] font-black uppercase tracking-wider text-[11px]">
                  <th className="p-4 border-r border-[#03045E]">Feature Scope</th>
                  <th className="p-4 border-r border-[#03045E]">User Impact</th>
                  <th className="p-4 border-r border-[#03045E]">Eng. Effort</th>
                  <th className="p-4">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#03045E] text-[#03045E] font-medium">
                {study.featurePrioritization.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF9D8]/30 transition-colors">
                    <td className="p-4 font-black text-[#03045E] border-r border-[#03045E] bg-[#FAF9D8]/10">{feat.feature}</td>
                    <td className="p-4 border-r border-[#03045E] font-serif text-center">{feat.impact}</td>
                    <td className="p-4 border-r border-[#03045E] font-serif text-center">{feat.effort}</td>
                    <td className="p-4 text-center font-mono">
                      <span className={`px-2 py-0.5 rounded-sm border text-[10px] font-bold ${
                        feat.priority === "High" 
                          ? "bg-red-50 text-red-700 border-red-300" 
                          : feat.priority === "Medium"
                            ? "bg-yellow-50 text-yellow-700 border-yellow-300"
                            : "bg-green-50 text-green-700 border-green-300"
                      }`}>
                        {feat.priority}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 7: Success Metrics */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#03045E] pb-3 mb-2 pl-1">
            <BarChart2 size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#03045E] tracking-tight">7. Success Metrics</h2>
          </div>
          <div className="bg-[#03045E] border-2 border-[#03045E] text-white rounded-sm p-8 space-y-6 shadow-[4px_4px_0px_0px_#F5E88F]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5E88F] bg-white/10 px-2.5 py-1 rounded-sm">North Star Metric</span>
              <h3 className="text-2xl font-black mt-3 text-[#F5E88F] tracking-tight">{study.successMetrics.northStar.name}</h3>
              <p className="text-sm text-gray-300 mt-2 leading-relaxed font-serif">{study.successMetrics.northStar.description}</p>
            </div>
            <div className="border-t border-white/10 pt-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F5E88F] block mb-3">Supporting Metrics</span>
              <ul className="text-sm text-gray-300 space-y-2 list-inside">
                {study.successMetrics.secondary.map((metric, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-serif">
                    <span className="text-[#F5E88F] font-bold">•</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Conclusion */}
        <section className="space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-[#03045E] pb-3 mb-2 pl-1">
            <CheckCircle size={20} className="text-[#4A5D11]" />
            <h2 className="text-xl font-black text-[#03045E] tracking-tight">8. Conclusion</h2>
          </div>
          <p className="font-serif text-base text-[#03045E]/85 leading-relaxed max-w-3xl bg-white p-6 border border-[#03045E] rounded-sm shadow-[3px_3px_0px_0px_#03045E]">
            {study.conclusion}
          </p>
        </section>
      </main>

      {/* Bottom CTA */}
      <section className="mt-20 text-center max-w-4xl mx-auto px-6 pt-12 border-t border-[#03045E]/20">
        <Link 
          href="/" 
          className="inline-flex h-11 items-center justify-center rounded-sm border border-[#03045E] bg-[#F5E88F] px-8 text-sm font-bold text-[#03045E] hover:bg-[#ebd96e] transition-colors shadow-[3px_3px_0px_0px_#03045E]"
        >
          Return to Portfolio
        </Link>
      </section>
    </div>
  );
}
