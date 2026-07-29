import AmbientBackground from '@/components/AmbientBackground';
import CursorTracker from '@/components/CursorTracker';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/nav/SiteHeader';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';
import { profile } from '@/data/profile';
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-display",
})

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrainsMono",
})

const siteUrl = "https://olas-cyan.vercel.app";
const siteName = `${profile.shortName} — Product Designer`;
const siteDescription =
  "Olaoluwa Ajayi (Ola Ajayi) is a product designer in Abuja, Nigeria crafting clear, intuitive digital products across healthtech, mobility, energy, and fintech — from UX strategy to polished, shippable interfaces.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} (Ola Ajayi) — Product Designer in Abuja, Nigeria`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Olaoluwa Ajayi",
    "Ola Ajayi",
    "Product Designer Abuja",
    "UI/UX Designer Nigeria",
    "Product Designer Nigeria",
    "UX Designer Abuja",
    "Design systems designer",
    "Freelance product designer Nigeria",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "L7xlyNb1b1Hczg4J9SQjDjrTI1uNTm4hfDclF-mOZ5g",
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
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${profile.name} (Ola Ajayi) — Product Designer in Abuja, Nigeria`,
    description: siteDescription,
    images: [
      {
        url: "/assets/hero-image.png",
        width: 1448,
        height: 1086,
        alt: `${profile.name} — Product Designer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} (Ola Ajayi) — Product Designer in Abuja, Nigeria`,
    description: siteDescription,
    images: ["/assets/hero-image.png"],
    creator: "@Ajayi_Olaoluwa_",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.shortName,
  jobTitle: profile.role,
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}/assets/hero-image.png`,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  sameAs: [
    "https://www.behance.net/ajayiolaoluwa",
    "https://www.linkedin.com/in/olaoluwa-bajayi/",
    "https://x.com/Ajayi_Olaoluwa_",
    "https://www.instagram.com/ola_ajayi_/",
  ],
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable} font-sans`}>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
                />
                <ScrollProgress />
                <AmbientBackground />
                <CursorTracker />
                <SiteHeader />
                <PageTransition>
                    {children}
                </PageTransition>
                <Footer />
            </body>
		</html>
	);
}
