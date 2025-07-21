import { X, ExternalLink, ArrowRight, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ToolModalProps {
  isOpen: boolean;
  onClose: () => void;
  tool: {
    name: string;
    description: string;
    url: string;
    logo: string;
    category: string;
    pricing?: "FREE" | "FREE + PREMIUM";
  };
}

const ToolModal: React.FC<ToolModalProps> = ({ isOpen, onClose, tool }) => {
  // Close modal on escape key and handle body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.classList.add('modal-open');
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Prevent modal content click from closing modal
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  // Create portal target
  const modalRoot = document.getElementById('modal-root') || document.body;

  // Tool-specific instructions
  const getToolInstructions = (toolName: string) => {
    const instructions: Record<string, {
      steps: string[];
      tips: string[];
      benefits: string[];
    }> = {
      "GitHub Codespaces": {
        steps: [
          "Navigate to any GitHub repository",
          "Click the green 'Code' button",
          "Select 'Codespaces' tab",
          "Click 'Create codespace on main'",
          "Wait for your development environment to load",
          "Start coding directly in your browser!"
        ],
        tips: [
          "Free tier includes 60 hours per month",
          "VS Code extensions work seamlessly",
          "Perfect for testing and learning"
        ],
        benefits: [
          "No local setup required",
          "Consistent development environment",
          "Access from anywhere"
        ]
      },
      "NotebookLM": {
        steps: [
          "Go to notebooklm.google.com",
          "Sign in with your Google account",
          "Click 'Create' to start a new notebook",
          "Upload your documents or add sources",
          "Ask questions about your content",
          "Get AI-powered insights and summaries"
        ],
        tips: [
          "Supports PDFs, text files, and web sources",
          "Great for research and studying",
          "Creates automatic source citations"
        ],
        benefits: [
          "Understand complex documents quickly",
          "Generate study guides automatically",
          "Ask questions in natural language"
        ]
      },
      "Google Colab": {
        steps: [
          "Visit colab.research.google.com",
          "Sign in with Google account",
          "Click 'New notebook' or open existing one",
          "Write Python code in cells",
          "Press Shift+Enter to run code",
          "Access free GPU for machine learning"
        ],
        tips: [
          "Free GPU access for 12 hours",
          "Save notebooks to Google Drive",
          "Install packages with !pip install"
        ],
        benefits: [
          "No setup required for ML projects",
          "Free GPU and TPU access",
          "Easy sharing and collaboration"
        ]
      },
      "CS50": {
        steps: [
          "Go to cs50.harvard.edu",
          "Choose your course (CS50x is most popular)",
          "Create a free edX account",
          "Watch lectures and complete problem sets",
          "Submit assignments through CS50's IDE",
          "Earn a verified certificate (optional)"
        ],
        tips: [
          "Start with CS50x for beginners",
          "Join the CS50 community on Discord",
          "Use CS50 IDE for coding assignments"
        ],
        benefits: [
          "Harvard-quality computer science education",
          "Complete curriculum from basics to advanced",
          "Active community support"
        ]
      },
      "FreeCodeCamp": {
        steps: [
          "Visit freecodecamp.org",
          "Create a free account",
          "Choose a curriculum path",
          "Complete interactive coding challenges",
          "Build projects to practice skills",
          "Earn certifications"
        ],
        tips: [
          "Start with Responsive Web Design",
          "Practice regularly for best results",
          "Join the freeCodeCamp forum for help"
        ],
        benefits: [
          "Learn by building real projects",
          "Completely free certifications",
          "Active community of learners"
        ]
      },
      "Y Combinator": {
        steps: [
          "Visit ycombinator.com",
          "Explore the Startup School section",
          "Watch free lectures on entrepreneurship",
          "Read essays and articles by successful founders",
          "Apply YC's advice to your startup idea",
          "Consider applying to the accelerator program"
        ],
        tips: [
          "Start with Paul Graham's essays",
          "Take the free Startup School course",
          "Join the YC community forum"
        ],
        benefits: [
          "Learn from successful entrepreneurs",
          "Free access to world-class startup advice",
          "Network with other founders"
        ]
      },
      "GitHub Student Developer Pack": {
        steps: [
          "Go to education.github.com/pack",
          "Verify your student status",
          "Create or sign in to GitHub account",
          "Complete the application process",
          "Browse available tools and services",
          "Access your free premium tools"
        ],
        tips: [
          "Use your .edu email for verification",
          "Explore all the included tools",
          "Benefits are available while you're a student"
        ],
        benefits: [
          "Free access to premium developer tools",
          "Cloud hosting credits",
          "Professional development software"
        ]
      },
      "Google Gemini for Students": {
        steps: [
          "Visit gemini.google.com/app",
          "Sign in with your Google account",
          "Start with simple questions or tasks",
          "Upload documents for analysis",
          "Use it for research and writing assistance",
          "Explore advanced features like coding help"
        ],
        tips: [
          "Be specific in your prompts",
          "Use it for brainstorming and research",
          "Verify important information from other sources"
        ],
        benefits: [
          "Free AI assistant for learning",
          "Help with research and writing",
          "24/7 availability for study support"
        ]
      },
      "DeepLearning.AI": {
        steps: [
          "Go to deeplearning.ai",
          "Browse available courses",
          "Sign up for free courses on Coursera",
          "Start with Machine Learning Specialization",
          "Complete hands-on assignments",
          "Build your AI portfolio"
        ],
        tips: [
          "Start with Andrew Ng's courses",
          "Apply for financial aid if needed",
          "Join the DeepLearning.AI community"
        ],
        benefits: [
          "Learn AI from industry experts",
          "Hands-on practical projects",
          "Recognized certificates"
        ]
      },
      "Roadmap.sh": {
        steps: [
          "Visit roadmap.sh",
          "Choose your learning path (Frontend, Backend, etc.)",
          "Start with the fundamentals",
          "Follow the step-by-step roadmap",
          "Practice with recommended resources",
          "Track your progress"
        ],
        tips: [
          "Don't skip the fundamentals",
          "Practice each concept before moving on",
          "Join the roadmap.sh community"
        ],
        benefits: [
          "Clear learning path for developers",
          "Curated resources for each topic",
          "Community-driven content"
        ]
      }
    };

    return instructions[toolName] || {
      steps: [
        "Click the link below to visit the platform",
        "Create a free account if required",
        "Explore the available features",
        "Start with beginner-friendly content",
        "Practice regularly to improve skills",
        "Join the community for support"
      ],
      tips: [
        "Take advantage of free tier offerings",
        "Read documentation and tutorials",
        "Connect with other learners"
      ],
      benefits: [
        "Free access to powerful tools",
        "Learn at your own pace",
        "Build real-world skills"
      ]
    };
  };

  const instructions = getToolInstructions(tool.name);

  return createPortal(
    <div 
      className="modal-backdrop" 
      onClick={handleBackdropClick}
    >
      <div 
        className="modal-content" 
        onClick={handleContentClick}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className="w-12 h-12 object-contain"
            />
            <div>
              <h2 className="text-2xl font-bold text-foreground">{tool.name}</h2>
              <p className="text-muted-foreground">How to get started</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Description */}
          <div>
            <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
            <div className="flex items-center gap-2 mt-3">
              <span className={tool.pricing === "FREE" ? "badge-free" : "badge-freemium"}>
                {tool.pricing}
              </span>
            </div>
          </div>

          {/* Step-by-step guide */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <ArrowRight className="text-primary" size={20} />
              Step-by-step Guide
            </h3>
            <div className="space-y-3">
              {instructions.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-accent/20 rounded-lg">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} />
              Pro Tips
            </h3>
            <ul className="space-y-2">
              {instructions.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{tip}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Why Use {tool.name}?
            </h3>
            <div className="grid gap-3">
              {instructions.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <CheckCircle className="text-green-500" size={16} />
                  <p className="text-foreground text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 no-underline flex-1"
                onClick={onClose}
              >
                <span>Start Using {tool.name}</span>
                <ExternalLink size={16} />
              </a>
              <button
                onClick={onClose}
                className="btn-secondary flex-shrink-0"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ToolModal; 