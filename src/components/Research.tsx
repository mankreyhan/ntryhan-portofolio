"use client";

import { type ReactNode } from "react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { AnimatedText } from "@/components/motion/AnimatedText";

/* =========================================================
   ICON
========================================================= */

function DocumentIcon(): ReactNode {
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
        06
      </div>

      {/* DECORATIVE LINES */}
      <div className="pointer-events-none absolute left-0 top-[24%] h-px w-[30%] bg-white/[0.07]" />
      <div className="pointer-events-none absolute right-0 bottom-[24%] h-px w-[25%] bg-white/[0.07]" />

      {/* CORNERS */}
      <div className="pointer-events-none absolute left-[7%] top-[14%] hidden h-14 w-14 border-l border-t border-emerald-400/20 lg:block" />
      <div className="pointer-events-none absolute bottom-[12%] right-[7%] hidden h-16 w-16 border-b border-r border-blue-400/15 lg:block" />

      {/* SECTION LABEL */}
      <div className="pointer-events-none absolute right-[7%] top-[9%] hidden lg:block">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-emerald-400/60" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-emerald-300/80">
            Research / 06
          </span>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Research() {
  return (
    <section
      id="research"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 md:py-36"
    >
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="relative z-10 mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-400/70" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
              06 / Research
            </span>
          </div>

          <AnimatedText
            text="Research."
            as="h2"
            className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
          />
        </div>

        <StaggerGroup className="grid gap-6 lg:grid-cols-2" variant="fadeUp">
          {/* SKRIPSI */}
          <StaggerItem>
            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 md:p-9">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-500/15 blur-3xl transition group-hover:bg-emerald-500/25" />

              <div className="relative flex items-center justify-between">
                <span className="flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-emerald-300">
                  <DocumentIcon />
                  Skripsi
                </span>

                <span className="text-[9px] tracking-[0.25em] text-slate-600">
                  01
                </span>
              </div>

              <h3 className="relative mt-7 text-2xl font-semibold leading-tight tracking-tight text-white">
                Analisis Stabilitas Tekanan Sebagai Bahan Bakar Genset Di Desa
                Suco
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                Penelitian mengenai stabilitas tekanan biogas sebagai bahan
                bakar genset serta pengaruh penggunaan kompresor terhadap laju
                aliran dan kinerja genset.
              </p>

              <div className="relative mt-7 space-y-3">
                {[
                  "Analisis laju aliran biogas.",
                  "Analisis stabilitas tekanan biogas.",
                  "Perbandingan penggunaan kompresor dan tanpa kompresor.",
                  "Pengujian kinerja genset berbahan bakar biogas.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="relative mt-8 flex flex-wrap gap-2">
                {[
                  "Biogas",
                  "Genset",
                  "Stabilitas Tekanan",
                  "Energi Terbarukan",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </StaggerItem>

          {/* LAPORAN MAGANG */}
          <StaggerItem>
            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 md:p-9">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-500/15 blur-3xl transition group-hover:bg-blue-500/25" />

              <div className="relative flex items-center justify-between">
                <span className="flex items-center gap-3 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-[8px] uppercase tracking-[0.2em] text-blue-300">
                  <DocumentIcon />
                  Laporan Magang
                </span>

                <span className="text-[9px] tracking-[0.25em] text-slate-600">
                  02
                </span>
              </div>

              <h3 className="relative mt-7 text-2xl font-semibold leading-tight tracking-tight text-white">
                Prosedur Operasional Dan Pemeliharaan Rutin Pada PLTMH Gunung
                Sawur Unit II
              </h3>

              <p className="relative mt-4 text-sm leading-7 text-slate-400">
                Pembelajaran dan pengalaman lapangan mengenai prosedur
                operasional serta pemeliharaan rutin pada sistem Pembangkit
                Listrik Tenaga Mikrohidro (PLTMH).
              </p>

              <div className="relative mt-7 space-y-3">
                {[
                  "Prosedur operasional PLTMH.",
                  "Pemeliharaan rutin peralatan pembangkit.",
                  "Pengamatan sistem pembangkitan energi listrik.",
                  "Pengenalan komponen dan sistem PLTMH.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="relative mt-8 flex flex-wrap gap-2">
                {[
                  "PLTMH",
                  "Hydropower",
                  "Energi Terbarukan",
                  "Pemeliharaan",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </StaggerItem>
        </StaggerGroup>
      </div>
    </section>
  );
}