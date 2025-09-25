import React from 'react';
import Image from 'next/image';
import { organizersData, Organizer } from '@/data/organizers-data';

export default function OrganizersSection() {
  return (
    <section className="section-wrapper">
      {/* Title */}
      <h2 className="section-title section-title-spacing text-center font-bold text-pink">
        Organizers
      </h2>

      {/* Organizers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {organizersData.map((organizer: Organizer) => (
          <div 
            key={organizer.id}
            className="bg-white rounded-2xl p-4 sm:p-6 border-2 border-pink shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20">
                <Image
                  src={organizer.logo}
                  alt="Organizer Logo"
                  fill
                  sizes="(max-width: 640px) 48px, (max-width: 1024px) 64px, 80px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-text text-center leading-relaxed body-large mb-4">
              {organizer.description}
            </p>

            {/* Why Octopink Section (if exists) */}
            {organizer.whyOctopink && (
              <div className="mt-4 pt-3 border-t border-pink-100">
                <h4 className="body-small font-bold text-pink text-center mb-3">
                  Why octopink ?
                </h4>
                <p className="text-text text-center leading-relaxed body-small">
                  {organizer.whyOctopink}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}