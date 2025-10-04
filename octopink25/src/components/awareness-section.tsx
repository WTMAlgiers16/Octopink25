// components/AwarenessSection.tsx
import React from "react";
import Image from "next/image";
import { awarenessData } from "../data/awareness-data";

const AwarenessSection: React.FC = () => {
  const reasons = awarenessData;

  const getImageProps = (index: number) => {
    if (index === 0) {
      return { width: 350, height: 350, sizes: "(min-width:1024px) 350px, 90vw" };
    }
    if (index === 1) {
      return { width: 420, height: 420, sizes: "(min-width:1024px) 420px, 90vw" };
    }
    return { width: 320, height: 320, sizes: "(min-width:1024px) 320px, 90vw" };
  };

  return (
    <section className="bg-white py-10">
      <div className="text-center mb-12">
        <h2 className="font-bold text-pink text-4xl sm:text-4xl lg:text-5xl">
          Why Awareness matters
        </h2>
      </div>

      <div className="relative flex flex-col lg:flex-row items-stretch justify-between bg-pink min-h-[250px]">
        {reasons.map((reason, index) => {
          const imgProps = getImageProps(index);

          return (
            <div key={index} className="relative flex-1 px-6 py-8">
              {/* Text Content */}
              <div className="relative z-20 text-center text-white h-full flex flex-col justify-center">
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
                <div className="absolute inset-0 flex justify-center items-center z-0">
                  <Image
                    src={reason.image.src}
                    alt=""
                    aria-hidden="true"
                    width={imgProps.width}
                    height={imgProps.height}
                    sizes={imgProps.sizes}
                    className={`object-contain pointer-events-none 
                      ${reason.image.mobileClassName ?? ""} 
                      ${reason.image.className ?? ""}`}
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
