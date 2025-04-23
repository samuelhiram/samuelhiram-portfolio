import Image from "next/image";
import { Icon } from "@iconify/react";
export default function Avatar() {
  return (
    <div className="select-none flex-shrink-0 space-y-6 w-[clamp(8rem,25vw,14rem)] h-[clamp(8rem,25vw,14rem)]">
      <div className="relative w-full h-full rounded-full overflow-hidden border dark:border-neutral-700 shadow-md bg-neutral-300 dark:bg-neutral-700">
        <Image
          src="/img/avatar.png"
          alt="Samuel Hiram"
          fill
          className="object-scale-down pointer-events-none select-none" // Cambiado a scale-down
          priority
          draggable={false}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
