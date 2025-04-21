"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/app/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectSelectorCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  const hasRestored = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!emblaApi || hasRestored.current) return;

    const savedSlug = localStorage.getItem("xima:lastProjectSlug");
    const index = projects.findIndex((p) => p.slug === savedSlug);
    if (index !== -1) {
      emblaApi.scrollTo(index, false);
    }

    hasRestored.current = true;
  }, [emblaApi]);

  return (
    <>
      {/* Mobile carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative lg:hidden"
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex embla__container">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/proyectos/${p.slug}`}
                onClick={() =>
                  localStorage.setItem("xima:lastProjectSlug", p.slug)
                }
                className="group relative min-w-[10rem] aspect-[4/3] overflow-hidden rounded-md"
              >
                <Image
                  src={p.imageUrl}
                  alt={p.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute top-1 left-1 bg-neutral-900/60 text-white text-[10px] font-medium px-2 py-1 rounded-sm backdrop-blur-sm">
                  {p.projectName}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Gradient edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-neutral-950/50 to-transparent dark:from-neutral-800/50" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-neutral-950/50 to-transparent dark:from-neutral-800/50" />

        {/* Navigation arrows (optional logic can be added later) */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-neutral-600 dark:text-neutral-300 cursor-pointer">
          <ChevronRight className="w-6 h-6" />
        </div>
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-neutral-600 dark:text-neutral-300 cursor-pointer">
          <ChevronLeft className="w-6 h-6" />
        </div>
      </motion.div>

      {/* Desktop grid */}
      <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mt-6">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/proyectos/${p.slug}`}
            onClick={() => localStorage.setItem("xima:lastProjectSlug", p.slug)}
            className="block group relative aspect-[5/3] rounded-md overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-800"
          >
            <Image
              src={p.imageUrl}
              alt={p.imageAlt}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute top-1 left-1 bg-neutral-900/60 text-white text-[10px] font-medium px-2 py-1 rounded-sm backdrop-blur-sm">
              {p.projectName}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
