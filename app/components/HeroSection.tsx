"use client";
import { useEffect, useState } from "react";
import BackgroundMesh from "./BackgroundMesh";
import HeroCard from "./HeroSectionComponents/HeroCard";
export default function HeroSection() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(darkModeQuery.matches);
      darkModeQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
    }
  }, []);

  return (
    <section className="pt-20 sm:pt-22 xl:pt-0 relative w-full min-h-[100dvh] overflow-hidden bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 flex items-center justify-center px-2 md:px-4 py-8 sm:py-12 transition-colors duration-300">
      <BackgroundMesh isDark={isDarkMode} />
      <HeroCard />
    </section>
  );
}
