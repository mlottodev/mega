import { motion } from 'framer-motion';

interface TimelineDotProps {
  index: number;
}

export function TimelineDot({ index }: TimelineDotProps) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2"
    >
      <div className="w-4 h-4 bg-emerald-600 rounded-full ring-4 ring-emerald-100" />
      <div className="absolute top-4 left-2 md:left-1/2 w-[2px] h-full bg-emerald-200 -translate-x-1/2" />
    </motion.div>
  );
}