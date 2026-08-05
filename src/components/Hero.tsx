"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [vector, setVector] = useState({ x: -280, y: -40 });
  const { scrollY } = useScroll();

  useEffect(() => {
    const calculateTargetVector = () => {
      const heroNameEl = document.getElementById("vacuum-name");
      const navTargetEl = document.getElementById("navbar-ca-target");

      if (heroNameEl && navTargetEl) {
        const heroRect = heroNameEl.getBoundingClientRect();
        const navRect = navTargetEl.getBoundingClientRect();

        // Calculate exact vector offsets from Hero name center to Navbar target center
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

  // Map scrollY (0 to 180px) to dynamic vector values
  const rawX = useTransform(scrollY, [0, 180], [0, vector.x]);
  const rawY = useTransform(scrollY, [0, 180], [0, vector.y]);
  const scale = useTransform(scrollY, [0, 20], [1, 0.25]);
  const opacity = useTransform(scrollY, [0, 140, 180], [1, 0.4, 0]);
  const blurValue = useTransform(scrollY, [0, 90, 180], ["blur(0px)", "blur(3px)", "blur(6px)"]);

  return (
    <header className="pt-24 lg:pt-32 pb-20 px-6" id="home">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 id="hero-name" className="text-5xl lg:text-7xl font-display font-extrabold mb-6 leading-tight text-slate-900 dark:text-white">
            <span className="text-primary inline-block"><span className="text-white/80">Charles Angelo</span> B. Cuizon</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            A passionate <span className="text-secondary font-semibold">Full Stack Web Developer</span> crafting high-performance, scalable web applications with modern tech stacks.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all"
              href="#projects"
            >
              View Projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <div className="flex items-center gap-4 px-4">
              <a className="text-slate-400 hover:text-secondary transition-colors" href="#" aria-label="Terminal">
                <span className="material-symbols-outlined text-3xl">terminal</span>
              </a>
              <a className="text-slate-400 hover:text-secondary transition-colors" href="#" aria-label="Code">
                <span className="material-symbols-outlined text-3xl">code</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 hero-glow rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative glass-card p-4 rounded-3xl overflow-hidden border border-white/5">
            <Image
              src="/img/Gemini_Generated_Image_ygpk5tygpk5tygpk.png"
              alt="Charles Angelo Cuizon working on a Full Stack Web application"
              width={600}
              height={600}
              className="rounded-2xl w-full h-[600px] object-cover opacity-80 object-[0%_40%]"
              priority
              unoptimized
            />
            {/* <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#4c776d]/70 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white">verified</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Experience</p>
                  <p className="text-lg font-bold text-white">Full Stack Developer</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
