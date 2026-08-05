"use client";

import ScrollReveal from "./ScrollReveal";

export default function Summary() {
  return (
    <section className="py-20 px-6 bg-slate-100/60 dark:bg-white/[0.02] border-y border-slate-200/50 dark:border-slate-800/40" id="summary">
      <div className="max-w-4xl mx-auto text-center">

        <ScrollReveal variant="fade-up" delay={0.2}>
          <h2 className="text-3xl font-display font-bold mb-6 text-slate-900 dark:text-white">
            Professional Summary
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="scale-up" delay={0.3}>
          <div className="relative p-8 md:p-10 rounded-3xl bg-white dark:bg-surface-dark border border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-900/5 dark:shadow-none">
            <span className="material-symbols-outlined absolute top-4 left-6 text-4xl text-secondary/20 pointer-events-none select-none">
              format_quote
            </span>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic relative z-10">
              &quot;Bachelor of Science in Information Technology graduate with hands-on experience in full-stack web development, enterprise payroll systems, real-time applications, and multi-tenant architectures using React, Laravel, and MySQL.&quot;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
