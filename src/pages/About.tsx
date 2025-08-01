import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Heart, Target, Users, Award, CheckCircle, Zap, Shield, Github, Linkedin, Globe, BookOpen, User, Twitter, Instagram } from "lucide-react";
import profilePic from "@/assets/profile-pic.png";

const About = () => {
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About LearnForFree",
    "description": "Learn about LearnForFree's mission to democratize access to quality education through curated free learning resources.",
    "url": "https://learnforfree.vercel.app/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "LearnForFree",
      "description": "Democratizing access to quality education by curating the best free learning resources",
      "url": "https://learnforfree.vercel.app",
      "foundingDate": "2024",
      "mission": "To democratize access to quality education and empower learners worldwide",
      "sameAs": [
        "https://github.com/learnforfree",
        "https://twitter.com/learnforfree"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About LearnForFree - Our Mission to Democratize Quality Education"
        description="Learn about LearnForFree's mission to democratize access to quality education through 500+ curated free learning resources, development tools, and courses for students, developers, and lifelong learners."
        keywords="about learnforfree, free education mission, democratize education, quality learning resources, educational platform, free learning tools, education for all, learning accessibility"
        url="https://learnforfree.vercel.app/about"
        structuredData={aboutStructuredData}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient py-12 md:py-20 px-4 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Profile Picture - Left */}
              <div className="order-2 lg:order-1 animate-fade-in">
                <div className="bg-white rounded-full shadow-lg border border-gray-200 aspect-square w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto overflow-hidden">
                  <img 
                    src={profilePic} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content - Right */}
              <div className="order-1 lg:order-2 text-center lg:text-left space-y-4 md:space-y-8 animate-slide-up">
                <h1 className="heading-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4 md:mb-8">
                  Meet the creator
                </h1>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    Hi, I'm <span className="text-primary font-semibold">Raghul</span>, and I believe that everyone deserves access to quality education, 
                    regardless of their financial situation.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    As a self-taught developer, I know firsthand how challenging it can be to find reliable, high-quality learning resources. 
                    I spent countless hours searching through scattered content, trying to separate the gems from the noise. 
                    That's when I realized there had to be a better way.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                    LearnforFree was born from my passion to help others avoid the same struggles I faced. 
                    <span className="text-primary font-semibold"> Every resource here is personally vetted</span> because I believe 
                    your time is valuable, and you deserve the best learning experience possible.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 pt-4 md:pt-8">
                  <div className="glass-effect px-3 md:px-6 py-2 md:py-3 rounded-full">
                    <span className="text-sm md:text-base text-foreground font-semibold"><span className="text-primary">●</span> Mission-Driven</span>
                  </div>
                  <div className="glass-effect px-3 md:px-6 py-2 md:py-3 rounded-full">
                    <span className="text-sm md:text-base text-foreground font-semibold"><span className="text-primary">●</span> Self-Taught Journey</span>
                  </div>
                  <div className="glass-effect px-3 md:px-6 py-2 md:py-3 rounded-full">
                    <span className="text-sm md:text-base text-foreground font-semibold"><span className="text-primary">●</span> Community First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8 animate-fade-in">
              <h2 className="heading-display text-3xl md:text-4xl text-foreground mb-4">
                Connect with <span className="text-primary font-semibold">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow my journey and connect across different platforms
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
              <a 
                href="https://github.com/Raghul-M" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card group text-center animate-fade-in hover:scale-105 transition-[var(--transition-smooth)] p-4"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-3 group-hover:scale-110 transition-[var(--transition-smooth)]">
                  <Github className="text-primary" size={24} />
                </div>
                <h3 className="heading-modern text-base text-foreground mb-1">GitHub</h3>
                <p className="text-xs text-muted-foreground">Code & Projects</p>
              </a>

              <a 
                href="https://www.linkedin.com/in/m-raghul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card group text-center animate-fade-in hover:scale-105 transition-[var(--transition-smooth)] p-4"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-3 group-hover:scale-110 transition-[var(--transition-smooth)]">
                  <Linkedin className="text-primary" size={24} />
                </div>
                <h3 className="heading-modern text-base text-foreground mb-1">LinkedIn</h3>
                <p className="text-xs text-muted-foreground">Professional</p>
              </a>

              <a 
                href="https://x.com/RaghulM01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card group text-center animate-fade-in hover:scale-105 transition-[var(--transition-smooth)] p-4"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-3 group-hover:scale-110 transition-[var(--transition-smooth)]">
                  <Twitter className="text-primary" size={24} />
                </div>
                <h3 className="heading-modern text-base text-foreground mb-1">Twitter</h3>
                <p className="text-xs text-muted-foreground">Social Updates</p>
              </a>

              <a 
                href="https://www.instagram.com/raghul.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card group text-center animate-fade-in hover:scale-105 transition-[var(--transition-smooth)] p-4"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-3 group-hover:scale-110 transition-[var(--transition-smooth)]">
                  <Instagram className="text-primary" size={24} />
                </div>
                <h3 className="heading-modern text-base text-foreground mb-1">Instagram</h3>
                <p className="text-xs text-muted-foreground">Visual Journey</p>
              </a>

              <a 
                href="https://blog.raghul.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card group text-center animate-fade-in hover:scale-105 transition-[var(--transition-smooth)] p-4"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-3 group-hover:scale-110 transition-[var(--transition-smooth)]">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <h3 className="heading-modern text-base text-foreground mb-1">Blogs</h3>
                <p className="text-xs text-muted-foreground">Articles & Insights</p>
              </a>

              <a 
                href="https://topmate.io/m_raghul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card group text-center animate-fade-in hover:scale-105 transition-[var(--transition-smooth)] p-4"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 mx-auto mb-3 group-hover:scale-110 transition-[var(--transition-smooth)]">
                  <User className="text-primary" size={24} />
                </div>
                <h3 className="heading-modern text-base text-foreground mb-1">Topmate</h3>
                <p className="text-xs text-muted-foreground">1:1 Sessions</p>
              </a>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-6">
                <span className="text-primary font-semibold">Our Mission</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                To democratize access to quality education and empower learners worldwide
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="glass-card space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                    <Target className="text-primary" size={32} />
                  </div>
                  <h3 className="heading-modern text-2xl text-foreground">What We Do</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We carefully curate and organize the best free educational resources from across the internet, 
                  making quality learning accessible to everyone regardless of their financial situation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Manually verified quality resources</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Organized by categories and skill levels</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-primary flex-shrink-0" size={20} />
                    <span className="text-muted-foreground">Regular updates and new additions</span>
                  </div>
                </div>
              </div>
              
              <div className="glass-card space-y-8 animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                    <Heart className="text-primary" size={32} />
                  </div>
                  <h3 className="heading-modern text-2xl text-foreground">Why We Exist</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Education should never be limited by financial barriers. We believe that everyone deserves 
                  access to world-class learning opportunities to pursue their dreams and reach their potential.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">Active Learners</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>







        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="glass-card text-center max-w-3xl mx-auto animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10">
                  <Award className="text-primary" size={36} />
                </div>
                <h2 className="heading-display text-3xl md:text-4xl text-foreground">
                  Join Our <span className="text-primary font-semibold">Mission</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Help us make quality education accessible to everyone. Whether you're discovering resources, 
                sharing feedback, or spreading the word - every action makes a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/community" className="btn-primary no-underline">
                  Join Community
                </a>
                <a href="/" className="btn-secondary no-underline">
                  Start Learning
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;