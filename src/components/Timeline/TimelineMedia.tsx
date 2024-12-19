import { TimelineEventType } from '../../types/timeline';

interface TimelineMediaProps {
  media: TimelineEventType['media'];
  alt: string;
  source?: string;
  source_desc?: string;
}

export function TimelineMedia({ media, alt, source, source_desc }: TimelineMediaProps) {
  const isLocalVideo = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
  };

  return (
    <div className="space-y-2">
      <div className="relative h-full overflow-hidden rounded-lg flex justify-center">
        {media?.type === 'video' ? (
          isLocalVideo(media.url) ? (
            <video
              className="object-cover transform hover:scale-105 transition-transform duration-300 w-[500px] h-[400px]"
              controls
              preload="metadata"
              playsInline
            >
              <source src={media.url} type={`video/${media.url.split('.').pop()}`} />
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              src={media.url}
              className="object-cover transform hover:scale-105 transition-transform duration-300 w-[500px] h-[400px]"
              allow="clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          )
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