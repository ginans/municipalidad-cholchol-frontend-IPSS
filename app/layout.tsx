import type { Metadata } from "next";
import { Assistant, Oswald } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--font-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Municipalidad de Cholchol",
  description:
    "Rediseño de la portada institucional de la Municipalidad de Cholchol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${assistant.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
