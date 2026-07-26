import type { MetadataRoute } from "next";

const siteUrl = "https://no-calor-comunicacao.luisedumeira.chatgpt.site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
