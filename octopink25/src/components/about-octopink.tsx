import React from 'react';
import Image from 'next/image';
import flower from '../../public/images/about-octopink-flower.svg';

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
         <h2 className="text-4xl text-center font-bold [color:var(--color-pink)] mb-6">
                What is Octopink ?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2   items-center">
          
          {/* Left Content */}
          <div className="space-y-8 ">
            {/* What is Octopink Section */}
            <div>
             
              <p className="[color:var(--color-text)] leading-relaxed text-lg">
                Octopink is an academic and creative initiative 
                designed to bring together curious young minds 
                passionate about science, technology, and 
                health. A space where computer science and 
                medical students explore, innovate, and 
                collaborate.
              </p>
            </div>

            {/* Our Mission Section */}
            <div>
              <h3 className="text-2xl font-bold [color:var(--color-pink)] mb-4">
                Our Mission
              </h3>
              <p className="[color:var(--color-text)] leading-relaxed text-lg">
                To provide a space where students can learn, 
                share, and build projects that have a real 
                impact in the fight against breast cancer.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-96 h-96">
              <Image
                src={flower}
                alt="Pink decorative flower"
                width={384}
                height={384}
                className="w-full h-full object-contain"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};