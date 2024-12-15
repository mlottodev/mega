import { motion } from 'framer-motion';

interface TimelineFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function TimelineFilter({ activeFilter, onFilterChange }: TimelineFilterProps) {
  const filters = ['all', 'political',  'cultural', 'social', 'economic'];

  return (
    <div className="overflow-x-auto -mx-4 px-4">
      <div className="flex justify-start md:justify-center gap-2 mb-8 md:mb-12 min-w-max">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className="relative px-3 md:px-4 py-1.5 md:py-2 rounded-full text-sm md:text-base capitalize"
          >
            {activeFilter === filter && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-emerald-600 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className={`relative z-10 ${
              activeFilter === filter ? 'text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              {filter}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}