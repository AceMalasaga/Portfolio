// src/components/structures/MainContent.jsx  (or wherever yours is)
import React from "react";
import Navbar from "../ui/Navbar";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Certificate from "../sections/Certificate";
import Contact from "../sections/Contact";

const NAV_OFFSET = 110; // MUST match Navbar.jsx

const MainContent = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white font-montserrat scroll-smooth">
      {/* background texture / glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute right-[-160px] top-[30%] h-[420px] w-[420px] rounded-full bg-amber-400/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,184,0,0.08),transparent_55%)]" />
      </div>

      <Navbar />

      {/* This padding prevents content from hiding behind fixed navbar.
          If you still see a big gap, reduce pt-[NAV_OFFSET+??] here. */}
      <main className="pt-[80px]">
        <section id="home" className="scroll-mt-[80px]">
          <Home />
        </section>

        <section id="projects" className="scroll-mt-[80px]">
          <Projects />
        </section>

        <section id="certificates" className="scroll-mt-[80px]">
          <Certificate />
        </section>

        <section id="contact" className="scroll-mt-[80px]">
          <Contact />
        </section>

        <footer className="px-6 pb-10 pt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Ace Bernard M. Malasaga — Built with React & Tailwind
        </footer>
      </main>
    </div>
  );
};

export default MainContent;