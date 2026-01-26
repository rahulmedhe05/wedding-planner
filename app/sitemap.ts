import { weddingKeywords } from "@/lib/keywords-config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://weddingplannersvadodara.in";
  
  // Current date for lastModified
  const currentDate = new Date().toISOString();
  
  // Homepage
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
  
  // Keyword pages
  const keywordPages: MetadataRoute.Sitemap = weddingKeywords.map((keyword) => ({
    url: `${baseUrl}/${keyword.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  
  return [...staticPages, ...keywordPages];
}
