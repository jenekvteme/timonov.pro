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
  title: "Евгений Тимонов — Консультант по управлению продажами",
  description:
    "Помогаю компаниям системно увеличить продажи: аудит, внедрение CRM, обучение, регламенты и развитие команды продаж.",
  openGraph: {
    title: "Евгений Тимонов — Консультант по управлению продажами",
    description:
      "Помогаю компаниям системно увеличить продажи: аудит, внедрение CRM, обучение, регламенты и развитие команды продаж.",
    url: "https://www.timonov.pro",
    siteName: "timonov.pro",
    images: ["/og-image.png"],
    type: "website",
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
