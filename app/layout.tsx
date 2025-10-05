import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Евгений Тимонов — Консультант по продажам",
  description:
    "Помогаю собственникам и руководителям выстраивать отделы продаж, внедрять CRM и выводить бизнес на предсказуемый рост.",
  openGraph: {
    title: "Евгений Тимонов — Консультант по продажам",
    description:
      "Помогаю собственникам и руководителям выстраивать отделы продаж, внедрять CRM и выводить бизнес на предсказуемый рост.",
    url: "https://www.timonov.pro",
    siteName: "timonov.pro",
    images: [
      {
        url: "/og-image.png", // клади картинку предпросмотра в /public
        width: 1200,
        height: 630,
        alt: "Евгений Тимонов — Консультант по продажам",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg", // фавикон тоже в папку /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Дополнительные мета-теги */}
        <meta name="theme-color" content="#080F5B" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
