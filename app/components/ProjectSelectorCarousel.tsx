// ProjectSelectorCarousel.tsx
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        <div className="overflow-hidden lg:hidden" ref={emblaRef}>
          <div className="flex embla__container ">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/proyectos/${p.slug}`}
                onClick={() =>
                  localStorage.setItem("xima:lastProjectSlug", p.slug)
                }
              >
                <div className="embla__slide relative min-w-[10rem] aspect-[4/3] lg:min-w-[14rem] overflow-hidden group">
                  <Image
                    src={p.imageUrl}
                    alt={p.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute top-1 left-1 bg-black/60 text-white text-[10px] font-semibold px-3 py-1 z-10 rounded-sm">
                    {p.projectName}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10  text-black cursor-pointer lg:hidden">
          <ChevronRight className="w-10 h-10 text-estudio-gray" />
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10  text-black cursor-pointer lg:hidden">
          <ChevronLeft className="w-10 h-10 text-estudio-gray" />
        </div>
        <div className="w-8 h-full bg-gradient-to-r from-black/50 to-transparent absolute left-0 top-0" />
        <div className="w-8 h-full bg-gradient-to-l from-black/50 to-transparent absolute right-0 top-0" />
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-black/40 to-transparent" />
      </motion.div>
      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-6 gap-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/proyectos/${p.slug}`}
            onClick={() => localStorage.setItem("xima:lastProjectSlug", p.slug)}
            className="block mx-auto max-w-[300px] w-full"
          >
            <div className="relative w-full aspect-[5/3] rounded-md overflow-hidden shadow-md group">
              <Image
                src={p.imageUrl}
                alt={p.imageAlt}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute top-1 left-1 bg-black/60 text-white text-[10px] font-semibold px-3 py-1 z-10 rounded-sm">
                {p.projectName}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
