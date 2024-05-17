import React from "react";
import { Inter, Cinzel } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@/common/theme/reset.scss";
import "@/common/theme/global.scss";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--cinzel",
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${cinzel.variable}`}>
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
