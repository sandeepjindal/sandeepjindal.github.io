import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Sandeep Jindal | Engineering Leader",
  description:
    "Personal portfolio of Sandeep Jindal, an engineering leader and builder focused on scalable systems, product engineering, and high-performing teams.",
  metadataBase: new URL("https://sandeepjindal.github.io"),
  openGraph: {
    title: "Sandeep Jindal | Engineering Leader",
    description:
      "Engineering leader, mentor, and builder across AI, payments, travel, ecommerce, and platform systems.",
    url: "https://sandeepjindal.github.io",
    siteName: "Sandeep Jindal",
    type: "website"
  }
};

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch {}
})();
`;

/**
 * Renders the root HTML structure for the application.
 *
 * @param children - The page content rendered inside the document body.
 */
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
