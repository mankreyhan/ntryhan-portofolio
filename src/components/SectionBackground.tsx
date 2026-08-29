"use client";

type SectionBackgroundProps = {
  variant?: "about" | "education" | "experience" | "work" | "certifications" | "contact";
};

export default function SectionBackground({
  variant = "about",
}: SectionBackgroundProps) {
  const config = {
    about: {
      number: "02",
      label: "ABOUT",
      glow: "bg-emerald-500/[0.1]",
      accent: "bg-emerald-400/60",
      border: "border-emerald-400/20",
      dot: "bg-emerald-400/70",
      text: "text-emerald-300/80",
    },
    education: {
      number: "03",
      label: "EDUCATION",
      glow: "bg-emerald-500/[0.1]",
      accent: "bg-emerald-400/60",
      border: "border-emerald-400/20",
      dot: "bg-emerald-400/70",
      text: "text-emerald-300/80",
    },
    experience: {
      number: "04",
      label: "EXPERIENCE",
      glow: "bg-blue-500/[0.1]",
      accent: "bg-blue-400/60",
      border: "border-blue-400/20",
      dot: "bg-blue-400/70",
      text: "text-blue-300/80",
    },
    work: {
      number: "05",
      label: "SELECTED WORK",
      glow: "bg-violet-500/[0.1]",
      accent: "bg-violet-400/60",
      border: "border-violet-400/20",
      dot: "bg-violet-400/70",
      text: "text-violet-300/80",
    },
    certifications: {
      number: "06",
      label: "CERTIFICATIONS",
      glow: "bg-amber-500/[0.1]",
      accent: "bg-amber-400/60",
      border: "border-amber-400/20",
      dot: "bg-amber-400/70",
      text: "text-amber-300/80",
    },
    contact: {
      number: "07",
      label: "CONTACT",
      glow: "bg-cyan-500/[0.1]",
      accent: "bg-cyan-400/60",
      border: "border-cyan-400/20",
      dot: "bg-cyan-400/70",
      text: "text-cyan-300/80",
    },
  };

  const current = config[variant];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* BASE BACKGROUND */}
      <div className="absolute inset-0 bg-[#0a0d12]" />

      {/* GRID HUD — garis tipis lembut */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* MAIN GLOW */}
      <div
        className={`absolute -right-40 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full blur-3xl ${current.glow}`}
      />
      <div
        className={`absolute left-[20%] top-[8%] h-64 w-64 rounded-full blur-3xl ${current.glow}`}
      />

      {/* LARGE NUMBER */}
      <div className="absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none text-[260px] font-bold leading-none tracking-[-0.08em] text-white/[0.03] lg:block">
        {current.number}
      </div>

      {/* HORIZONTAL LINES */}
      <div className="absolute left-0 top-[24%] h-px w-[32%] bg-white/[0.07]" />
      <div className="absolute right-0 top-[70%] h-px w-[28%] bg-white/[0.07]" />

      {/* TOP LEFT CORNER */}
      <div
        className={`absolute left-[7%] top-[16%] hidden h-16 w-16 border-l border-t lg:block ${current.border}`}
      />

      {/* BOTTOM RIGHT CORNER */}
      <div
        className={`absolute bottom-[13%] right-[7%] hidden h-20 w-20 border-b border-r lg:block ${current.border}`}
      />

      {/* CROSS MARK */}
      <div className="absolute left-[8%] top-[32%] hidden lg:block">
        <div className="relative h-5 w-5">
          <span
            className={`absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 ${current.accent}`}
          />
          <span
            className={`absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 ${current.accent}`}
          />
          <span
            className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${current.dot}`}
          />
        </div>
      </div>

      {/* SECTION LABEL */}
      <div className="absolute right-[7%] top-[9%] hidden lg:block">
        <div className="flex items-center gap-3">
          <span className={`h-px w-8 ${current.accent}`} />
          <span className={`text-[8px] uppercase tracking-[0.3em] ${current.text}`}>
            {current.label}
          </span>
        </div>
      </div>

      {/* VERTICAL LABEL */}
      <div className="absolute right-[3%] top-1/2 hidden -translate-y-1/2 lg:block">
        <span
          className="text-[8px] uppercase tracking-[0.3em] text-slate-500"
          style={{ writingMode: "vertical-rl" }}
        >
          Renewable / Electrical Systems
        </span>
      </div>

      {/* DECORATIVE DOTS */}
      <span
        className={`absolute right-[18%] top-[27%] hidden h-2 w-2 rounded-full lg:block ${current.dot}`}
      />
      <span
        className={`absolute bottom-[18%] left-[13%] hidden h-1.5 w-1.5 rounded-full lg:block ${current.dot}`}
      />

      {/* SMALL TECHNICAL MARK */}
      <div className="absolute bottom-[9%] left-[7%] hidden items-center gap-2 lg:flex">
        <span className={`h-px w-6 ${current.accent}`} />
        <span className="text-[7px] uppercase tracking-[0.25em] text-slate-500">
          Energy Systems
        </span>
      </div>
    </div>
  );
}