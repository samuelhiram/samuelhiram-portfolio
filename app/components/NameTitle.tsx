interface NameTitleProps {
  mainColor?: `text-${string}`;
  secondaryColor?: `text-${string}`;
  showSubtitle?: boolean;
}

const textSizeClasses = `
    text-[5vw] xs:text-[4vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw]
    min-[320px]:text-2xl min-[500px]:text-3xl
    max-text-size:72px
    leading-none
  `;

export default function NameTitle({
  mainColor = "text-gray-50",
  secondaryColor = "text-gray-200/50",
  showSubtitle = true,
}: NameTitleProps) {
  return (
    <div className="flex  backdrop-blur-3xl flex-col  w-full justify-start items-center">
      <h1 className="flex flex-row flex-wrap items-baseline w-full overflow-hidden ">
        <span
          className={`font-bold tracking-tighter ${textSizeClasses} ${mainColor}`}
        >
          samuel
        </span>
        <span
          className={`font-thin tracking-tighter ${textSizeClasses} ${secondaryColor}`}
        >
          hiram
        </span>
      </h1>
      {showSubtitle && (
        <h6 className="text-xs flex justify-start mt-1 text-gray-400">
          {" "}
          Desarrollador Web Fullstack
        </h6>
      )}
    </div>
  );
}
