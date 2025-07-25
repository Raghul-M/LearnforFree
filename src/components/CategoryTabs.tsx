import { useState } from "react";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", label: "All", description: "All resources" },
  { id: "students", label: "Students", description: "Academic resources & scholarships" },
  { id: "entrepreneurship", label: "Entrepreneurship", description: "Business & startup resources" },
  { id: "developers", label: "Developers", description: "Coding & technical resources" },
  { id: "tools", label: "Tools", description: "Essential development & productivity tools" },
];

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="w-full mb-12">
      {/* Desktop Tabs */}
      <div className="hidden md:flex flex-wrap justify-center gap-3 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden mb-6">
        <div className="glass-effect rounded-2xl p-1">
          <select
            value={activeCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full p-4 bg-transparent border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-lg font-medium"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id} className="bg-background text-foreground">
                {category.label} - {category.description}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;