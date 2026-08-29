"use client";

import { motion } from "motion/react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

/* =========================================================
   SECTION BACKGROUND
========================================================= */

function SectionBackground() {
  return (
    <>
      {/* BASE BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0d12]" />

      {/* GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* SOFT GLOW */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-emerald-500/[0.1] blur-3xl" />
      <div className="pointer-events-none absolute left-[18%] top-[8%] h-64 w-64 rounded-full bg-blue-500/[0.08] blur-3xl" />

      {/* LARGE NUMBER */}
      <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[240px] font-bold leading-none tracking-[-0.08em] text-white/[0.03] lg:block">
        05
      </div>

      {/* DECORATIVE LINES */}
      <div className="pointer-events-none absolute left-0 top-[24%] h-px w-[30%] bg-white/[0.07]" />
      <div className="pointer-events-none absolute bottom-[24%] right-0 h-px w-[25%] bg-white/[0.07]" />

      {/* CORNERS */}
      <div className="pointer-events-none absolute left-[7%] top-[14%] hidden h-14 w-14 border-l border-t border-emerald-400/20 lg:block" />
      <div className="pointer-events-none absolute bottom-[12%] right-[7%] hidden h-16 w-16 border-b border-r border-blue-400/15 lg:block" />

      {/* SECTION LABEL */}
      <div className="pointer-events-none absolute right-[7%] top-[9%] hidden lg:block">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-emerald-400/60" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-emerald-300/80">
            Skills / 05
          </span>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader() {
  return (
    <div className="relative z-10 mb-14">
      <div className="mb-5 flex items-center gap-4">
        <span className="h-px w-10 bg-emerald-400/70" />

        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
          05 / Skills
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
        Technical toolkit.
      </h2>
    </div>
  );
}

/* =========================================================
   MAIN CATEGORY ICONS
========================================================= */

function ElectricalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M13 2 4.5 13h6L10 22l9.5-12h-6L13 2Z" />
    </svg>
  );
}

function SolarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
    </svg>
  );
}

function BiogasIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 3c2 3 5 5.2 5 9a5 5 0 1 1-10 0c0-2.8 2-5 5-9Z" />
      <path d="M12 11c1.2 1.3 2 2.3 2 3.5a2 2 0 1 1-4 0c0-.9.7-1.8 2-3.5Z" />
    </svg>
  );
}

function HydropowerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M3 7h18" />
      <path d="M5 7c1.5 3 1.5 5 0 8s-1.5 5 0 7" />
      <path d="M12 7c1.5 3 1.5 5 0 8s-1.5 5 0 7" />
      <path d="M19 7c1.5 3 1.5 5 0 8s-1.5 5 0 7" />
    </svg>
  );
}

function RenewableSystemIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3 6.3 17.7" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </svg>
  );
}

function SoftSkillIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.5-3.2 2.3-5 5.5-5s5 1.8 5.5 5M16 11l1.5 1.5L21 9" />
    </svg>
  );
}

/* =========================================================
   SOFTWARE LOGOS
========================================================= */

function CanvaLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-8 w-8 shrink-0"
      role="img"
      aria-label="Canva"
    >
      <defs>
        <linearGradient
          id="canva-gradient"
          x1="5"
          y1="5"
          x2="35"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00C4CC" />
          <stop offset="0.5" stopColor="#7D2AE8" />
          <stop offset="1" stopColor="#FF5F8F" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill="url(#canva-gradient)" />
      <path
        d="M20.2 11.4c-4.9 0-8.5 3.5-8.5 8.6s3.6 8.6 8.5 8.6c3.7 0 6.7-2 7.7-5h-3.9c-.8 1.3-2 2-3.8 2-2.5 0-4.2-2-4.2-5.6s1.7-5.6 4.2-5.6c1.8 0 3 .7 3.8 2h3.9c-1-3-4-5-7.7-5Z"
        fill="white"
      />
    </svg>
  );
}

function WordLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-8 w-8 shrink-0"
      role="img"
      aria-label="Microsoft Word"
    >
      <rect x="14" y="4" width="22" height="32" rx="2" fill="#41A5EE" />
      <rect x="9" y="6" width="22" height="28" rx="2" fill="#2B7CD3" />
      <rect x="4" y="9" width="18" height="22" rx="2" fill="#185ABD" />
      <path
        d="M7 14h3.2l1.7 9 2-9h2.7l2 9 1.7-9h3.2l-3 13h-3.1l-2.1-8.2-2.1 8.2h-3.1L7 14Z"
        fill="white"
      />
    </svg>
  );
}

function ExcelLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-8 w-8 shrink-0"
      role="img"
      aria-label="Microsoft Excel"
    >
      <rect x="13" y="4" width="23" height="32" rx="2" fill="#33C481" />
      <rect x="8" y="6" width="22" height="28" rx="2" fill="#21A366" />
      <rect x="4" y="10" width="17" height="20" rx="2" fill="#107C41" />
      <path
        d="m7.3 14 3.3 5-3.3 5h3.2l1.8-3.1 1.9 3.1h3.2l-3.3-5 3.3-5h-3.2l-1.9 3.1L10.5 14H7.3Z"
        fill="white"
      />
    </svg>
  );
}

function VSCodeLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-8 w-8 shrink-0"
      role="img"
      aria-label="Visual Studio Code"
    >
      <path
        d="M29.8 5.2 18 13.8 11 8.4 5.5 11.5 14.2 20 5.5 28.5 11 31.6l7-5.4 11.8 8.6 4-2.1V7.3l-4-2.1Z"
        fill="#007ACC"
      />
      <path d="M18 13.8 29.8 5.2v27.6L18 24.2l6.1-4.2L18 13.8Z" fill="#1F9CF0" />
      <path
        d="M5.5 11.5 14.2 20l-8.7 8.5 5.5 3.1L22 20 11 8.4l-5.5 3.1Z"
        fill="#75BEFF"
      />
    </svg>
  );
}

/* =========================================================
   DATA
========================================================= */

const electricalSkills = [
  "Electrical Installation",
  "Electrical Measurement",
  "Power Systems",
  "Basic Electrical Analysis",
];

const renewableSkills = [
  { name: "Solar PV", icon: SolarIcon },
  { name: "Biogas", icon: BiogasIcon },
  { name: "PLTMH", icon: HydropowerIcon },
  { name: "Renewable Energy Systems", icon: RenewableSystemIcon },
];

const additionalSkills = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Adaptability",
  "Attention to Detail",
];

const softwareSkills = [
  {
    name: "Canva",
    icon: CanvaLogo,
    hover: "hover:border-cyan-400/25 hover:bg-cyan-500/[0.06]",
  },
  {
    name: "Microsoft Word",
    icon: WordLogo,
    hover: "hover:border-blue-400/25 hover:bg-blue-500/[0.06]",
  },
  {
    name: "Microsoft Excel",
    icon: ExcelLogo,
    hover: "hover:border-emerald-400/25 hover:bg-emerald-500/[0.06]",
  },
  {
    name: "VS Code",
    icon: VSCodeLogo,
    hover: "hover:border-blue-400/25 hover:bg-blue-500/[0.06]",
  },
];

/* =========================================================
   MAIN
========================================================= */

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0d12] px-6 py-28 md:py-36"
    >
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader />

        <StaggerGroup className="grid gap-5 md:grid-cols-2" variant="bounce">
          {/* ELECTRICAL */}
          <StaggerItem>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/30">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/15 blur-3xl transition group-hover:bg-amber-500/25" />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-500/10 text-amber-300">
                  <ElectricalIcon />
                </span>

                <span className="text-[8px] tracking-[0.2em] text-slate-600">
                  01
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-semibold text-white">
                Electrical
              </h3>

              <div className="relative mt-5 space-y-3">
                {electricalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* RENEWABLE ENGINEERING */}
          <StaggerItem>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/15 blur-3xl transition group-hover:bg-emerald-500/25" />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-300">
                  <SolarIcon />
                </span>

                <span className="text-[8px] tracking-[0.2em] text-slate-600">
                  02
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-semibold text-white">
                Renewable Engineering
              </h3>

              <div className="relative mt-5 space-y-3">
                {renewableSkills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileTap={{
                        scale: 0.98,
                        transition: { type: "spring", stiffness: 500, damping: 30 },
                      }}
                      className="flex items-center gap-3 rounded-lg border border-emerald-400/15 bg-emerald-500/[0.05] px-3 py-2.5 text-sm text-slate-300 transition hover:border-emerald-400/30 hover:bg-emerald-500/[0.1]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                        <Icon />
                      </span>
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </StaggerItem>

          {/* SOFTWARE */}
          <StaggerItem>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl transition group-hover:bg-blue-500/25" />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-300">
                  <CodeIcon />
                </span>

                <span className="text-[8px] tracking-[0.2em] text-slate-600">
                  03
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-semibold text-white">
                Software
              </h3>

              <div className="relative mt-5 grid grid-cols-2 gap-3">
                {softwareSkills.map((software) => {
                  const Icon = software.icon;

                  return (
                    <motion.div
                      key={software.name}
                      whileTap={{
                        scale: 0.98,
                        transition: { type: "spring", stiffness: 500, damping: 30 },
                      }}
                      className={`flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3 transition ${software.hover}`}
                    >
                      <Icon />
                      <span className="text-sm text-slate-300">
                        {software.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </StaggerItem>

          {/* ADDITIONAL */}
          <StaggerItem>
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/30">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/15 blur-3xl transition group-hover:bg-purple-500/25" />

              <div className="relative flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/25 bg-purple-500/10 text-purple-300">
                  <SoftSkillIcon />
                </span>

                <span className="text-[8px] tracking-[0.2em] text-slate-600">
                  04
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-semibold text-white">
                Additional
              </h3>

              <div className="relative mt-5 space-y-3">
                {additionalSkills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>

        {/* EDUCATION BADGES */}
        <StaggerGroup
          className="mt-8 grid gap-4 sm:grid-cols-2"
          variant="fadeUp"
        >
          <StaggerItem>
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-5">
              <p className="text-[8px] uppercase tracking-[0.25em] text-slate-400">
                Education
              </p>
              <p className="mt-3 text-sm font-medium text-slate-300">
                D4 Renewable Energy
              </p>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="rounded-xl border border-blue-400/20 bg-blue-500/10 p-5">
              <p className="text-[8px] uppercase tracking-[0.25em] text-slate-400">
                Previous Education
              </p>
              <p className="mt-3 text-sm font-medium text-slate-300">
                Industrial Electronics Engineering
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}