import { ExternalLink, Star, Clock, Users } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  provider: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  pricing: "FREE" | "FREE + PAID";
  category: string;
  thumbnail: string;
  url: string;
  rating?: number;
  duration?: string;
  students?: number;
  tags: string[];
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  provider,
  difficulty,
  pricing,
  thumbnail,
  url,
  rating,
  duration,
  students,
  tags
}) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner": return "text-success bg-success/10";
      case "Intermediate": return "text-warning bg-warning/10";
      case "Advanced": return "text-destructive bg-destructive/10";
      default: return "text-muted-foreground bg-muted";
    }
  };

  return (
    <div className="resource-card animate-fade-in group">
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-2xl mb-6">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-52 object-cover group-hover:scale-110 transition-[var(--transition-slow)]"
        />
        
        {/* Modern overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-[var(--transition-smooth)]"></div>
        
        {/* Pricing Badge */}
        <div className="absolute top-4 right-4">
          <span className={pricing === "FREE" ? "badge-free" : "badge-freemium"}>
            {pricing}
          </span>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold glass-effect ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="heading-modern text-xl text-foreground group-hover:text-primary transition-[var(--transition-smooth)] line-clamp-2 mb-2">
            {title}
          </h3>
          <p className="text-sm text-primary font-semibold">{provider}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Metadata */}
        {rating && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star size={14} className="fill-warning text-warning" />
              <span className="text-sm font-semibold text-foreground">{rating}</span>
            </div>
            {students && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Users size={12} />
                <span>{students.toLocaleString()} learners</span>
              </div>
            )}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-accent/50 text-accent-foreground rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
          {tags.length > 2 && (
            <span className="px-3 py-1 text-xs text-muted-foreground bg-muted/50 rounded-full">
              +{tags.length - 2}
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full flex items-center justify-center gap-2 no-underline relative z-10"
          >
            <span>Learn More</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;