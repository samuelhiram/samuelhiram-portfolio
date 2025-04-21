import Avatar from "./Avatar";
import HeroContent from "./HeroContent";

export default function HeroCard() {
  return (
    <div className="relative z-10 w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[min(60vw,80rem)]">
      <div className="backdrop-blur-3xl bg-neutral-200/60 dark:bg-neutral-800/60 shadow-xl border border-neutral-300 dark:border-neutral-700 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-8 transition-all duration-300">
        <Avatar />
        <HeroContent />
      </div>
    </div>
  );
}
