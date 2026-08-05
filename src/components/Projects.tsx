"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section className="py-24 px-6 relative" id="projects">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal variant="fade-up">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1.5 w-20 bg-secondary rounded-full" />
            <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl text-sm md:text-base leading-relaxed">
              Showcase of flagship web systems, enterprise HR solutions, and real-time IoT vehicle tracking applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1: ManPro Payroll HRMS */}
          <ScrollReveal variant="scale-up" delay={0.1}>
            <motion.a
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="https://manpromanagement.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl bg-slate-200 dark:bg-surface-dark aspect-video border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <video
                src="https://manpro.ph/wp-content/uploads/2025/08/Core-HR-Employee-Management-.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                    ManPro Payroll HRMS
                  </h3>
                  <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
                    <span className="material-symbols-outlined text-xl">open_in_new</span>
                  </span>
                </div>
                <p className="text-slate-300 mb-4 text-sm md:text-base line-clamp-2 leading-relaxed">
                  Enterprise-grade payroll solution with automated calculations, HR management, and multi-tenant backend architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-bold px-3 py-1 bg-white/15 text-white rounded-xl backdrop-blur-md border border-white/20">
                    React
                  </span>
                  <span className="text-xs font-bold px-3 py-1 bg-white/15 text-white rounded-xl backdrop-blur-md border border-white/20">
                    Laravel
                  </span>
                  <span className="text-xs font-bold px-3 py-1 bg-white/15 text-white rounded-xl backdrop-blur-md border border-white/20">
                    MySQL Multi-Tenant
                  </span>
                </div>
              </div>
            </motion.a>
          </ScrollReveal>

          {/* Project 2: GPS Vehicle Tracker */}
          <ScrollReveal variant="scale-up" delay={0.25}>
            <motion.a
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="https://tracker.manpromanagement.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl bg-slate-200 dark:bg-surface-dark aspect-video border border-slate-200/80 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src="/img/85a5ace0-1178-11ee-8b26-779befa4ae68.gif"
                alt="GPS Vehicle Tracking System"
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                    GPS Vehicle Tracker
                  </h3>
                  <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
                    <span className="material-symbols-outlined text-xl">open_in_new</span>
                  </span>
                </div>
                <p className="text-slate-300 mb-4 text-sm md:text-base line-clamp-2 leading-relaxed">
                  Real-time geolocation monitoring system with live Leaflet map rendering, geofencing, and MQTT message broker.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-bold px-3 py-1 bg-white/15 text-white rounded-xl backdrop-blur-md border border-white/20">
                    React
                  </span>
                  <span className="text-xs font-bold px-3 py-1 bg-white/15 text-white rounded-xl backdrop-blur-md border border-white/20">
                    MQTT (HiveMQ)
                  </span>
                  <span className="text-xs font-bold px-3 py-1 bg-white/15 text-white rounded-xl backdrop-blur-md border border-white/20">
                    Leaflet.js
                  </span>
                  <span className="text-xs font-bold px-3 py-1 bg-white/15 text-white rounded-xl backdrop-blur-md border border-white/20">
                    PHP
                  </span>
                </div>
              </div>
            </motion.a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
