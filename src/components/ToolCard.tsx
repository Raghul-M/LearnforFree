import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  url: string;
  logo: string;
  category: string;
  pricing?: "FREE" | "FREE + PREMIUM";
}

const ToolCard: React.FC<ToolCardProps> = ({
  name,
  description,
  url,
  logo,
  pricing = "FREE"
}) => {
  return (
    <div className="tool-card-new animate-fade-in group">
            {/* Logo Container - Transparent */}
      <div className="relative mb-6 h-32 flex items-center justify-center">
                  <img
            src={logo}
            alt={`${name} logo`}
            className={`${name === "NotebookLM" || name === "DeepLearning.AI" ? "h-32 w-32" : "h-24 w-auto"} object-contain group-hover:scale-110 transition-[var(--transition-smooth)] mx-auto`}
          />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="heading-modern text-xl text-foreground group-hover:text-primary transition-[var(--transition-smooth)] line-clamp-1 mb-2">
            {name}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Pricing Badge */}
        <div className="flex justify-center">
          <span className={pricing === "FREE" ? "badge-free" : "badge-freemium"}>
            {pricing}
          </span>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tool w-full flex items-center justify-center gap-2 no-underline relative z-10"
          >
            <span className="text-sm">Try Now</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToolCard; 