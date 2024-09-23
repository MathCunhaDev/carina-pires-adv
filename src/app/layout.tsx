import { GoogleAnalytics } from "@next/third-parties/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Metadata } from "next";
import "@/common/theme/reset.scss";
import "@/common/theme/global.scss";

const inter = Inter({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const metadata: Metadata = {
  icons: {
    icon: "/logo-curto-bold-azul-svg.svg",
    apple: "/logo-curto-bold-azul-svg.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt-BR",
    url: "www.carinapiresadv.com.br",
    title: "Carina Pires Advocacia",
    description: "Carina Pires Advocacia",
    images: [
      {
        url: "/logo-azul-svg.svg",
        width: 100,
        height: 60,
        alt: "Logo Carina Pires Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: {
    name: "Matheus Cunha - Desenvolvimento de software",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <GoogleAnalytics gaId="G-6DQ5X9MC0Y" />
      <body>
        <main className="main">
          <AntdRegistry>{children}</AntdRegistry>
        </main>
      </body>
    </html>
  );
}
