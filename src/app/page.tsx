"use client";

import { useEffect, useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      const sections = document.querySelectorAll("header[id], section[id], footer[id]");

      let current = sections[0]?.id || "home";
      sections.forEach((sec) => {
        if ((sec as HTMLElement).offsetTop <= scrollY) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SmoothScroll>
      <Navbar activeSection={activeSection} />
      <main className="relative overflow-x-hidden">
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
