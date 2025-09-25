import type React from "react";
import Image from "next/image";
import {
  getBreastCancerData,
  type BenefitItem,
} from "@/data/breast-cancer-data";

export function AIDetectionSection(): React.JSX.Element {
  const data = getBreastCancerData();

  return (
    <section className="section-wrapper">
      {/* Header Section */}
      <div className="text-center section-title-spacing">
        <h1 className="font-bold section-title text-pink mb-4 leading-tight">
          {data.title}
        </h1>
        <p className="mx-auto body-large text-text font-normal leading-relaxed max-w-3xl">
          {data.subtitle}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        
        {/* Text Content */}
        <div className="space-y-6 order-2 lg:order-1">
          {/* How it works section */}
          <div className="text-center lg:text-left">
            <h2 className="font-bold subsection-title leading-tight text-pink mb-4">
              {data.howItWorksTitle}
            </h2>
            <p className="body-large leading-relaxed md:text-left text-center text-text w-full">
              {data.howItWorksDescription}
            </p>
          </div>

          {/* Benefits section */}
          <div className="text-center lg:text-left">
            <h3 className="font-bold subsection-title leading-tight text-pink mb-4">
              {data.benefitsTitle}
            </h3>
            <ul className="w-full max-w-3xl">
              {data.benefits.map((benefit: BenefitItem, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 body-regular leading-relaxed text-text mb-3 sm:mb-4"
                >
                  <span className="w-2 h-2 bg-text rounded-full flex-shrink-0 mt-2 sm:mt-4 opacity-80"></span>
                  <span className="flex-1 text-left body-large">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative aspect-[3/4] order-1 lg:order-2 justify-self-end">
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
    </section>
  );
}