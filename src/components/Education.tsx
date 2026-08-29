"use client";

import Image from "next/image";
import SectionBackground from "@/components/SectionBackground";
import { AnimatedText } from "@/components/motion/AnimatedText";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";

function EducationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
    >
      <path d="M3 9.5 12 5l9 4.5L12 14 3 9.5Z" />
      <path d="M6 11.5V16c2.5 2 9.5 2 12 0v-4.5" />
      <path d="M21 10v5" />
    </svg>
  );
}

function SchoolIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
    >
      <path d="M4 21h16" />
      <path d="M6 21V6l6-3 6 3v15" />
      <path d="M9 21v-4h6v4" />
      <path d="M9 9h.01M12 9h.01M15 9h.01M9 12h.01M12 12h.01M15 12h.01" />
    </svg>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 md:py-36"
    >
      <SectionBackground variant="education" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="relative z-10 mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-400/70" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
              03 / Education
            </span>
          </div>

          <AnimatedText
            text="Education"
            as="h2"
            className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
          />
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* TIMELINE LINE */}
          <div className="absolute left-[7px] top-0 hidden h-full w-px bg-gradient-to-b from-emerald-400/60 via-blue-400/40 to-transparent md:block" />

          <StaggerGroup className="space-y-8" variant="fadeUp">
            {/* POLIJE */}
            <StaggerItem>
              <article className="relative md:pl-12">
                <span className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border-4 border-[#0a0d12] bg-emerald-500 shadow-lg shadow-emerald-500/40 md:block" />

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 md:p-9">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-emerald-500/15 blur-3xl transition group-hover:bg-emerald-500/20" />

                  <div className="relative grid gap-7 md:grid-cols-[1fr_auto]">
                    <div>
                      {/* TOP META */}
                      <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-emerald-400/20 bg-white/10 shadow-sm">
                          <Image
                            src="/images/education/polije.png"
                            alt="Logo Politeknik Negeri Jember"
                            width={40}
                            height={40}
                            className="h-9 w-9 object-contain"
                          />
                        </div>

                        <div>
                          <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400">
                            2022 — 2026
                          </span>

                          <div className="mt-1 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                            <span className="text-[8px] uppercase tracking-[0.18em] text-emerald-300">
                              Diploma Education
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* TITLE */}
                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        Politeknik Negeri Jember
                      </h3>

                      <p className="mt-2 text-sm font-medium text-emerald-300">
                        D4 Teknik Energi Terbarukan
                      </p>

                      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                        Menempuh pendidikan pada bidang energi terbarukan dengan
                        fokus pada sistem kelistrikan, konversi energi, dan
                        penerapan teknologi energi dalam berbagai proyek
                        akademik.
                      </p>

                      {/* TAGS */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {[
                          "Renewable Energy",
                          "Electrical Systems",
                          "Energy Conversion",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* DEGREE BADGE */}
                    <div className="relative flex h-fit items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-2">
                      <EducationIcon />

                      <span className="text-[8px] uppercase tracking-[0.2em] text-emerald-300">
                        D4
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>

            {/* SMKN */}
            <StaggerItem>
              <article className="relative md:pl-12">
                <span className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border-4 border-[#0a0d12] bg-blue-500 shadow-lg shadow-blue-500/40 md:block" />

                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 md:p-9">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/15 blur-3xl transition group-hover:bg-blue-500/20" />

                  <div className="relative grid gap-7 md:grid-cols-[1fr_auto]">
                    <div>
                      {/* TOP META */}
                      <div className="mb-6 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-blue-400/20 bg-white/10 shadow-sm">
                          <Image
                            src="/images/education/smkn2-kraksaan.png"
                            alt="Logo SMKN 2 Kraksaan"
                            width={40}
                            height={40}
                            className="h-9 w-9 object-contain"
                          />
                        </div>

                        <div>
                          <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400">
                            2019 — 2022
                          </span>

                          <div className="mt-1 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

                            <span className="text-[8px] uppercase tracking-[0.18em] text-blue-300">
                              Vocational Education
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* TITLE */}
                      <h3 className="text-2xl font-semibold tracking-tight text-white">
                        SMKN 2 Kraksaan
                      </h3>

                      <p className="mt-2 text-sm font-medium text-blue-300">
                        Teknik Elektronika Industri
                      </p>

                      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400">
                        Memperoleh dasar keahlian dalam elektronika industri,
                        instalasi listrik, sistem kontrol, serta penerapan
                        keterampilan teknis melalui pembelajaran praktik.
                      </p>

                      {/* TAGS */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {[
                          "Industrial Electronics",
                          "Electrical Installation",
                          "Control Systems",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-[8px] uppercase tracking-[0.15em] text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* FIELD BADGE */}
                    <div className="relative flex h-fit items-center gap-3 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2">
                      <SchoolIcon />

                      <span className="text-[8px] uppercase tracking-[0.2em] text-blue-300">
                        TEI
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </StaggerItem>
          </StaggerGroup>

          {/* EDUCATION SUMMARY */}
          <Reveal variant="bounce" delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                Renewable Energy Engineering
              </span>

              <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-blue-300">
                Industrial Electronics Engineering
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}