import type React from "react";
import Image from "next/image";
import {
  getBreastCancerData,
  type BenefitItem,
} from "@/data/breast-cancer-data";

export function AIDetectionSection(): React.JSX.Element {
  const data = getBreastCancerData();

  return (
    <section className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 bg-white text-text">
      <div className="flex flex-col items-center w-full max-w-7xl">
        {/* Header Section */}
        <div className="w-full max-w-4xl mb-10 text-center">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-pink mb-4 leading-tight">
            {data.title}
          </h1>
          <p className="mx-auto text-lg sm:text-xl lg:text-3xl text-text font-normal leading-relaxed max-w-3xl">
            {data.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row w-full justify-center items-stretch gap-8 lg:gap-12 xl:gap-20">
          {/* Text Content */}
          <div className="w-full lg:max-w-4xl flex flex-col">
            {/* How it works section */}
            <div className="mb-6">
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-pink mb-4">
                {data.howItWorksTitle}
              </h2>
              <p className="text-lg sm:text-xl lg:text-3xl leading-relaxed text-left w-full">
                {data.howItWorksDescription}
              </p>
            </div>

            {/* Benefits section */}
            <div>
              <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-pink mb-4">
                {data.benefitsTitle}
              </h3>
              <ul className="w-full max-w-3xl">
                {data.benefits.map((benefit: BenefitItem, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 text-lg sm:text-xl lg:text-3xl leading-relaxed text-text mb-3 sm:mb-4"
                  >
                    <span className="w-2 h-2 bg-text rounded-full flex-shrink-0 mt-2 sm:mt-4 opacity-80"></span>
                    <span className="flex-1 text-left">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full lg:w-96 flex justify-center lg:justify-start items-stretch">
            <div className="relative w-full lg:w-96 aspect-[3/4]">
              <Image
                src={data.heroImageSrc}
                alt={data.heroImageAlt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 384px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
