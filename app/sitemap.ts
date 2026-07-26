import type { MetadataRoute } from "next";

const siteUrl = "https://no-calor-comunicacao.luisedumeira.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
