"use client";

import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { AnimatedText } from "@/components/motion/AnimatedText";

const CERTIFICATES = [
  {
    number: "01",
    title: "English Proficiency Test",
    subtitle: "English Proficiency",
    href: "/images/certificates/ept.jpg",
    accent: "emerald",
  },
  {
    number: "02",
    title:
      "Supervisor Pembangunan dan Pemasangan Pembangkit Listrik Tenaga Surya (PLTS)",
    subtitle: "Competency Certificate",
    href: "/images/certificates/plts.jpg",
    accent: "blue",
  },
];

function DocumentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

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
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-amber-500/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute left-[18%] top-[8%] h-64 w-64 rounded-full bg-emerald-500/[0.08] blur-3xl" />

      {/* LARGE NUMBER */}
      <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[240px] font-bold leading-none tracking-[-0.08em] text-white/[0.03] lg:block">
        07
      </div>

      {/* DECORATIVE LINES */}
      <div className="pointer-events-none absolute left-0 top-[24%] h-px w-[30%] bg-white/[0.07]" />
      <div className="pointer-events-none absolute bottom-[24%] right-0 h-px w-[25%] bg-white/[0.07]" />

      {/* CORNERS */}
      <div className="pointer-events-none absolute left-[7%] top-[14%] hidden h-14 w-14 border-l border-t border-amber-400/20 lg:block" />
      <div className="pointer-events-none absolute bottom-[12%] right-[7%] hidden h-16 w-16 border-b border-r border-emerald-400/15 lg:block" />

      {/* SECTION LABEL */}
      <div className="pointer-events-none absolute right-[7%] top-[9%] hidden lg:block">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-amber-400/60" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-amber-300/80">
            Certificates / 07
          </span>
        </div>
      </div>
    </>
  );
}

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0d12] px-6 py-28 md:py-36"
    >
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="relative z-10 mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-amber-400/70" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
              07 / Certificates
            </span>
          </div>

          <AnimatedText
            text="Certificates."
            as="h2"
            className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
          />
        </div>

        <StaggerGroup className="grid gap-5 sm:grid-cols-2" variant="fadeUp">
          {CERTIFICATES.map((certificate) => {
            const isEmerald = certificate.accent === "emerald";

            return (
              <StaggerItem key={certificate.number}>
                <div
                  className={`group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 md:p-8 ${
                    isEmerald
                      ? "hover:border-emerald-400/30"
                      : "hover:border-blue-400/30"
                  }`}
                >
                  {/* GLOW */}
                  <div
                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition ${
                      isEmerald
                        ? "bg-emerald-500/15 group-hover:bg-emerald-500/25"
                        : "bg-blue-500/15 group-hover:bg-blue-500/25"
                    }`}
                  />

                  {/* ICON */}
                  <div className="relative flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                        isEmerald
                          ? "border-emerald-400/25 bg-emerald-500/10 text-emerald-300"
                          : "border-blue-400/25 bg-blue-500/10 text-blue-300"
                      }`}
                    >
                      <DocumentIcon />
                    </div>

                    <span className="text-[9px] tracking-[0.25em] text-slate-600">
                      {certificate.number}
                    </span>
                  </div>

                  {/* TYPE */}
                  <p
                    className={`relative mt-7 text-[8px] uppercase tracking-[0.25em] ${
                      isEmerald ? "text-emerald-300" : "text-blue-300"
                    }`}
                  >
                    JPG / Certificate
                  </p>

                  {/* TITLE */}
                  <h3 className="relative mt-3 text-xl font-semibold tracking-tight text-white">
                    {certificate.title}
                  </h3>

                  {/* SUBTITLE */}
                  <p className="relative mt-2 text-sm text-slate-400">
                    {certificate.subtitle}
                  </p>

                  {/* LINK */}
                  <a
                    href={certificate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/link relative mt-7 inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-[8px] uppercase tracking-[0.2em] transition duration-300 hover:-translate-y-0.5 ${
                      isEmerald
                        ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                        : "border-blue-400/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20"
                    }`}
                  >
                    <span
                      className={`h-px w-6 transition-all duration-300 group-hover/link:w-10 ${
                        isEmerald ? "bg-emerald-400/60" : "bg-blue-400/60"
                      }`}
                    />
                    View certificate
                    <span
                      className={`text-sm transition-transform duration-300 group-hover/link:translate-x-1 ${
                        isEmerald ? "text-emerald-300" : "text-blue-300"
                      }`}
                    >
                      ↗
                    </span>
                  </a>

                  {/* HINT */}
                  <p className="relative mt-4 text-[8px] uppercase tracking-[0.2em] text-slate-600">
                    Tap to view certificate
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}