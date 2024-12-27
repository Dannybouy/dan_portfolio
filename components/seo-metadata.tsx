import { Metadata } from 'next'

interface SEOMetadataProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

export function SEOMetadata({
  title,
  description,
  keywords = [],
  ogImage = '/images/og-image.jpg',
}: SEOMetadataProps): Metadata {
  const siteName = 'Spencer Sharp - Software Designer & Entrepreneur'
  const fullTitle = `${title} | ${siteName}`

  return {
    title: fullTitle,
    description,
    keywords: ['software design', 'entrepreneurship', 'space technology', ...keywords],
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      url: 'https://www.spencersharp.com', // Replace with your actual domain
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
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@spencersharp', // Replace with your actual Twitter handle
    },
  }
}

