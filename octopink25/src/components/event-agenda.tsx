import React from 'react';
// Import from your data folder
import { agendaData, AgendaItem, AgendaDay } from '@/data/agenda-data';

export default function EventAgenda() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      
        <div className="flex">
          {/* Left side - EVENT AGENDA text */}
          <div className="flex flex-row justify-center items-center mr-6 w-24">
           <div className="text-4xl md:text-6xl font-bold text-pink whitespace-nowrap vertical-text">
  EVENT
</div>
<div className="text-4xl md:text-6xl font-bold whitespace-nowrap mt-2 vertical-text-outline">
  AGENDA
</div>

          </div>

          {/* Right side - Content area */}
          <div className="flex-1">
            {agendaData.map((dayData: AgendaDay, dayIndex: number) => (
              <div key={dayIndex} className="relative mb-8 last:mb-0">
                <div className="flex">
                  {/* Date section */}
                  <div className="flex flex-col items-center justify-start w-16 mr-4">
                    <div className="text-4xl font-bold text-text leading-none">
                      {dayData.day}
                    </div>
                    <div className="text-lg font-bold text-pink mt-1">
                      {dayData.month}
                    </div>
                  </div>
                  
                  {/* Pink vertical line */}
                  <div className="w-0.5 bg-pink mr-6"></div>
                  
                  {/* Events list */}
                  <div className="flex-1 space-y-1">
                    {dayData.events.map((event: AgendaItem, eventIndex: number) => (
                      <div key={eventIndex} className="flex items-center">
                        <span className="text-xs font-bold text-text w-20 mr-4">
                          {event.time}
                        </span>
                        <span className="text-xs font-semibold text-text uppercase tracking-wide">
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