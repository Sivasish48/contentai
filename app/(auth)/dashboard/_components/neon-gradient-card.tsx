"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../../../lib/utils";

interface NeonGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: {
    firstColor: string;
    secondColor: string;
  };
}

const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  className = "",
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        "--border-size": `${borderSize}px`,
        "--border-radius": `${borderRadius}px`,
        "--neon-first-color": neonColors.firstColor,
        "--neon-second-color": neonColors.secondColor,
        "--card-width": `${dimensions.width}px`,
        "--card-height": `${dimensions.height}px`,
        "--card-content-radius": `${borderRadius - borderSize}px`,
        "--pseudo-element-background-image": `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
        "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
        "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
        "--after-blur": `${dimensions.width / 3}px`,
      } as React.CSSProperties} // Explicitly typecasting for CSS variables
      className={cn("relative z-10 size-full overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn(
          "relative size-full min-h-[inherit] bg-black p-6",
          "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
          "before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']",
          "before:bg-[var(--pseudo-element-background-image)] before:bg-[length:100%_200%]",
          "before:animate-background-position-spin",
          "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
          "after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']",
          "after:bg-[var(--pseudo-element-background-image)] after:bg-[length:100%_200%] after:opacity-80",
          "after:animate-background-position-spin",
          "dark:bg-neutral-900"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export { NeonGradientCard };
