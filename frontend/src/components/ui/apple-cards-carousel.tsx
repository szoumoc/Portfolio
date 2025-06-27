"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
  autoScroll?: boolean;
  scrollSpeed?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  body?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ 
  items, 
  initialScroll = 0, 
  autoScroll = true, 
  scrollSpeed = 1 
}: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>();

  // Only duplicate items for infinite scroll if we have enough items
  const duplicatedItems = items.length >= 3 ? [...items, ...items, ...items] : items;

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  useEffect(() => {
    if (!autoScroll || isHovered || items.length < 3) return;

    const animate = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        
        // Reset to beginning when we've scrolled through the first set of items
        if (scrollLeft >= scrollWidth / 3) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += scrollSpeed;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoScroll, scrollSpeed, isHovered, items.length]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ scrollBehavior: autoScroll ? 'auto' : 'smooth' }}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-none",
            )}
          >
            {duplicatedItems.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.1 * (items.length >= 3 ? (index % items.length) : index),
                    ease: "easeOut",
                  },
                }}
                key={`card-${index}`}
                className="flex-shrink-0"
              >
                {React.cloneElement(item, { 
                  key: `cloned-${index}`,
                  ...(item.props || {}),
                  index: items.length >= 3 ? (index % items.length) : index
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
}: {
  card: Card;
  index: number;
}) => {
  return (
    <div className="relative z-10 flex h-80 w-56 flex-col overflow-hidden bg-white rounded-lg shadow-lg md:h-[40rem] md:w-96 dark:bg-neutral-900">
      {/* Image Section */}
      <div className="relative h-3/5 overflow-hidden">
        <BlurImage
          src={card.src}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <p className="text-left font-sans text-sm font-medium text-white md:text-base">
            {card.category}
          </p>
          <p className="mt-1 text-left font-sans text-lg font-semibold text-white md:text-2xl">
            {card.title}
          </p>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex-1 p-4 md:p-6">
        <p className="text-sm text-gray-600 dark:text-gray-300 md:text-base leading-relaxed line-clamp-6">
          {card.body}
        </p>
      </div>
    </div>
  );
};

export const BlurImage = ({
  src,
  className,
  alt,
  ...rest
}: {
  src: string;
  className?: string;
  alt?: string;
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "About section image"}
      {...rest}
    />
  );
};