// components/awareness-section.tsx
import type React from "react";
import Image from "next/image";
import { awarenessData } from "../data/awareness-data";

/**
 * AwarenessSection displays breast cancer awareness statistics
 * Shows global context, Algerian context, and survival rates with early screening
 */
const AwarenessSection: React.FC = () => {
  const reasons = awarenessData;

  return (
    <section id="awareness" className="bg-white section-spacing-small">
      {/* Title - fades in first */}
      <div className="text-center section-title-spacing">
        <h2 className="font-bold text-pink section-title animate-fade-in-up">
          Why Awareness matters
        </h2>
      </div>

      {/* Statistics Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-pink">
        {reasons.map((reason, index) => {
          return (
            <div 
              key={index} 
              className={`relative hover-scale animate-fade-in-up stagger-${index + 2}`}
            >
              {/* Text Content */}
              <div className="relative z-20 text-center text-white py-10">
                <h3 className="subsection-title font-bold mb-6">
                  {reason.title}
                </h3>

                <p className="hero-title-large font-bold leading-[0.7]">
                  {reason.mainText} <br />
                  {reason.subText}
                </p>

                <p className="card-title leading-none mt-2 whitespace-pre-line">
                  {reason.description}
                </p>
              </div>

              {/* Background Image - fades in behind text */}
              {reason.image && (
                <div className={`absolute inset-0 z-0 mt-6 hidden lg:block animate-fade-in stagger-${index + 3}`}>
                  <Image
                    src={reason.image}
                    alt=""
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