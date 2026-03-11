import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gmailIcon from "../assets/gmail.png";
import facebookIcon from "../assets/Facebook2.png";
import telegramIcon from "../assets/telegram.png";
import discordIcon from "../assets/discord.png";
import phoneIcon from "../assets/phone-call.png";

const rise = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const spring = { type: "spring", stiffness: 120, damping: 18, mass: 0.8 };

const Contact = () => {
  const contactLinks = useMemo(
    () => [
      {
        icon: gmailIcon,
        label: "Email",
        value: "acemalasaga30@gmail.com",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=acemalasaga30@gmail.com",
        accent: "Fastest reply",
        copy: "acemalasaga30@gmail.com",
      },
      {
        icon: facebookIcon,
        label: "Facebook",
        value: "Ace Bernard Malasaga",
        link: "https://www.facebook.com/acebernard.mondomalasaga/",
        accent: "Social",
        copy: "https://www.facebook.com/acebernard.mondomalasaga/",
      },
      {
        icon: telegramIcon,
        label: "Telegram",
        value: "@AceMalasaga",
        link: "https://t.me/AceMalasaga",
        accent: "Quick chat",
        copy: "@AceMalasaga",
      },
      {
        icon: discordIcon,
        label: "Discord",
        value: "acemalasaga",
        link: "https://discord.com/users/1059980868822034068",
        accent: "Community",
        copy: "acemalasaga",
        disabled: false,
      },
      {
        icon: phoneIcon,
        label: "Phone",
        value: "+63 966 305 0107",
        link: "tel:+639663050107",
        accent: "Call / SMS",
        copy: "+639663050107",
      },
    ],
    []
  );

  const [toast, setToast] = useState({ open: false, text: "" });

  const showToast = (text) => {
    setToast({ open: true, text });
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast({ open: false, text: "" }), 1400);
  };

  const copyToClipboard = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      showToast(`${label} copied`);
    } catch {
      showToast(`Copy failed`);
    }
  };

  return (
    <section id="contact" className="px-6 py-14">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Contact</p>

          <div className="mt-2 flex items-end justify-between gap-6 flex-wrap">
            <h2 className="text-4xl font-extrabold tracking-tight">
              Let’s <span className="text-amber-400">build</span> something.
            </h2>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-gray-300">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              Open for collaboration
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-sm text-gray-500">
            For projects, internships, or freelance work—message me through any channel below.
            If you’re in a hurry, email is the best option.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3 items-stretch">
          {/* Contact channels */}
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={spring}
            className="lg:col-span-2 relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_18px_70px_rgba(0,0,0,0.55)] flex flex-col"
          >
            {/* ambient */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="relative flex items-end justify-between gap-4 flex-wrap">
              <h3 className="text-xl font-semibold">
                Contact <span className="text-amber-400">Channels</span>
              </h3>
              <p className="text-xs text-gray-500">Click to open • “Copy” to copy</p>
            </div>

            <div className="relative mt-6 grid gap-4 sm:grid-cols-2">
              {contactLinks.map((item, i) => {
                const isExternal = item.link?.startsWith("http");
                const isDisabled = item.disabled || item.link === "#" || !item.link;

                return (
                  <div
                    key={i}
                    className={`group rounded-2xl border border-white/10 bg-black/20 p-4 transition ${
                      isDisabled
                        ? "opacity-60"
                        : "hover:border-amber-400/25 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 ring-1 ring-amber-400/15">
                        <img
                          src={item.icon}
                          alt=""
                          className="h-6 w-6"
                          draggable="false"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs text-gray-500">{item.label}</p>
                          <span className="text-[11px] text-amber-300/90">{item.accent}</span>
                        </div>

                        <a
                          href={isDisabled ? undefined : item.link}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          aria-disabled={isDisabled}
                          className={`mt-1 block truncate text-sm font-semibold transition ${
                            isDisabled
                              ? "text-gray-400 cursor-not-allowed"
                              : "text-gray-200 group-hover:text-amber-300"
                          }`}
                          onClick={(e) => {
                            if (isDisabled) e.preventDefault();
                          }}
                          title={item.value}
                        >
                          {item.value}
                        </a>

                        <div className="mt-3 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => copyToClipboard(item.copy ?? item.value, item.label)}
                            className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-amber-400 transition hover:bg-white/10 active:scale-[0.98]"
                          >
                            Copy
                          </button>

                          {!isDisabled && (
                            <a
                              href={item.link}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              className="rounded-xl bg-amber-400 px-3 py-2 text-xs font-semibold text-white transition hover:scale-[1.02] active:scale-[0.98]"
                            >
                              Open
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ✅ FIX: add spacing ABOVE the “What to send” area (so it won’t touch the last card) */}
            {/* - keep mt-auto to pin bottom
               - add pt-6 + border-t for a clean separation */}
            <div className="relative mt-auto pt-6">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold text-amber-300">What to send</p>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">
                  Include: (1) project goal, (2) deadline, (3) tech stack, and (4) preferred
                  channel. I’ll reply with next steps.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["Scope", "Deadline", "Budget (optional)", "Links"].map((x) => (
                    <span
                      key={x}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-gray-300"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Working Style */}
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ ...spring, delay: 0.05 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_18px_70px_rgba(0,0,0,0.55)] flex flex-col"
          >
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">How I work</p>
                <h3 className="mt-2 text-xl font-semibold">
                  Working <span className="text-amber-400">Style</span>
                </h3>
              </div>

              <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2">
                <p className="text-[10px] uppercase tracking-wider text-gray-500">Reply</p>
                <p className="text-xs font-semibold text-amber-300">24–48 hrs</p>
              </div>
            </div>

            <div className="relative mt-5 grid gap-3">
              {[
                { t: "UI First", d: "Modern layouts, clean UX, responsive design." },
                { t: "Systems-ready", d: "Dashboards + Fabric-friendly workflows." },
                { t: "Clear updates", d: "I communicate progress and blockers early." },
                { t: "Remote-friendly", d: "Works well in PH timezone collaboration." },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-semibold text-amber-300">{x.t}</p>
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">{x.d}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-auto pt-6">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* ✅ this separation also keeps CTA from touching the last card */}
              <div className="mt-6 grid gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=acemalasaga30@gmail.com&su=Project%20Inquiry%20-%20Ace%20Malasaga&body=Hi%20Ace%2C%0A%0AProject%20goal%3A%20%0ADeadline%3A%20%0ATech%20stack%3A%20%0ALinks%3A%20%0A%0AThanks!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] active:scale-[0.99] text-center"
                >
                  Email me with a template
                </a>

                <a
                  href="tel:+639663050107"
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-amber-400 transition hover:bg-white/10 text-center"
                >
                  Call / SMS
                </a>

                <p className="text-center text-xs text-gray-500">
                  Prefer email for detailed project info.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Toast */}
        <AnimatePresence>
          {toast.open && (
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] rounded-2xl border border-white/10 bg-black/80 px-4 py-3 text-xs text-amber-300 shadow-lg backdrop-blur"
            >
              {toast.text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;