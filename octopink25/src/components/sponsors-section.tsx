import type React from "react";
import Image from "next/image";

import { sponsorsData, type SponsorItem } from "../data/sponsors-data";

/**
 * SponsorsSection component displays sponsors' logos
 * Responsive with Tailwind grid and text classes
 */
export function SponsorsSection(): React.JSX.Element {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
      {/* Section Title */}
      <h2 className="mx-auto mb-12 text-center font-bold text-pink text-4xl sm:text-5xl lg:text-6xl">
        Our Sponsors
      </h2>

      {/* Sponsors Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
        {sponsorsData.map((sponsor: SponsorItem) => (
          <div key={sponsor.id} className="flex items-center justify-center">
            <Image
              src={sponsor.logoSrc}
              alt={sponsor.alt}
              width={300}
              height={300}
              className="object-contain w-full h-auto max-w-xs md:max-w-sm"
              priority={sponsor.id === 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
