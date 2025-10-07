'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { activities } from '@/data/activities-data';

// =========================
// Component
// =========================
export default function Activities() {
  return (
    <section id="activities" className="section-wrapper">
      {/* Title */}
      <h2 className="section-title section-title-spacing text-center font-bold text-pink">
        Activities
      </h2>

      <div className="max-w-6xl mx-auto bg-pink/85 rounded-2xl shadow-md h-auto lg:h-[500px] overflow-hidden group">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          className="w-full h-full"
        >
          {activities.map((activity, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image */}
                <div className="flex-1 relative bg-white  lg:rounded-tr-[120px] lg:rounded-l-2xl overflow-hidden min-h-[250px]">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Description */}
                <div className="flex-1 p-6 sm:p-8 text-white body-regular flex flex-col justify-center">
                  <h3 className="section-title mb-4 font-semibold py-6">
                    {activity.title}
                  </h3>
                  <ul className="space-y-3 list-disc list-inside text-white">
                    {activity.points.map((point, i) => (
                      <li key={i}>
                        <span className="font-semibold body-large">
                          {point.subtitle}
                        </span>{' '}
                        {point.content}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
