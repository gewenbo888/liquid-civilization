import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const TITLE_EN = "Liquid Civilization · The Global History, Chemistry, Culture, Biology, Economy & Psychology of Beverages";
const TITLE_ZH = "液体文明 · 饮品的全球历史、化学、文化、生物学、经济与心理";
const DESC =
  "A civilisation-scale, bilingual exploration of beverages — how tea, coffee, beer, wine, spirits, cacao, dairy ferments, soda, energy drinks and kombucha shaped trade, religion, labour, ritual, addiction, nightlife, productivity and identity. The history of drinks is the history of chemistry flowing through civilisation.";

export const metadata: Metadata = {
  metadataBase: new URL("https://liquid-civilization.psyverse.fun"),
  title: `${TITLE_EN} | ${TITLE_ZH}`,
  description: DESC,
  keywords: [
    "beverages", "drinks history", "tea", "coffee", "beer", "wine", "spirits", "cacao",
    "soda", "Coca-Cola", "energy drinks", "kombucha", "fermentation", "caffeine", "ethanol",
    "sugar", "coffeehouse", "tea trade", "Opium Wars", "sugar trade", "rum triangle",
    "beverage chemistry", "drink culture", "food history", "civilisation",
    "液体文明", "饮品历史", "茶", "咖啡", "啤酒", "葡萄酒", "发酵", "咖啡馆", "汽水", "能量饮料",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/", "x-default": "/" } },
  openGraph: {
    title: TITLE_EN,
    description:
      "Civilisation can be read through what people drink. A bilingual atlas of beverages as chemistry, ritual, economy, biology and identity.",
    url: "https://liquid-civilization.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_EN,
    description: "Tea, coffee, beer, soda — the history of beverages is the history of chemistry flowing through civilisation itself.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#0c0a08" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: TITLE_EN,
              alternateName: TITLE_ZH,
              description: DESC,
              url: "https://liquid-civilization.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body className="bg-roast-950 text-foam-100 antialiased">
        {children}
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
