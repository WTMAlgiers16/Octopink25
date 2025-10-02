'use client';
import { useState, useEffect, useRef } from "react";

type PartialImageProps = {
  src: string;
  alt?: string;
  className?: string;
  hiddenPercent?: number; // percentage of image to hide (default 25%)
  side?: "left" | "right" |"top" |"bottom"; // side to hide (default right)
};

export default function PartialImage({
  src,
  alt = "",
  className,
  hiddenPercent = 25,
  side = "right",
}: PartialImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [margin, setMargin] = useState(0);

  useEffect(() => {
    const updateMargin = () => {
      if (imgRef.current) {
        const width = imgRef.current.offsetWidth;
        setMargin((width * hiddenPercent) / 100);
      }
    };

    updateMargin();
    window.addEventListener("resize", updateMargin);

    return () => {
      window.removeEventListener("resize", updateMargin);
    };
  }, [hiddenPercent]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className || ""}
      style={{
        marginRight: side === "right" ? `-${margin}px` : undefined,
        marginLeft: side === "left" ? `-${margin}px` : undefined,
        marginTop: side === "top" ? `-${margin}px` : undefined,
        marginBottom: side === "bottom" ? `-${margin}px` : undefined,
      }}
    />
  );
}
