import { Scroll } from 'lucide-react';

export function HeroTitle() {
  return (
    <div className="text-center pt-8 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
          Make Esan Great Again
        </h1>
        <p className="text-lg md:text-2xl lg:text-2xl text-gray-600">
          Discover the Rich Heritage of the Esan People
        </p>
      </div>
      <div className="relative h-full flex items-center justify-center mt-8">
        <a
          href="#timeline"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors"
        >
          <Scroll size={20} />
          Explore Our Timeline
        </a>
      </div>
    </div>
  );
}