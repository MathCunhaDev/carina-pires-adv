import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/common/theme/reset.scss";
import "@/common/theme/global.scss";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body>
        <GoogleAnalytics gaId="G-6DQ5X9MC0Y" />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
