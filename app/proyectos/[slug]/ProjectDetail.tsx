"use client";

import {
  DotButton,
  useDotButton,
} from "@/app/components/EmblaCarouselDotButton";
import Navbar from "@/app/components/Navbar";
import ProjectSelectorCarousel from "@/app/components/ProjectSelectorCarousel";
import { Project } from "@/app/utils";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import React, { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProjectDetail({ project }: { project: Project }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "x", loop: true });
  const { selectedIndex, onDotButtonClick, scrollSnaps } =
    useDotButton(emblaApi);

  const images = useMemo(() => {
    return [
      project.image_1Url,
      project.image_2Url,
      project.image_3Url,
      project.image_4Url,
      project.image_5Url,
      project.image_6Url,
    ].filter(Boolean) as string[];
  }, [project]);

  const infoRef = useRef(null);
  const isInView = useInView(infoRef, { once: true, margin: "-50px" });

  const carouselRef = useRef(null);
  const inView = useInView(carouselRef, { once: true, margin: "-100px" });

  const infoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* <Navbar /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-16 min-h-dvh bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 flex flex-col"
      >
        {/* Project info */}
        <div
          ref={infoRef}
          className="text-sm px-6 py-4 sm:px-8 sm:py-6 border-b border-neutral-200 dark:border-neutral-800"
        >
          <div className="flex justify-between flex-wrap gap-y-4 text-sm">
            {[
              { label: "PROYECTO", value: project.projectName },
              { label: "AÑO", value: project.year },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={infoVariants}
              >
                <p className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 font-light">
                  {item.label}
                </p>
                <p className="font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between flex-wrap gap-y-4 mt-4 text-sm">
            {[
              { label: "LUGAR", value: project.location },
              { label: "CATEGORÍA", value: project.category },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                custom={i + 2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={infoVariants}
              >
                <p className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400 font-light">
                  {item.label}
                </p>
                <p className="font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <motion.section
          ref={carouselRef}
          initial={{ opacity: 0.8, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex-1 overflow-hidden"
        >
          <div className="embla h-full" ref={emblaRef}>
            <div className="embla__container flex flex-row h-full">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_100%] relative w-full h-full"
                >
                  <Image
                    src={img}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === selectedIndex}
                onClick={() => onDotButtonClick(index)}
              />
            ))}
          </div>
        </motion.section>

        {/* Carousel selector */}
        <div className="shrink-0 border-t border-neutral-200 dark:border-neutral-800">
          <ProjectSelectorCarousel />
        </div>
      </motion.div>
    </>
  );
}
