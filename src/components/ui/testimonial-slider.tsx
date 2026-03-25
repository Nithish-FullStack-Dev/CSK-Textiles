import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  username: string;
  avatar: string;
}
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "CSK Textiles has been my go-to for suiting fabrics for over 10 years. Their collection and expertise in men's formal wear is unmatched in Hyderabad.",
    name: "Rajesh Mehta",
    username: "Corporate Executive",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Rajesh%20Mehta",
  },
  {
    id: 2,
    quote:
      "Found the perfect fabric for my wedding sherwani here. The quality and craftsmanship recommendations made my special day even more memorable.",
    name: "Arjun Reddy",
    username: "Groom",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Arjun%20Reddy",
  },
  {
    id: 3,
    quote:
      "Exceptional collection of premium fabrics. Whether it's executive suits or wedding attire, CSK Textiles delivers quality that speaks for itself.",
    name: "Vikram Singh",
    username: "Business Owner",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Vikram%20Singh",
  },
  {
    id: 4,
    quote:
      "The heritage of 25+ years shows in every fabric. Traditional values meet modern styles. Highly recommend for quality tailoring.",
    name: "Anil Kumar",
    username: "Fashion Enthusiast",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Anil%20Kumar",
  },
  {
    id: 5,
    quote:
      "Amazing variety of shirting fabrics. The staff helped me choose perfect materials for daily office wear.",
    name: "Karthik Sharma",
    username: "Software Engineer",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Karthik%20Sharma",
  },
  {
    id: 6,
    quote:
      "Premium fabrics at great value. My suits have never looked better thanks to CSK Textiles.",
    name: "Rahul Verma",
    username: "Entrepreneur",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Rahul%20Verma",
  },
  {
    id: 7,
    quote:
      "Excellent customer service and deep knowledge of fabrics. Helped me build a complete wardrobe.",
    name: "Sandeep Gupta",
    username: "Consultant",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Sandeep%20Gupta",
  },
  {
    id: 8,
    quote:
      "The wedding collection is outstanding. Got multiple compliments for my outfits.",
    name: "Manoj Patel",
    username: "Groom",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Manoj%20Patel",
  },
  {
    id: 9,
    quote:
      "Top-notch quality and a wide selection. Perfect place for anyone serious about style.",
    name: "Amit Joshi",
    username: "Marketing Head",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Amit%20Joshi",
  },
  {
    id: 10,
    quote:
      "From casual shirts to premium suits, everything here reflects craftsmanship and elegance.",
    name: "Naveen Reddy",
    username: "Startup Founder",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Naveen%20Reddy",
  },
];

const getVisibleCount = (width: number): number => {
  if (width >= 1280) return 3;
  if (width >= 768) return 2;
  return 1;
};

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      const oldVisibleCount = getVisibleCount(windowWidth);
      const newVisibleCount = getVisibleCount(newWidth);

      if (oldVisibleCount !== newVisibleCount) {
        const maxIndexForNewWidth = testimonials.length - newVisibleCount;
        if (currentIndex > maxIndexForNewWidth) {
          setCurrentIndex(Math.max(0, maxIndexForNewWidth));
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        const visibleCount = getVisibleCount(windowWidth);
        const maxIndex = testimonials.length - visibleCount;

        if (currentIndex >= maxIndex) {
          setDirection(-1);
          setCurrentIndex((prev) => prev - 1);
        } else if (currentIndex <= 0) {
          setDirection(1);
          setCurrentIndex((prev) => prev + 1);
        } else {
          setCurrentIndex((prev) => prev + direction);
        }
      }, 4000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, windowWidth, direction]);

  const visibleCount = getVisibleCount(windowWidth);
  const maxIndex = testimonials.length - visibleCount;
  const canGoNext = currentIndex < maxIndex;
  const canGoPrev = currentIndex > 0;

  const goNext = () => {
    if (canGoNext) {
      setDirection(1);
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
      pauseAutoPlay();
    }
  };

  const goPrev = () => {
    if (canGoPrev) {
      setDirection(-1);
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
      pauseAutoPlay();
    }
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleDragEnd = (event: any, info: any) => {
    const { offset } = info;
    const swipeThreshold = 30;

    if (offset.x < -swipeThreshold && canGoNext) {
      goNext();
    } else if (offset.x > swipeThreshold && canGoPrev) {
      goPrev();
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  return (
    <div className="px-4 py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-foreground font-medium text-xs sm:text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-foreground mt-4 px-4">
            Transformative Style Experiences
          </h3>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mt-6"></div>
        </motion.div>

        <div className="relative" ref={containerRef}>
          <div className="flex justify-center sm:justify-end sm:absolute sm:-top-16 right-0 space-x-2 mb-4 sm:mb-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goPrev}
              disabled={!canGoPrev}
              className={`p-2 rounded-full ${
                canGoPrev
                  ? "bg-white shadow-md hover:bg-gray-50 text-primary"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              } transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={goNext}
              disabled={!canGoNext}
              className={`p-2 rounded-full ${
                canGoNext
                  ? "bg-white shadow-md hover:bg-gray-50 text-primary"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              } transition-all duration-300 dark:bg-gray-800 dark:hover:bg-gray-700`}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="overflow-hidden relative w-full">
            <motion.div
              className="flex"
              animate={{
                x: `-${currentIndex * 100}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
              }}
            >
              {testimonials.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-1/2 xl:w-1/3 p-2"
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98, cursor: "grabbing" }}
                  style={{ cursor: "grab" }}
                >
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 h-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl"
                    whileHover={{
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    <div className="absolute -top-4 -left-4 opacity-5 dark:opacity-10">
                      <Quote
                        size={windowWidth < 640 ? 40 : 80}
                        className="text-primary"
                      />
                    </div>

                    <div className="relative z-10 h-full flex flex-col">
                      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium mb-6 leading-relaxed italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-center">
                          <div className="relative flex-shrink-0">
                            <img
                              width={48}
                              height={48}
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src =
                                  "https://ui-avatars.com/api/?name=" +
                                  testimonial.name;
                              }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-full bg-primary/20"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0, 0.3, 0],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-bold text-base text-gray-900 dark:text-white">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              {testimonial.username}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8">
            {Array.from(
              { length: testimonials.length - visibleCount + 1 },
              (_: any, index: any) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative mx-1 focus:outline-none p-2"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-primary"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/30 m-1"
                      animate={{
                        scale: [1, 1.8],
                        opacity: [1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                  )}
                </motion.button>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
