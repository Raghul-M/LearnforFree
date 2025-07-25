import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "LearnForFree - Democratizing Free Quality Education for All | Free Learning Resources",
  description = "Access 500+ verified free educational resources, development tools, and courses. From coding bootcamps to entrepreneurship guides - democratizing quality education for students, developers, and lifelong learners worldwide.",
  keywords = "free education, learning resources, coding courses, development tools, free online courses, programming tutorials, entrepreneurship education, student resources, free software, educational platform, learn coding free, developer tools, online learning, free tutorials, education for all, quality education, verified resources, learning platform",
  image = "https://learnforfree.vercel.app/hero-image.jpg",
  url = "https://learnforfree.vercel.app/",
  type = "website",
  structuredData
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic SEO meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph meta tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'LearnForFree', true);
    
    // Twitter meta tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:url', url);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Add structured data if provided
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"][data-dynamic]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-dynamic', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

  }, [title, description, keywords, image, url, type, structuredData]);

  return null; // This component doesn't render anything
};

export default SEOHead; 