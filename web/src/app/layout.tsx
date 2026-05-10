import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-shippori",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "solum kyoto — 京都に潜む、静謐の旅",
  description:
    "今井建設が手がける京都の小さな宿、solum kyoto。元悪王子と仏光寺。京町家のしつらえと、暮らすような滞在を。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} ${shippori.variable} ${cormorant.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
