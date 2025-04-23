// ProjectDetailDesktop.tsx
"use client";
import Navbar from "@/app/components/Navbar";
import ProjectSelectorCarousel from "@/app/components/ProjectSelectorCarousel";
import { Project } from "@/app/utils";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { ChevronRight, Icon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import NameTitle from "@/app/components/NameTitle";
import Link from "next/link";
const STORAGE_KEY = "xima:lastProjectSlide";

export default function ProjectDetailDesktop({
  project,
}: {
  project: Project;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const hasRestored = useRef(false);

  useEffect(() => {
    if (!emblaApi || hasRestored.current) return;

    const savedIndex = Number(localStorage.getItem(STORAGE_KEY));
    if (!isNaN(savedIndex)) {
      emblaApi.scrollTo(savedIndex, false);
    }

    hasRestored.current = true;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      localStorage.setItem(STORAGE_KEY, index.toString());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const images = useMemo(
    () =>
      [
        project.image_1Url,
        project.image_2Url,
        project.image_3Url,
        project.image_4Url,
        project.image_5Url,
        project.image_6Url,
      ].filter(Boolean) as string[],
    [project]
  );

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const infoRef = useRef(null);
  const isInView = useInView(infoRef, { once: true, margin: "-50px" });

  const carouselRef = useRef(null);
  const inView = useInView(carouselRef, { once: true, margin: "-100px" });

  const infoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.0, duration: 0.0, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="h-dvh flex flex-col backdrop-blur-3xl bg-neutral-100/40 dark:bg-neutral-900/10 text-neutral-900 dark:text-neutral-100 overflow-hidden">
        <div className="flex-1 grid grid-cols-[400px_1fr] ">
          <div
            ref={infoRef}
            className="flex flex-col justify-center px-8 text-estudio-black text-lg uppercase gap-6"
          >
            <Link href="/" className="flex items-center gap-2">
              <NameTitle />
            </Link>
            {["PROYECTO", "AÑO", "LUGAR", "CATEGORÍA"].map((label, i) => {
              const value =
                label === "PROYECTO"
                  ? project.projectName
                  : label === "AÑO"
                  ? project.year
                  : label === "LUGAR"
                  ? project.location
                  : project.category;

              return (
                <motion.div
                  key={label}
                  custom={i}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={infoVariants}
                >
                  <p className="font-light">{label}</p>
                  <p className="font-semibold">{value}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0.8, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="overflow-hidden relative group xl:rounded-bl-xs shadow-sm"
          >
            <div className="pointer-events-none w-10 h-full absolute left-0 top-0 bg-gradient-to-r from-black/30 via-black/5 to-transparent z-10" />

            <div ref={emblaRef} className="embla overflow-hidden h-full">
              <div className="flex embla__container h-full">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="embla__slide relative h-full flex-[0_0_auto] w-auto aspect-[4/3] overflow-hidden"
                  >
                    <div className="relative h-full w-auto">
                      <Image
                        src={img}
                        alt={`Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={scrollNext}
                whileTap={{ scale: 0.9 }}
                whileHover={{ x: 4 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 text-black cursor-pointer"
              >
                <ChevronRight className="w-10 h-10 text-estudio-gray" />
              </motion.button>

              <div className="w-12 h-full bg-gradient-to-l from-black/60 to-transparent absolute right-0 top-0" />
            </div>
          </motion.div>
        </div>

        <div className="shrink-0 m-2  bg-estudio-gray">
          <ProjectSelectorCarousel />
        </div>

        {/* <footer className="flex justify-between items-center text-[10px] px-8 py-4 text-estudio-black bg-white">
          <p>
            <a
              href="https://instagram.com/ximaestudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              INSTAGRAM ↗
            </a>
          </p>
          <p className="text-[9px]">All rights reserved ©XIMAESTUDIO</p>
        </footer> */}
      </div>
    </>
  );
}
