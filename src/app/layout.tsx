import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import RootProvider from "@/core/Provider";

const roboto = Roboto({ weight: ["100", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fácil Fideliza Empresa",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
