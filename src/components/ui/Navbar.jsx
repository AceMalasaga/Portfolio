// src/ui/Navbar.jsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_OFFSET = 110;

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

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    setOpen(false);
    setActive(id);

    const targetY =
      window.scrollY + el.getBoundingClientRect().top - NAV_OFFSET;

    window.history.replaceState(null, "", `#${id}`);

    window.scrollTo({
      top: Math.max(0, targetY),
      behavior: "smooth",
    });

    // Small follow-up correction for repeated clicks / mobile / layout shifts
    setTimeout(() => {
      const freshEl = document.getElementById(id);
      if (!freshEl) return;

      const correctedY =
        window.scrollY + freshEl.getBoundingClientRect().top - NAV_OFFSET;

      window.scrollTo({
        top: Math.max(0, correctedY),
        behavior: "smooth",
      });
    }, 120);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    let rafId = null;

    const setActiveFromScroll = () => {
      rafId = null;

      const sections = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const scrollPosition = window.scrollY + NAV_OFFSET + 20;

      let current = ids[0];

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }

      setActive(current);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(setActiveFromScroll);
    };

    const onResize = () => setActiveFromScroll();

    setActiveFromScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [links]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const exists = links.some((link) => link.id === hash);
    if (!exists) return;

    const timer = setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;

      const y = window.scrollY + el.getBoundingClientRect().top - NAV_OFFSET;

      window.scrollTo({
        top: Math.max(0, y),
        behavior: "smooth",
      });

      setActive(hash);
    }, 100);

    return () => clearTimeout(timer);
  }, [links]);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-3xl">
      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
      >
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-amber-400/10 blur-2xl" />
          <div className="absolute -bottom-24 right-12 h-48 w-48 rounded-full bg-amber-400/5 blur-2xl" />
        </div>

        <div className="relative flex items-center justify-between px-4 py-3 sm:px-6">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white"
            aria-label="Go to Home"
            type="button"
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
                    type="button"
                    className={`relative rounded-xl px-4 py-2 text-xs font-semibold tracking-wide transition ${
                      isActive
                        ? "text-amber-300"
                        : "text-gray-300 hover:text-white"
                    }`}
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
            type="button"
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
              className="relative overflow-hidden border-t border-white/10 px-4 pb-4 pt-3 sm:hidden"
            >
              <div className="grid gap-2">
                {links.map((link) => {
                  const isActive = active === link.id;

                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      type="button"
                      className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
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