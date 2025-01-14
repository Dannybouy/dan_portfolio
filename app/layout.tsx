import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { SEOMetadata } from "@/components/seo-metadata";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter, Space_Mono, Unbounded } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});
const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

export const metadata = SEOMetadata({
  title: "Home",
  description: "Daniel Okpara - Software Engineer, and Developer.",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://danielokpara.me/" />
      </head>
      <body
        className={`${inter.className} ${spaceMono.variable} ${unbounded.variable} min-h-screen bg-background antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <Toaster position="top-center" />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
