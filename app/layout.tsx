import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL('https://www.timonov.pro'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Евгений Тимонов — РОП и консультант по продажам | Запуск и организация отдела продаж",
    template: "%s | timonov.pro"
  },
  description: "Внешний РОП и консультант по управлению продажами. Запуск отдела продаж с нуля, обучение, найм, внедрение CRM. 12+ лет опыта. Удалённо, РФ и международка.",
  keywords: [
    "внешний РОП", "консультант по продажам", "организация отдела продаж", 
    "запуск отдела продаж с нуля", "обучение отдела продаж", "найм отдела продаж",
    "руководитель отдела продаж", "управление продажами", "построение продаж",
    "тренинг менеджеров продаж", "внедрение CRM", "система мотивации продаж",
    "B2B продажи", "холодные продажи", "выход на ЛПР", "удалённый отдел продаж",
    "построение отдела продаж", "организация продаж", "консалтинг по продажам"
  ],
  authors: [{ name: "Евгений Тимонов" }],
  creator: "Евгений Тимонов",
  publisher: "Евгений Тимонов",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://www.timonov.pro",
    siteName: "timonov.pro",
    title: "Евгений Тимонов — РОП и консультант по продажам | Запуск отдела продаж",
    description: "Внешний РОП, консультант по управлению продажами. Запуск отдела продаж с нуля, обучение, найм, внедрение CRM. 12+ лет опыта.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Евгений Тимонов — Консультант по продажам",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Евгений Тимонов — РОП и консультант по продажам",
    description: "Внешний РОП, консультант по управлению продажами. Запуск отдела продаж с нуля, обучение, найм, внедрение CRM.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <link rel="icon" href="/favicon.svg" />

        {/* === Yandex.Metrika === */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0];
              k.async=1;k.src=r;a.parentNode.insertBefore(k,a);
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104546119', 'ym');

            ym(104546119, 'init', {
              ssr:true,
              webvisor:true,
              clickmap:true,
              ecommerce:"dataLayer",
              accurateTrackBounce:true,
              trackLinks:true
            });
          `}
        </Script>

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104546119"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* === /Yandex.Metrika === */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080F5B] text-[#F4E4C1]`}
      >
        {children}
      </body>
    </html>
  );
}
