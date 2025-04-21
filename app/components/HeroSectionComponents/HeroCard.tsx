import Avatar from "./Avatar";
import HeroContent from "./HeroContent";
import AccentBehindAvatar from "./AccentBehindAvatar"; // este será el fondo animado o difuminado

export default function HeroCard() {
  return (
    <div className="relative z-10 w-full md:max-w-[75vw] 2xl:max-w-[55vw] sm:max-w-[90vw]">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 2xl:gap-18 backdrop-blur-3xl bg-neutral-200/60 dark:bg-neutral-800/60 shadow-xl border border-neutral-300 dark:border-neutral-700 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300">
        {/* Avatar con fondo/acento */}
        <div className="relative w-[clamp(8rem,25vw,12rem)] h-[clamp(8rem,25vw,12rem)] shrink-0">
          <AccentBehindAvatar />
          <Avatar />
        </div>

        {/* Contenido */}
        <div className="flex-1 w-full flex flex-col gap-4 text-left">
          <HeroContent />
        </div>
      </div>
    </div>
  );
}
