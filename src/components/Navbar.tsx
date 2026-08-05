"use client";

import { useTheme } from "next-themes";
import { MouseEvent, useEffect, useState } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "skills", label: "Skills", icon: "code" },
  { id: "experience", label: "Experience", icon: "work" },
  { id: "projects", label: "Projects", icon: "folder_open" },
  { id: "contact", label: "Contact", icon: "mail" },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showCaBadge, setShowCaBadge] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Morph into CA. badge when Charles Angelo heading is vacuumed in
      setShowCaBadge(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = mounted ? theme === "dark" : false;

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    // Ripple effect
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());

    const top = target.getBoundingClientRect().top + window.scrollY - 30;
    window.scrollTo({ top, behavior: "smooth" });

    setTimeout(() => {
      target.classList.add("section-highlight");
      target.addEventListener("animationend", () => target.classList.remove("section-highlight"), { once: true });
    }, 500);
  };

  return (
    <>
      {/* Desktop Floating Left Navigation Bar */}
      <aside className="hidden md:flex fixed left-5 lg:left-8 top-1/2 -translate-y-1/2 z-50 flex-col items-center justify-center">
        <div className="w-[70px] py-6 px-3 rounded-[32px] bg-white/85 dark:bg-[#182026]/85 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl shadow-slate-900/10 dark:shadow-black/60 flex flex-col items-center justify-center gap-3 text-center transition-all duration-500">

          {/* Animated CA. Brand Badge (Springs in when "Charles Angelo" scrolls out) */}
          <div
            id="navbar-ca-target"
            className={`flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${showCaBadge
                ? "scale-100 opacity-100 translate-y-0 h-11 pointer-events-auto"
                : "scale-0 opacity-0 -translate-y-4 h-0 pointer-events-none overflow-hidden"
              }`}
          >
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="w-11 h-11 rounded-full bg-secondary/15 dark:bg-slate-800/90 flex items-center justify-center text-secondary dark:text-white font-display font-extrabold text-xs tracking-tight hover:scale-110 transition-transform duration-300 border border-secondary/30 ring-4 ring-secondary/10 shadow-lg shadow-secondary/20 group relative"
              aria-label="Charles Angelo Home"
            >
              CA<span className="text-secondary">.</span>
              <span className="absolute left-full ml-3.5 px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold whitespace-nowrap shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 z-50">
                Charles Angelo
              </span>
            </a>
          </div>

          {showCaBadge && <div className="w-8 h-[1px] bg-slate-200 dark:bg-slate-800/80 my-0.5 transition-all duration-300" />}

          {/* Nav Items */}
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`relative group flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 ${isActive
                    ? "bg-secondary text-white shadow-md shadow-secondary/30 scale-105"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  }`}
                aria-label={item.label}
              >
                <div className="absolute w-full h-full flex items-center justify-center">
                  <div className="material-symbols-outlined text-[22px]">{item.icon}</div>
                </div>

                {/* Tooltip */}
                <span className="absolute left-full ml-3.5 px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold whitespace-nowrap shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 z-50">
                  {item.label}
                </span>
              </a>
            );
          })}

          <div className="w-8 h-[1px] bg-slate-200 dark:bg-slate-800/80 my-0.5" />

          {/* Vertical Sliding Theme Switcher */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative flex flex-col items-center justify-between w-8 h-14 rounded-full bg-slate-200/80 dark:bg-slate-900/80 p-1 border border-slate-300/80 dark:border-slate-700/80 cursor-pointer transition-colors duration-300 group shadow-inner my-1"
            aria-label="Toggle Theme"
          >
            {/* Sun Icon (Top) */}
            <span
              className={`material-symbols-outlined text-[13px] leading-none transition-colors duration-300 mt-0.5 ${!isDark ? "text-amber-500 opacity-90" : "text-slate-400 dark:text-slate-600 opacity-40"
                }`}
            >
              light_mode
            </span>

            {/* Moon Icon (Bottom) */}
            <span
              className={`material-symbols-outlined text-[13px] leading-none transition-colors duration-300 mb-0.5 ${isDark ? "text-indigo-400 opacity-90" : "text-slate-400 dark:text-slate-600 opacity-40"
                }`}
            >
              dark_mode
            </span>

            {/* Sliding Handle / Thumb */}
            <div
              className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-200/90 dark:border-slate-700/90 flex items-center justify-center transition-transform duration-300 ease-out transform ${isDark ? "translate-y-[24px]" : "translate-y-0"
                }`}
            >
              <span
                className={`material-symbols-outlined text-[14px] leading-none transition-colors duration-300 ${isDark ? "text-indigo-400" : "text-amber-500"
                  }`}
              >
                {isDark ? "dark_mode" : "light_mode"}
              </span>
            </div>

            {/* Tooltip */}
            <span className="absolute left-full ml-3.5 px-3 py-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold whitespace-nowrap shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 translate-x-1 group-hover:translate-x-0 z-50">
              {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </span>
          </button>
        </div>
      </aside>

      {/* Mobile Floating Bottom Bar */}
      <nav className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 p-2 rounded-full bg-white/90 dark:bg-[#182026]/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl shadow-black/30">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold transition-all duration-300 ${isActive
                  ? "bg-secondary text-white shadow-md shadow-secondary/30"
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              {isActive && <span>{item.label}</span>}
            </a>
          );
        })}
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="p-2 text-slate-500 dark:text-slate-400 hover:text-secondary transition-colors flex items-center justify-center"
          aria-label="Toggle Theme"
        >
          <span className="material-symbols-outlined text-[18px]">
            {isDark ? "light_mode" : "dark_mode"}
          </span>
        </button>
      </nav>
    </>
  );
}



