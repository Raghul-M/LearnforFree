import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

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
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <div className="text-left">
              <div className="text-lg font-semibold text-gray-900">{currentCategory.label}</div>
              <div className="text-sm text-gray-500">{currentCategory.description}</div>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryChange(category.id);
                    setIsDropdownOpen(false);
                  }}
                  className={`w-full text-left p-4 hover:bg-gray-50 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl ${
                    activeCategory === category.id ? 'bg-primary/10 text-primary border-l-4 border-primary' : 'text-gray-900'
                  }`}
                >
                  <div className="font-semibold">{category.label}</div>
                  <div className="text-sm text-gray-500 mt-1">{category.description}</div>
                </button>
              ))}
            </div>
          )}

          {/* Backdrop for mobile */}
          {isDropdownOpen && (
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsDropdownOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;