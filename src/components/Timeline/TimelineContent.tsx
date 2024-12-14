import React from 'react';
import { TimelineEventType } from '../../types/timeline';
import { CategoryBadge } from './CategoryBadge';

interface TimelineContentProps {
  event: TimelineEventType;
  align: 'left' | 'right';
}

export function TimelineContent({ event, align }: TimelineContentProps) {
  return (
    <div className={`p-4 md:p-6 bg-white rounded-xl shadow-lg max-h-max ${
      align === 'right' ? 'md:text-right' : 'text-left'
    }`}>
      <CategoryBadge category={event.category} />
      <div className="mt-2">
        <span className="text-sm md:text-base text-emerald-600 font-bold">{event.year}</span>
        <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-gray-900">{event.title}</h3>
        <p className="text-sm md:text-base text-gray-600">{event.description}</p>
      </div>
    </div>
  );
}