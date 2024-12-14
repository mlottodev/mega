import React from 'react';
import { TimelineEventType } from '../../types/timeline';

interface TimelineMediaProps {
  media: TimelineEventType['media'];
  alt: string;
  source?: string;
  source_desc?: string;
}

export function TimelineMedia({ media, alt, source, source_desc }: TimelineMediaProps) {
  return (
    <div className="space-y-2">
      <div className="relative h-full overflow-hidden rounded-lg flex justify-center">
        {media?.type === 'video' ? (
          <iframe
            src={media.url}
            className="object-cover transform hover:scale-105 transition-transform duration-300"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <img
            src={media?.url}
            alt={alt}
            className="object-cover transform hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        )}
      </div>
      {source && (
        <div className="mt-4 text-xs text-gray-500">
          <span className="font-semibold">Source: </span>
          <a 
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:text-emerald-700"
          >
            {source_desc}
          </a>
        </div>
      )}
    </div>
  );
}