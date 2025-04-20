"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Scroll listener to update header appearance
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-estudio-gray text-estudio-black shadow-2xl"
            : "bg-transparent text-white"
        }`}
      >
        {/* Gradient BG (only visible when not scrolled) */}
        {!isScrolled && (
          <div className="absolute inset-0 h-20 bg-gradient-to-b from-black/30 to-transparent pointer-events-none z-[-1]" />
        )}

        {/* Content */}
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/">
            <Image
              src={!isScrolled ? "/img/logo-negative.svg" : "/img/logo.svg"}
              alt="XG"
              width={44}
              height={44}
              className="cursor-pointer transition-opacity duration-300"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/cotizar">
              <button className="uppercase text-sm tracking-wide cursor-pointer hover:text-estudio-orange ">
                Cotiza tu proyecto
              </button>
            </Link>
            {/* Instagram icon */}
            {/* Plus icon */}
            <Link href="/proyectos/salon-de-eventos">
              <Image
                src={!isScrolled ? "/img/plus-negative.svg" : "/img/plus.svg"}
                alt="plus"
                width={28}
                height={28}
                className="cursor-pointer transition-opacity duration-300"
              />
            </Link>
            {/* Menu icon */}
            {/* <button onClick={() => setMenuOpen(true)}>
              <Image
                src={!isScrolled ? "/img/menu-negative.svg" : "/img/menu.svg"}
                alt="menu"
                width={34}
                height={34}
                className="cursor-pointer transition-opacity duration-300"
              />
            </button> */}
          </div>
        </div>
      </header>

      {/* Render MobileMenu */}
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}
