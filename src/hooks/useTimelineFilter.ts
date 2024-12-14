import { useState, useMemo } from 'react';
import { TimelineEvent } from '../types/timeline';

export function useTimelineFilter(events: TimelineEvent[]) {
  const [activeFilter, setFilter] = useState('all');

  const filteredEvents = useMemo(() => {
    if (activeFilter === 'all') return events;
    return events.filter(event => event.category === activeFilter);
  }, [events, activeFilter]);

  return { filteredEvents, activeFilter, setFilter };
}