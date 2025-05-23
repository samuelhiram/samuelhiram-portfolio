"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import NameTitle from "./NameTitle";
import { Icon } from "@iconify/react";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkBaseStyle =
    "text-sm uppercase transition-colors duration-300 hover:text-neutral-900 dark:hover:text-white";

  return (
    <>
      <header
        className="
          fixed top-0 w-full z-50
          bg-transparent dark:bg-transparent
          backdrop-blur-2xl
          text-white dark:text-white
          transition-all duration-300
        "
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <NameTitle
              mainColor="text-neutral-900 dark:text-white"
              secondaryColor="text-neutral-700 dark:text-neutral-300"
            />
          </Link>
          <div className="hidden text-neutral-900 dark:text-white md:flex items-center gap-6">
            <Link href="/contact" className={linkBaseStyle}>
              <span className="text-md">CONTACTO</span>
            </Link>
            <Link href="/proyectos/salon-de-eventos">
              <span className="text-md">PROYECTOS</span>
            </Link>
          </div>
          <button onClick={() => setMenuOpen(true)} className="md:hidden p-2">
            {/* <span className="text-black">+</span> */}
            <Icon
              icon="gg:menu-left"
              className="text-neutral-900 dark:text-white"
              width="32"
              height="32"
            />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
