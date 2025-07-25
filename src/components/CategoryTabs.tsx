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
            className={`w-full bg-gradient-to-r from-white to-gray-50 border-2 rounded-xl p-4 flex items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none transform hover:scale-[1.02] ${
              isDropdownOpen 
                ? 'border-primary ring-4 ring-primary/20 shadow-xl bg-gradient-to-r from-primary/5 to-primary/10' 
                : 'border-primary/30 hover:border-primary/60'
            }`}
          >
            <div className="text-left">
              <div className="text-lg font-bold text-gray-900">
                {currentCategory.label}
              </div>
              <div className="text-sm text-gray-600 font-medium">{currentCategory.description}</div>
            </div>
            <ChevronDown 
              className={`w-6 h-6 transition-all duration-300 ${
                isDropdownOpen ? 'rotate-180 text-primary' : 'text-gray-500'
              }`} 
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-3 bg-white border-2 border-primary/30 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto backdrop-blur-sm">
              <div className="p-2">
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      onCategoryChange(category.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] ${
                      activeCategory === category.id 
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg border-2 border-primary/20' 
                        : 'text-gray-900 hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:shadow-md border-2 border-transparent hover:border-primary/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-base">{category.label}</div>
                        <div className={`text-sm mt-1 ${
                          activeCategory === category.id ? 'text-white/90' : 'text-gray-500'
                        }`}>
                          {category.description}
                        </div>
                      </div>
                      {activeCategory === category.id && (
                        <div className="text-white text-lg">✓</div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
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