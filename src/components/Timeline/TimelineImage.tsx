import React from 'react';
import { motion } from 'framer-motion';
import { TimelineEventType } from '../../types/timeline';

interface TimelineImageProps {
  event: TimelineEventType;
}

export function TimelineImage({ event }: TimelineImageProps) {
  if (!event.image) return null;

  return (
    <div>
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="h-full flex items-center"
    >
      <div className="overflow-hidden rounded-lg md:rounded-xl shadow-md md:shadow-lg w-full">
        <img
          src={event.image}
          alt={event.title}
          className="w-full aspect-[16/9] md:aspect-[4/3] object-cover"
          loading="lazy"
        />
      </div>
    </motion.div>
    {event.source && (
      <div className="mt-4 text-xs text-gray-500">
        <span className="font-semibold">Source: </span>
        <a 
          href={event.source}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:text-emerald-700"
        >
          {event.source_desc}
        </a>
      </div>
    )}
    </div>
  );
}