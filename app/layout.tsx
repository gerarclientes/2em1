import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://no-calor-comunicacao.luisedumeira.chatgpt.site"),
  title: "Dois em Um | Devocional de 30 dias para casais",
  description:
    "Uma jornada devocional guiada para casais que desejam fortalecer a conexão, a fé e colocar Deus no centro da rotina.",
  keywords: [
    "devocional para casais",
    "devocional de 30 dias",
    "casamento cristão",
    "casais evangélicos",
    "fé e relacionamento",
    "Dois em Um",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Dois em Um",
    title: "Dois em Um | Devocional de 30 dias para casais",
    description:
      "Uma jornada devocional guiada para casais que desejam fortalecer a conexão, a fé e colocar Deus no centro da rotina.",
    images: [
      {
        url: "/assets/og-dois-em-um.png",
        width: 1200,
        height: 630,
        alt: "Dois em Um — devocional de 30 dias para casais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dois em Um | Devocional de 30 dias para casais",
    description:
      "Uma jornada devocional guiada para casais que desejam fortalecer a conexão, a fé e colocar Deus no centro da rotina.",
    images: ["/assets/og-dois-em-um.png"],
  },
  icons: {
    icon: [
      {
        url: "/assets/favicon-dois-em-um.png",
        type: "image/png",
        sizes: "500x500",
      },
    ],
    shortcut: "/assets/favicon-dois-em-um.png",
    apple: "/assets/favicon-dois-em-um.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="preload"
          as="image"
          href="/assets/hero-couple-reading.webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/fonts/hedvig-letters-serif-latin-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/nunito-sans-latin-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
