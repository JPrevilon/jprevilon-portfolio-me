import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/profile";
import { portfolioProjects } from "@/data/projects";

const lastModified = new Date("2026-06-03");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...portfolioProjects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
