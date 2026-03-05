import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import HijoCert from "../assets/cert_HIJO.jpg";
import AntiCert from "../assets/cert_ANTI.jpg";
import EthicsCert from "../assets/cert_Ethics.jpg";
import ICT1Cert from "../assets/cert-ICT1.jpg";
import ICT2Cert from "../assets/cert_ICT2.jpg";

/* ===== Animations ===== */
const sectionReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const springSoft = {
  type: "spring",
  stiffness: 90,
  damping: 20,
  mass: 0.9,
};

const springSnappy = {
  type: "spring",
  stiffness: 140,
  damping: 18,
  mass: 0.8,
};

const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeType, setActiveType] = useState("All");

  const certifications = useMemo(
    () => [
      {
        image: HijoCert,
        title: "Internship Certificate",
        issuer: "Hijo Resources Corporation",
        year: "2025",
        type: "Internship",
      },
      {
        image: ICT2Cert,
        title: "ICT Certification Level II",
        issuer: "TESDA",
        year: "2024",
        type: "TESDA",
      },
      {
        image: ICT1Cert,
        title: "ICT Certification Level I",
        issuer: "TESDA",
        year: "2023",
        type: "TESDA",
      },
      {
        image: AntiCert,
        title: "Anti-Harassment & Safety Training",
        issuer: "Professional Training",
        year: "2025",
        type: "Training",
      },
      {
        image: EthicsCert,
        title: "Code of Ethics Certification",
        issuer: "Professional Development",
        year: "2025",
        type: "Professional",
      },
    ],
    []
  );

  const types = useMemo(() => {
    const unique = Array.from(new Set(certifications.map((c) => c.type)));
    return ["All", ...unique];
  }, [certifications]);

  const filtered = useMemo(() => {
    if (activeType === "All") return certifications;
    return certifications.filter((c) => c.type === activeType);
  }, [certifications, activeType]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const Tag = ({ children }) => (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-gray-300">
      {children}
    </span>
  );

  const FilterPill = ({ label }) => {
    const isActive = label === activeType;
    return (
      <button
        type="button"
        onClick={() => setActiveType(label)}
        className={`rounded-full px-4 py-2 text-xs font-semibold transition border ${
          isActive
            ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
            : "border-white/10 bg-white/[0.04] text-gray-300 hover:bg-white/[0.06]"
        }`}
      >
        {label}
      </button>
    );
  };

  const CertCard = ({ cert, index }) => (
    <motion.button
      type="button"
      layout
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ ...springSoft, delay: index * 0.04 }}
      onClick={() => setSelectedCert(cert)}
      className="group w-full text-left"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] shadow-[0_18px_70px_rgba(0,0,0,0.55)] transition hover:border-amber-400/20">
        {/* Top image */}
        <div className="relative overflow-hidden">
          <img
            src={cert.image}
            alt={cert.title}
            className="h-44 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Top chips */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-full bg-black/55 px-3 py-1 text-[11px] text-gray-200 backdrop-blur">
              {cert.year}
            </span>
            <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] text-amber-300 backdrop-blur">
              {cert.type}
            </span>
          </div>

          {/* View hint */}
          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-gray-200 backdrop-blur opacity-0 group-hover:opacity-100 transition">
            Click to view
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h4 className="text-base font-semibold text-gray-100">
                <span className="text-amber-300">{cert.title}</span>
              </h4>
              <p className="mt-1 text-sm text-gray-400">{cert.issuer}</p>
            </div>

            <div className="shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-amber-300">
                <span className="text-lg leading-none">↗</span>
              </div>
            </div>
          </div>

          {/* Footer mini tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Tag>Verified</Tag>
            <Tag>Portfolio-ready</Tag>
            <Tag>Skills proof</Tag>
          </div>
        </div>

        {/* hover glow */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
        </div>
      </div>
    </motion.button>
  );

  return (
    <section id="certificates" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.55 }}
          transition={springSoft}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
            Credentials
          </p>

          <div className="mt-2 flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-4xl font-extrabold tracking-tight">
              Certificates <span className="text-amber-400">&</span> Training
            </h2>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-gray-300">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              {certifications.length} credentials
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500 max-w-2xl">
            Click any certificate to view it in full. Use the filters to quickly find what you need.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={springSoft}
          className="mb-8 flex flex-wrap gap-2"
        >
          {types.map((t) => (
            <FilterPill key={t} label={t} />
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, index) => (
              <motion.div
                key={`${cert.title}-${cert.year}-${cert.type}`}
                layout
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <CertCard cert={cert} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 backdrop-blur-xl px-6 py-10"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={springSnappy}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 hover:bg-white/10 transition"
              >
                Close
              </button>

              <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full"
                  draggable="false"
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-amber-300">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {selectedCert.issuer} • {selectedCert.year}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-200">
                    {selectedCert.type}
                  </span>
                  <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
                    Verified
                  </span>
                </div>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Tip: Press <span className="text-gray-300">Esc</span> to close.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificate;