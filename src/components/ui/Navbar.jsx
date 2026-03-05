// src/ui/Navbar.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_OFFSET = 110; // must match MainContent scroll-mt offset

const Navbar = () => {
  const links = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "projects", label: "Projects" },
      { id: "certificates", label: "Certificates" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = window.scrollY + el.getBoundingClientRect().top - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });

    setOpen(false);
  };

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);

    if (elements.length === 0) return;

    let rafId = null;

    const setActiveFromScroll = () => {
      rafId = null;

      // pick the section closest to NAV_OFFSET line (below navbar)
      let bestId = ids[0];
      let bestDist = Number.POSITIVE_INFINITY;

      for (const el of elements) {
        const rect = el.getBoundingClientRect();

        // ignore sections completely above the navbar line
        if (rect.bottom <= NAV_OFFSET) continue;

        const dist = Math.abs(rect.top - NAV_OFFSET);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = el.id;
        }
      }

      setActive(bestId);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(setActiveFromScroll);
    };

    // initial sync (refresh mid-page)
    setActiveFromScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", setActiveFromScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", setActiveFromScroll);
    };
  }, [links]);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-3xl">
      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
      >
        {/* subtle glow */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-amber-400/10 blur-2xl" />
          <div className="absolute -bottom-24 right-12 h-48 w-48 rounded-full bg-amber-400/5 blur-2xl" />
        </div>

        <div className="relative flex items-center justify-between px-4 py-3 sm:px-6">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white"
            aria-label="Go to Home"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/20">
              A
            </span>
            <span className="hidden sm:inline">
              Ace<span className="text-amber-400">Malasaga</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-2 sm:flex">
            {links.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id} className="relative">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`relative rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition
                      ${isActive ? "text-amber-300" : "text-gray-300 hover:text-white"}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 -z-10 rounded-xl bg-amber-400/10 ring-1 ring-amber-400/20"
                        transition={{ type: "spring", stiffness: 220, damping: 22 }}
                      />
                    )}
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-gray-200 hover:bg-white/10 transition"
            aria-label="Toggle Menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative border-t border-white/10 px-4 pb-4 pt-3 sm:hidden"
            >
              <div className="grid gap-2">
                {links.map((link) => {
                  const isActive = active === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition
                        ${
                          isActive
                            ? "bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/20"
                            : "bg-white/5 text-gray-200 hover:bg-white/10"
                        }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default Navbar;