import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" onClick={scrollToTop} className="text-3xl font-bold text-primary mb-4 block hover:text-primary/80 transition-colors">
              Learnforfree.
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Discover powerful, free tools to accelerate your learning journey. 
              From coding to entrepreneurship, we've curated the best resources for your success.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Raghul-M" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://x.com/RaghulM01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/m-raghul/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/youtube" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">
                  YouTube
                </Link>
              </li>
              <li>
                <Link to="/community" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-primary font-semibold text-lg mb-6">Categories</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/youtube" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">
                  Tech Channels
                </Link>
              </li>
              <li>
                <Link to="/youtube" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">
                  Student Resources
                </Link>
              </li>
              <li>
                <Link to="/youtube" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">
                  Entrepreneurship
                </Link>
              </li>
              <li>
                <Link to="/youtube" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">
                  Soft Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Learnforfree. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-primary fill-current" />
              <span>for learners worldwide</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a 
                href="https://chat.whatsapp.com/E3wsUd8dY4d7ppDDFZfVr7?mode=r_c" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Contact Us
              </a>
              <Link to="/community" onClick={scrollToTop} className="text-gray-400 hover:text-primary transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 