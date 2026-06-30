import type { Metadata } from "next";
import { Playfair_Display_SC, Karla } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { restaurant } from "@/lib/data";
import "./globals.css";

const display = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${restaurant.name} · Restauracja meksykańska w Poznaniu`,
    template: `%s · ${restaurant.name}`,
  },
  description: restaurant.tagline,
  openGraph: {
    title: `${restaurant.name} · Cocina Mexicana`,
    description: restaurant.tagline,
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">Przejdź do treści</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
