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
import Profile from "../assets/AceMalasaga.jpg";
import Python from "../assets/python.png";
import aceResume from "../assets/PortfolioResume.pdf";
import nodeRed from "../assets/node-red.png";

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
  const techStackGroups = useMemo(
    () => [
      {
        title: "Core Skills",
        items: [
          { icon: reactLogo, name: "React.js" },
          { icon: Tailwind, name: "Tailwind CSS" },
          { icon: Hyperledger, name: "Hyperledger Fabric" },
          { icon: Python, name: "Python" },
          { icon: nodeRed, name: "Node-RED" },
          { icon: htmlLogo, name: "HTML5" },
          { icon: cssLogo, name: "CSS3" },
        ],
      },
      {
        title: "Experienced With",
        items: [
          { icon: jsLogo, name: "JavaScript" },
          { icon: nodeLogo, name: "Node.js" },
          { icon: postgre, name: "PostgreSQL" },
          { icon: dockerCompose, name: "Docker Compose" },
          { icon: Linux, name: "Linux" },
          { icon: gitLogo, name: "Git" },
          { icon: githubLogo, name: "GitHub" },
        ],
      },
    ],
    [],
  );

  const stackHighlights = useMemo(
    () => [
      { label: "Frontend", value: "React.js + Tailwind CSS" },
      { label: "Blockchain", value: "Hyperledger Fabric" },
      { label: "Backend", value: "Node.js + Python" },
      { label: "Workflow", value: "Docker, Git, Linux" },
    ],
    [],
  );

  /* ================= EDUCATION ================= */
  const educationData = useMemo(
    () => [
      {
        year: "2022 – 2026",
        title: "College",
        text: "University of Mindanao – Tagum",
        subtext: "Bachelor of Science in Information Technology",
      },
      {
        year: "2018 – 2020",
        title: "Senior High School",
        text: "Tagum National Trade School",
        subtext: "Technical-Vocational-Livelihood – Automotive Servicing",
      },
      {
        year: "2014 – 2018",
        title: "Junior High School",
        text: "Canocotan National High School",
        subtext: "Foundational Secondary Education",
      },
      {
        year: "2008 – 2014",
        title: "Elementary Education",
        text: "Herculina L. Edig Elementary School",
        subtext: "Primary Academic Foundation",
      },
    ],
    [],
  );

  /* ===== HERO VISIBILITY (for scroll hint) ===== */
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { amount: 0.78 });

  const [userScrolled, setUserScrolled] = useState(false);
  const [showScrollUI, setShowScrollUI] = useState(false);

  useEffect(() => {
    const onScroll = () => setUserScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine)",
    );

    const updateScrollUI = () => {
      setShowScrollUI(mediaQuery.matches);
    };

    updateScrollUI();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateScrollUI);
    } else {
      mediaQuery.addListener(updateScrollUI);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateScrollUI);
      } else {
        mediaQuery.removeListener(updateScrollUI);
      }
    };
  }, []);

  const showScrollHint = showScrollUI && heroInView && !userScrolled;

  const smoothScrollTo = (id) => (e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="px-6">
      <div className="mx-auto w-full max-w-6xl">
        {/* ===================== HERO ===================== */}
        <section
          ref={heroRef}
          className="relative flex min-h-0 items-start pt-6 sm:pt-8 md:pt-10 lg:min-h-[calc(100vh-7rem)] lg:items-center lg:pt-0">
          <AnimatePresence>
            {showScrollHint && (
              <motion.a
                href="#about"
                onClick={smoothScrollTo("about")}
                aria-label="Scroll to About"
                className="absolute -bottom-10 md:-bottom-7 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.985 }}
                transition={{ duration: 0.35, ease: "easeOut" }}>
                <motion.div
                  className="group flex flex-col items-center gap-2"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}>
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
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    <span className="text-[11px] tracking-wide text-gray-300 group-hover:text-white transition">
                      Scroll down
                    </span>
                  </div>

                  <motion.div
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] backdrop-blur"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.18 }}>
                    <motion.span
                      className="text-amber-400 text-lg leading-none"
                      animate={{ y: [0, 6, 0] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}>
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
              className="space-y-6">
              <motion.h1
                variants={itemUp}
                className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Hi, I’m{" "}
                <span className="text-amber-400">Ace Bernard M. Malasaga</span>.
              </motion.h1>

              <motion.p
                variants={itemUp}
                className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
                Frontend Developer specializing in React.js, Tailwind CSS, and
                modern web applications, with strong experience in{" "}
                <span className="text-amber-300 font-semibold">
                  Hyperledger Fabric and secure system integration.{" "}
                </span>
                I build clean, scalable, and user-focused solutions for
                real-world systems including disaster response monitoring,
                blockchain-secured infrastructure, and e-voting platforms.
              </motion.p>

              <motion.div variants={itemUp} className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={smoothScrollTo("projects")}
                  className="rounded-2xl bg-amber-400 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] active:scale-[0.99]">
                  View Projects
                </button>

                <a
                  href={aceResume}
                  download="Ace_Bernard_M_Malasaga_Resume.pdf"
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-amber-400 transition hover:bg-white/10">
                  Download Resume
                </a>
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div
              variants={sectionReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.55 }}
              transition={springSoft}
              className="relative">
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
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}>
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
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-gray-200 backdrop-blur">
                    Tagum City, Philippines
                  </span>
                  <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300 backdrop-blur">
                    Available for collaboration
                  </span>
                </motion.div>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-3">
                {[
                  { k: "Frontend", v: "React/Tailwind" },
                  { k: "Blockchain", v: "Hyperledger Fabric" },
                  { k: "Learning", v: "Python" },
                ].map((x) => (
                  <div
                    key={x.k}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-center">
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
        <section id="about" className="scroll-mt-28 py-16">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={springSoft}
            className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              About
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold tracking-tight">
              Building practical systems with{" "}
              <span className="text-amber-400">clear user interfaces</span>.
            </h2>

            <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-400">
              I am a Frontend and Blockchain Developer focused on building
              real-world applications with clean UI, reliable system flow, and
              secure data integration. My strongest work includes Buklod, a
              Hyperledger Fabric infrastructure project for secure IoT data
              verification, followed by a blockchain-based E-Voting System
              designed for transparent and tamper-resistant election records,
              and a Smart Hard Hat for disaster response monitoring.
            </p>

            {/* <div className="mt-6 flex flex-wrap gap-2">
              {[
                "React.js",
                "Tailwind CSS",
                "Real-time dashboards",
                "Hyperledger Fabric",
                "Backend integration",
                "Python learning",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300">
                  {x}
                </span>
              ))}
            </div> */}
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            transition={springSoft}
            className="rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_18px_70px_rgba(0,0,0,0.55)] overflow-hidden">
            <div className="p-7 md:p-9">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-xl md:text-2xl font-semibold">
                  Experience <span className="text-amber-400">Timeline</span>
                </h3>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300">
                  2025 – Present
                </span>
              </div>

              <div className="mt-6 relative">
                <div className="absolute left-3 top-1 bottom-1 w-px bg-white/10" />

                <div className="pl-10 space-y-10">
                  {/* Hijo Internship */}
                  <div className="relative">
                    <div className="absolute left-[-34px] top-1 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(255,184,0,0.12)]" />

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-200">
                          Blockchain & Frontend Developer{" "}
                          <span className="text-amber-300">
                            • Hijo Resources Corporation
                          </span>
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          November 2025 – February 2026
                        </p>
                      </div>

                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-gray-300">
                        Internship
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-amber-300">
                      Blockchain-Based E-Voting System
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      Developed a secure e-voting system integrated with
                      Hyperledger Fabric to support transparent vote recording,
                      voter verification, and immutable election records. I
                      worked on the blockchain integration and built the
                      majority of the frontend and backend workflows.
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        {
                          t: "Problem",
                          d: "Traditional voting systems face risks such as tampering, delayed verification, and weak transparency.",
                        },
                        {
                          t: "Solution",
                          d: "The system records verified votes into a blockchain ledger, making election records traceable and tamper-resistant.",
                        },
                        {
                          t: "Frontend Work",
                          d: "Built dashboards for voters, admins, COMELEC, and LGU operators using React.js and Tailwind CSS.",
                        },
                        {
                          t: "My Role",
                          d: "Handled blockchain integration, backend coordination, frontend development, dashboard design, and secure data flow.",
                        },
                      ].map((card) => (
                        <div
                          key={card.t}
                          className="rounded-2xl border border-white/10 bg-black/20 p-4">
                          <p className="text-xs font-semibold text-amber-300">
                            {card.t}
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-gray-400">
                            {card.d}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buklod */}
                  <div className="relative">
                    <div className="absolute left-[-34px] top-1 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(255,184,0,0.12)]" />

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-200">
                          Blockchain & Node-RED Infrastructure Lead{" "}
                          <span className="text-amber-300">
                            • Buklod (Private Client)
                          </span>
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          March 2026 – Present
                        </p>
                      </div>

                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-gray-300">
                        Freelance
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-amber-300">
                      Buklod Blockchain Infrastructure System
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      Buklod is a blockchain-secured IoT infrastructure where
                      LoRaWAN sensors send real-time environmental and device
                      data through Gateway, ChirpStack, MQTT Broker, Node-RED,
                      PostgreSQL, and Backend API before verified records are
                      committed into the Hyperledger Fabric ledger. Instead of
                      storing full raw datasets on-chain, Node-RED generates a
                      SHA-256 hash as a unique fingerprint of each dataset,
                      while PostgreSQL stores the full raw data. Hyperledger
                      Fabric stores the immutable proof including asset ID,
                      hash, sensor ID, user ID, and transaction identity for
                      tamper detection and trusted audit trails.
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        {
                          t: "Problem",
                          d: "IoT systems are vulnerable to fake device identities, unauthorized users, weak audit trails, and data tampering, making sensor-generated records difficult to fully trust.",
                        },
                        {
                          t: "Solution",
                          d: "Each LoRaWAN sensor has its own sensor ID and registered Fabric identity reference, while users also have dynamic MSP and X.509 certificate-based identities for secure ownership validation.",
                        },
                        {
                          t: "Node-RED Responsibility",
                          d: "Built the Node-RED workflow for MQTT subscription, payload decoding, validation, PostgreSQL storage, SHA-256 hash generation, and secure forwarding of asset ID, hash, sensor ID, and user ID to the backend API.",
                        },
                        {
                          t: "Blockchain Responsibility",
                          d: "Designed the Hyperledger Fabric transaction flow where the backend verifies both sensor and user identities, while only the authorized user account performs the actual ledger invocation for stronger accountability.",
                        },
                        {
                          t: "Infrastructure",
                          d: "Designed and deployed a 7-node Hyperledger Fabric network across 6 DigitalOcean droplets with 3 Raft Orderers and 2 Peer nodes for high availability and fault tolerance.",
                        },
                        {
                          t: "Ledger Security",
                          d: "Hyperledger Fabric stores the asset ID, SHA-256 hash, sensor ID, user/account ID, and Fabric invoker identity. If the recalculated hash differs from the ledger hash, the system detects altered or tampered data immediately.",
                        },
                      ].map((card) => (
                        <div
                          key={card.t}
                          className="rounded-2xl border border-white/10 bg-black/20 p-4">
                          <p className="text-xs font-semibold text-amber-300">
                            {card.t}
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-gray-400">
                            {card.d}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "React dashboards",
                  "Hyperledger Fabric",
                  "LoRaWAN integration",
                  "MSP identity",
                  "PNPKI authentication",
                  "Immutable audit trails",
                ].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300">
                    {x}
                  </span>
                ))}
              </div> */}
            </div>
          </motion.div>
        </section>

        {/* ===================== TECH STACK ===================== */}
        <section id="stack" className="scroll-mt-28 py-16">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            transition={springSoft}
            className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Tech Stack
            </p>

            <div className="mt-2 flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Tools behind my{" "}
                <span className="text-amber-400">development workflow</span>
              </h2>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-gray-300">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Modern development stack
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-400">
              Technologies I use across frontend interfaces, blockchain
              infrastructure, backend integration, IoT data handling, and
              deployment workflows.
            </p>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            transition={springSoft}
            className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-transparent p-5 shadow-[0_20px_80px_rgba(0,0,0,0.55)] md:p-7">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-white/[0.05] blur-3xl" />

            {/* Highlight Cards */}
            <div className="relative z-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stackHighlights.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...springSoft, delay: idx * 0.05 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25 p-5 transition hover:border-amber-400/25 hover:bg-white/[0.06]">
                  <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-amber-400/10 blur-2xl opacity-0 transition group-hover:opacity-100" />

                  <p className="relative z-10 text-[10px] uppercase tracking-[0.22em] text-gray-500">
                    {item.label}
                  </p>

                  <p className="relative z-10 mt-2 text-sm font-semibold text-amber-400">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Main Stack */}
            <div className="relative z-10 mt-8 grid gap-5 lg:grid-cols-2">
              {techStackGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ ...springSoft, delay: groupIndex * 0.08 }}
                  className="rounded-[1.75rem] border border-white/10 bg-black/25 p-5 md:p-6">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {group.title}
                      </h3>
                      <div className="mt-2 h-[2px] w-12 rounded-full bg-amber-400/80" />
                    </div>

                    <span className="rounded-full border border-amber-400/15 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
                      {group.items.length}
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {group.items.map((tech, idx) => (
                      <motion.div
                        key={`${group.title}-${tech.name}`}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ ...springSoft, delay: idx * 0.035 }}
                        whileHover={{ y: -4 }}
                        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 transition hover:border-amber-400/20 hover:bg-white/[0.06]">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/25 transition group-hover:bg-amber-400/10">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-7 w-7 object-contain transition group-hover:scale-110"
                            draggable="false"
                          />
                        </div>

                        <div className="min-w-0">
                          <h4 className="truncate text-sm font-semibold text-gray-200 transition group-hover:text-amber-400">
                            {tech.name}
                          </h4>
                          <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-gray-500">
                            Technology
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ===================== EDUCATION ===================== */}
        <section id="education" className="scroll-mt-28 py-16">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            transition={springSoft}
            className="mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Professional Background
            </p>

            <div className="mt-2 flex items-end justify-between gap-6 flex-wrap">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Education
              </h2>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-gray-300">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Bachelor of Science in Information Technology
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-400">
              Academic foundation that supported my development in software
              engineering, system design, and practical problem-solving for
              real-world applications.
            </p>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            transition={springSoft}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_18px_70px_rgba(0,0,0,0.55)]">
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
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-5 hover:bg-white/[0.05] hover:border-amber-400/20 transition">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-amber-400/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                          {item.year}
                        </p>
                        <p className="mt-1 text-base font-semibold text-amber-400">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-400">
                          {item.text}
                        </p>
                        <p className="mt-1 text-xs text-gray-500 italic font-light">
                          {item.subtext}
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
                      <span>Academic milestone</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Home;
