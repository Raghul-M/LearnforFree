import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryTabs from "@/components/CategoryTabs";
import ToolCard from "@/components/ToolCard";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Target, BarChart3, Award } from "lucide-react";

// Import logos
import notebookllmLogo from "@/assets/logos/notebookllm.png";
import githubLogo from "@/assets/logos/github.png";
import googleCollabLogo from "@/assets/logos/googlecollab.png";
import ycombinatorLogo from "@/assets/logos/yc.png";
import cs50Logo from "@/assets/logos/cs50.png";
import developerPackLogo from "@/assets/logos/developerpack.png";
import geminiLogo from "@/assets/logos/gemini.png";
import freecodecampLogo from "@/assets/logos/freecodecamp.png";
import deeplearningaiLogo from "@/assets/logos/deeplearningai.png";
import roadmapshLogo from "@/assets/logos/roadmapsh.png";
import huggingfaceLogo from "@/assets/logos/huggingface.png";

// Import why-choose-us images
import verifiedQualityImg from "@/assets/why-choose-us/Verified.svg";
import growthFocusedImg from "@/assets/why-choose-us/growth.svg";
import communityDrivenImg from "@/assets/why-choose-us/community.svg";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showMoreResources, setShowMoreResources] = useState(false);

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LearnForFree",
    "alternateName": "Learn For Free",
    "url": "https://learnforfree.vercel.app",
    "description": "Democratizing free quality education for all. Access 500+ verified free educational resources, development tools, and courses for students, developers, and lifelong learners.",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "LearnForFree",
      "description": "Platform providing curated free educational resources and development tools",
      "url": "https://learnforfree.vercel.app",
      "sameAs": [
        "https://github.com/learnforfree",
        "https://twitter.com/learnforfree"
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://learnforfree.vercel.app/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Tool data with logos
  const tools = [
    {
      name: "GitHub Codespaces",
      description: "Cloud development environment that runs in your browser with VS Code",
      url: "https://github.com/features/codespaces",
      logo: githubLogo,
      category: "developers",
      pricing: "FREE + PREMIUM" as const
    },
    {
      name: "NotebookLM",
      description: "AI-powered research assistant that helps you understand and work with documents",
      url: "https://notebooklm.google.com",
      logo: notebookllmLogo,
      category: "students",
      pricing: "FREE" as const
    },
    {
      name: "Google Colab",
      description: "Free Jupyter notebook environment that runs in the cloud with GPU support",
      url: "https://colab.research.google.com",
      logo: googleCollabLogo,
      category: "developers",
      pricing: "FREE + PREMIUM" as const
    },
    {
      name: "Y Combinator",
      description: "Startup accelerator and entrepreneurship resources for building successful companies",
      url: "https://www.ycombinator.com",
      logo: ycombinatorLogo,
      category: "entrepreneurship",
      pricing: "FREE" as const
    },
    {
      name: "CS50",
      description: "Harvard's introduction to computer science and programming course, completely free",
      url: "https://cs50.harvard.edu",
      logo: cs50Logo,
      category: "students",
      pricing: "FREE" as const
    },
        {
      name: "GitHub Student Developer Pack",
      description: "Free developer tools and resources for students including premium services",
      url: "https://education.github.com/pack",
      logo: developerPackLogo,
      category: "students",
      pricing: "FREE" as const
    },
    {
      name: "Google Gemini for Students",
      description: "AI-powered assistant to help students with research, writing, and learning",
      url: "https://gemini.google.com/app",
      logo: geminiLogo,
      category: "students",
      pricing: "FREE" as const
    },
    {
      name: "FreeCodeCamp",
      description: "Learn to code for free with interactive coding challenges and projects",
      url: "https://www.freecodecamp.org",
      logo: freecodecampLogo,
      category: "developers",
      pricing: "FREE" as const
    }
    ];

  // Additional tools that show when "Load More Resources" is clicked
  const additionalTools = [
    {
      name: "Hugging Face Learn",
      description: "Open-source machine learning platform with courses, models, and datasets for AI education",
      url: "https://huggingface.co/learn",
      logo: huggingfaceLogo,
      category: "students",
      pricing: "FREE" as const
    },
    {
      name: "DeepLearning.AI",
      description: "Learn AI and machine learning from Andrew Ng with hands-on courses and specializations",
      url: "https://www.deeplearning.ai",
      logo: deeplearningaiLogo,
      category: "students",
      pricing: "FREE + PREMIUM" as const
    },
    {
      name: "Roadmap.sh",
      description: "Interactive roadmaps and learning paths for developers with step-by-step guides",
      url: "https://roadmap.sh",
      logo: roadmapshLogo,
      category: "developers",
      pricing: "FREE" as const
    }
  ];

  // Combine main tools with additional tools if "Load More" is active
  const allTools = showMoreResources ? [...tools, ...additionalTools] : tools;

  // Filter tools based on active category
  const filteredTools = activeCategory === "all" 
    ? allTools 
    : allTools.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen bg-[var(--gradient-surface)]">
      <SEOHead 
        structuredData={homeStructuredData}
      />
      <Header />
      
      <main>
        <Hero />
        
        {/* Tools Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl heading-modern text-foreground mb-6 text-balance">
                Essential Development Tools
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
                Powerful, free tools to boost your productivity and accelerate your learning journey.
              </p>
            </div>

            <CategoryTabs 
              activeCategory={activeCategory} 
              onCategoryChange={(category) => {
                setActiveCategory(category);
                setShowMoreResources(false); // Reset to hide additional resources when category changes
              }} 
            />

            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}
            </div>

            {/* Load More Resources Button */}
            {!showMoreResources && (
              <div className="text-center mt-12">
                <button 
                  onClick={() => setShowMoreResources(true)}
                  className="btn-primary px-8 py-4 text-lg"
                >
                  Load More Resources
                </button>
              </div>
            )}

            {/* Show Less Button */}
            {showMoreResources && (
              <div className="text-center mt-12">
                <button 
                  onClick={() => setShowMoreResources(false)}
                  className="btn-secondary px-8 py-4 text-lg"
                >
                  Show Less
                </button>
              </div>
            )}

            {/* No results */}
            {filteredTools.length === 0 && (
              <div className="text-center py-20">
                <div className="glass-effect rounded-3xl p-12 max-w-md mx-auto">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl heading-modern text-foreground mb-2">No Tools Found</h3>
                  <p className="text-muted-foreground">
                    No tools found for this category yet. Check back soon!
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 px-6 bg-[var(--gradient-surface)]">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl md:text-4xl heading-modern text-foreground mb-16 text-balance">
              Why Choose Learnforfree?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              <div className="glass-card group p-6 sm:p-8 md:p-10">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 md:mb-10 group-hover:scale-110 transition-[var(--transition-smooth)] p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                  <img 
                    src={verifiedQualityImg} 
                    alt="Verified Quality" 
                    className="w-full h-full object-contain p-1 sm:p-2"
                  />
                </div>
                <div className="px-2 sm:px-4 md:px-6">
                  <h4 className="text-lg sm:text-xl heading-modern text-foreground mb-4 sm:mb-5 md:mb-6">Verified Quality</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Every tool is manually reviewed and verified for quality and reliability by our expert team.
                  </p>
                </div>
              </div>
              <div className="glass-card group p-6 sm:p-8 md:p-10">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 md:mb-10 group-hover:scale-110 transition-[var(--transition-smooth)] p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                  <img 
                    src={growthFocusedImg} 
                    alt="Growth Focused" 
                    className="w-full h-full object-contain p-1 sm:p-2"
                  />
                </div>
                <div className="px-2 sm:px-4 md:px-6">
                  <h4 className="text-lg sm:text-xl heading-modern text-foreground mb-4 sm:mb-5 md:mb-6">Growth Focused</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Tools designed to accelerate your learning curve and boost your productivity exponentially.
                  </p>
                </div>
              </div>
              <div className="glass-card group p-6 sm:p-8 md:p-10">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 md:mb-10 group-hover:scale-110 transition-[var(--transition-smooth)] p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                  <img 
                    src={communityDrivenImg} 
                    alt="Community Driven" 
                    className="w-full h-full object-contain p-1 sm:p-2"
                  />
                </div>
                <div className="px-2 sm:px-4 md:px-6">
                  <h4 className="text-lg sm:text-xl heading-modern text-foreground mb-4 sm:mb-5 md:mb-6">Community Driven</h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Join thousands of developers and learners sharing tools and knowledge in their journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
