"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type HoverBorderGradientProps = {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
  clockwise?: boolean;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLElement>;

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  onClick,
  ...props
}: HoverBorderGradientProps) => {
  const [hovered, setHovered] = useState(false);

  const direction = clockwise ? "" : "reverse";

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={cn(
        "relative flex rounded-xl border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>

      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: "transparent" }}
        animate={{
          background: hovered
            ? [
                "conic-gradient(from 0deg, #0066CC, #4A90E2, #10B981, #0066CC)",
                "conic-gradient(from 360deg, #0066CC, #4A90E2, #10B981, #0066CC)",
              ]
            : "transparent",
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          direction: direction as any,
        }}
      />
    </Tag>
  );
};
