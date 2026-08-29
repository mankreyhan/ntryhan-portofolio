"use client";

import { motion, type Variants } from "motion/react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  as = "h2",
}: AnimatedTextProps) {
  const words = text.split(" ");

  const Tag = motion[as];

  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -40px 0px", amount: "some" }}
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
      className={className}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block whitespace-pre"
          aria-hidden="true"
        >
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}