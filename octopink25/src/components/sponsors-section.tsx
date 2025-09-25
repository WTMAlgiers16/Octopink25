import type React from "react";
import Image from "next/image";

import { sponsorsData, type SponsorItem } from "../data/sponsors-data";

export function SponsorsSection(): React.JSX.Element {
  return (
    <section className="section-wrapper">
      <h2 className="section-title section-title-spacing text-center font-bold text-pink">
        Our Sponsors
      </h2>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {sponsorsData.map((sponsor: SponsorItem) => (
          <div key={sponsor.id} className="flex items-center justify-center">
            <Image
              src={sponsor.logoSrc}
              alt={sponsor.alt}
              width={240}
              height={240}
              className="object-contain w-full h-auto max-w-[200px] md:max-w-[240px]"
              priority={sponsor.id === 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}