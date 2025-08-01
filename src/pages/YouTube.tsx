import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Play, Users, Star, Code, Brain, Cloud, Globe, Smartphone, Bookmark, Flame, Zap, Target, Gem, Sparkles, BookOpen, ChevronDown } from "lucide-react";
import youtubeImage from "@/assets/youtube.svg";

interface YouTubeChannel {
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  category: string;
  subcategory?: string;
  subscribers: string;
  rating: number;
  featured?: boolean;
}

const YouTube = () => {
  const youtubeStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Free YouTube Learning Channels",
    "description": "Curated collection of the best free educational YouTube channels for coding, web development, data science, entrepreneurship, and more.",
    "url": "https://learnforfree.vercel.app/youtube",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Educational YouTube Channels",
      "description": "Hand-picked YouTube channels offering free, high-quality educational content",
      "numberOfItems": "40+"
    }
  };
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSubcategory, setActiveSubcategory] = useState("all");
  const [isSubcategoryDropdownOpen, setIsSubcategoryDropdownOpen] = useState(false);

  const channels: YouTubeChannel[] = [
    // Web Development
    {
      name: "Hitesh Choudhary",
      description: "Complete web development courses and tutorials",
      url: "https://www.youtube.com/@hiteshchoudharydotcom",
      thumbnail: "/youtube-logos/hitesh-choudhary.png",
      category: "developers",
      subcategory: "web-development",
      subscribers: "1.8M",
      rating: 4.8,
    },
    {
      name: "Web Dev Simplified",
      description: "Modern web development made simple",
      url: "https://www.youtube.com/@WebDevSimplified",
      thumbnail: "/youtube-logos/webdev-simplified.png",
      category: "developers",
      subcategory: "web-development",
      subscribers: "1.2M",
      rating: 4.8
    },
    {
      name: "JavaScript Mastery",
      description: "JavaScript, React, and modern web development",
      url: "https://www.youtube.com/@javascriptmastery",
      thumbnail: "/youtube-logos/jsmastery.jpg",
      category: "developers",
      subcategory: "web-development",
      subscribers: "1.4M",
      rating: 4.8,
    },

    // Cloud & DevOps
    {
      name: "Abhishek Veeramalla",
      description: "DevOps and cloud computing tutorials",
      url: "https://www.youtube.com/@AbhishekVeeramalla",
      thumbnail: "/youtube-logos/abishekveremella.png",
      category: "developers",
      subcategory: "cloud-devops",
      subscribers: "450K",
      rating: 4.7,
    },
    {
      name: "Sandip Das",
      description: "Cloud and DevOps tutorials",
      url: "https://www.youtube.com/@sandipdas",
      thumbnail: "/youtube-logos/sandipdas.png",
      category: "developers",
      subcategory: "cloud-devops",
      subscribers: "320K",
      rating: 4.6
    },
    {
      name: "TechWorld with Nana",
      description: "DevOps, Docker, Kubernetes tutorials",
      url: "https://www.youtube.com/@TechWorldwithNana",
      thumbnail: "/youtube-logos/techwithnana.png",
      category: "developers",
      subcategory: "cloud-devops",
      subscribers: "890K",
      rating: 4.8
    },
    {
      name: "Tech Tutorials with Piyush",
      description: "Cloud and DevOps tutorials",
      url: "https://www.youtube.com/@techtutorialswithpiyush",
      thumbnail: "/youtube-logos/piyush.jpeg",
      category: "developers",
      subcategory: "cloud-devops",
      subscribers: "180K",
      rating: 4.5
    },
    {
      name: "Mischa van den Burg",
      description: "DevOps and cloud engineering",
      url: "https://www.youtube.com/@mischavandenburg",
      thumbnail: "/youtube-logos/mischa-van-den-burg.jpeg",
      category: "developers",
      subcategory: "cloud-devops",
      subscribers: "95K",
      rating: 4.6
    },
    {
      name: "Kubesimplify",
      description: "Kubernetes and cloud-native technologies simplified",
      url: "https://www.youtube.com/@kubesimplify",
      thumbnail: "/youtube-logos/kubesimplifyyt.png",
      category: "developers",
      subcategory: "cloud-devops",
      subscribers: "75K",
      rating: 4.7
    },

    // AI/ML/Data Science
    {
      name: "Keith Galli",
      description: "Data science and programming tutorials",
      url: "https://www.youtube.com/@KeithGalli",
      thumbnail: "/youtube-logos/keith-galli.jpeg",
      category: "developers",
      subcategory: "ai-ml",
      subscribers: "390K",
      rating: 4.7,
    },
    {
      name: "VinciBits",
      description: "AI and machine learning concepts",
      url: "https://www.youtube.com/@vincibits",
      thumbnail: "/youtube-logos/vincibits.jpeg",
      category: "developers",
      subcategory: "ai-ml",
      subscribers: "125K",
      rating: 4.6
    },
    {
      name: "3Blue1Brown",
      description: "Math and AI concepts explained visually",
      url: "https://www.youtube.com/@3blue1brown",
      thumbnail: "/youtube-logos/3blue1brown.png",
      category: "developers",
      subcategory: "ai-ml",
      subscribers: "4.9M",
      rating: 4.9,
      featured: true
    },
    {
      name: "Codebasics",
      description: "Data science and AI tutorials",
      url: "https://www.youtube.com/@codebasics",
      thumbnail: "/youtube-logos/codebasics.jpg",
      category: "developers",
      subcategory: "ai-ml",
      subscribers: "820K",
      rating: 4.8
    },
    {
      name: "Andrej Karpathy",
      description: "Deep learning and neural networks",
      url: "https://www.youtube.com/@AndrejKarpathy",
      thumbnail: "/youtube-logos/andrejkarpathy.jpeg",
      category: "developers",
      subcategory: "ai-ml",
      subscribers: "485K",
      rating: 4.9
    },
    {
      name: "StatQuest",
      description: "Statistics and data science made simple",
      url: "https://www.youtube.com/@statquest",
      thumbnail: "/youtube-logos/statquest.jpeg",
      category: "developers",
      subcategory: "ai-ml",
      subscribers: "1.1M",
      rating: 4.8
    },
    {
      name: "Sentdex",
      description: "Python programming and machine learning",
      url: "https://www.youtube.com/@sentdex",
      thumbnail: "/youtube-logos/sentdex.jpeg",
      category: "developers",
      subcategory: "ai-ml",
      subscribers: "1.2M",
      rating: 4.7
    },
    {
      name: "Krish Naik",
      description: "Machine learning, data science, and AI tutorials",
      url: "https://www.youtube.com/@krishnaik06",
      thumbnail: "/youtube-logos/krishnaik.jpeg",
      category: "developers",
      subcategory: "ai-ml",
      subscribers: "960K",
      rating: 4.7,
    },

    // App Development
    {
      name: "CodeWithChris",
      description: "iOS app development tutorials",
      url: "https://www.youtube.com/@CodeWithChris",
      thumbnail: "/youtube-logos/codewithchris.jpeg",
      category: "developers",
      subcategory: "app-development",
      subscribers: "680K",
      rating: 4.6,
    },

    // DSA & General Programming
    {
      name: "Kunal Kushwaha",
      description: "DSA, open source, and programming",
      url: "https://www.youtube.com/@KunalKushwaha",
      thumbnail: "/youtube-logos/kunalkushwaha.jpeg",
      category: "developers",
      subcategory: "dsa",
      subscribers: "425K",
      rating: 4.7,
    },
    {
      name: "Jenny's Lectures",
      description: "Computer science fundamentals",
      url: "https://www.youtube.com/@JennyslecturesCSIT",
      thumbnail: "/youtube-logos/jennylectures.jpeg",
      category: "developers",
      subcategory: "general",
      subscribers: "1.8M",
      rating: 4.6
    },
    {
      name: "Stoney Codes",
      description: "Programming tutorials and tips",
      url: "https://www.youtube.com/@stoneycodes",
      thumbnail: "/youtube-logos/stoneycodes.jpg",
      category: "developers",
      subcategory: "general",
      subscribers: "75K",
      rating: 4.5
    },
    {
      name: "NeetCode",
      description: "Coding interviews and DSA",
      url: "https://www.youtube.com/@NeetCode",
      thumbnail: "/youtube-logos/neetcode.png",
      category: "developers",
      subcategory: "dsa",
      subscribers: "520K",
      rating: 4.8
    },
    {
      name: "FreeCodeCamp",
      description: "Full programming courses and tutorials",
      url: "https://www.youtube.com/@freecodecamp",
      thumbnail: "/youtube-logos/freecodecamp.png",
      category: "developers",
      subcategory: "general",
      subscribers: "8.2M",
      rating: 4.9,
      featured: true
    },
    {
      name: "BroCode",
      description: "Programming tutorials for beginners",
      url: "https://www.youtube.com/@BroCodez",
      thumbnail: "/youtube-logos/brocode.jpeg",
      category: "developers",
      subcategory: "general",
      subscribers: "1.9M",
      rating: 4.7
    },
    {
      name: "Travis Media",
      description: "Web development career advice",
      url: "https://www.youtube.com/@TravisMedia",
      thumbnail: "/youtube-logos/travismedia.jpeg",
      category: "developers",
      subcategory: "general",
      subscribers: "280K",
      rating: 4.6
    },
    {
      name: "ByteByteGo",
      description: "System design and engineering",
      url: "https://www.youtube.com/@ByteByteGo",
      thumbnail: "/youtube-logos/bytebytego.png",
      category: "developers",
      subcategory: "general",
      subscribers: "465K",
      rating: 4.8
    },
    {
      name: "CodingEntrepreneurs",
      description: "Programming and entrepreneurship",
      url: "https://www.youtube.com/@CodingEntrepreneurs",
      thumbnail: "/youtube-logos/coding-enterpreuners.png",
      category: "developers",
      subcategory: "general",
      subscribers: "485K",
      rating: 4.5
    },

    // Entrepreneurship
    {
      name: "Y Combinator",
      description: "Startup advice and founder stories",
      url: "https://www.youtube.com/@ycombinator",
      thumbnail: "/youtube-logos/yc.png",
      category: "entrepreneurship",
      subscribers: "1.2M",
      rating: 4.7,
    },
    {
      name: "Gary Vee",
      description: "Entrepreneurship and business motivation",
      url: "https://www.youtube.com/@garyvee",
      thumbnail: "/youtube-logos/garyvee.jpeg",
      category: "entrepreneurship",
      subscribers: "4.1M",
      rating: 4.5,
      featured: true
    },
    {
      name: "Alex Hormozi",
      description: "Business and scaling strategies",
      url: "https://www.youtube.com/@AlexHormozi",
      thumbnail: "/youtube-logos/alex-hormozi.jpeg",
      category: "entrepreneurship",
      subscribers: "1.4M",
      rating: 4.8
    },
    {
      name: "Simon Squibb",
      description: "Entrepreneurship and business insights",
      url: "https://www.youtube.com/@SimonSquibb",
      thumbnail: "/youtube-logos/simonsquibb.jpeg",
      category: "entrepreneurship",
      subscribers: "860K",
      rating: 4.6
    },
    {
      name: "Dwarkesh Patel",
      description: "Tech and business conversations",
      url: "https://www.youtube.com/@DwarkeshPatel",
      thumbnail: "/youtube-logos/dwarkesh-patel.jpeg",
      category: "entrepreneurship",
      subscribers: "195K",
      rating: 4.7
    },
    {
      name: "Ali Abdaal",
      description: "Productivity and entrepreneurship",
      url: "https://www.youtube.com/@aliabdaal",
      thumbnail: "/youtube-logos/aliabdaal.png",
      category: "entrepreneurship",
      subscribers: "5.2M",
      rating: 4.6,
      featured: true
    },

    // Students/Career
    {
      name: "Ishan Sharma",
      description: "Career guidance and student advice",
      url: "https://www.youtube.com/@ishansharma7390",
      thumbnail: "/youtube-logos/ishansharma.jpeg",
      category: "students",
      subscribers: "1.2M",
      rating: 4.6,
    },

    // Soft Skills
    {
      name: "TEDx Talks",
      description: "Ideas worth spreading",
      url: "https://www.youtube.com/@TEDxTalks",
      thumbnail: "/youtube-logos/tedx.png",
      category: "soft-skills",
      subscribers: "37.1M",
      rating: 4.8,
      featured: true
    },
    {
      name: "How Communication Works",
      description: "Communication skills and techniques",
      url: "https://www.youtube.com/@HowCommunicationWorks",
      thumbnail: "/youtube-logos/howcommunication-works.jpeg",
      category: "soft-skills",
      subscribers: "185K",
      rating: 4.7
    },
    {
      name: "Charisma on Command",
      description: "Social skills and confidence building",
      url: "https://www.youtube.com/@CharismaOnCommand",
      thumbnail: "/youtube-logos/charismaoncommand.jpeg",
      category: "soft-skills",
      subscribers: "5.6M",
      rating: 4.6,
    },
    {
      name: "NetworkChuck",
      description: "Networking, cybersecurity, and IT tutorials",
      url: "https://www.youtube.com/@NetworkChuck",
      thumbnail: "/youtube-logos/networkchuck.jpg",
      category: "developers",
      subcategory: "cloud-devops",
      subscribers: "3.2M",
      rating: 4.8,
      featured: true
    }
  ];

  const categories = [
    { id: "all", name: "All Channels", icon: <Flame size={18} className="text-black" /> },
    { id: "developers", name: "Tech", icon: <Zap size={18} className="text-black" /> },
    { id: "students", name: "Students", icon: <Target size={18} className="text-black" /> },
    { id: "entrepreneurship", name: "Entrepreneurship", icon: <Gem size={18} className="text-black" /> },
    { id: "soft-skills", name: "Soft Skills", icon: <Sparkles size={18} className="text-black" /> }
  ];

  const subcategories = [
    { id: "all", name: "All Dev", icon: <Code size={16} className="text-black" /> },
    { id: "web-development", name: "Web Dev", icon: <Globe size={16} className="text-black" /> },
    { id: "ai-ml", name: "AI/ML", icon: <Brain size={16} className="text-black" /> },
    { id: "cloud-devops", name: "Cloud & DevOps", icon: <Cloud size={16} className="text-black" /> },
    { id: "app-development", name: "App Dev", icon: <Smartphone size={16} className="text-black" /> },
    { id: "dsa", name: "DSA", icon: <Code size={16} className="text-black" /> },
    { id: "general", name: "General", icon: <BookOpen size={16} className="text-black" /> }
  ];

  const filteredChannels = (() => {
    let filtered = activeCategory === "all" 
      ? channels 
      : channels.filter(channel => channel.category === activeCategory);
    
    // Apply subcategory filter only if we're in developers category
    if (activeCategory === "developers" && activeSubcategory !== "all") {
      filtered = filtered.filter(channel => channel.subcategory === activeSubcategory);
    }
    
    return filtered;
  })();

  const featuredChannels = channels.filter(channel => channel.featured);

  // Reset subcategory when category changes
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveSubcategory("all");
    setIsSubcategoryDropdownOpen(false);
  };

  // Handle subcategory selection
  const handleSubcategoryChange = (subcategoryId: string) => {
    setActiveSubcategory(subcategoryId);
    setIsSubcategoryDropdownOpen(false);
  };

  // Get current subcategory name for dropdown display
  const getCurrentSubcategoryName = () => {
    const current = subcategories.find(sub => sub.id === activeSubcategory);
    return current ? current.name : "All Dev";
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Element;
      if (!target.closest('.subcategory-dropdown') && isSubcategoryDropdownOpen) {
        setIsSubcategoryDropdownOpen(false);
      }
    };

    if (isSubcategoryDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isSubcategoryDropdownOpen]);

  return (
    <div className="min-h-screen bg-[var(--gradient-surface)]">
      <SEOHead 
        title="Free YouTube Learning Channels | Best Educational Content - LearnForFree"
        description="Discover 40+ hand-picked YouTube channels offering free, high-quality educational content. From coding tutorials to entrepreneurship guides, find the best learning channels curated for students and professionals."
        keywords="youtube learning channels, free youtube courses, coding youtube channels, programming tutorials youtube, educational youtube channels, free online learning, youtube education, learn coding youtube, web development youtube, data science youtube"
        url="https://learnforfree.vercel.app/youtube"
        structuredData={youtubeStructuredData}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient py-24 px-6 min-h-[85vh] flex items-center">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-10 animate-slide-up">
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl heading-modern text-foreground leading-[1.1] text-balance">
                    YouTube Learning{" "}
                    <span className="text-gradient">Hub</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl text-balance">
                    Discover the best educational YouTube channels curated for developers, 
                    students, entrepreneurs, and lifelong learners.
                  </p>
                  
                  {/* Quality Assurance Badge */}
                  <div className="glass-effect rounded-2xl p-4 max-w-xl bg-primary/10 border border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary rounded-full flex-shrink-0">
                        <Star className="text-primary-foreground" size={20} fill="currentColor" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Personally Verified Channels</h3>
                        <p className="text-sm text-muted-foreground">
                          High-quality, handpicked educational content verified by our team for excellence and reliability.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-8 max-w-lg">
                  <div className="text-center group">
                    <div className="glass-effect rounded-xl p-3 sm:p-4 md:p-5 mb-4 group-hover:scale-105 transition-[var(--transition-smooth)]">
                      <div className="py-1 sm:py-2">
                        <Play className="text-primary mx-auto mb-2 sm:mb-3" size={24} />
                        <div className="text-xl sm:text-2xl heading-modern text-foreground mb-1">{channels.length}+</div>
                        <div className="text-xs text-muted-foreground font-medium">Channels</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="glass-effect rounded-xl p-3 sm:p-4 md:p-5 mb-4 group-hover:scale-105 transition-[var(--transition-smooth)]">
                      <div className="py-1 sm:py-2">
                        <Users className="text-primary mx-auto mb-2 sm:mb-3" size={24} />
                        <div className="text-xl sm:text-2xl heading-modern text-foreground mb-1">100M+</div>
                        <div className="text-xs text-muted-foreground font-medium">Subscribers</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center group">
                    <div className="glass-effect rounded-xl p-3 sm:p-4 md:p-5 mb-4 group-hover:scale-105 transition-[var(--transition-smooth)]">
                      <div className="py-1 sm:py-2">
                        <Star className="text-primary mx-auto mb-2 sm:mb-3" size={24} />
                        <div className="text-xl sm:text-2xl heading-modern text-foreground mb-1">100%</div>
                        <div className="text-xs text-muted-foreground font-medium">Free</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* YouTube Image */}
              <div className="flex justify-center lg:justify-end animate-slide-up">
                <img
                  src={youtubeImage}
                  alt="YouTube Learning Hub"
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-20 px-6 bg-[var(--gradient-surface)]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Browse by Category
              </h2>
              
              {/* Quality Content Description */}
              <p className="text-lg text-muted-foreground mb-6">
                Our top picks for exceptional educational content
              </p>
              
              {/* Quality Banner */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full px-6 py-3 text-sm font-medium text-foreground">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>✨ Personally Verified & Handpicked for Quality</span>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`youtube-category-tab ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Subcategory Tabs - Desktop */}
            {activeCategory === "developers" && (
              <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
                {subcategories.map((subcategory) => (
                  <button
                    key={subcategory.id}
                    onClick={() => handleSubcategoryChange(subcategory.id)}
                    className={`youtube-category-tab ${
                      activeSubcategory === subcategory.id ? "active" : ""
                    }`}
                  >
                    <span className="mr-2">{subcategory.icon}</span>
                    {subcategory.name}
                  </button>
                ))}
              </div>
            )}

            {/* Subcategory Dropdown - Mobile */}
            {activeCategory === "developers" && (
              <div className="md:hidden mb-12 flex justify-center">
                <div className="relative subcategory-dropdown">
                  <button
                    onClick={() => setIsSubcategoryDropdownOpen(!isSubcategoryDropdownOpen)}
                    onTouchStart={(e) => { e.preventDefault(); }}
                    className="youtube-category-tab active flex items-center gap-2 min-w-[200px] justify-between touch-manipulation"
                    type="button"
                  >
                    <div className="flex items-center">
                      <span className="mr-2">
                        {subcategories.find(sub => sub.id === activeSubcategory)?.icon}
                      </span>
                      {getCurrentSubcategoryName()}
                    </div>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        isSubcategoryDropdownOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isSubcategoryDropdownOpen && (
                    <div className="absolute top-full mt-2 left-0 right-0 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden animate-fade-in">
                      {subcategories.map((subcategory) => (
                        <button
                          key={subcategory.id}
                          onClick={() => handleSubcategoryChange(subcategory.id)}
                          onTouchStart={(e) => { e.preventDefault(); }}
                          className={`w-full text-left px-4 py-3 hover:bg-accent/30 transition-colors flex items-center gap-3 touch-manipulation ${
                            activeSubcategory === subcategory.id ? 'bg-primary/10 text-primary' : 'text-foreground'
                          }`}
                          type="button"
                        >
                          <span>{subcategory.icon}</span>
                          {subcategory.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Channels Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredChannels.map((channel, index) => (
                <div key={index} className="tool-card-new group flex flex-col h-full">
                  <div className="relative mb-4">
                    <img
                      src={channel.thumbnail}
                      alt={channel.name}
                      className="w-16 h-16 rounded-full mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-center group-hover:text-primary transition-colors text-sm">
                    {channel.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2 text-center flex-grow">
                    {channel.description}
                  </p>
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-tool w-full flex items-center justify-center gap-1 no-underline mt-auto"
                  >
                    <Play size={12} />
                    <span className="text-xs">Watch</span>
                  </a>
                </div>
              ))}
            </div>

            {/* No results */}
            {filteredChannels.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-xl font-bold text-foreground mb-2">No Channels Found</h3>
                <p className="text-muted-foreground">
                  No channels found for this category yet. Check back soon!
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default YouTube; 