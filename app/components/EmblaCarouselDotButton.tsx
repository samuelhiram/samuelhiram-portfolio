import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (emblaApi) {
        const plugins = emblaApi.plugins();
        if (plugins) {
          const autoplay = plugins.autoplay;
          if (autoplay && typeof autoplay.stop === "function") {
            autoplay.stop();
          }
        }
      }
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;
export const DotButton: React.FC<
  PropType & { selected: boolean; color?: string }
> = ({ selected, color = "#ffffff", children, ...restProps }) => {
  const style = selected
    ? {
        backgroundColor: color,
        borderColor: color,
      }
    : {
        borderColor: color,
        backgroundColor: "transparent",
      };

  return (
    <button
      type="button"
      className={`
      w-3 h-3 m-1 rounded-full border transition-all duration-300
      ${
        selected
          ? "bg-neutral-800 dark:bg-neutral-200 border-neutral-800 dark:border-neutral-200 scale-125"
          : "bg-transparent border-neutral-400 dark:border-neutral-600 opacity-70 hover:opacity-100"
      }
    `}
      {...restProps}
    >
      {children}
    </button>
  );
};
