import React from 'react';
// Import from your data folder
import { agendaData, AgendaItem, AgendaDay } from '@/data/agenda-data';

export default function EventAgenda() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white">
      {/* Mobile layout - stacked vertically */}
      <div className="block sm:hidden">
        {/* Mobile header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-pink">EVENT</h1>
          <h2 className="text-3xl font-bold text-gray-600 mt-1">AGENDA</h2>
        </div>
        
        {/* Mobile agenda content */}
        <div className="space-y-6">
          {agendaData.map((dayData: AgendaDay, dayIndex: number) => (
            <div key={dayIndex} className="border-l-4 border-pink pl-4">
              {/* Date section - horizontal on mobile */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-2xl font-bold text-text">
                  {dayData.day}
                </span>
                <span className="text-base font-bold text-pink">
                  {dayData.month}
                </span>
              </div>
              
              {/* Events list */}
              <div className="space-y-2">
                {dayData.events.map((event: AgendaItem, eventIndex: number) => (
                  <div key={eventIndex} className="bg-gray-50 p-2 rounded">
                    <div className="text-xs font-bold text-text mb-1">
                      {event.time}
                    </div>
                    <div className="text-sm font-semibold text-text uppercase tracking-wide">
                      {event.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout - side by side */}
      <div className="hidden sm:flex">
        {/* Left side - EVENT AGENDA text */}
        <div className="flex flex-col justify-center items-center mr-4 lg:mr-6 w-20 lg:w-24 flex-shrink-0">
          <div className="text-3xl md:text-4xl lg:text-6xl font-bold text-pink whitespace-nowrap vertical-text">
            EVENT
          </div>
          <div className="text-3xl md:text-4xl lg:text-6xl font-bold whitespace-nowrap mt-2 vertical-text-outline">
            AGENDA
          </div>
        </div>

        {/* Right side - Content area */}
        <div className="flex-1 min-w-0">
          {agendaData.map((dayData: AgendaDay, dayIndex: number) => (
            <div key={dayIndex} className="relative mb-6 lg:mb-8 last:mb-0">
              <div className="flex">
                {/* Date section */}
                <div className="flex flex-col items-center justify-start w-12 sm:w-14 lg:w-16 mr-3 lg:mr-4 flex-shrink-0">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text leading-none">
                    {dayData.day}
                  </div>
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-pink mt-1">
                    {dayData.month}
                  </div>
                </div>

                {/* Pink vertical line */}
                <div className="w-0.5 bg-pink mr-4 lg:mr-6 flex-shrink-0"></div>

                {/* Events list */}
                <div className="flex-1 space-y-1 min-w-0">
                  {dayData.events.map((event: AgendaItem, eventIndex: number) => (
                    <div key={eventIndex} className="flex items-start sm:items-center flex-col sm:flex-row">
                      <span className="text-xs font-bold text-text w-full sm:w-16 lg:w-20 mr-0 sm:mr-4 mb-1 sm:mb-0 flex-shrink-0">
                        {event.time}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-text uppercase tracking-wide break-words">
                        {event.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}