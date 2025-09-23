import React from 'react';
import Image from 'next/image';
import flower from '../../public/images/about-octopink-flower.svg';

export default function AboutOctopink() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title with responsive sizing */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold text-pink mb-8 lg:mb-12">
          What is Octopink?
        </h2>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* What is Octopink Section */}
            <div className="text-center md:text-center lg:text-left">
              <p className="text-text leading-relaxed text-base sm:text-lg lg:text-xl">
                Octopink is an academic and creative initiative 
                designed to bring together curious young minds 
                passionate about science, technology, and 
                health. A space where computer science and 
                medical students explore, innovate, and 
                collaborate.
              </p>
            </div>

            {/* Our Mission Section */}
            <div className="text-center md:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink mb-3 sm:mb-4">
                Our Mission
              </h3>
              <p className="text-text leading-relaxed text-base sm:text-lg lg:text-xl">
                To provide a space where students can learn, 
                share, and build projects that have a real 
                impact in the fight against breast cancer.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex-shrink-0">
              <Image
                src={flower}
                alt="Pink decorative flower representing Octopink initiative"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                className="object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}