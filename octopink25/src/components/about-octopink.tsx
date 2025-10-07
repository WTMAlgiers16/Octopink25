import React from 'react';
import Image from 'next/image';

export default function AboutOctopink() {
  return (
    <section id="about" className="section-wrapper">
      {/* Title */}
      <h2 className="section-title section-title-spacing text-center font-bold text-pink">
        What is Octopink?
      </h2>
      
      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        
        {/* Left Content */}
        <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
          {/* What is Octopink Section */}
          <div className="text-center lg:text-left">
            <p className="text-text leading-relaxed body-large">
              Octopink is an academic and creative initiative 
              designed to bring together curious young minds 
              passionate about science, technology, and 
              health. A space where computer science and 
              medical students explore, innovate, and 
              collaborate.
            </p>
          </div>

          {/* Our Mission Section */}
          <div className="text-center lg:text-left">
            <h3 className="subsection-title font-bold text-pink mb-4">
              Our Mission
            </h3>
            <p className="text-text leading-relaxed body-large">
              To provide a space where students can learn, 
              share, and build projects that have a real 
              impact in the fight against breast cancer.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative aspect-square h-96 order-1 lg:order-2 justify-self-end hidden lg:block">
          <Image
            src='./images/about-octopink-flower.svg'
            alt="Pink decorative flower representing Octopink initiative"
            fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}