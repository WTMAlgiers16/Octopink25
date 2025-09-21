import React from 'react';
import Image from 'next/image';
import { organizersData, Organizer } from '@/data/organizers-data';

export default function OrganizersSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold [color:var(--color-pink)] mb-8 sm:mb-12 lg:mb-16">
          Organizers
        </h2>

        {/* Organizers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {organizersData.map((organizer: Organizer) => (
            <div 
              key={organizer.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-pink-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                  <Image
                    src={organizer.logo}
                    alt="Organizer Logo"
                    fill
                    sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                    className="object-contain"
                  />
                </div>
              </div>

          
              {/* Description */}
              <p className="[color:var(--color-text)] text-center leading-relaxed text-sm sm:text-base mb-4">
                {organizer.description}
              </p>

              {/* Why Octopink Section (if exists) */}
              {organizer.whyOctopink && (
                <div className="mt-6 pt-4 border-t border-pink-100">
                  <h4 className="text-sm sm:text-base font-bold [color:var(--color-pink)] text-center mb-3">
                    Why octopink ?
                  </h4>
                  <p className="[color:var(--color-text)] text-center leading-relaxed text-sm sm:text-base">
                    {organizer.whyOctopink}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}