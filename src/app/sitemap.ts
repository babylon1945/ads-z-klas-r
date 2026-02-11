import type { MetadataRoute } from "next";

const baseUrl = "https://wolfsgrup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kurumsal/ekibimiz`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/kurumsal/sss`,
      lastModified: new Date(),
    },
  ];
}
