import React from 'react';
// Import from your data folder
import { agendaData, AgendaItem, AgendaDay } from '@/data/agenda-data';

export default function EventAgenda() {
  return (
    <div id="agenda"className="max-w-7xl lg:w-fit mx-auto px-4 sm:px-6 py-24 bg-white">
      
      {/* Mobile Layout - stacked vertically */}
      <div className="block lg:hidden">
        {/* Mobile Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="section-title font-bold text-pink">EVENT <span className="section-title font-bold text-stroke text-white">AGENDA</span></h1>

        </div>
        
        {/* Mobile Content */}
        <div className="space-y-6">
          {agendaData.map((dayData: AgendaDay, dayIndex: number) => (
            <div key={dayIndex} className="border-l-4 border-pink pl-4 animate-fade-in-up stagger-${dayIndex + 2}">
              
              {/* Date Section */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="card-title font-bold text-text">
                  {dayData.day}
                </span>
                <span className="body-regular font-bold text-pink">
                  {dayData.month}
                </span>
              </div>
              
              {/* Events List */}
              <div className="space-y-2">
                {dayData.events.map((event: AgendaItem, eventIndex: number) => (
                  <div key={eventIndex} className="bg-gray-50 p-2 rounded">
                    <div className="body-small font-bold text-text mb-1">
                      {event.time}
                    </div>
                    <div className="ui-text font-semibold text-text uppercase tracking-wide">
                      {event.title}
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout - side by side */}
      <div className="hidden lg:flex w-fit">
        
        {/* Left Side - EVENT AGENDA Text */}
        <div className="flex justify-center items-center flex-shrink-0">
          <div className="vertical-text-large font-bold text-pink whitespace-nowrap vertical-text animate-fade-in">
            EVENT
          </div>
          <div className="vertical-text-large font-bold whitespace-nowrap mt-2 vertical-text-outline animate-fade-in stagger-2">
            AGENDA
          </div>
        </div>

        {/* Right Side - Content Area */}
        <div className="w-fit min-w-0 ml-20">
          {agendaData.map((dayData: AgendaDay, dayIndex: number) => (
            <div key={dayIndex} className="relative mb-6 lg:mb-8 last:mb-0 animate-fade-in-up stagger-${dayIndex + 3}">
              
              <div className="flex gap-4">
                
                {/* Date Section */}
                <div className="flex flex-col items-center justify-start flex-shrink-0">
                  <div className="subsection-title font-bold text-text leading-none">
                    {dayData.day}
                  </div>
                  <div className="subsection-title font-bold text-pink mt-1">
                    {dayData.month}
                  </div>
                </div>

                {/* Pink Vertical Line */}
                <div className="w-1 bg-pink mr-4 lg:mr-6 flex-shrink-0"></div>

                {/* Events List */}
                <div className="space-y-1 min-w-0">
                  {dayData.events.map((event: AgendaItem, eventIndex: number) => (
                    <div key={eventIndex} className="flex items-start sm:items-center flex-col sm:flex-row gap-12">
                      <span className="time-text font-bold text-text flex-shrink-0">
                        {event.time}
                      </span>
                      <span className="time-text text-text uppercase tracking-wide break-words">
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