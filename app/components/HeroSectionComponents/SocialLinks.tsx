import React from "react";
import { Icon } from "@iconify/react";
export default function SocialLinks() {
  return (
    <nav
      className="flex justify-center md:justify-start gap-6"
      aria-label="Social links"
    >
      <a
        href="https://github.com/samuelhiram"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
        aria-label="GitHub"
      >
        <Icon icon="mdi:github" width={32} height={32} />
      </a>
      <a
        href="https://mx.linkedin.com/in/samuel-hiram-castro-martinez-708982253"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
        aria-label="LinkedIn"
      >
        <Icon icon="mdi:linkedin" width={32} height={32} />
      </a>
    </nav>
  );
}
