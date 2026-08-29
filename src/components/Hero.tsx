"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { AnimatedText } from "@/components/motion/AnimatedText";

/* =========================================================
   STATUS DOT
========================================================= */

function StatusDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
    </span>
  );
}

/* =========================================================
   ICONS
========================================================= */

function ElectricalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
      <path d="M13 2 4.5 13h6L10 22l9.5-12h-6L13 2Z" />
    </svg>
  );
}

function SolarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
    </svg>
  );
}

function BiogasIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
      <path d="M12 3c2.5 3.1 5 5.8 5 9.3A5 5 0 0 1 7 12.3C7 8.8 9.5 6.1 12 3Z" />
      <path d="M12 10c1.2 1.4 2 2.5 2 3.8a2 2 0 0 1-4 0c0-.9.7-2.2 2-3.8Z" />
    </svg>
  );
}

function PltmhIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden="true">
      <path d="M3 18h18" />
      <path d="M5 18v-5h14v5" />
      <path d="M8 13V9h8v4" />
      <path d="M6 9c1.5-2 3-3 6-3s4.5 1 6 3" />
      <path d="M12 3v3" />
    </svg>
  );
}

function TapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5" aria-hidden="true">
      <path d="M9 11V4a1.5 1.5 0 0 1 3 0v5" strokeLinecap="round" />
      <path d="M12 9V5.5a1.5 1.5 0 0 1 3 0V10" strokeLinecap="round" />
      <path d="M15 10V8a1.5 1.5 0 0 1 3 0v6a6 6 0 0 1-6 6h-1.5a5 5 0 0 1-4-2l-2.3-3.2a1.5 1.5 0 0 1 2.4-1.8L8 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* =========================================================
   INTERACTIVE PROFILE — transparent PNG, tanpa box/oval
   - floating + 3D tilt + orbit ring + glow + ember
   - TAP = energy pulse (shockwave + particle burst + surge)
========================================================= */

const BURST_COUNT = 16;

function InteractiveProfile() {
  const [pulse, setPulse] = useState(0);

  const tiltRef = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const smoothX = useSpring(rotX, { stiffness: 160, damping: 20 });
  const smoothY = useSpring(rotY, { stiffness: 160, damping: 20 });

  // Arah partikel burst sudah dihitung sekali
  const burst = useRef(
    Array.from({ length: BURST_COUNT }, (_, i) => {
      const angle = (i / BURST_COUNT) * Math.PI * 2;
      const dist = 90 + (i % 3) * 26;
      return {
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        delay: (i % 4) * 0.025,
      };
    })
  ).current;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rotY.set(((e.clientX - r.left) / r.width - 0.5) * 16);
    rotX.set(-((e.clientY - r.top) / r.height - 0.5) * 16);
  }

  function handleReset() {
    rotX.set(0);
    rotY.set(0);
  }

  function handleFire() {
    setPulse((p) => p + 1);
  }

  return (
    <div className="relative flex flex-col items-center">
      {/* SCENE */}
      <motion.div
        ref={tiltRef}
        onMouseMove={handleMove}
        onMouseLeave={handleReset}
        onClick={handleFire}
        style={{ rotateX: smoothX, rotateY: smoothY }}
        className="relative h-[280px] w-[230px] max-w-full cursor-pointer select-none sm:h-[390px] sm:w-[310px] lg:h-[460px] lg:w-[370px]"
      >
        {/* GLOW AURA */}
        <div
          className="profile-glow pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[130%] max-w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          aria-hidden="true"
        />

        {/* ORBIT RING 1 (berputar, ada titik) */}
        <div
          className="profile-orbit pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[135%] max-w-[500px] rounded-full border border-dashed border-emerald-400/25"
          style={{ transform: "translate(-50%, -50%)" }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.7)]" />
        </div>

        {/* ORBIT RING 2 (berputar berlawanan) */}
        <div
          className="profile-orbit-rev pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[158%] max-w-[560px] rounded-full border border-cyan-400/15"
          style={{ transform: "translate(-50%, -50%)" }}
          aria-hidden="true"
        >
          <span className="absolute bottom-[-4px] right-[16%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_2px_rgba(103,232,249,0.6)]" />
        </div>

        {/* EMBER (partikel melayang) */}
        <span className="profile-ember pointer-events-none absolute left-[6%] top-[20%] h-1 w-1 rounded-full bg-emerald-300 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" aria-hidden="true" />
        <span className="profile-ember-2 pointer-events-none absolute right-[10%] top-[32%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_2px_rgba(103,232,249,0.55)]" aria-hidden="true" />
        <span className="profile-ember-3 pointer-events-none absolute bottom-[18%] left-[12%] h-1 w-1 rounded-full bg-amber-300 shadow-[0_0_8px_2px_rgba(251,191,36,0.5)]" aria-hidden="true" />

        {/* FOTO (transparan, floating) */}
        <img
          src="/images/profile/profile.png"
          alt="Portrait"
          draggable={false}
          className="profile-bob relative z-10 h-full w-full object-contain drop-shadow-[0_0_26px_rgba(52,211,153,0.3)]"
        />

        {/* SURGE FLASH saat tap (layer cahaya di atas foto) */}
        {pulse > 0 && (
          <motion.div
            key={`surge-${pulse}`}
            className="pointer-events-none absolute inset-0 z-30"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: [1, 1.07, 1], opacity: [0, 0.55, 0] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            aria-hidden="true"
          >
            <img
              src="/images/profile/profile.png"
              alt=""
              draggable={false}
              className="h-full w-full object-contain"
              style={{ filter: "brightness(1.5) saturate(1.4) drop-shadow(0 0 30px rgba(52,211,153,0.9))" }}
            />
          </motion.div>
        )}

        {/* SHOCKWAVE RING 1 */}
        {pulse > 0 && (
          <motion.div
            key={`ring-${pulse}`}
            className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-emerald-300"
            initial={{ scale: 0.2, opacity: 0.9 }}
            animate={{ scale: 7, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-hidden="true"
          />
        )}

        {/* SHOCKWAVE RING 2 */}
        {pulse > 0 && (
          <motion.div
            key={`ring2-${pulse}`}
            className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300"
            initial={{ scale: 0.2, opacity: 0.8 }}
            animate={{ scale: 9.5, opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.05 }}
            aria-hidden="true"
          />
        )}

        {/* PARTICLE BURST */}
        {pulse > 0 &&
          burst.map((b, i) => (
            <motion.span
              key={`pb-${pulse}-${i}`}
              className="pointer-events-none absolute left-1/2 top-1/2 z-30 h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_1px_rgba(52,211,153,0.7)]"
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{ x: b.x, y: b.y, opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.85, delay: b.delay, ease: "easeOut" }}
              aria-hidden="true"
            />
          ))}
      </motion.div>

      {/* LABEL: Tap to interact */}
      <motion.button
        type="button"
        onClick={handleFire}
        whileTap={{ scale: 0.95 }}
        className="mt-5 flex select-none items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-5 py-2 text-[10px] uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-sm transition hover:bg-emerald-500/20"
      >
        <TapIcon />
        Tap to interact
      </motion.button>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0d12] px-6 pt-24"
    >
      {/* BACKGROUND GRID */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* GLOW */}
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[650px] w-[650px] -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[25%] top-[10%] h-64 w-64 rounded-full bg-blue-500/[0.06] blur-3xl" />

      {/* DECORATIVE LINES */}
      <div className="pointer-events-none absolute left-0 top-[24%] h-px w-[30%] bg-white/[0.07]" />
      <div className="pointer-events-none absolute right-0 top-[70%] h-px w-[26%] bg-white/[0.07]" />

      {/* CROSS */}
      <div className="pointer-events-none absolute left-[6%] top-[30%] hidden lg:block">
        <div className="relative h-5 w-5">
          <span className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-emerald-400/60" />
          <span className="absolute left-0 top-1/2 h-px w-5 -translate-y-1/2 bg-emerald-400/60" />
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400" />
        </div>
      </div>

      {/* TOP RIGHT STATUS */}
      <div className="pointer-events-none absolute right-[7%] top-[9%] hidden lg:block">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-emerald-400/70" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-slate-300">Renewable Energy</span>
        </div>
        <div className="mt-3 flex items-center justify-end gap-2">
          <StatusDot />
          <span className="text-[9px] uppercase tracking-[0.2em] text-slate-300">Available for opportunities</span>
        </div>
      </div>

      {/* PROFILE CODE */}
      <div className="pointer-events-none absolute right-[7%] top-[25%] hidden lg:block">
        <div className="border-l-2 border-emerald-400/50 pl-4">
          <p className="text-[8px] uppercase tracking-[0.25em] text-slate-400">Profile</p>
          <p className="mt-1 text-[12px] font-semibold tracking-[0.2em] text-emerald-300">NT-01</p>
          <div className="mt-3 h-px w-20 bg-gradient-to-r from-emerald-400/80 to-transparent" />
          <p className="mt-2 text-[8px] uppercase tracking-[0.15em] text-slate-400">Personal Portfolio</p>
        </div>
      </div>

      {/* VERTICAL LABEL */}
      <div className="pointer-events-none absolute right-[3%] top-1/2 hidden -translate-y-1/2 lg:block">
        <span className="text-[8px] uppercase tracking-[0.3em] text-slate-400" style={{ writingMode: "vertical-rl" }}>
          Electrical / Renewable Systems
        </span>
      </div>

      {/* MAIN GRID */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <div className="mb-6 flex items-center justify-center gap-4 lg:justify-start">
            <span className="hidden h-px w-10 bg-emerald-400/80 lg:block" />
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-slate-300">Renewable Energy Engineering</p>
          </div>

          <AnimatedText
            text="Nugroho Try Handoko"
            as="h1"
            className="mx-auto max-w-4xl text-4xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:mx-0 lg:text-[80px]"
          />

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-300 md:text-lg lg:mx-0">
            Graduate of a Diploma 4 (D4) in Renewable Energy Engineering
            from Politeknik Negeri Jember, with a background in Industrial
            Electronics Engineering (TEI) from SMKN 2 Kraksaan. Experienced
            in electrical power installation and renewable energy systems.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#research"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              View My Work →
            </a>
            <a
              href="/documents/CV-Nugroho-Try-Handoko.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 bg-white/[0.05] px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex min-h-[420px] items-center justify-center py-8 sm:min-h-[540px] lg:min-h-[640px]">
          {/* GLOW */}
          <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-emerald-500/[0.08] blur-3xl sm:h-[360px] sm:w-[360px] lg:h-[420px] lg:w-[420px]" />

          {/* SYSTEM STATUS — kiri */}
          <div className="hero-float absolute -left-1 top-[16%] z-30 hidden w-[160px] rounded-xl border border-emerald-400/25 bg-[#0f141d]/85 p-4 shadow-xl shadow-black/50 backdrop-blur-xl md:block lg:top-[8%]">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-300">System Status</span>
              <StatusDot />
            </div>
            <div className="mt-4 space-y-2.5">
              <div className="flex justify-between">
                <span className="text-[8px] uppercase text-slate-300">Energy</span>
                <span className="text-[8px] font-bold text-emerald-400">ACTIVE</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex justify-between">
                <span className="text-[8px] uppercase text-slate-300">Systems</span>
                <span className="text-[8px] font-bold text-blue-400">ONLINE</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex justify-between">
                <span className="text-[8px] uppercase text-slate-300">Status</span>
                <span className="text-[8px] font-bold text-amber-400">READY</span>
              </div>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400" />
            </div>
          </div>

          {/* CORE FOCUS — kanan */}
          <div className="hero-float-reverse absolute -right-1 top-[34%] z-30 hidden w-[175px] rounded-xl border border-blue-400/25 bg-[#0f141d]/85 p-4 shadow-xl shadow-black/50 backdrop-blur-xl md:block lg:top-[22%]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-300">Core Focus</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-amber-400/30 bg-amber-500/15 text-amber-300"><ElectricalIcon /></span>
                <p className="text-[8px] font-medium uppercase tracking-[0.12em] text-slate-100">Electrical</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-emerald-400/30 bg-emerald-500/15 text-emerald-300"><BiogasIcon /></span>
                <p className="text-[8px] font-medium uppercase tracking-[0.12em] text-slate-100">Biogas</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-blue-400/30 bg-blue-500/15 text-blue-300"><SolarIcon /></span>
                <p className="text-[8px] font-medium uppercase tracking-[0.12em] text-slate-100">Solar PV</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-md border border-cyan-400/30 bg-cyan-500/15 text-cyan-300"><PltmhIcon /></span>
                <p className="text-[8px] font-medium uppercase tracking-[0.12em] text-slate-100">PLTMH</p>
              </div>
            </div>
          </div>

          {/* PROFILE — tengah */}
          <div className="relative z-20">
            <InteractiveProfile />
          </div>

          {/* BASED IN — kiri bawah (desktop lebih ke kiri) */}
          <div className="absolute bottom-[2%] left-0 z-30 rounded-xl border border-white/15 bg-[#0f141d]/85 px-5 py-3 shadow-lg shadow-black/50 backdrop-blur-xl lg:-left-10 lg:bottom-[10%]">
            <p className="text-[9px] uppercase tracking-[0.25em] text-slate-300">Based in</p>
            <p className="mt-1 text-sm font-semibold text-emerald-300">Probolinggo, Jember</p>
            <p className="text-xs text-slate-300">East Java</p>
          </div>

          {/* COORDINATES */}
          <div className="absolute bottom-[12%] right-[4%] hidden select-none text-right lg:block">
            <p className="text-[7px] uppercase tracking-[0.2em] text-slate-300">07.29° S</p>
            <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-slate-300">113.25° E</p>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-slate-400 md:flex">
        <span className="h-px w-8 bg-emerald-400/60" />
        Scroll to explore
        <span className="h-px w-8 bg-emerald-400/60" />
      </div>
    </section>
  );
}