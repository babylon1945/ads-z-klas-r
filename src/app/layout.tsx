import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wolfs Grup | İş Makinesi Kiralama, İkinci El, Servis",
    template: "%s | Wolfs Grup",
  },
  description:
    "İş makinesi kiralama, ikinci el satış, servis/bakım ve yedek parça çözümlerinde kurumsal hizmet. Türkiye geneli hızlı teslimat.",
  metadataBase: new URL("https://wolfsgrup.com"),
  openGraph: {
    title: "Wolfs Grup",
    description:
      "İş makinesi kiralama, ikinci el satış, servis/bakım ve yedek parça çözümleri.",
    url: "https://wolfsgrup.com",
    siteName: "Wolfs Grup",
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={montserrat.variable}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
