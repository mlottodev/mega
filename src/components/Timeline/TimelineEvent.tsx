import { motion } from 'framer-motion';
import { TimelineEventType } from '../../types/timeline';
import { TimelineContent } from './TimelineContent';
import { TimelineMedia } from './TimelineMedia';

interface TimelineEventProps {
  event: TimelineEventType;
  index: number;
}

export function TimelineEvent({ event, index }: TimelineEventProps) {
  const isEven = index % 2 === 0;
  
  return (
    <>
      {/* Desktop Layout */}
      <div className="relative hidden md:grid grid-cols-[1fr,auto,1fr] gap-4 mb-16">
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0, display: "flex", alignItems: isEven ? "unset" : "center", justifySelf: isEven ? "unset" : "center" }}
          viewport={{ once: true }}
        >
          {isEven ? <TimelineContent event={event} align="left" /> : <TimelineMedia media={event.media} alt={event.title} source={event.source} source_desc={event.source_desc}/>}
        </motion.div>

        <motion.div 
          className="relative w-1 bg-emerald-200"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-emerald-100" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0, display: "flex", alignItems: isEven ? "center" : "unset", justifySelf: isEven ? "center" : "unset"}}
          viewport={{ once: true }}
        >
          {isEven ? <TimelineMedia media={event.media} alt={event.title} source={event.source} source_desc={event.source_desc}/> : <TimelineContent event={event} align="left" />}
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative pl-6 border-l-2 border-emerald-200"
        >
          {/* Timeline Dot */}
          <div className="absolute left-0 top-4 transform -translate-x-1/2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-emerald-100" />
          </div>

          <div className="space-y-3">
            <TimelineContent event={event} align="left" />
            {event.media && (
              <div className="mt-3">
                <TimelineMedia media={event.media} alt={event.title} source={event.source} source_desc={event.source_desc} />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}