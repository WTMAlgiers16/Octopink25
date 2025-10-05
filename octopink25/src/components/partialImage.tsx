'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
/**
 * PartialImage Component
 *
 * Renders an image with part of it hidden from a given side.
 *
 * - Accepts a percentage (`hiddenPercent`) to determine how much of the image to hide.
 * - Dynamically calculates the hidden portion based on the chosen side.
 * - Applies negative margins using CSS custom properties and Tailwind for consistency.
 * - If `width` and `height` are not provided, it uses Next.js Image `fill` mode.
 * - `"use client"` is required since the component relies on `useState` and `useEffect`.
 */


type PartialImageProps = {
  src: string;
  alt?: string;
  className?: string;
  hiddenPercent?: number; // percentage of image to hide 
  side?: "left" | "right" | "top" | "bottom"; // side to hide (default right)
  width?: number; // optional width for Next.js Image
  height?: number; // optional height for Next.js Image
  fill?: boolean; // use fill mode instead of width/height
};

export default function PartialImage({
  src,
  alt = "",
  className,
  hiddenPercent = 25,
  side = "right",
  width,
  height,
  fill = false,
}: PartialImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [margin, setMargin] = useState(0);

  // Determine if we should use fill mode
  const useFill = fill || (!width && !height);

  useEffect(() => {
    const updateMargin = () => {
      if (containerRef.current) {
        // Use the appropriate dimension based on the side
        const dimension = side === "left" || side === "right" 
          ? containerRef.current.offsetWidth 
          : containerRef.current.offsetHeight;
        setMargin((dimension * hiddenPercent) / 100);
      }
    };

    updateMargin();
    window.addEventListener("resize", updateMargin);

    return () => {
      window.removeEventListener("resize", updateMargin);
    };
  }, [hiddenPercent, side]);

  return (
    
<div
  ref={containerRef}
  className={`
    ${className || ""} 
    ${useFill ? "relative" : ""}
    ${side === "right" ? "mr-[var(--margin-value)]" : ""}
    ${side === "left" ? "ml-[var(--margin-value)]" : ""}
    ${side === "top" ? "mt-[var(--margin-value)]" : ""}
    ${side === "bottom" ? "mb-[var(--margin-value)]" : ""}
  `}
  style={{ "--margin-value": `-${margin}px` } as React.CSSProperties}
>



      {useFill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="w-full h-full object-contain"
         
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width!}
          height={height!}
          className="w-full h-full object-contain"
          
        />
      )}
    </div>
  );
}