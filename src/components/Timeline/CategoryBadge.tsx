import React from 'react';

interface CategoryBadgeProps {
  category: string;
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const categoryColors = {
    cultural: 'bg-emerald-100 text-emerald-800',
    political: 'bg-blue-100 text-blue-800',
    social: 'bg-purple-100 text-purple-800',
    economic: 'bg-amber-100 text-amber-800'
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${categoryColors[category as keyof typeof categoryColors]}`}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </span>
  );
}