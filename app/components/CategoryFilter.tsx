import { Category } from '../types/artwork';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      <button
        onClick={() => onCategoryChange('All')}
        className={`px-8 py-4 text-xl font-semibold rounded-xl transition-all ${
          activeCategory === 'All'
            ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg scale-105'
            : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
        }`}
      >
        All Works ({categories.reduce((sum, cat) => sum + cat.count, 0)})
      </button>
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => onCategoryChange(category.name)}
          className={`px-8 py-4 text-xl font-semibold rounded-xl transition-all ${
            activeCategory === category.name
              ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg scale-105'
              : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:shadow-md'
          }`}
        >
          {category.name} ({category.count})
        </button>
      ))}
    </div>
  );
}
