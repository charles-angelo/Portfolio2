"use client";

import { useEffect, useRef, useState } from "react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  icon: string;
  highlights: string[];
  projects?: { name: string; url?: string }[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Full Stack Web Developer",
    company: "Infinity Hub Digital Marketing",
    period: "Dec 2025 – Present",
    current: true,
    icon: "work",
    highlights: [
      "Maintained and enhanced ManPro Payroll (Subscription-Based Enterprise System)",
      "Supported ManPro Payroll HRMS for enterprise clients",
      "Implemented optimized multi-tenant database & server architecture",
    ],
  },
  {
    role: "Full Stack Web Developer",
    company: "R Web Solutions, Corp.",
    period: "Aug – Nov 2025",
    icon: "work",
    highlights: [
      "Developed and maintained full-stack web applications using LaraBlade (Laravel + Blade) and Tailwind CSS.",
    ],
    projects: [
      { name: "IC-OS Pilipinas", url: "https://icos-pilipinas.com" },
      { name: "Cyto Defence", url: "https://cytodefence.com.ph" },
      { name: "Golden Key", url: "https://goldenkeyapp.com" },
      { name: "Architex", url: "https://architexphil.com" },
      { name: "Silid Cuadrado", url: "https://silidcuadrado.com" },
      { name: "8DragonsHeartFoundation", url: "https://8dragonsheartfoundation.com" },
      { name: "Prime Doctors" },
      { name: "List In Here" },
    ],
  },
  {
    role: "Frontend & Backend Developer (Internship)",
    company: "Infinity Hub Digital Marketing",
    period: "Feb 2025 – May 2025",
    icon: "work",
    highlights: [
      "Developed a Vehicle Tracking System with real-time GPS monitoring and geofencing.",
      "Project Link: tracker.manpromanagement.com",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress percentage through section (0 to 1)
      const totalHeight = rect.height;
      const startPoint = windowHeight * 0.75;
      const currentScroll = startPoint - rect.top;
      const progress = Math.min(Math.max(currentScroll / (totalHeight - 100), 0), 1);

      setScrollProgress(progress);
      if (rect.top <= windowHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 bg-slate-100/60 dark:bg-white/[0.01] relative overflow-hidden"
      id="experience"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="h-1.5 w-20 bg-secondary rounded-full"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
            My professional career path, enterprise project contributions, and full-stack development experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-12 md:pl-16 flex flex-col gap-12">
          {/* Background Track Line */}
          <div className="absolute left-4 md:left-5 top-6 bottom-6 w-1 bg-slate-200 dark:bg-slate-800 rounded-full" />

          {/* Animated Scroll Progress Laser Line */}
          <div
            className="absolute left-4 md:left-5 top-6 w-1 bg-gradient-to-b from-secondary via-accent-leaf to-primary rounded-full transition-all duration-300 ease-out shadow-[0_0_12px_#94a684]"
            style={{
              height: isVisible ? `${Math.max(scrollProgress * 100, 15)}%` : "0%",
            }}
          >
            {/* Glowing Traveling Head */}
            <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-white ring-4 ring-secondary/80 shadow-[0_0_16px_#94a684] animate-pulse" />
          </div>

          {EXPERIENCES.map((exp, index) => {
            const nodeProgress = (index + 0.5) / EXPERIENCES.length;
            const isReached = scrollProgress >= nodeProgress || (index === 0 && isVisible);

            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Node Icon Badge */}
                <div
                  className={`absolute -left-12 md:-left-16 top-1.5 w-9 h-9 md:w-11 md:h-11 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 z-10 ${isReached
                    ? "bg-white dark:bg-surface-dark border-secondary text-secondary shadow-lg shadow-secondary/30 scale-110 ring-4 ring-secondary/10"
                    : "bg-slate-100 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-400"
                    }`}
                >
                  <span className="material-symbols-outlined text-[18px] md:text-[22px] leading-none">
                    {exp.icon}
                  </span>
                </div>

                {/* Card Container */}
                <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-surface-dark border border-slate-200/80 dark:border-slate-800/80 shadow-xs hover:shadow-md hover:border-secondary/40 transition-all duration-300 group">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-secondary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-secondary font-semibold text-sm md:text-base mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${exp.current
                        ? "bg-secondary/10 text-secondary border-secondary/30 shadow-xs"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                        }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Highlights List */}
                  <ul className="space-y-2.5 text-sm md:text-base text-slate-600 dark:text-slate-300 mb-4">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary text-base mt-0.5 flex-shrink-0">
                          check_circle
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Key Projects Chips */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                        Key Projects Delivered
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.projects.map((proj, j) =>
                          proj.url ? (
                            <a
                              key={j}
                              href={proj.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-secondary dark:hover:text-secondary hover:border-secondary transition-all hover:-translate-y-0.5"
                            >
                              <span>{proj.name}</span>
                            </a>
                          ) : (
                            <span
                              key={j}
                              className="inline-flex items-center px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-500 dark:text-slate-400"
                            >
                              {proj.name}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


