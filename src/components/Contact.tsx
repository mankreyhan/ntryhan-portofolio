"use client";

import { type ReactNode } from "react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/Reveal";
import { AnimatedText } from "@/components/motion/AnimatedText";

const CONTACT = {
  email: "nugrohotryhandoko1@gmail.com",
  whatsapp: "085330481653",
  linkedin: "https://www.linkedin.com/in/nugroho-try-handoko-035980428/",
};

function MailIcon(): ReactNode {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon(): ReactNode {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M7 3h3l1.5 4-2 1.5a15 15 0 0 0 6 6L17 12.5l4 1.5v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 6c0-1.7.9-3 2-3Z" />
    </svg>
  );
}

function LinkedInIcon(): ReactNode {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6.5 8.5A1.75 1.75 0 1 0 6.5 5a1.75 1.75 0 0 0 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.9v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.03 0 3.59 2 3.59 4.6V19h-3v-4.2c0-1 0-2.29-1.4-2.29s-1.61 1.1-1.61 2.22V19h-3v-9Z" />
    </svg>
  );
}

function StatusDot(): ReactNode {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
    </span>
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
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute left-[18%] top-[8%] h-64 w-64 rounded-full bg-emerald-500/[0.08] blur-3xl" />

      {/* LARGE NUMBER */}
      <div className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none text-[240px] font-bold leading-none tracking-[-0.08em] text-white/[0.03] lg:block">
        08
      </div>

      {/* DECORATIVE LINES */}
      <div className="pointer-events-none absolute left-0 top-[24%] h-px w-[30%] bg-white/[0.07]" />
      <div className="pointer-events-none absolute right-0 bottom-[24%] h-px w-[25%] bg-white/[0.07]" />

      {/* CORNERS */}
      <div className="pointer-events-none absolute left-[7%] top-[14%] hidden h-14 w-14 border-l border-t border-cyan-400/20 lg:block" />
      <div className="pointer-events-none absolute bottom-[12%] right-[7%] hidden h-16 w-16 border-b border-r border-emerald-400/15 lg:block" />

      {/* SECTION LABEL */}
      <div className="pointer-events-none absolute right-[7%] top-[9%] hidden lg:block">
        <div className="flex items-center gap-3">
          <span className="h-px w-7 bg-cyan-400/60" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-cyan-300/80">
            Contact / 08
          </span>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0d12] px-6 py-28 md:py-36"
    >
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="relative z-10 mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-cyan-400/70" />

            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">
              08 / Contact
            </span>
          </div>

          <AnimatedText
            text="Contact."
            as="h2"
            className="text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
          {/* MAIN CONTACT */}
          <Reveal variant="fadeUp">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 shadow-xl shadow-black/40 backdrop-blur-xl md:p-10">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-500/15 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <StatusDot />

                  <span className="text-[8px] uppercase tracking-[0.25em] text-emerald-300">
                    Terbuka untuk peluang
                  </span>
                </div>

                <h3 className="mt-7 max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Mari membangun sesuatu yang bermanfaat.
                </h3>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                  Tertarik untuk bekerja sama, berdiskusi mengenai energi terbarukan, atau membahas peluang? Silakan hubungi saya.
                </p>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-8 inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  Hubungi saya →
                </a>
              </div>
            </div>
          </Reveal>

          {/* CONTACT CARDS */}
          <StaggerGroup className="space-y-4" variant="fadeUp">
            {/* EMAIL */}
            <StaggerItem>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-emerald-400/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-300">
                  <MailIcon />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-300">
                    Hubungi melalui email
                  </p>
                </div>

                <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-emerald-300">
                  ↗
                </span>
              </a>
            </StaggerItem>

            {/* WHATSAPP */}
            <StaggerItem>
              <a
                href={`https://wa.me/62${CONTACT.whatsapp.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-blue-400/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-blue-300">
                  <PhoneIcon />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-slate-500">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-300">
                    Hubungi melalui WhatsApp
                  </p>
                </div>

                <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-blue-300">
                  ↗
                </span>
              </a>
            </StaggerItem>

            {/* LINKEDIN */}
            <StaggerItem>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-400/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-500/10 text-amber-300">
                  <LinkedInIcon />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[8px] uppercase tracking-[0.25em] text-slate-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-300">
                    Lihat profil profesional
                  </p>
                </div>

                <span className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-amber-300">
                  ↗
                </span>
              </a>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}