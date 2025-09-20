import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Exo_2, Yantramanav, Telex } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const telex = Telex({
  variable: "--font-telex",
  subsets: ["latin"],
  weight: ["400"],
});

const yantramanav = Yantramanav({
  variable: "--font-yantramanav",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zaemon AI - Document Conflict Detection",
  description: "AI-powered document conflict detection and financial simulation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${telex.variable} ${yantramanav.variable} ${exo2.variable} antialiased`}
      >
        <ThemeProvider 
          defaultTheme="system" 
          defaultFont="geist-sans"
          enableSystem={true}
          attribute="class"
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
