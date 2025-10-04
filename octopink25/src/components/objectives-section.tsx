import type React from "react";
import Image from "next/image";

import { objectivesData, type ObjectiveItem } from "../data/objectives-data";

/**
 * ObjectivesSection component displays the three main objectives Octopink
 * Features responsive grid layout with icons, titles, and descriptions
 */
export function ObjectivesSection(): React.JSX.Element {
  return (
    <section id="objectives"className="section-wrapper">
      {/* Section Title */}
      <h2 className="section-title section-title-spacing text-center font-bold text-pink animate-fade-in-up">
        Our Objectives
      </h2>

      {/* Objectives Grid */}
      <div className="grid max-w-6xl mx-auto grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-3">
        {objectivesData.map((objective: ObjectiveItem, index: number) => (
          <div key={index} className={`flex flex-col items-center text-center animate-fade-in-up hover-scale stagger-${index + 2}`}>
            {/* Icon Container */}
            <div className="mb-6 flex h-24 lg:h-32 items-end justify-center hover-scale">
              <Image
                src={objective.iconSrc}
                alt={`${objective.title} icon`}
                width={index === 2 ? 80 : 100}
                height={index === 2 ? 80 : 100}
                className="object-contain"
                priority={index === 0}
              />
            </div>

            {/* Title */}
            <h3 className="mb-4 whitespace-nowrap card-title font-bold text-pink">
              {objective.title}
            </h3>

            {/* Description */}
            <p className="max-w-sm whitespace-pre-line text-center body-regular leading-relaxed text-text">
              {objective.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}