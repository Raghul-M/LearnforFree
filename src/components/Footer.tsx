import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, MessageCircle, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-bold text-primary mb-4 block hover:text-primary/80 transition-colors">
              Learnforfree.
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Discover powerful, free tools to accelerate your learning journey. 
              From coding to entrepreneurship, we've curated the best resources for your success.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Discord"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-400 hover:text-primary transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <a href="#tools" className="text-gray-400 hover:text-primary transition-colors">
                  Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-primary font-semibold text-lg mb-6">Categories</h4>
            <ul className="space-y-4">
              <li>
                <a href="#developers" className="text-gray-400 hover:text-primary transition-colors">
                  Developers
                </a>
              </li>
              <li>
                <a href="#students" className="text-gray-400 hover:text-primary transition-colors">
                  Students
                </a>
              </li>
              <li>
                <a href="#entrepreneurship" className="text-gray-400 hover:text-primary transition-colors">
                  Entrepreneurship
                </a>
              </li>
              <li>
                <a href="#soft-skills" className="text-gray-400 hover:text-primary transition-colors">
                  Soft Skills
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-primary font-semibold text-xl mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Get notified when we add new tools and resources to help accelerate your learning.
            </p>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-600"
                />
              </div>
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Learnforfree. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-primary fill-current" />
              <span>for learners worldwide</span>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 