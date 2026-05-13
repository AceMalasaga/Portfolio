import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import projectImage from "../assets/BFP_Dashboard.png";
import reactIcon from "../assets/science.png";
import tailwindIcon from "../assets/icons8-tailwind-css-144.png";
import jsIcon from "../assets/js-file.png";
import firebaseIcon from "../assets/icons8-firebase-240.png";
import nodeRed from "../assets/node-red.png";

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

const revealUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
};

const springSoft = { type: "spring", stiffness: 110, damping: 20, mass: 0.9 };

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const techSmartHelmet = useMemo(
    () => [
      { icon: reactIcon, name: "React" },
      { icon: tailwindIcon, name: "Tailwind CSS" },
      { icon: jsIcon, name: "JavaScript" },
      { icon: nodeIcon2, name: "Node.js" },
      { icon: firebaseIcon, name: "Firebase" },
    ],
    [],
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
      { icon: nodeRed, name: "Node-RED" },
    ],
    [],
  );

  const projects = useMemo(
    () => [
      {
        id: "01",
        category: ["Blockchain", "IoT"],
        tag: "Blockchain Infrastructure",
        title: "Buklod Blockchain Infrastructure System",
        subtitle:
          "Blockchain Security • IoT Data Integrity • Immutable Audit Trail",
        cover: ComelecDashboard,
        gallery: [ComelecDashboard, ComelecLedger, AuditLedger],
        description:
          "Designed and deployed a blockchain-secured IoT infrastructure where real-time sensor data from LoRaWAN devices is collected through Gateway, ChirpStack, MQTT Broker, and Node-RED, stored in PostgreSQL, and committed into the Hyperledger Fabric ledger. Instead of storing full raw datasets on-chain, Node-RED generates a SHA-256 hash as the immutable fingerprint of each dataset, enabling tamper detection, trusted ownership validation, and auditable record keeping.",
        highlights: [
          "Designed and deployed a 7-node Hyperledger Fabric network across 6 DigitalOcean droplets with 3 Raft Orderers and 2 Peer nodes.",
          "Integrated a full LoRaWAN-to-blockchain data flow using Gateway, ChirpStack, MQTT Broker, Node-RED, PostgreSQL, Backend API, and Hyperledger Fabric.",
          "Built the Node-RED workflow for MQTT subscription, payload decoding, validation, PostgreSQL storage, and SHA-256 hash generation.",
          "Implemented dynamic MSP and X.509 certificate-based identity management for both user accounts and hardware devices.",
          "Established a security model where user accounts are the primary ledger transaction invokers, while hardware identities are used for device verification.",
        ],
        tech: techEvoting,
        roleText:
          "I served as the Blockchain and Node-RED Infrastructure Lead, responsible for Hyperledger Fabric network architecture, Orderer and Peer deployment, certificate management, dynamic MSP identity design, Node-RED workflow development, backend blockchain integration, and ledger monitoring support.",
        focusText:
          "Focused on building trusted blockchain infrastructure where only verified hardware devices are accepted, only authorized user accounts can invoke transactions, and every dataset remains verifiable through immutable SHA-256 proof.",
      },
      {
        id: "02",
        category: ["Blockchain", "Web"],
        tag: "Blockchain Project",
        title: "E-Voting System",
        subtitle: "Election Transparency • Secure Vote Recording • Audit Trail",
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
          "A secure electronic voting platform built with Hyperledger Fabric to support transparent, tamper-resistant, and verifiable election records. Every vote is recorded into the blockchain ledger, creating immutable proof for vote validation, audit review, and trusted digital election results.",
        highlights: [
          "Developed secure voter verification and immutable vote recording using Hyperledger Fabric.",
          "Built role-based dashboards for COMELEC, LGU operators, auditors, and voters.",
          "Implemented permissioned access control to protect election operations and user roles.",
          "Integrated frontend and backend workflows for real-time election monitoring and vote tracking.",
          "Created a transparent blockchain audit trail for vote verification, tally review, and result validation.",
        ],
        tech: techEvoting,
        roleText:
          "I handled the majority of the blockchain implementation, backend development, and frontend architecture. I was responsible for secure data flow, system integration, dashboard development, role-based workflows, and Hyperledger Fabric connectivity.",
        focusText:
          "Focused on building a trusted voting system where transparency, security, and auditability are critical, ensuring election records remain permanent, verifiable, and tamper-resistant.",
      },
      {
        id: "03",
        category: ["IoT", "Capstone", "Web"],
        tag: "Capstone Project",
        title: "Smart Hard Hat for Disaster Response",
        subtitle: "Responder Safety • Real-Time Monitoring • Emergency Alerts",
        cover: projectImage,
        gallery: [projectImage],
        description:
          "A Smart Hard Hat system designed for disaster responders to improve safety through real-time health and environmental monitoring. The system uses multiple sensors and a web-based monitoring platform to provide faster alerts, better situational awareness, and safer emergency response operations.",
        highlights: [
          "Built real-time monitoring dashboards using React.js and Firebase.",
          "Integrated body temperature, environmental temperature, smoke, and toxic gas monitoring.",
          "Implemented emergency alert indicators using buzzer and LED notifications.",
          "Designed monitoring workflows for faster response, clearer visibility, and improved responder safety.",
          "Supported trusted dataset logging for monitoring history and incident review.",
        ],
        tech: techSmartHelmet,
        roleText:
          "I led the frontend development, dashboard design, monitoring logic implementation, and real-time data visualization for the system. I also supported sensor monitoring workflows and trusted data logging for safety-related records.",
        focusText:
          "Focused on building practical monitoring interfaces that help improve responder safety, provide real-time visibility, and support faster decision-making during emergency operations.",
        liveLink: "https://bfpmonitoringsystem.web.app",
      },
    ],
    [techEvoting, techSmartHelmet],
  );

  const filters = useMemo(
    () => ["All", "Blockchain", "IoT", "Web", "Capstone"],
    [],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter((project) =>
      project.category.includes(activeFilter),
    );
  }, [projects, activeFilter]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const openPreview = (gallery, startIndex, title, meta) => {
    setPreview({ gallery, currentIndex: startIndex, title, meta });
  };

  const nextPreview = () => {
    setPreview((prev) =>
      !prev
        ? prev
        : {
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.gallery.length,
          },
    );
  };

  const prevPreview = () => {
    setPreview((prev) =>
      !prev
        ? prev
        : {
            ...prev,
            currentIndex:
              (prev.currentIndex - 1 + prev.gallery.length) %
              prev.gallery.length,
          },
    );
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setPreview(null);
        setSelectedProject(null);
      }

      if (preview && e.key === "ArrowRight") nextPreview();
      if (preview && e.key === "ArrowLeft") prevPreview();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);

  const TechPill = ({ icon, name }) => (
    <span className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-gray-200 transition hover:-translate-y-0.5 hover:border-amber-400/40 hover:bg-amber-400/10">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/30 ring-1 ring-white/10">
        <img
          src={icon}
          alt={name}
          className="h-4 w-4 object-contain"
          draggable="false"
        />
      </span>
      <span className="whitespace-nowrap">{name}</span>
    </span>
  );

  const ProjectCard = ({ project, index }) => (
    <motion.article
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...springSoft, delay: index * 0.03 }}
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-white/[0.08]">
      <button
        type="button"
        onClick={() => setSelectedProject(project)}
        className="block w-full text-left">
        <div className="relative h-56 overflow-hidden bg-black/30">
          <img
            src={project.cover}
            alt={project.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            draggable="false"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {project.category.map((cat) => (
              <span
                key={`${project.id}-${cat}`}
                className="rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur">
                {cat}
              </span>
            ))}
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-semibold text-amber-300">
              Project {project.id}
            </p>
            <h3 className="mt-1 line-clamp-2 text-xl font-black text-white">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-5">
          <p className="text-xs font-semibold text-amber-300">{project.tag}</p>

          <p className="mt-2 line-clamp-2 text-sm text-gray-400">
            {project.subtitle}
          </p>

          <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={`${project.id}-${tech.name}`}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-gray-300">
                {tech.name}
              </span>
            ))}

            {project.tech.length > 4 && (
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-gray-300">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <span className="text-xs font-semibold text-amber-300">
              View details
            </span>

            <span className="rounded-full bg-amber-400/10 px-3 py-1 text-[11px] text-amber-300 ring-1 ring-amber-400/20">
              {project.gallery.length}{" "}
              {project.gallery.length > 1 ? "screens" : "screen"}
            </span>
          </div>
        </div>
      </button>
    </motion.article>
  );

  const currentImage = preview?.gallery?.[preview.currentIndex];

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-20">
      <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
          className="mb-10">
          <motion.p
            variants={revealUp}
            className="text-xs uppercase tracking-[0.25em] text-amber-300">
            Selected Work
          </motion.p>

          <motion.div
            variants={revealUp}
            className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                Featured <span className="text-amber-400">Projects</span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
                A collection of blockchain, IoT, and web-based systems focused
                on secure data flow, real-time monitoring, and practical
                infrastructure.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-right">
              <p className="text-2xl font-bold text-amber-400">
                {projects.length}
              </p>
              <p className="text-xs text-gray-400">Total Projects</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => {
                setActiveFilter(filter);
                setVisibleCount(6);
              }}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "border-amber-400/50 bg-amber-400/10 text-amber-300"
                  : "border-white/10 bg-white/[0.04] text-gray-400 hover:bg-white/[0.07]"
              }`}>
              {filter}
            </button>
          ))}
        </div>

        {visibleProjects.length > 0 ? (
          <>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {visibleCount < filteredProjects.length && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + 6)}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-amber-300 transition hover:-translate-y-0.5 hover:bg-white/10">
                  Load More Projects
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-10 text-center">
            <p className="text-sm text-gray-400">
              No projects found for this category.
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-xl">
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12 }}
              transition={springSoft}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#101010] shadow-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={selectedProject.cover}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                  draggable="false"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/40 to-transparent" />

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-red-500">
                  Close
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm font-bold text-amber-300">
                    Project {selectedProject.id}
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-white md:text-4xl">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300">
                    {selectedProject.subtitle}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.category.map((cat) => (
                    <span
                      key={`modal-${selectedProject.id}-${cat}`}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-amber-300">
                      {cat}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-gray-400">
                  {selectedProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <TechPill
                      key={`modal-${selectedProject.id}-${tech.name}`}
                      icon={tech.icon}
                      name={tech.name}
                    />
                  ))}
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                      Role
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-gray-400">
                      {selectedProject.roleText}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                      Focus
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-gray-400">
                      {selectedProject.focusText}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                    Key Highlights
                  </p>

                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {selectedProject.highlights.map((highlight, index) => (
                      <div
                        key={`detail-${selectedProject.id}-${highlight}`}
                        className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-[11px] font-bold text-amber-300 ring-1 ring-amber-400/20">
                          {index + 1}
                        </span>

                        <p className="text-xs leading-relaxed text-gray-300">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      openPreview(
                        selectedProject.gallery,
                        0,
                        selectedProject.title,
                        selectedProject.subtitle,
                      )
                    }
                    className="rounded-2xl bg-amber-400 px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.02]">
                    Preview Screenshots
                  </button>

                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-bold text-amber-300 transition hover:bg-white/10">
                      Open Live Project
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreview(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 px-4 backdrop-blur-xl">
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12 }}
              transition={springSoft}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl">
              <div className="absolute right-3 top-3 z-20 flex gap-2">
                {preview.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevPreview}
                      className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-amber-400">
                      Prev
                    </button>

                    <button
                      type="button"
                      onClick={nextPreview}
                      className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-amber-400">
                      Next
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => setPreview(null)}
                  className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur transition hover:bg-red-500">
                  Close
                </button>
              </div>

              <img
                src={currentImage}
                alt={preview.title}
                className="max-h-[78vh] w-full rounded-3xl border border-white/10 object-contain shadow-2xl"
                draggable="false"
              />

              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-amber-300">
                  {preview.title}
                </h3>

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
