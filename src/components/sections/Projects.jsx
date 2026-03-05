import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import projectImage from "../assets/BFP_Dashboard.png";
import reactIcon from "../assets/science.png";
import tailwindIcon from "../assets/icons8-tailwind-css-144.png";
import jsIcon from "../assets/js-file.png";
import nodeIcon from "../assets/nodejs.png";
import firebaseIcon from "../assets/icons8-firebase-240.png";

import ComelecDashboard from "../assets/comelec_dashboard.png";
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

  const projects = useMemo(
    () => [
      {
        id: "01",
        tag: "Featured",
        title: "Smart Helmet",
        subtitle: "Real-time monitoring dashboard",
        cover: projectImage,
        description:
          "A monitoring platform designed to support responder safety. Tracks environmental conditions and status indicators in real time and displays actionable insights on a clean dashboard.",
        highlights: [
          "Real-time dashboard for safety officers",
          "Status + environment tracking for responders",
          "Clean UI focused on readability under pressure",
        ],
        tech: techSmartHelmet,
        primaryCta: {
          text: "Open Live Project",
          link: "https://bfpmonitoringsystem.web.app",
        },
        secondaryCta: {
          text: "Preview Screenshot",
          action: () =>
            setPreview({
              image: projectImage,
              title: "Smart Helmet — Preview",
              meta: "Dashboard Screenshot",
            }),
        },
      },
      {
        id: "02",
        tag: "Blockchain",
        title: "E-Voting System",
        subtitle: "Hyperledger Fabric + multi-org ledger",
        cover: ComelecDashboard,
        description:
          "An electronic voting system focused on integrity and auditability. Uses blockchain storage so voting records are hard to tamper with, while keeping organizations’ data synchronized and verifiable.",
        highlights: [
          "Role-based access for controlled voting",
          "Immutable ledger records via Fabric network",
          "Multi-organization data verification design",
        ],
        tech: techEvoting,
        primaryCta: {
          text: "Preview Screenshot",
          action: () =>
            setPreview({
              image: ComelecDashboard,
              title: "E-Voting System — Preview",
              meta: "Admin / Dashboard Screenshot",
            }),
        },
        secondaryCta: null,
      },
    ],
    [techSmartHelmet, techEvoting]
  );

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") setPreview(null);
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
        {/* ambient */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

        <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-12">
          {/* LEFT: sticky meta (desktop) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold text-amber-300">{p.id}</p>
                <Pill>{p.tag}</Pill>
              </div>

              <h3 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight">
                <span className="text-amber-400">{p.title}</span>
              </h3>
              <p className="mt-2 text-sm text-gray-400">{p.subtitle}</p>

              <div className="mt-6 space-y-3">
                {p.highlights.map((h) => (
                  <div key={h} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <Check />
                    <p className="text-xs leading-relaxed text-gray-300">{h}</p>
                  </div>
                ))}
              </div>

              {/* CTAs (desktop: keep close to meta) */}
              <div className="mt-6 flex flex-wrap gap-3">
                {p.primaryCta?.link ? (
                  <a
                    href={p.primaryCta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] active:scale-[0.99]"
                  >
                    {p.primaryCta.text}
                  </a>
                ) : (
                  p.primaryCta?.action && (
                    <button
                      type="button"
                      onClick={p.primaryCta.action}
                      className="rounded-2xl bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] active:scale-[0.99]"
                    >
                      {p.primaryCta.text}
                    </button>
                  )
                )}

                {p.secondaryCta?.link ? (
                  <a
                    href={p.secondaryCta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
                  >
                    {p.secondaryCta.text}
                  </a>
                ) : (
                  p.secondaryCta?.action && (
                    <button
                      type="button"
                      onClick={p.secondaryCta.action}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-gray-200 transition hover:bg-white/10"
                    >
                      {p.secondaryCta.text}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: preview + details */}
          <div className="lg:col-span-8">
            <button
              type="button"
              onClick={() =>
                setPreview({
                  image: p.cover,
                  title: `${p.title} — Preview`,
                  meta: p.subtitle,
                })
              }
              className="group relative w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30"
              aria-label={`Preview ${p.title}`}
            >
              <img
                src={p.cover}
                alt={p.title}
                className="h-[260px] md:h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                <span className="rounded-full bg-black/45 px-3 py-1 text-xs text-gray-200 backdrop-blur">
                  Click to preview
                </span>
                <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs text-amber-300 ring-1 ring-amber-400/20 backdrop-blur">
                  {p.tech.length} tools
                </span>
              </div>
            </button>

            <div className="mt-6">
              <p className="text-sm md:text-base leading-relaxed text-gray-400 max-w-3xl">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <TechPill key={`${p.id}-${t.name}`} icon={t.icon} name={t.name} />
                ))}
              </div>
            </div>

            {/* subtle divider */}
            <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* extra: mini “What I learned / Role” area (adds depth) */}
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-semibold text-amber-300">Role</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">
                  UI implementation, dashboard layout, and integrating project logic for a clean and readable interface.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs font-semibold text-amber-300">Focus</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">
                  Clarity under pressure: readable data, strong structure, and a system-first approach for reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    );
  };

  return (
    <section id="projects" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-10"
        >
          <motion.p variants={revealUp} className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Work
          </motion.p>

          <motion.div variants={revealUp} className="mt-2 flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-4xl font-extrabold tracking-tight">
              Featured <span className="text-amber-400">Projects</span>
            </h2>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-gray-300">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Real-world builds
            </div>
          </motion.div>

          <motion.p variants={revealUp} className="mt-3 text-sm text-gray-500 max-w-2xl">
            Systems built for clarity, security, and practical use—focused on dashboards and reliable workflows.
          </motion.p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((p, idx) => (
            <Project key={p.id} p={p} index={idx} />
          ))}
        </div>
      </div>

      {/* Preview modal */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 backdrop-blur-xl px-4 md:px-6"
          >
            <motion.div
              initial={{ scale: 0.97, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.98, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
            >
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="absolute right-3 top-3 z-10 rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-gray-200 hover:bg-white/10 transition"
              >
                Close
              </button>

              <img
                src={preview.image}
                alt={preview.title}
                className="w-full rounded-3xl border border-white/10 shadow-2xl"
                draggable="false"
              />

              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-amber-300">{preview.title}</h3>
                <p className="text-sm text-gray-400">{preview.meta}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;