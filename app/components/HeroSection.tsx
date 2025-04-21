"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { avatar } from "../lib/constants/const";
import BackgroundMesh from "./BackgroundMesh";
export default function HeroSection() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(darkModeQuery.matches);
      darkModeQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
    }
  }, []);

  const buttonClass = `flex items-center gap-2
                  cursor-pointer rounded-md px-4 py-2 text-sm font-medium
                  bg-neutral-100 dark:bg-neutral-700
                  text-neutral-800 dark:text-neutral-200
                  shadow-sm border border-neutral-400 dark:border-neutral-600
                  hover:bg-neutral-300 dark:hover:bg-neutral-600
                  hover:text-neutral-900 dark:hover:text-white
                  transition-all duration-300
                `;

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-neutral-100 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 flex items-center justify-center px-4 py-8 sm:py-12 transition-colors duration-300">
      <BackgroundMesh isDark={isDarkMode} />
      <div className="relative z-10 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[min(60vw,80rem)]">
        <div className="backdrop-blur-xl bg-neutral-200/60 dark:bg-neutral-800/60 shadow-xl border border-neutral-300 dark:border-neutral-700 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 transition-all duration-300">
          {/* Avatar */}
          <div className="flex-shrink-0 w-[clamp(8rem,25vw,14rem)] h-[clamp(8rem,25vw,14rem)]">
            <div className="relative w-full h-full rounded-full overflow-hidden dark:border-neutral-700 shadow-md bg-neutral-300 dark:bg-neutral-700">
              <Image
                src={"/img/avatar.png"}
                alt="Samuel Hiram"
                fill
                className="object-cover pointer-events-none select-none"
                priority
                draggable={false}
                sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 220px"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-3 sm:gap-4 text-left">
            <h1 className="text-[clamp(1.5rem,6vw,2.5rem)] leading-tight font-bold text-neutral-600 dark:text-neutral-100">
              Hola, soy Samuel Hiram
            </h1>

            <p className="text-neutral-700 dark:text-neutral-300 text-[clamp(0.875rem,3.2vw,1.125rem)] leading-relaxed sm:leading-relaxed max-w-[65ch]">
              Desarrollador web full-stack especializado en soluciones modernas,
              escalables y con gran atención al rendimiento. Me enfoco en
              experiencias de usuario limpias usando tecnologías como Next.js,
              Prisma y Tailwind CSS.
            </p>

            <div className="flex flex-col xs:flex-row justify-between items-stretch xs:items-center mt-2 gap-4 sm:gap-6">
              <div className="w-full xs:w-auto flex justify-start">
                <SocialIcons />
              </div>

              <div className="w-full xs:w-auto flex flex-wrap justify-end gap-2 sm:gap-3">
                <button
                  className={`${buttonClass} text-[clamp(0.75rem,3vw,0.875rem)]`}
                >
                  <span>Curriculum</span>
                  <Icon
                    icon="mdi:medal"
                    className="w-[clamp(0.875rem,3.5vw,1.125rem)] h-[clamp(0.875rem,3.5vw,1.125rem)]"
                  />
                </button>
                <button
                  className={`${buttonClass} text-[clamp(0.75rem,3vw,0.875rem)]`}
                >
                  <span>Proyectos</span>
                  <Icon
                    icon="maki:arrow"
                    className="w-[clamp(0.875rem,3.5vw,1.125rem)] h-[clamp(0.875rem,3.5vw,1.125rem)]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcons() {
  return (
    <nav
      className="flex justify-center md:justify-start gap-6"
      aria-label="Social links"
    >
      <a
        href="https://github.com/samuelhiram"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        aria-label="GitHub"
      >
        <Icon icon="mdi:github" width={32} height={32} />
      </a>
      <a
        href="https://mx.linkedin.com/in/samuel-hiram-castro-martinez-708982253"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
        aria-label="LinkedIn"
      >
        <Icon icon="mdi:linkedin" width={32} height={32} />
      </a>
    </nav>
  );
}
