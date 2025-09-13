import Image from "next/image";
import { objectivesData, ObjectiveItem } from "../data/objectives-data";

export function ObjectivesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Section Title */}
      <h2
        className="mx-auto text-center font-bold [color:var(--color-pink)]"
        style={{
          fontSize: "64px",
          lineHeight: "100%",
        }}
      >
        Our Objectives
      </h2>

      {/* Objectives Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {objectivesData.map((objective: ObjectiveItem, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-6"
          >
            {/* Icon Container */}
            <div className="mb-8 flex justify-center items-end h-32">
              <Image
                src={objective.iconSrc}
                alt={objective.title}
                width={index === 2 ? 100 : 132}
                height={index === 2 ? 100 : 132}
                className="object-contain"
                style={{
                  height: index === 2 ? "100px" : "132px",
                  width: "auto",
                }}
              />
            </div>

            {/* Title */}
            <h3
              className="mb-3 [color:var(--color-pink)] font-bold"
              style={{
                fontSize: "24px",
                lineHeight: "32px",
              }}
            >
              {objective.title}
            </h3>

            {/* Description */}
            <p
              className="[color:var(--color-text)] whitespace-pre-line text-center"
              style={{
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {objective.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
