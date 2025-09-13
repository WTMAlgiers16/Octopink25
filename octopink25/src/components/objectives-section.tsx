import type React from "react";
import Image from "next/image";

import { objectivesData, type ObjectiveItem } from "../data/objectives-data";

/**
 * ObjectivesSection component displays the three main objectives of WTM Algiers
 * Features responsive grid layout with icons, titles, and descriptions
 */
export function ObjectivesSection(): React.JSX.Element {
  return (
    <section
      className="px-4 py-24 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--color-white)" }}
    >
      {/* Section Title */}
      <h2 className="mx-auto mb-16 text-center text-4xl font-bold [color:var(--color-pink)] md:text-5xl lg:text-6xl">
        Our Objectives
      </h2>

      {/* Objectives Grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
        {objectivesData.map((objective: ObjectiveItem, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center px-6 text-center"
          >
            {/* Icon Container */}
            <div className="mb-8 flex h-32 items-end justify-center">
              <Image
                src={objective.iconSrc}
                alt={`${objective.title} icon`}
                width={index === 2 ? 100 : 132}
                height={index === 2 ? 100 : 132}
                className="object-contain"
                priority={index === 0}
              />
            </div>

            {/* Title */}
            <h3 className="mb-4 whitespace-nowrap text-2xl font-bold [color:var(--color-pink)] md:text-3xl lg:text-4xl">
              {objective.title}
            </h3>

            {/* Description */}
            <p className="max-w-sm whitespace-pre-line text-center text-lg leading-relaxed [color:var(--color-text)] md:text-xl lg:text-2xl">
              {objective.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
