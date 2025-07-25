import heroImage from "@/assets/Social media-bro.svg";
import { BookOpen, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-gradient py-12 md:py-24 px-6 min-h-[80vh] md:min-h-[85vh] flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-10 animate-slide-up">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl heading-modern text-foreground leading-[1.2] text-balance">
                Democratizing{" "}
                <span className="text-primary font-bold">free quality education</span>
                <br />
                <span className="text-primary font-bold">for all</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl text-balance">
                Discover verified, high-quality educational resources curated for students, 
                developers, entrepreneurs, and lifelong learners.
              </p>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 pt-6 md:pt-8">
              <div className="text-center group">
                <div className="glass-effect rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 mb-4 group-hover:scale-105 transition-[var(--transition-smooth)]">
                  <div className="py-2 sm:py-3 md:py-4">
                    <BookOpen className="text-primary mx-auto mb-3 sm:mb-4" size={28} />
                    <div className="text-2xl sm:text-3xl heading-modern text-foreground mb-2">500+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Resources</div>
                  </div>
                </div>
              </div>
              <div className="text-center group">
                <div className="glass-effect rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 mb-4 group-hover:scale-105 transition-[var(--transition-smooth)]">
                  <div className="py-2 sm:py-3 md:py-4">
                    <Users className="text-primary mx-auto mb-3 sm:mb-4" size={28} />
                    <div className="text-2xl sm:text-3xl heading-modern text-foreground mb-2">10K+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Learners</div>
                  </div>
                </div>
              </div>
              <div className="text-center group">
                <div className="glass-effect rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 mb-4 group-hover:scale-105 transition-[var(--transition-smooth)]">
                  <div className="py-2 sm:py-3 md:py-4">
                    <Award className="text-primary mx-auto mb-3 sm:mb-4" size={28} />
                    <div className="text-2xl sm:text-3xl heading-modern text-foreground mb-2">100%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground font-medium">Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-[var(--shadow-xl)]">
              <img
                src={heroImage}
                alt="Social media and community learning illustration"
                className="w-full h-auto object-contain transform hover:scale-105 transition-[var(--transition-slow)] max-w-none"
              />
              {/* Modern overlay */}
              <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-5"></div>
            </div>

            
            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-8 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;