// components/AwarenessSection.tsx
import React from "react";
import Image from "next/image";
import { awarenessData } from "../data/awareness-data";

const AwarenessSection: React.FC = () => {
  const reasons = awarenessData;

  return (
    <section className="bg-white py-10">
      <div className="text-center mb-12">
        <h2 className="font-bold text-pink text-4xl sm:text-4xl lg:text-5xl">
          Why Awareness matters
        </h2>
      </div>

      <div className="grid grid-rows-3 gap-2 lg:gap-0 lg:grid-cols-3 lg:grid-rows-1 bg-pink ">
        {reasons.map((reason, index) => {
          return (
            <div key={index} className="relative">
              {/* Text Content */}
              <div className="relative z-20 text-center text-white py-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{reason.title}</h3>

                <p className="text-3xl md:text-4xl font-bold leading-[0.7]">
                  {reason.mainText} <br />
                  {reason.subText}
                </p>

                <p className="text-xl md:text-2xl leading-none mt-2 whitespace-pre-line">
                  {reason.description}
                </p>
              </div>

              {reason.image && (
                <div className="absolute inset-0 z-0 mt-6 hidden lg:block">
                  <Image
                    src={reason.image}
                    alt="decorative background"
                    aria-hidden="true"
                    fill
                    className="object-contain pointer-events-none"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AwarenessSection;
