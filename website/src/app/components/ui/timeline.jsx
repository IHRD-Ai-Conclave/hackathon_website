"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-5xl mx-auto pb-16">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-12 md:pt-24 md:gap-6">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-3 w-8 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-[#66CC33] dark:bg-[#003399] border border-neutral-300 dark:border-neutral-700" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-16 md:text-2xl font-semibold text-[#003399] dark:text-[#66CC33]">
                {item.title}
              </h3>
            </div>

            <div className="flex flex-col items-baseline relative pl-12 pr-4 md:pl-4 w-full">
              <h3 className="text-lg md:text-2xl md:hidden block mb-3 text-left font-semibold text-[#003399] dark:text-[#66CC33]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-6 left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#003399] via-[#66CC33] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
