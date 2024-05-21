import React from "react";
import { Inter } from "next/font/google";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@/common/theme/reset.scss";
import "@/common/theme/global.scss";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
