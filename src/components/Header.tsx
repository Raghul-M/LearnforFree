import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, MessageCircle, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuToggle = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Element;
      if (!target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed-navbar">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-4 md:gap-4">
          {/* Mobile spacer for centered logo */}
          <div className="md:hidden w-12"></div>

          {/* Logo */}
          <div className="flex-shrink-0 flex-1 md:flex-initial md:w-44 text-center md:text-left">
            <Link to="/" onClick={scrollToTop} className="text-3xl font-bold heading-modern text-primary interactive-glow">
              Learnforfree.
            </Link>
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 flex-1">
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="text-foreground hover:text-primary transition-[var(--transition-fast)] font-medium text-sm tracking-wide uppercase opacity-80 hover:opacity-100 px-4 py-2 rounded-lg hover:bg-accent/30"
            >
              Home
            </Link>
            <Link 
              to="/youtube" 
              onClick={scrollToTop}
              className="text-foreground hover:text-primary transition-[var(--transition-fast)] font-medium text-sm tracking-wide uppercase opacity-80 hover:opacity-100 px-4 py-2 rounded-lg hover:bg-accent/30"
            >
              YouTube
            </Link>
            <Link 
              to="/about" 
              onClick={scrollToTop}
              className="text-foreground hover:text-primary transition-[var(--transition-fast)] font-medium text-sm tracking-wide uppercase opacity-80 hover:opacity-100 px-4 py-2 rounded-lg hover:bg-accent/30"
            >
              About
            </Link>
            <Link 
              to="/community" 
              onClick={scrollToTop}
              className="text-foreground hover:text-primary transition-[var(--transition-fast)] font-medium text-sm tracking-wide uppercase opacity-80 hover:opacity-100 px-4 py-2 rounded-lg hover:bg-accent/30"
            >
              Community
            </Link>
          </nav>

          {/* Mobile menu button - Right corner */}
          <div className="md:hidden">
            <button 
              onClick={handleMobileMenuToggle}
              onTouchStart={handleMobileMenuToggle}
              className="mobile-menu-button text-foreground hover:text-primary transition-[var(--transition-fast)] p-4 rounded-full hover:bg-accent/50 relative z-[60] min-w-[48px] min-h-[48px] flex items-center justify-center touch-manipulation"
              aria-label="Toggle mobile menu"
              type="button"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Social Media Icons & CTA */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
            <div className="hidden sm:flex items-center space-x-2">
              <a 
                href="https://github.com/Raghul-M" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-[var(--transition-fast)] interactive-lift p-2 rounded-full hover:bg-accent/50"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://x.com/RaghulM01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-[var(--transition-fast)] interactive-lift p-2 rounded-full hover:bg-accent/50"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/m-raghul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-[var(--transition-fast)] interactive-lift p-2 rounded-full hover:bg-accent/50"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
            
            {/* Separator */}
            <div className="hidden lg:block w-px h-6 bg-border"></div>
            
            {/* CTA Button */}
            <div className="hidden lg:block">
              <a 
                href="https://chat.whatsapp.com/E3wsUd8dY4d7ppDDFZfVr7?mode=r_c" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-sm px-6 py-3 relative z-10 no-underline"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-[88px] left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border shadow-lg z-[10000] animate-fade-in mobile-menu-container">
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-6">
                {/* Navigation Links */}
                <nav className="space-y-4">
                  <Link 
                    to="/" 
                    onClick={() => { toggleMobileMenu(); scrollToTop(); }}
                    className="block text-foreground hover:text-primary transition-[var(--transition-fast)] font-medium text-lg tracking-wide px-4 py-3 rounded-lg hover:bg-accent/30"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/youtube" 
                    onClick={() => { toggleMobileMenu(); scrollToTop(); }}
                    className="block text-foreground hover:text-primary transition-[var(--transition-fast)] font-medium text-lg tracking-wide px-4 py-3 rounded-lg hover:bg-accent/30"
                  >
                    YouTube
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={() => { toggleMobileMenu(); scrollToTop(); }}
                    className="block text-foreground hover:text-primary transition-[var(--transition-fast)] font-medium text-lg tracking-wide px-4 py-3 rounded-lg hover:bg-accent/30"
                  >
                    About
                  </Link>
                  <Link 
                    to="/community" 
                    onClick={() => { toggleMobileMenu(); scrollToTop(); }}
                    className="block text-foreground hover:text-primary transition-[var(--transition-fast)] font-medium text-lg tracking-wide px-4 py-3 rounded-lg hover:bg-accent/30"
                  >
                    Community
                  </Link>
                </nav>

                {/* Social Links */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-foreground font-semibold mb-4 px-4">Connect with us</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href="https://github.com/Raghul-M" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-[var(--transition-fast)] p-4 rounded-lg hover:bg-accent/30"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="https://x.com/RaghulM01" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-[var(--transition-fast)] p-4 rounded-lg hover:bg-accent/30"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                      <span>Twitter</span>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/m-raghul/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-[var(--transition-fast)] p-4 rounded-lg hover:bg-accent/30"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="border-t border-border pt-6">
                  <a 
                    href="https://chat.whatsapp.com/E3wsUd8dY4d7ppDDFZfVr7?mode=r_c" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => { toggleMobileMenu(); scrollToTop(); }}
                    className="btn-primary text-center block text-base px-6 py-4 no-underline"
                  >
                    Join Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;