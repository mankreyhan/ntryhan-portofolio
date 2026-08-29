"use client";

import { StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { AnimatedText } from "@/components/motion/AnimatedText";

/* =========================================================
   ICON
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

function HydropowerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M4 8c2.5-2 5.5-2 8 0s5.5 2 8 0" />
      <path d="M4 13c2.5-2 5.5-2 8 0s5.5 2 8 0" />
      <path d="M4 18c2.5-2 5.5-2 8 0s5.5 2 8 0" />
    </svg>
  );
}

/* =========================================================
   SECTION BACKGROUND
========================================================= */

function SectionBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0">
        <div
          className="h-full w-full opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[240px] font-bold leading-none tracking-[-0.08em] text-white/[0.03] lg:block">
        05
      </div>

      <div className="pointer-events-none absolute left-0 top-[24%] h-px w-[30%] bg-white/[0.07]" />
      <div className="pointer-events-none absolute right-0 bottom-[24%] h-px w-[25%] bg-white/[0.07]" />

      <div className="pointer-events-none absolute left-[7%] top-[14%] hidden h-14 w-14 border-l border-t border-emerald-400/20 lg:block" />
      <div className="pointer-events-none absolute bottom-[12%] right-[7%] hidden h-16 w-16 border-b border-r border-blue-400/15 lg:block" />

      <div className="pointer-events-none absolute right-[7%] top-[9%] hidden lg:block">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-emerald-400/60" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-emerald-300/80">
            Experience / 05
          </span>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   EXPERIENCE CARD
========================================================= */

function ExperienceCard({
  number,
  title,
  subtitle,
  description,
  tags,
  accent,
  icon,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accent: "emerald" | "blue";
  icon: React.ReactNode;
}) {
  const styles = {
    emerald: {
      glow: "bg-emerald-500/15",
      icon: "border-emerald-400/25 bg-emerald-500/10 text-emerald-300",
      subtitle: "text-emerald-300",
      line: "from-emerald-400/60",
      hover: "hover:border-emerald-400/30",
      tag: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
      dot: "bg-emerald-400",
    },
    blue: {
      glow: "bg-blue-500/15",
      icon: "border-blue-400/25 bg-blue-500/10 text-blue-300",
      subtitle: "text-blue-300",
      line: "from-blue-400/60",
      hover: "hover:border-blue-400/30",
      tag: "border-blue-400/20 bg-blue-500/10 text-blue-300",
      dot: "bg-blue-400",
    },
  }[accent];

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${styles.hover} md:p-9`}
    >
      {/* GLOW */}
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition duration-300 group-hover:scale-125 ${styles.glow}`}
      />

      {/* TOP */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl border ${styles.icon}`}
          >
            {icon}
          </div>

          <span className="text-[9px] tracking-[0.25em] text-slate-500">
            {number}
          </span>
        </div>

        <span
          className={`h-px w-12 bg-gradient-to-r to-transparent transition-all duration-300 group-hover:w-20 ${styles.line}`}
        />
      </div>

      {/* TITLE */}
      <h3 className="relative mt-7 text-2xl font-semibold leading-tight tracking-tight text-white">
        {title}
      </h3>

      {/* SUBTITLE */}
      <p className={`relative mt-2 text-xs uppercase tracking-[0.18em] ${styles.subtitle}`}>
        {subtitle}
      </p>

      {/* DESCRIPTION */}
      <p className="relative mt-6 text-sm leading-7 text-slate-400">
        {description}
      </p>

      {/* TAGS */}
      <div className="relative mt-7 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full border px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] ${styles.tag}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* BOTTOM INDICATOR */}
      <div className="relative mt-7 flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />

        <span className="text-[8px] uppercase tracking-[0.2em] text-slate-500">
          Pengalaman Lapangan
        </span>
      </div>
    </article>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0d12] px-6 py-28 md:py-36"
    >
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="relative z-10 mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-400/70" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
              05 / Experience
            </span>
          </div>

          <AnimatedText
            text="Experience."
            as="h2"
            className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
          />
        </div>

        <StaggerGroup className="grid gap-6 lg:grid-cols-2" variant="fadeUp">
          {/* KONSUIL */}
          <StaggerItem>
            <ExperienceCard
              number="01"
              title="Konsuil - Sub Area Kraksaan"
              subtitle="Praktik Kelistrikan Industri"
              description="Pengalaman praktik dalam kegiatan pemeriksaan dan instalasi kelistrikan, termasuk pemasangan kWh meter dan pekerjaan jaringan listrik."
              accent="emerald"
              icon={<ElectricalIcon />}
              tags={["Konsuil", "Instalasi Kelistrikan", "kWh Meter"]}
            />
          </StaggerItem>

          {/* PLTMH */}
          <StaggerItem>
            <ExperienceCard
              number="02"
              title="PLTMH Gunung Sawur Unit II - Lumajang"
              subtitle="Pengalaman Lapangan Energi Terbarukan"
              description="Pengalaman lapangan dalam mengamati sistem pembangkit listrik tenaga mikrohidro, termasuk proses konversi energi terbarukan dan pengoperasian sistem kelistrikan."
              accent="blue"
              icon={<HydropowerIcon />}
              tags={["PLTMH", "Tenaga Air", "Energi Terbarukan"]}
            />
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}