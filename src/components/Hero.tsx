"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const [vector, setVector] = useState({ x: -280, y: -40 });
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const calculateTargetVector = () => {
      const heroNameEl = document.getElementById("vacuum-name");
      const navTargetEl = document.getElementById("navbar-ca-target");

      if (heroNameEl && navTargetEl) {
        const heroRect = heroNameEl.getBoundingClientRect();
        const navRect = navTargetEl.getBoundingClientRect();

        const deltaX = navRect.left + navRect.width / 2 - (heroRect.left + heroRect.width / 2);
        const deltaY = navRect.top + navRect.height / 2 - (heroRect.top + heroRect.height / 2);

        setVector({ x: deltaX, y: deltaY });
      }
    };

    calculateTargetVector();
    window.addEventListener("resize", calculateTargetVector);
    const timer = setTimeout(calculateTargetVector, 300);

    return () => {
      window.removeEventListener("resize", calculateTargetVector);
      clearTimeout(timer);
    };
  }, []);

  // Parallax shifts on hero elements as user scrolls down
  const heroImageY = useTransform(scrollY, [0, 500], [0, 60]);
  const heroTextY = useTransform(scrollY, [0, 500], [0, 25]);
  const glowOpacity = useTransform(scrollY, [0, 300], [0.25, 0.05]);

  return (
    <header ref={containerRef} className="relative pt-28 lg:pt-36 pb-24 px-6 overflow-hidden" id="home">
      {/* Background Parallax Light Blobs */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Hero Column */}
        <motion.div style={{ y: heroTextY }}>

          {/* Heading */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <h1 id="hero-name" className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold mb-6 leading-[1.1] text-slate-900 dark:text-white">
              <span className="text-primary inline-block">
                <span id="vacuum-name" className="text-slate-900 dark:text-white/95">
                  Charles Angelo
                </span>{" "}
                B. Cuizon
              </span>
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal variant="fade-up" delay={0.3}>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed font-normal">
              A passionate <span className="text-secondary font-semibold">Full Stack Web Developer</span> crafting high-performance, scalable enterprise applications with modern tech stacks.
            </p>
          </ScrollReveal>

          {/* Action CTAs */}
          <ScrollReveal variant="fade-up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="group relative bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-lg shadow-secondary/25 hover:shadow-secondary/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
                href="#projects"
              >
                <span>View Projects</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300 text-xl">
                  arrow_forward
                </span>
              </a>

              <div className="flex items-center gap-3 px-2">
                <a
                  className="w-12 h-12 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary hover:border-secondary flex items-center justify-center transition-all duration-300 shadow-xs hover:-translate-y-1"
                  href="#skills"
                  aria-label="View Skills"
                >
                  <span className="material-symbols-outlined text-2xl">code</span>
                </a>
                <a
                  className="w-12 h-12 rounded-2xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-secondary dark:hover:text-secondary hover:border-secondary flex items-center justify-center transition-all duration-300 shadow-xs hover:-translate-y-1"
                  href="#experience"
                  aria-label="View Experience"
                >
                  <span className="material-symbols-outlined text-2xl">work</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </motion.div>

        {/* Right Hero Image Card with Parallax */}
        <motion.div style={{ y: heroImageY }} className="relative group">
          <ScrollReveal variant="scale-up" delay={0.3}>
            {/* Glowing Backdrop Card */}
            <div className="absolute -inset-3 hero-glow rounded-3xl opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-500" />

            <div className="relative glass-card p-3 rounded-3xl overflow-hidden border border-slate-200/50 dark:border-white/10 shadow-2xl shadow-slate-900/10 dark:shadow-black/50">
              <Image
                src="/img/Gemini_Generated_Image_ygpk5tygpk5tygpk.png"
                alt="Charles Angelo Cuizon working on a Full Stack Web application"
                width={600}
                height={600}
                className="rounded-2xl w-full h-[450px] sm:h-[550px] lg:h-[600px] object-cover opacity-90 object-[0%_40%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                priority
                unoptimized
              />


            </div>
          </ScrollReveal>
        </motion.div>
      </div>
    </header>
  );
}
