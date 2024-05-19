import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const NotoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Мой проект на Next.JS",
  description: "Бла бла бла",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NotoSans.className}>{children}</body>
    </html>
  );
}
