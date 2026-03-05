import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

import htmlLogo from "../assets/html-5.png";
import cssLogo from "../assets/CSS3.png";
import jsLogo from "../assets/JavaScript.png";
import reactLogo from "../assets/React (1).png";
import nodeLogo from "../assets/nodejs.png";
import gitLogo from "../assets/Git.png";
import githubLogo from "../assets/GitHub (1).png";
import postgre from "../assets/postgre.png";
import dockerCompose from "../assets/docker-compose.png";
import Hyperledger from "../assets/hyperledger-fabric.jpg";
import Tailwind from "../assets/Tailwind.png";
import Linux from "../assets/linux.png";
import Profile from "../assets/profile.jpg";

/* ===== Smooth reveal presets ===== */
const sectionReveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const springSoft = {
  type: "spring",
  stiffness: 90,
  damping: 20,
  mass: 0.9,
};

const Home = () => {
  /* ================= TECH STACK ================= */
  const techStack = useMemo(
    () => [
      { icon: reactLogo, name: "React" },
      { icon: Tailwind, name: "Tailwind CSS" },
      { icon: jsLogo, name: "JavaScript" },
      { icon: nodeLogo, name: "Node.js" },
      { icon: postgre, name: "PostgreSQL" },
      { icon: Hyperledger, name: "Hyperledger Fabric" },
      { icon: dockerCompose, name: "Docker Compose" },
      { icon: Linux, name: "Linux" },
      { icon: htmlLogo, name: "HTML5" },
      { icon: cssLogo, name: "CSS3" },
      { icon: gitLogo, name: "Git" },
      { icon: githubLogo, name: "GitHub" },
    ],
    []
  );

  /* ================= EDUCATION ================= */
  const educationData = useMemo(
    () => [
      { year: "2026", title: "College", text: "University of Mindanao – Tagum" },
      { year: "2020", title: "Senior High", text: "Tagum National Trade School" },
      { year: "2018", title: "High School", text: "Canocotan National High School" },
      { year: "2014", title: "Elementary", text: "Herculina L. Edig Elementary School" },
    ],
    []
  );

  /* ================= TOOLTIP ================= */
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  const showTooltip = (event, name) => {
    setTooltip({
      visible: true,
      text: name,
      x: event.clientX + 14,
      y: event.clientY + 14,
    });
  };

  const hideTooltip = () => setTooltip((p) => ({ ...p, visible: false }));

  // Duplicate for seamless marquee
  const marqueeItems = useMemo(() => [...techStack, ...techStack], [techStack]);

  /* ===== HERO VISIBILITY (for scroll hint) ===== */
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { amount: 0.78 });

  /* ===== Hide scroll hint when the user starts scrolling ===== */
  const [userScrolled, setUserScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setUserScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showScrollHint = heroInView && !userScrolled;

  return (
    <div className="px-6">
      {/* ✅ ONE consistent container for everything */}
      <div className="mx-auto w-full max-w-6xl">
        {/* ===================== HERO (FULL SCREEN ONLY) ===================== */}
        <section
          ref={heroRef}
          className="relative min-h-[calc(100vh-7rem)] flex items-center"
        >
          {/* ===== Scroll hint (LOWER + NEW ANIMATION) ===== */}
          <AnimatePresence>
            {showScrollHint && (
              <motion.a
                href="#about"
                aria-label="Scroll to About"
                className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.985 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <motion.div
                  className="group flex flex-col items-center gap-2"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="relative flex items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur">
                    <motion.span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(251,191,36,0.0)",
                          "0 0 0 10px rgba(251,191,36,0.08)",
                          "0 0 0 0 rgba(251,191,36,0.0)",
                        ],
                      }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                    />
                    <span className="text-[11px] tracking-wide text-gray-300 group-hover:text-white transition">
                      Scroll down
                    </span>
                  </div>

                  <motion.div
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                  >
                    <motion.span
                      className="text-amber-400 text-lg leading-none"
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                    >
                      ↓
                    </motion.span>
                  </motion.div>
                </motion.div>
              </motion.a>
            )}
          </AnimatePresence>

          <div className="grid items-center gap-10 lg:grid-cols-2 w-full">
            {/* Left */}
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.7 }}
              transition={springSoft}
              className="space-y-6"
            >
              <motion.div variants={itemUp}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Front-end • Blockchain • Systems
                </div>
              </motion.div>

              <motion.h1
                variants={itemUp}
                className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
              >
                Hi, I’m{" "}
                <span className="text-amber-400">Ace Bernard M. Malasaga</span>.
              </motion.h1>

              <motion.p
                variants={itemUp}
                className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base"
              >
                I build modern web interfaces and secure systems. I’ve worked on a{" "}
                <span className="text-amber-300 font-semibold">
                  Smart Helmet monitoring platform
                </span>{" "}
                and a{" "}
                <span className="text-amber-300 font-semibold">
                  Hyperledger Fabric e-voting system
                </span>{" "}
                focused on reliability, clarity, and real-world usability.
              </motion.p>

              <motion.div variants={itemUp} className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] active:scale-[0.99]"
                >
                  View Projects
                </a>

                <a
                  href="/Ace_Malasaga_Resume.pdf"
                  download
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
                >
                  Download Resume
                </a>
              </motion.div>

              <motion.div
                variants={itemUp}
                className="flex flex-wrap gap-2 text-xs text-gray-500"
              >
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  React + Tailwind
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  Hyperledger Fabric
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  Node + PostgreSQL
                </span>
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.55 }}
              transition={springSoft}
              className="relative"
            >
              <div className="relative mx-auto flex items-center justify-center max-w-[520px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[420px] w-[420px] rounded-full bg-amber-400/12 blur-2xl" />
                </div>

                <motion.div
                  aria-hidden="true"
                  className="absolute h-[360px] w-[360px] rounded-full border border-white/10 bg-white/[0.03] backdrop-blur"
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />

                <motion.div
                  aria-hidden="true"
                  className="absolute h-[300px] w-[300px] rounded-full bg-amber-400/18"
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
                />

                <motion.div
                  className="relative z-10 h-[320px] w-[320px] rounded-full overflow-hidden ring-1 ring-white/10 shadow-[0_18px_70px_rgba(0,0,0,0.55)]"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
                >
                  <img
                    src={Profile}
                    alt="Ace Bernard profile"
                    className="h-full w-full object-cover object-top"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-wrap items-center justify-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                >
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200 backdrop-blur">
                    Tagum City, PH
                  </span>
                  <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300 backdrop-blur">
                    Available for collaboration
                  </span>
                </motion.div>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-3">
                {[
                  { k: "Focus", v: "Python" },
                  { k: "Stack", v: "React/Tailwind" },
                  { k: "Interest", v: "Blockchain" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-center"
                  >
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">
                      {x.k}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-gray-200">
                      {x.v}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================== ABOUT + EXPERIENCE ===================== */}
        {/* ✅ keep same container width; only limit text width inside */}
        <section id="about" className="scroll-mt-28 py-16">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={springSoft}
            className="mb-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">About</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
              Building clear UI and <span className="text-amber-400">secure systems</span>.
            </h2>

            <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-400">
              I’m a developer who cares about clarity: dashboards that are easy to read,
              UI that feels clean, and systems that keep data reliable. I enjoy projects
              where I can mix real-time monitoring and blockchain-style traceability—
              especially using <span className="text-amber-300 font-semibold">Hyperledger Fabric</span>.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["UI clarity", "Responsive design", "Real-time dashboards", "Blockchain apps"].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300"
                >
                  {x}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            transition={springSoft}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_18px_70px_rgba(0,0,0,0.55)] overflow-hidden"
          >
            <div className="p-7 md:p-9">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Experience <span className="text-amber-400">Timeline</span>
                </h3>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300">
                  2025
                </span>
              </div>

              <div className="mt-6 relative">
                <div className="absolute left-3 top-1 bottom-1 w-px bg-white/10" />

                <div className="pl-10 space-y-8">
                  <div className="relative">
                    <div className="absolute left-[-34px] top-1 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(255,184,0,0.12)]" />

                    <p className="text-sm font-semibold text-gray-200">
                      Blockchain Developer Intern{" "}
                      <span className="text-amber-300">• Hijo Resources Corporation</span>
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Built an e-voting system using Hyperledger Fabric.
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        { t: "What I built", d: "Core UI screens + voting flow + admin/dashboard features." },
                        { t: "Security focus", d: "Immutable records and controlled access per user role." },
                        { t: "Stack used", d: "React, Tailwind, Node.js, PostgreSQL, Docker Compose." },
                        { t: "Result", d: "A more reliable voting workflow with traceable records." },
                      ].map((card) => (
                        <div key={card.t} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                          <p className="text-xs font-semibold text-amber-300">{card.t}</p>
                          <p className="mt-2 text-xs leading-relaxed text-gray-400">{card.d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Communication", "UI implementation", "Blockchain network basics", "Team collaboration"].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ===================== TECH STACK (MARQUEE) ===================== */}
        <section id="stack" className="scroll-mt-28 py-16">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            transition={springSoft}
            className="mb-8"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Tools</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
              Tech <span className="text-amber-400">Stack</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-2xl">
              Hover cards to view names. Smooth infinite carousel for a premium feel.
            </p>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            transition={springSoft}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_18px_70px_rgba(0,0,0,0.55)]"
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b0b0c] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b0b0c] to-transparent z-10" />

            <div className="py-6">
              <motion.div
                className="flex gap-4 w-max px-6"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              >
                {marqueeItems.map((tech, idx) => (
                  <div
                    key={`${tech.name}-${idx}`}
                    onMouseMove={(e) => showTooltip(e, tech.name)}
                    onMouseLeave={hideTooltip}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 hover:border-amber-400/25 hover:bg-white/5 transition cursor-pointer"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-400/15">
                      <img src={tech.icon} alt={tech.name} className="h-6 w-6 object-contain" draggable="false" />
                    </div>
                    <p className="text-sm font-semibold text-gray-200 whitespace-nowrap">{tech.name}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ===================== EDUCATION ===================== */}
        {/* ✅ same container width; keep readable text widths inside */}
        <section id="education" className="scroll-mt-28 py-16">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            transition={springSoft}
            className="mb-10"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Background</p>

            <div className="mt-2 flex items-end justify-between gap-6 flex-wrap">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Educational <span className="text-amber-400">Background</span>
              </h2>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-gray-300">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Continuous learning • 2014–2026
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-400">
              A clear path from foundational studies to college—focused on building practical skills in tech and software development.
            </p>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            transition={springSoft}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_18px_70px_rgba(0,0,0,0.55)]"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

            <div className="p-6 md:p-9">
              <div className="grid gap-4 md:grid-cols-2">
                {educationData.map((item, idx) => (
                  <motion.div
                    key={`${item.title}-${item.year}-${idx}`}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ ...springSoft, delay: idx * 0.06 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-white/[0.05] hover:border-amber-400/20 transition"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                          {item.year}
                        </p>
                        <p className="mt-1 text-base font-semibold text-gray-100">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-400">
                          {item.text}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-xs font-semibold text-amber-300">
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400/90" />
                      <span>Milestone</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {["Consistency", "Progress", "Discipline"].map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <div
          className="fixed pointer-events-none z-[9999] rounded-lg bg-black/80 px-3 py-2 text-xs text-amber-300 shadow-lg backdrop-blur"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default Home;