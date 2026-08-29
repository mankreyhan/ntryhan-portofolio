"use client";

import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Research from "@/components/Research";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <>
      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          PORTFOLIO SECTIONS / SLIDES
      ===================================================== */}

      <main>
        {/* 01 — HERO */}
        <Hero />

        {/* 02 — ABOUT */}
        <About />

        {/* 03 — EDUCATION */}
        <Education />

        {/* 04 — SKILLS */}
        <Skills />

        {/* 05 — EXPERIENCE */}
        <Experience />

        {/* 06 — RESEARCH */}
        <Research />

        {/* 07 — CERTIFICATES */}
        <Certificates />

        {/* 08 — CONTACT */}
        <Contact />
      </main>
    </>
  );
}