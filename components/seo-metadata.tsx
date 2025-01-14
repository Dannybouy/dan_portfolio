import { Metadata } from "next";

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

export function SEOMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/images/7.webp",
}: SEOMetadataProps): Metadata {
  const siteName = "Daniel Okpara - Software Engineer";
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "software engineering",
      "frontend developer",
      "frontend development",
      "software developer",
      ...keywords,
    ],
    openGraph: {
      title: fullTitle,
      description,
      type: "website",
      url: "https://danielokpara.me/",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@IamDannybouy20",
    },
  };
}
