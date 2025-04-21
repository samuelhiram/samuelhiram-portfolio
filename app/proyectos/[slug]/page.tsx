"use client";
import { projects } from "@/app/utils";
import { use, useState, useEffect } from "react";
import ProjectDetail from "./ProjectDetail";
import ProjectDetailDesktop from "./ProjectDetailDesktop";
import BackgroundMesh from "../../components/BackgroundMesh";

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { slug } = use(params); // `use` now infers the right type

  const project = projects.find((p) => p.slug === slug) || projects[0];
  useEffect(() => {
    if (typeof window !== "undefined") {
      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(darkModeQuery.matches);
      darkModeQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
    }
  }, []);

  return (
    <>
      <BackgroundMesh isDark={isDarkMode} />

      {/* Mobile view: hidden on xl and up */}
      <div className="xl:hidden">
        <ProjectDetail project={project} />
      </div>

      {/* Desktop view: hidden below xl */}
      <div className="hidden xl:block">
        <ProjectDetailDesktop project={project} />
      </div>
    </>
  );
}
