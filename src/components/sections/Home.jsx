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
import Profile from "../assets/NJ268061.jpg";
import Python from "../assets/python.png";
import aceResume from "../assets/Resume-Ace.pdf";

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
          { icon: Hyperledger, name: "Hyperledger Fabric" },
          { icon: Python, name: "Python" },
          { icon: reactLogo, name: "React.js" },
          { icon: htmlLogo, name: "HTML5" },
          { icon: cssLogo, name: "CSS3" },
          { icon: Tailwind, name: "Tailwind CSS" },
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
      { label: "Focus", value: "Hyperledger Fabric" },
      { label: "Frontend", value: "React.js + Tailwind CSS" },
      { label: "Programming", value: "Python + JavaScript" },
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

  /* ===== Hide scroll hint when the user starts scrolling ===== */
  const [userScrolled, setUserScrolled] = useState(false);

  const [showScrollUI, setShowScrollUI] = useState(false);

  useEffect(() => {
    const onScroll = () => setUserScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ADDED: show scroll hint only on large screens with fine pointer (desktop/laptop)
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
              {/* <motion.div variants={itemUp}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Front-end • Blockchain • Systems
                </div>
              </motion.div> */}

              <motion.h1
                variants={itemUp}
                className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Hi, I’m{" "}
                <span className="text-amber-400">Ace Bernard M. Malasaga</span>.
              </motion.h1>

              <motion.p
                variants={itemUp}
                className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-base">
                Frontend and Blockchain Developer specializing in{" "}
                <span className="text-amber-300 font-semibold">
                  React.js, and Hyperledger Fabric
                </span>
                . I focus on bridging the gap between secure permissioned
                ledgers and intuitive user interfaces. From developing a{" "}
                <span className="text-amber-300 font-semibold">
                  Smart Hard Hat safety system
                </span>{" "}
                to building a
                <span className="text-amber-300 font-semibold">
                  {" "}
                  blockchain-based e-voting platform,
                </span>{" "}
                I create real-time, reliable applications designed for
                high-stakes, real-world use.
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
                  { k: "Learning", v: "Python" },
                  { k: "Frontend", v: "React/Tailwind" },
                  { k: "Focus", v: "Hyperledger Fabric" },
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
              Building clear interfaces and{" "}
              <span className="text-amber-400">reliable systems</span>.
            </h2>

            <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-400">
              I enjoy building systems where clarity and reliability matter. I
              focus on creating dashboards that are easy to understand,
              interfaces that remain responsive under real-time data, and
              systems that keep information accurate and trustworthy. Many of my
              projects explore how monitoring platforms and distributed systems
              can work together to support real-world decision making.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "UI clarity",
                "Responsive design",
                "Real-time dashboards",
                "Blockchain apps",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300">
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

                    {/* ✅ Project Title */}
                    <p className="mt-3 text-sm font-semibold text-amber-300">
                      Blockchain-Based E-Voting System
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      <strong>Led the core development</strong> of a Hyperledger
                      Fabric–based e-voting system. I engineered the entire
                      blockchain architecture and 80% of the frontend
                      application, creating a secure, tamper-proof ecosystem for
                      electoral integrity.
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        {
                          t: "Blockchain Architecture",
                          d: "Engineered the end-to-end Hyperledger Fabric network, including chaincode development, transaction validation logic, and ledger state management.",
                        },
                        {
                          t: "Full-Stack Frontend",
                          d: "Developed 80% of the user interface using React and Tailwind CSS, building specialized dashboards for COMELEC, LGU operators, auditors, and voters.",
                        },
                        {
                          t: "Secure Voting Pipeline",
                          d: "Built the integration layer between the UI and the blockchain, ensuring real-time voter verification and immutable transaction recording.",
                        },
                        {
                          t: "Deployment & Tools",
                          d: "Orchestrated the development environment using Docker Compose and Node.js, ensuring seamless interaction between PostgreSQL and the Fabric Peer nodes.",
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

                  {/* Freelance */}
                  <div className="relative">
                    <div className="absolute left-[-34px] top-1 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_6px_rgba(255,184,0,0.12)]" />

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-200">
                          Blockchain Infrastructure Lead{" "}
                          <span className="text-amber-300">
                            • Buklod (Private Client)
                          </span>
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          March 2026 – May 2026
                        </p>
                      </div>

                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-gray-300">
                        Freelance
                      </span>
                    </div>

                    {/* ✅ Project Title */}
                    <p className="mt-3 text-sm font-semibold text-amber-300">
                      Buklod Distributed Blockchain Infrastructure System
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      Architecting a hybrid 7-node environment for{" "}
                      <span className="font-semibold text-amber-300">
                        Buklod
                      </span>
                      . Managed a distributed 6-droplet cloud network for
                      production and a dedicated local VM for secure network
                      orchestration and cryptographic artifact generation.
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {[
                        {
                          t: "Distributed Infrastructure",
                          d: "Deployed 6 droplets on DigitalOcean: 3 Orderers (Raft), 2 Peers, and 1 dedicated Backend API, ensuring high availability and separation of concerns.",
                        },
                        {
                          t: "Secure Orchestration",
                          d: "Utilized a separate Local VM as a central node for generating configtx, genesis blocks, and channel artifacts to maintain a hardened root of trust.",
                        },
                        {
                          t: "Identity & Verification",
                          d: "Managing end-to-end X.509 certificate issuance for users, gateways, and hardware sensors to guarantee that every raw value is cryptographically signed.",
                        },
                        {
                          t: "Hardware Integration",
                          d: "Developing the data bridge between physical sensors and the Hyperledger ledger, utilizing Python for efficient backend processing and ledger commits.",
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

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Internship Experience",
                  "Freelance Project",
                  "Access-Controlled Workflow",
                  "Verified Data Submission",
                ].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-300">
                    {x}
                  </span>
                ))}
              </div>
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
            className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Tech Stack
            </p>

            <div className="mt-2 flex items-end justify-between gap-6 flex-wrap">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Modern tools I use to build{" "}
                <span className="text-amber-400">real projects</span>
              </h2>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-gray-300">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Technologies I use
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-400">
              A curated set of technologies I use for frontend development,
              blockchain-based systems, backend logic, and deployment workflows.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stackHighlights.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...springSoft, delay: idx * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-xl transition duration-300 hover:border-amber-400/20 hover:bg-white/[0.06]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-amber-400/10 blur-2xl" />
                  </div>

                  <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-gray-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-amber-400">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            transition={springSoft}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
            <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-white/[0.05] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-amber-400/5 blur-3xl" />

            <div className="relative z-10 p-6 md:p-8 lg:p-10">
              <div className="space-y-10">
                {techStackGroups.map((group, groupIndex) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ ...springSoft, delay: groupIndex * 0.08 }}
                    className="relative">
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight text-white">
                          {group.title}
                        </h3>
                        <div className="mt-2 h-[2px] w-16 rounded-full bg-amber-400/80" />
                      </div>

                      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/15 bg-amber-400/10 px-3 py-1.5 text-xs text-amber-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        {group.items.length} technologies
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {group.items.map((tech, idx) => (
                        <motion.div
                          key={`${group.title}-${tech.name}`}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ ...springSoft, delay: idx * 0.04 }}
                          whileHover={{ y: -8 }}
                          className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/20 p-5 backdrop-blur-xl transition duration-300 hover:border-amber-400/20 hover:bg-white/[0.05] hover:shadow-[0_12px_40px_rgba(255,191,36,0.08)]">
                          <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-400/10 blur-2xl" />
                            <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-white/[0.04] blur-2xl" />
                          </div>

                          <div className="relative z-10 flex items-center gap-4">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-inner shadow-white/5 transition duration-300 group-hover:border-amber-400/20 group-hover:bg-amber-400/10">
                              <img
                                src={tech.icon}
                                alt={tech.name}
                                className="h-9 w-9 object-contain transition duration-300 group-hover:scale-110"
                                draggable="false"
                              />
                            </div>

                            <div className="min-w-0">
                              <h4 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-amber-400">
                                {tech.name}
                              </h4>
                              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-500">
                                Technology
                              </p>
                            </div>
                          </div>

                          <div className="relative z-10 mt-5 flex items-center justify-between">
                            <div className="h-px flex-1 bg-gradient-to-r from-amber-400/40 via-white/10 to-transparent" />
                            <span className="ml-3 text-[10px] uppercase tracking-[0.2em] text-gray-500 transition group-hover:text-gray-300">
                              Stack
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
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
              Academic Foundation
            </p>

            <div className="mt-2 flex items-end justify-between gap-6 flex-wrap">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Educational <span className="text-amber-400">Background</span>
              </h2>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-gray-300">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Strategic Learning • 2014–2026
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm md:text-base leading-relaxed text-gray-400">
              A clear path from foundational studies to college, focused on
              growth, learning, and building practical skills in technology and
              software development.
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

              {/* <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "BS Information Technology",
                  "Expected Graduation: 2026",
                  "Academic Journey",
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
      </div>
    </div>
  );
};

export default Home;
