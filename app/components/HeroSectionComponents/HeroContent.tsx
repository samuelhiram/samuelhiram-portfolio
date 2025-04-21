"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import SocialIcons from "./SocialLinks";

const buttons = [
  { label: "Curriculum", icon: "mdi:medal" },
  { label: "Proyectos", icon: "maki:arrow" },
];

export default function HeroContent() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex-1 flex flex-col gap-4 text-left">
      <h1 className="text-[clamp(1.5rem,6vw,1.8rem)] font-bold text-neutral-900 dark:text-white leading-tight">
        Hola, soy Samuel Hiram
      </h1>
      <p className="text-neutral-700 dark:text-neutral-300 text-[clamp(0.9rem,3vw,1.05rem)] leading-relaxed max-w-[65ch]">
        Soy desarrollador web con enfoque full-stack. Me interesa crear software
        útil, bien estructurado y pensado para crecer con el tiempo.
      </p>
      <p className="text-neutral-700 dark:text-neutral-200 text-[clamp(0.85rem,2.8vw,1rem)] max-w-[65ch]">
        Más allá del código, me gusta colaborar, escuchar a quienes usan lo que
        hacemos, y buscar siempre soluciones simples a problemas complejos.
      </p>
      {showMore && (
        <>
          <p className="text-neutral-700 dark:text-neutral-200 text-[clamp(0.85rem,2.8vw,1rem)] max-w-[65ch]">
            Trabajo principalmente con estas tecnologías para lograr soluciones
            escalables, bien organizadas y enfocadas en el rendimiento.
          </p>
          <div className="backdrop-blur-2xl bg-neutral-200/60 dark:bg-neutral-800/60 shadow-xl border w-fit rounded-lg border border-neutral-300 dark:border-neutral-700 p-2 space-y-3">
            <div className="flex flex-wrap gap-4 text-2xl text-neutral-600 dark:text-neutral-300">
              <Icon icon="devicon:nextjs" />
              <Icon icon="devicon:react" />
              <Icon icon="devicon:typescript" />
              <Icon icon="devicon:tailwindcss" />
              <Icon icon="devicon:prisma" />
              <Icon icon="devicon:nodejs" />
              <Icon icon="devicon:postgresql" />
              <Icon icon="devicon:git" />
              <Icon icon="devicon:vercel" />
            </div>
          </div>
        </>
      )}
      <div className="w-full flex justify-end">
        <button
          onClick={() => setShowMore(!showMore)}
          className="cursor-pointer text-sm font-medium text-orange-600 dark:text-orange-400 hover:underline"
        >
          {showMore ? "Ocultar detalles" : "Ver más"}
        </button>
      </div>
      <div className="flex flex-col xs:flex-row justify-between items-stretch xs:items-center gap-6 mt-2">
        <div className="w-full xs:w-auto flex justify-start">
          <SocialIcons />
        </div>
        <div className="w-full xs:w-auto flex flex-wrap justify-end gap-3">
          {buttons.map(({ label, icon }) => (
            <HeroButton key={label} label={label} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroButton({ label, icon }: { label: string; icon: string }) {
  return (
    <button className="btn text-[clamp(0.75rem,3vw,0.875rem)]">
      <span>{label}</span>
      <Icon icon={icon} className="w-[1rem] h-[1rem]" />
    </button>
  );
}
