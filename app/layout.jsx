import AmbientBackground from '@/components/AmbientBackground';
import CursorTracker from '@/components/CursorTracker';
import Footer from '@/components/Footer';
import SiteHeader from '@/components/nav/SiteHeader';
import PageTransition from '@/components/PageTransition';
import ScrollProgress from '@/components/ScrollProgress';
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

export const metadata = {
  title: "Ola Ajayi — Product Designer",
  description: "Product designer crafting clear, intuitive digital products.",
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body className={`${inter.variable} ${bricolage.variable} ${jetbrainsMono.variable} font-sans`}>
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
