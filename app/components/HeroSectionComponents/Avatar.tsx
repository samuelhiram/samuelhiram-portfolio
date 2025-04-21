import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex-shrink-0 w-[clamp(8rem,25vw,14rem)] h-[clamp(8rem,25vw,14rem)]">
      <div className="relative w-full h-full rounded-full overflow-hidden border dark:border-neutral-700 shadow-md bg-neutral-300 dark:bg-neutral-700">
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAYFBMVEUiLTqzusC4v8UfKjgbJzUXJDIRHy8TITAMHCwdKTZyeYEqNUGPlp0tN0OSmaADGCmgp65ETVdnbnd/ho2FjJSss7k1P0p6gYlOVmBZYWo/SFOYn6ZTW2SmrbNgaHEAFSi5l+RRAAACp0lEQVRoge2Ya6+iMBCGoVcKlBak4BE5/v9/ufWyR1ehU9q6yW58Y6Lxw8ObYTqdmSz76KOPPvpvhSln3H4oTk5mvO12ddPUu66lTCREi+LQG/Qj0x+KZPaLdkIofxBCzYElQWM1/om+4kuVgp3pF/QFP5Ho0OBsXmRbuo6m02XfVzqPY6t+lW3pfVTcydHBtvQ9iYDT2cXO85lGGP92GrfWv8KtK+1m57kOjroYAOPWehWajrSE4V1o1IsahtdFKBzIlbPmUHhmYLgJROMKZud54Bv1g8vAdKk8whIMJ2+MeVaABzQiW5ir3l4Vnue0g+Fl6AnFHrVlCL7qTuARNadQNly50Bh+W8DHKDTLzwLyBfUxfRfO3MaDr4qrdVfUURnZuBTTelM0Bdfym1zvVEa36WJYYw8xHdFN9LDMbiMaoruIfG100SwT+D5L8PF5shh5urGIDTX6zbc/6kRDy01YybIxFpybpqxUymnugqcMy2GQmKUfRK8PEOI94H9YGGNBiLBfabmCMo6rod1btUOFOaNpjpCgKtuXtX6c/XVdHjNFIxPS5p8spxw9z+fnP3QpY7JSFFWnX+f++xN0VxVh9nEh+xy6/fNehmxH+NCvm3603w9bCw1RJeT67n7cFhvWGk/0BW/aDeYVPCM+4b1XO5g3G9nnTsDv9lhbDQF0nXnQBV1bDQF0Q2C6YzUE0GdwLaW2x/uHPgFv1dkbgvTR2d+RNoJt6a2rElOfsdYh44DzmKBcrI+rRxVq9X3oq+MA30Uat/DdqvVo41bZsnWPgRnW2tLr5LFHgKUXx14sExi31hdHU5IiKmtx8Vj0ecEXlyTcY9Hno6Xlsd+6zEcLQfdYrvgJHV4vDRxXEB/gx9fqBSz5N8AXdurkKxX8+53w7u84/wXMmCAN/gi2wwAAAABJRU5ErkJggg=="
          alt="Samuel Hiram"
          fill
          className="object-cover pointer-events-none select-none"
          priority
          draggable={false}
          sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 220px"
        />
      </div>
    </div>
  );
}
