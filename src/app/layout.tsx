import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nescia — Centre de bien-être pour femmes à Marrakech",
  description:
    "Pilates Reformer, cours collectifs, Glow Bar et boutique. Nescia est un centre de bien-être pour femmes au cœur de Marrakech.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
