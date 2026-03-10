import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import projectImage from "../assets/BFP_Dashboard.png";
import reactIcon from "../assets/science.png";
import tailwindIcon from "../assets/icons8-tailwind-css-144.png";
import jsIcon from "../assets/js-file.png";
import firebaseIcon from "../assets/icons8-firebase-240.png";

import ComelecDashboard from "../assets/comelec_dashboard.png";
import ComelecElection from "../assets/comelec_Election.png";
import ComelecCandidates from "../assets/comelec_Candidates.png";
import ComelecLedger from "../assets/comelec_Ledger.png";
import ComelecTally from "../assets/comelec_Tally.png";
import ComelecResult from "../assets/comelec_Result.png";
import Login from "../assets/comelec_login.png";
import LGUApprove from "../assets/LGU_approve.png";
import AuditCandidates from "../assets/Audit_Candidates.png";
import AuditLedger from "../assets/Audit_Ledger.png";

import postgre from "../assets/postgre.png";
import dockerCompose from "../assets/docker-compose.png";
import Hyperledger from "../assets/hyperledger-fabric.jpg";
import Linux from "../assets/linux.png";
import nodeIcon2 from "../assets/nodejs.png";

/* ===== Motion presets ===== */
const revealUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const springSoft = { type: "spring", stiffness: 100, damping: 18, mass: 0.9 };

const Projects = () => {
  const [preview, setPreview] = useState(null);

  const techSmartHelmet = useMemo(
    () => [
      { icon: reactIcon, name: "React" },
      { icon: tailwindIcon, name: "Tailwind CSS" },
      { icon: jsIcon, name: "JavaScript" },
      { icon: nodeIcon2, name: "Node.js" },
      { icon: firebaseIcon, name: "Firebase" },
    ],
    []
  );

  const techEvoting = useMemo(
    () => [
      { icon: reactIcon, name: "React" },
      { icon: tailwindIcon, name: "Tailwind CSS" },
      { icon: Hyperledger, name: "Hyperledger Fabric" },
      { icon: postgre, name: "PostgreSQL" },
      { icon: dockerCompose, name: "Docker Compose" },
      { icon: Linux, name: "Linux" },
      { icon: nodeIcon2, name: "Node.js" },
    ],
    []
  );

  const openPreview = (gallery, startIndex, title, meta) => {
    setPreview({
      gallery,
      currentIndex: startIndex,
      title,
      meta,
    });
  };

  const nextPreview = () => {
    setPreview((prev) => {
      if (!prev || !prev.gallery?.length) return prev;
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.gallery.length,
      };
    });
  };

  const prevPreview = () => {
    setPreview((prev) => {
      if (!prev || !prev.gallery?.length) return prev;
      return {
        ...prev,
        currentIndex:
          (prev.currentIndex - 1 + prev.gallery.length) % prev.gallery.length,
      };
    });
  };

  const projects = useMemo(
    () => [
      {
        id: "01",
        tag: "Capstone Project",
        title: "Smart Hard Hat for Disaster Response",
        subtitle: "Real-time monitoring dashboard for disaster response",
        cover: projectImage,
        gallery: [projectImage],
        description:
          "A capstone project designed to improve responder safety and operational awareness during disaster response. The system integrates health and environmental sensors managed by an ESP32, while the web platform collects, processes, analyzes, and presents real-time data through a responsive interface for desktop and mobile devices. It provides live readings, alerts when dangerous levels are reached, and data logs for further analysis.",
        highlights: [
          "Built a real-time monitoring dashboard for responder safety",
          "Displays body temperature, environmental temperature, smoke, and gas readings",
          "Provides live alerts when dangerous sensor thresholds are reached",
          "Stores synchronized real-time data using Firebase",
          "Designed for both desktop and mobile accessibility",
        ],
        tech: techSmartHelmet,
        roleText:
          "I built the full website for the project, including the dashboard UI, data presentation, real-time monitoring views, alerts, and the overall user experience across desktop and mobile screens.",
        focusText:
          "Focused on making the interface clear, responsive, and practical for real-world use, so users can quickly understand sensor readings, warning states, and recorded data during critical situations.",
        primaryCta: {
          text: "Open Live Project",
          link: "https://bfpmonitoringsystem.web.app",
          variant: "primary",
        },
        secondaryCta: {
          text: "Preview Screenshot",
          action: () =>
            openPreview(
              [projectImage],
              0,
              "Smart Hard Hat",
              "Dashboard Screenshot"
            ),
          variant: "secondary",
        },
      },
      {
        id: "02",
        tag: "Blockchain Project",
        title: "E-Voting System",
        subtitle: "Hyperledger Fabric + secure transaction workflow",
        cover: ComelecDashboard,
        gallery: [
          Login,
          ComelecDashboard,
          ComelecElection,
          ComelecCandidates,
          ComelecLedger,
          ComelecTally,
          ComelecResult,
          LGUApprove,
          AuditCandidates,
          AuditLedger,
        ],
        description:
          "A blockchain-based electronic voting system designed for stronger integrity, security, and auditability. The platform uses Hyperledger Fabric to record voting transactions in a permissioned ledger, making records traceable, verifiable, and significantly more resistant to tampering than a typical centralized setup. The system also supports role-based access and controlled participation for a more secure voting process.",
        highlights: [
          "Designed most of the system interface and overall workflow",
          "Implemented the Hyperledger Fabric side of the project",
          "Uses a permissioned blockchain network for stronger transaction control",
          "Creates tamper-resistant and traceable voting records",
          "Supports role-based access for controlled voting actions",
        ],
        tech: techEvoting,
        roleText:
          "I handled most of the system design and was the one responsible for implementing the Hyperledger Fabric side, including the blockchain structure and the secure transaction flow behind the platform.",
        focusText:
          "Focused on building a more secure and tamper-resistant voting system by combining controlled access, verifiable transaction records, and blockchain-backed auditability through Hyperledger Fabric.",
        primaryCta: {
          text: "Preview Screenshot",
          action: () =>
            openPreview(
              [
                Login,
                ComelecDashboard,
                ComelecElection,
                ComelecCandidates,
                ComelecLedger,
                ComelecTally,
                ComelecResult,
                LGUApprove,
                AuditCandidates,
                AuditLedger,
              ],
              0,
              "E-Voting System",
              "System Screens"
            ),
          variant: "secondary",
        },
        secondaryCta: null,
      },
    ],
    [techSmartHelmet, techEvoting]
  );

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setPreview(null);
      if (e.key === "ArrowRight") nextPreview();
      if (e.key === "ArrowLeft") prevPreview();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const Pill = ({ children }) => (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-gray-300">
      {children}
    </span>
  );

  const TechPill = ({ icon, name }) => (
    <span
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-gray-200 transition hover:border-amber-400/25 hover:bg-white/[0.06]"
      title={name}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-400/10 ring-1 ring-amber-400/15">
        <img src={icon} alt={name} className="h-4 w-4 object-contain" draggable="false" />
      </span>
      <span className="whitespace-nowrap">{name}</span>
    </span>
  );

  const Check = () => (
    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/12 ring-1 ring-amber-400/20">
      <span className="h-2 w-2 rounded-full bg-amber-400" />
    </span>
  );

  const renderCTA = (cta) => {
    if (!cta) return null;

    const isPrimary = cta.variant === "primary";
    const baseClass = isPrimary
      ? "inline-flex w-full items-center justify-center rounded-2xl bg-amber-400 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] active:scale-[0.99] sm:w-auto"
      : "inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-amber-400 transition hover:bg-white/10 sm:w-auto";

    if (cta.link) {
      return (
        <a
          href={cta.link}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClass}
        >
          {cta.text}
        </a>
      );
    }

    if (cta.action) {
      return (
        <button type="button" onClick={cta.action} className={baseClass}>
          {cta.text}
        </button>
      );
    }

    return null;
  };

  const Project = ({ p, index }) => {
    return (
      <motion.article
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        transition={{ ...springSoft, delay: index * 0.03 }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_18px_70px_rgba(0,0,0,0.55)]"
      >
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold text-amber-300">{p.id}</p>
                <Pill>{p.tag}</Pill>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
                <span className="text-amber-400">{p.title}</span>
              </h3>
              <p className="mt-2 text-sm text-gray-400">{p.subtitle}</p>

              <div className="mt-6 space-y-3">
                {p.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <Check />
                    <p className="text-xs leading-relaxed text-gray-300">{h}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {renderCTA(p.primaryCta)}
                {renderCTA(p.secondaryCta)}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <button
              type="button"
              onClick={() =>
                openPreview(p.gallery, 0, p.title, p.subtitle)
              }
              className="group relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30"
              aria-label={`Preview ${p.title}`}
            >
              <img
                src={p.cover}
                alt={p.title}
                className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:h-[320px]"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-black/45 px-3 py-1 text-xs text-gray-200 backdrop-blur">
                  Click to preview
                </span>
                <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs text-amber-300 ring-1 ring-amber-400/20 backdrop-blur">
                  {p.gallery.length} {p.gallery.length > 1 ? "screens" : "screen"}
                </span>
              </div>
            </button>

            <div className="mt-6">
              <p className="max-w-3xl text-sm leading-relaxed text-gray-400 md:text-base">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <TechPill key={`${p.id}-${t.name}`} icon={t.icon} name={t.name} />
                ))}
              </div>
            </div>

            <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-semibold text-amber-300">Role</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{p.roleText}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-semibold text-amber-300">Focus</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{p.focusText}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  };

  const currentImage = preview?.gallery?.[preview.currentIndex];

  return (
    <section id="projects" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-10"
        >
          <motion.p
            variants={revealUp}
            className="text-xs uppercase tracking-[0.2em] text-gray-500"
          >
            Work
          </motion.p>

          <motion.div
            variants={revealUp}
            className="mt-2 flex flex-wrap items-end justify-between gap-6"
          >
            <h2 className="text-4xl font-extrabold tracking-tight">
              Featured <span className="text-amber-400">Projects</span>
            </h2>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-gray-300">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Real-world builds
            </div>
          </motion.div>

          <motion.p
            variants={revealUp}
            className="mt-3 max-w-2xl text-sm text-gray-500"
          >
            Systems built for clarity, security, and practical use—focused on dashboards
            and reliable workflows.
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, idx) => (
            <Project key={p.id} p={p} index={idx} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4 backdrop-blur-xl md:px-6"
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
            >
              <div className="absolute right-3 top-3 z-20 flex gap-2">
                {preview.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevPreview}
                      className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white transition hover:bg-amber-400"
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      onClick={nextPreview}
                      className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white transition hover:bg-amber-400"
                    >
                      Next
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => setPreview(null)}
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-200 transition hover:bg-amber-400"
                >
                  Close
                </button>
              </div>

              <img
                src={currentImage}
                alt={preview.title}
                className="w-full rounded-3xl border border-white/10 shadow-2xl"
                draggable="false"
              />

              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-amber-300">{preview.title}</h3>
                <p className="text-sm text-gray-400">{preview.meta}</p>
                {preview.gallery.length > 1 && (
                  <p className="mt-1 text-xs text-gray-500">
                    Image {preview.currentIndex + 1} of {preview.gallery.length}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;