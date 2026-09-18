"use client";

import SectionBackground from "@/components/SectionBackground";
import { AnimatedText } from "@/components/motion/AnimatedText";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
  Magnetic,
} from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

function AboutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-5 w-5"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.7-4 3-6 7-6s6.3 2 7 6" />
    </svg>
  );
}

export default function About() {
  const focusCards = [
    {
      number: 1,
      title: "Renewable Energy",
      desc: "Biogas, PLTS, dan PLTMH sebagai bagian dari pembelajaran dan pengalaman proyek.",
      color: "emerald",
    },
    {
      number: 2,
      title: "Electrical Systems",
      desc: "Instalasi listrik, pengukuran dasar, dan pemahaman sistem kelistrikan.",
      color: "blue",
    },
    {
      number: 3,
      title: "Field Experience",
      desc: "Pengalaman praktik, observasi, maintenance, dan pengambilan data di lapangan.",
      color: "amber",
    },
    {
      number: 4,
      title: "Continuous Learning",
      desc: "Terus mengembangkan kemampuan teknis dan digital melalui proyek dan pembelajaran mandiri.",
      color: "emerald",
    },
  ];

  const colorStyles = {
    emerald: "border-emerald-400/25 bg-emerald-500/10",
    blue: "border-blue-400/25 bg-blue-500/10",
    amber: "border-amber-400/25 bg-amber-500/10",
  } as const;

  const colorKey = (c: string) => c as keyof typeof colorStyles;

  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 md:py-36"
    >
      <SectionBackground variant="about" />

      {/* =================================================
          GARIS TEKNIK DEKORATIF (SVG)
      ================================================= */}
      <div className="pointer-events-none absolute left-[4%] top-[12%] hidden lg:block">
        <Reveal variant="scaleIn">
          <svg
            aria-hidden="true"
            className="h-24 w-24 text-emerald-400/40"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M10 90 L10 10 L90 10"
              stroke="currentColor"
              strokeWidth="1.5"
              pathLength="1"
            />
          </svg>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="relative z-10 mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-400/70" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
              02 / About Me
            </span>
          </div>

          <AnimatedText
            text="About Me."
            as="h2"
            className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
          />
        </div>

        {/* CONTENT */}
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* MAIN ABOUT CARD */}
          <Reveal variant="fadeUp">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/40 backdrop-blur-xl md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/15 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

              {/* BADGE */}
              <div className="relative mb-7 flex items-center justify-between">
                <div className="flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <AboutIcon />
                  </span>

                  <span className="text-[8px] font-medium uppercase tracking-[0.22em] text-emerald-300">
                    Profil
                  </span>
                </div>

                <span className="text-[9px] tracking-[0.25em] text-slate-600">
                
                </span>
              </div>

              {/* TEXT */}
              <p className="relative max-w-3xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                Saya merupakan lulusan Diploma 4 (D4) Teknik Energi Terbarukan
                dari Politeknik Negeri Jember dengan latar belakang Teknik
                Elektronika Industri (TEI) dari SMKN 2 Kraksaan. Memiliki
                pengalaman dalam instalasi tenaga listrik, khususnya pemasangan
                kWh meter dan jaringan listrik, serta pengalaman magang di
                Pembangkit Listrik Tenaga Mikrohidro (PLTMH) yang mencakup
                pemeliharaan dan pemeriksaan komponen pembangkit.
              </p>

              <p className="relative max-w-3xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                Saya terus memperdalam pengetahuan di
                bidang energi terbarukan dan sistem kelistrikan, sekaligus mengembangkan
                kemampuan pemrograman. Saya terbuka untuk belajar, mampu beradaptasi, dan
                berkomitmen untuk terus meningkatkan keterampilan teknis.
              </p>

              {/* PROFILE FOCUS CARDS */}
              <StaggerGroup
                className="relative mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2"
                variant="fadeUp"
                staggerDelay={0.1}
              >
                {focusCards.map((card) => (
                  <StaggerItem key={card.title}>
                    <div
                      className={`rounded-xl border p-4 backdrop-blur-xl ${colorStyles[colorKey(card.color)]}`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold tracking-tight text-white">
                          {card.title}
                        </p>

                        <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-lg font-bold tracking-tight text-transparent">
                          <CountUp to={card.number} duration={1200} />
                        </span>
                      </div>

                      <p className="mt-2 text-[11px] leading-5 text-slate-400">
                        {card.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>

          {/* SIDE CARDS */}
          <StaggerGroup className="grid gap-4" variant="bounce">
            {/* CARD 01 */}
            <StaggerItem>
              <Magnetic>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/15 blur-2xl transition group-hover:bg-emerald-500/25" />

                  <div className="relative flex items-start justify-between">
                    <span className="text-[9px] tracking-[0.25em] text-slate-500">
                      01
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/25 bg-emerald-500/10 text-emerald-300">
                      ✓
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-lg font-semibold text-white">
                    Pemecahan Masalah
                  </h3>

                  <p className="relative mt-2 text-sm leading-6 text-slate-400">
                    Menganalisis permasalahan teknis secara sistematis dan menerapkan solusi berdasarkan kondisi dan kebutuhan di lapangan.
                  </p>

                  <span className="absolute bottom-6 right-6 text-lg text-slate-600 transition group-hover:text-emerald-400">
                    ↗
                  </span>
                </div>
              </Magnetic>
            </StaggerItem>

            {/* CARD 02 */}
            <StaggerItem>
              <Magnetic>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/25">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/15 blur-2xl transition group-hover:bg-blue-500/25" />

                  <div className="relative flex items-start justify-between">
                    <span className="text-[9px] tracking-[0.25em] text-slate-500">
                      02
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-400/25 bg-blue-500/10 text-blue-300">
                      +
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-lg font-semibold text-white">
                    Pengalaman Lapangan
                  </h3>

                  <p className="relative mt-2 text-sm leading-6 text-slate-400">
                    Memiliki pengalaman dalam instalasi kelistrikan, pengukuran, pengujian, serta pemeliharaan dan pemeriksaan sistem energi terbarukan.
                  </p>

                  <span className="absolute bottom-6 right-6 text-lg text-slate-600 transition group-hover:text-blue-400">
                    ↗
                  </span>
                </div>
              </Magnetic>
            </StaggerItem>

            {/* CARD 03 */}
            <StaggerItem>
              <Magnetic>
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/25">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-amber-500/15 blur-2xl transition group-hover:bg-amber-500/25" />

                  <div className="relative flex items-start justify-between">
                    <span className="text-[9px] tracking-[0.25em] text-slate-500">
                      03
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-500/10 text-amber-300">
                      ⚡
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-lg font-semibold text-white">
                    Pengembangan Teknis
                  </h3>

                  <p className="relative mt-2 text-sm leading-6 text-slate-400">
                    Terus mengembangkan pemahaman dan keterampilan di bidang kelistrikan, Solar PV, biogas, PLTMH, instalasi listrik, dan pemrograman.
                  </p>

                  <span className="absolute bottom-6 right-6 text-lg text-slate-600 transition group-hover:text-amber-400">
                    ↗
                  </span>
                </div>
              </Magnetic>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}