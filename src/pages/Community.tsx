import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MessageCircle, Users, BookOpen, Lightbulb, Github, Twitter, Phone } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Join the <span className="text-primary font-bold">LearnForFree</span> Community
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with thousands of learners worldwide. Share knowledge, discover resources, 
                and grow together in our supportive learning community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a 
                  href="https://chat.whatsapp.com/E3wsUd8dY4d7ppDDFZfVr7?mode=r_c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 no-underline"
                >
                  <Phone size={20} />
                  Join WhatsApp Community
                </a>
                <a 
                  href="https://github.com/Raghul-M" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center gap-2 no-underline"
                >
                  <Github size={20} />
                  Contribute on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                What Makes Our Community Special
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our community is built on the principles of collaboration, support, and shared learning.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4 p-6 bg-card border border-border rounded-lg hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Study Groups</h3>
                <p className="text-muted-foreground">
                  Join or create study groups for specific topics and learn together with peers.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 bg-card border border-border rounded-lg hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Resource Sharing</h3>
                <p className="text-muted-foreground">
                  Discover and share amazing free learning resources with the community.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 bg-card border border-border rounded-lg hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Learning Paths</h3>
                <p className="text-muted-foreground">
                  Get guidance on structured learning paths for different skills and careers.
                </p>
              </div>

              <div className="text-center space-y-4 p-6 bg-card border border-border rounded-lg hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Get help and support from fellow learners and mentors anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Platforms */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Where to Find Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect with us across different platforms and choose the one that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4 hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]">
                <div className="w-16 h-16 bg-[#333] rounded-full flex items-center justify-center mx-auto">
                  <Github className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">GitHub</h3>
                <p className="text-muted-foreground">
                  Contribute to our open-source project, report issues, or suggest new features.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>⭐ 1,200+ stars</span>
                </div>
                <button className="btn-secondary w-full">
                  View Repository
                </button>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4 hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]">
                <div className="w-16 h-16 bg-[#1DA1F2] rounded-full flex items-center justify-center mx-auto">
                  <Twitter className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Twitter</h3>
                <p className="text-muted-foreground">
                  Follow us for updates, learning tips, and featured resources from our community.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span>📈 2,500+ followers</span>
                </div>
                <button className="btn-secondary w-full">
                  Follow Us
                </button>
              </div>

              <div className="bg-card border border-border rounded-lg p-8 text-center space-y-4 hover:shadow-[var(--shadow-medium)] transition-[var(--transition-smooth)]">
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">WhatsApp Community</h3>
                <p className="text-muted-foreground">
                  Join our WhatsApp community for instant updates, quick help, and mobile-friendly discussions.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Users size={16} />
                  <span>Active community</span>
                </div>
                <a 
                  href="https://chat.whatsapp.com/E3wsUd8dY4d7ppDDFZfVr7?mode=r_c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full block text-center no-underline"
                >
                  Join WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Community Guidelines
                </h2>
                <p className="text-lg text-muted-foreground">
                  To maintain a positive and supportive environment for everyone.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">✅ Do's</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-success font-bold">•</span>
                      <span>Be respectful and supportive of all community members</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-success font-bold">•</span>
                      <span>Share high-quality, free educational resources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-success font-bold">•</span>
                      <span>Help others with their learning journey</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-success font-bold">•</span>
                      <span>Provide constructive feedback and suggestions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-success font-bold">•</span>
                      <span>Use appropriate channels for different topics</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">❌ Don'ts</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-destructive font-bold">•</span>
                      <span>Share or promote paid courses as free resources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive font-bold">•</span>
                      <span>Engage in harassment or discriminatory behavior</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive font-bold">•</span>
                      <span>Spam the community with irrelevant content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive font-bold">•</span>
                      <span>Share pirated or copyrighted material</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive font-bold">•</span>
                      <span>Use the platform for commercial promotion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-[var(--gradient-hero)]">
          <div className="container mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Ready to Join?</h2>
              <p className="text-lg text-muted-foreground">
                Become part of a community that believes in the power of free education and collaborative learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a 
                  href="https://chat.whatsapp.com/E3wsUd8dY4d7ppDDFZfVr7?mode=r_c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 no-underline"
                >
                  <Phone size={20} />
                  Join WhatsApp Community
                </a>
                <a href="/" className="btn-secondary no-underline">
                  Browse Resources
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

export default Community;