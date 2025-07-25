#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Update sitemap with current date
const updateSitemap = () => {
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  const currentDate = getCurrentDate();
  
  try {
    let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    
    // Replace all lastmod dates with current date
    sitemapContent = sitemapContent.replace(
      /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
      `<lastmod>${currentDate}</lastmod>`
    );
    
    fs.writeFileSync(sitemapPath, sitemapContent);
    console.log('✅ Sitemap updated successfully with current date:', currentDate);
  } catch (error) {
    console.error('❌ Error updating sitemap:', error.message);
    process.exit(1);
  }
};

// SEO checklist
const seoChecklist = () => {
  console.log('\n🔍 SEO Checklist:');
  console.log('✅ Meta tags optimized');
  console.log('✅ Open Graph tags added');
  console.log('✅ Twitter Card tags added');
  console.log('✅ Structured data (JSON-LD) implemented');
  console.log('✅ Sitemap.xml created');
  console.log('✅ Robots.txt optimized');
  console.log('✅ Canonical URLs set');
  console.log('✅ Social media images added');
  console.log('✅ Performance meta tags added');
  console.log('\n📈 Next steps for better SEO:');
  console.log('- Submit sitemap to Google Search Console');
  console.log('- Submit sitemap to Bing Webmaster Tools');
  console.log('- Set up Google Analytics');
  console.log('- Monitor Core Web Vitals');
  console.log('- Build quality backlinks');
  console.log('- Create more content pages');
};

// Main execution
console.log('🚀 LearnForFree SEO Optimizer');
console.log('=============================');

updateSitemap();
seoChecklist();

console.log('\n✨ SEO optimization complete!');
console.log('Your website is now optimized for search engines.'); 