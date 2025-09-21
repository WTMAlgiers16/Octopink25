import type React from "react";
import Image from "next/image";

import {
  getBreastCancerData,
  type BenefitItem,
} from "@/data/breast-cancer-data";

export function BreastCancerSection(): React.JSX.Element {
  const data = getBreastCancerData();

  return (
    <section className="text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 bg-white">
      <div className="flex flex-col items-center w-full max-w-[1200px]">
        {/* Title + Subtitle */}
        <div className="w-[944px] max-w-full mb-12 text-center">
          <h1 className="font-bold text-[clamp(40px,5vw,64px)] leading-[1.1] mb-4 whitespace-nowrap text-pink">
            {data.title}
          </h1>
          <p className="mx-auto text-[32px] leading-[1.4] text-text max-w-[739px]">
            {data.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col lg:flex-row gap-[34px] items-stretch">
          {/* Left Column */}
          <div className="w-full lg:w-[774px] aspect-[774/629] flex flex-col justify-between gap-[34px]">
            {/* How it works */}
            <div>
              <h2 className="font-bold text-[40px] leading-[1.2] mb-4 text-pink">
                {data.howItWorksTitle}
              </h2>
              <p className="text-[32px] leading-[1.4] text-justify text-text">
                {data.howItWorksDescription}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-bold text-[40px] leading-[1.2] mb-4 text-pink">
                {data.benefitsTitle}
              </h3>
              <ul className="list-disc list-inside space-y-3 text-[32px] leading-[1.4] text-text">
                {data.benefits.map((benefit: BenefitItem, index: number) => (
                  <li key={index}>{benefit.text}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full lg:w-[425px] aspect-[425/637]">
            <Image
              src={data.heroImageSrc}
              alt={data.heroImageAlt}
              width={425}
              height={637}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
