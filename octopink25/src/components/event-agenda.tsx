import React from 'react';
// Import from your data folder
import { agendaData, AgendaItem, AgendaDay } from '@/data/agenda-data';

export default function EventAgenda() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      
        <div className="flex">
          {/* Left side - EVENT AGENDA text */}
          <div className="flex flex-row justify-center items-center mr-6 w-24">
            <div 
              className=" text-6xl font-bold [color:var(--color-pink)] whitespace-nowrap"
              style={{ 
                writingMode: 'vertical-rl', 
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                letterSpacing: '0.1em'
              }}
            >
              EVENT
            </div>
            <div 
              className=" text-6xl font-bold  whitespace-nowrap mt-2"
              style={{ 
                writingMode: 'vertical-rl', 
                textOrientation: 'mixed',
                transform: 'rotate(180deg)',
                letterSpacing: '0.1em',
                 color: 'white',
    WebkitTextStroke: '1px var(--color-pink)'


              }}
            >
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
                    <div className="text-4xl font-bold [color:var(--color-text)] leading-none">
                      {dayData.day}
                    </div>
                    <div className="text-lg font-bold [color:var(--color-pink)] mt-1">
                      {dayData.month}
                    </div>
                  </div>
                  
                  {/* Pink vertical line */}
                  <div className="w-0.5 bg-[var(--color-pink))] mr-6"></div>
                  
                  {/* Events list */}
                  <div className="flex-1 space-y-1">
                    {dayData.events.map((event: AgendaItem, eventIndex: number) => (
                      <div key={eventIndex} className="flex items-center">
                        <span className="text-xs font-bold [color:var(--color-text)] w-20 mr-4">
                          {event.time}
                        </span>
                        <span className="text-xs font-semibold [color:var(--color-text)] uppercase tracking-wide">
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