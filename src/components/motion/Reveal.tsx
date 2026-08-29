"use client";

import { motion, useMotionValue, useSpring, type Variants } from "motion/react";
import { type ReactNode, type PointerEvent, useRef } from "react";

/* =========================================================
   TYPES
========================================================= */
export type RevealVariant =
  | "fadeUp"
  | "maskUp"
  | "clipCircle"
  | "bounce"
  | "zoomIn"
  | "flipUp"
  | "scaleIn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  once?: boolean;
  amount?: number | "some" | "all";
};

/* =========================================================
   VARIANT DEFINITIONS
========================================================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const maskUp: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)", y: 24, opacity: 0 },
  show: {
    clipPath: "inset(0% 0 0 0)",
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const clipCircle: Variants = {
  hidden: { clipPath: "circle(0% at 50% 50%)", scale: 0.8, opacity: 0 },
  show: {
    clipPath: "circle(120% at 50% 50%)",
    scale: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const bounce: Variants = {
  hidden: { opacity: 0, y: 70, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 160, damping: 11, mass: 0.7 },
  },
};

const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 14 },
  },
};

const flipUp: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: 70 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 140, damping: 15 },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, filter: "blur(6px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const variantMap: Record<RevealVariant, Variants> = {
  fadeUp,
  maskUp,
  clipCircle,
  bounce,
  zoomIn,
  flipUp,
  scaleIn,
};

/* =========================================================
   REVEAL
========================================================= */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fadeUp",
  once = true,
  amount = "some",
}: RevealProps) {
  const variants = variantMap[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -40px 0px", amount }}
      variants={variants}
      transition={{ delay }}
      whileTap={{
        scale: 0.99,
        transition: { type: "spring", stiffness: 500, damping: 30 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   STAGGER GROUP
========================================================= */
type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  variant?: RevealVariant;
  once?: boolean;
};

export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.12,
  variant = "fadeUp",
  once = true,
}: StaggerGroupProps) {
  const variants = variantMap[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -40px 0px", amount: "some" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   STAGGER ITEM
========================================================= */
type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
};

export function StaggerItem({
  children,
  className,
  variant = "fadeUp",
}: StaggerItemProps) {
  return (
    <motion.div
      variants={variantMap[variant]}
      whileTap={{
        scale: 0.98,
        transition: { type: "spring", stiffness: 500, damping: 30 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   MAGNETIC — elemen yang mengikuti cursor dengan spring
========================================================= */
type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({
  children,
  className,
  strength = 0.35,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handlePointerMove = (e: PointerEvent) => {
    // Hanya aktif untuk pointer mouse (desktop).
    // Di perangkat sentuh (touch) tidak ada hover/magnetic.
    if (e.pointerType !== "mouse") return;

    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handleReset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handleReset}
      className={className}
    >
      {children}
    </motion.div>
  );
}