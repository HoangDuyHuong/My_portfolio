"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}
const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.8,
  delay = 0,
  yOffset = 50,
  inView = false,
  inViewMargin = "-50px",
  blur = "12px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, {
    once: true,
    ...(inViewMargin ? { margin: inViewMargin as any } : {})
  });
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})`, scale: 0.8 },
    visible: { y: 0, opacity: 1, filter: `blur(0px)`, scale: 1 },
  };
  const combinedVariants = variant || defaultVariants;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: 0.1 + delay,
        duration,
        ease: [0.16, 1, 0.3, 1],
        opacity: { duration: duration * 0.9 },
        scale: { duration: duration * 1.2 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
