import React from 'react';
import { TimelineEvent } from './TimelineEvent';
import { TimelineFilter } from './TimelineFilter';
import { useTimelineFilter } from '../../hooks/useTimelineFilter';
import { TimelineEventType } from '../../types/timeline';

interface TimelineProps {
  events: TimelineEventType[];
}

export function Timeline({ events }: TimelineProps) {
  const { filteredEvents, activeFilter, setFilter } = useTimelineFilter(events);

  return (
    <div className="relative">
      <TimelineFilter activeFilter={activeFilter} onFilterChange={setFilter} />
      
      <div className="relative max-w-7xl mx-auto px-4 mt-12">
        <div className="relative">
          {filteredEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}