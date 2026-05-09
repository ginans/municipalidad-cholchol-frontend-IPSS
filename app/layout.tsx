import type { Metadata } from "next";
import { Assistant, Oswald } from "next/font/google";
import "./globals.css";

import { AppSidebar } from "../components/layout/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

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
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <SidebarInset className="flex min-h-full flex-col">
            {children}
            <footer className="border-t border-border/50 bg-muted/30 px-4 py-6 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <p className="text-xs text-muted-foreground">
                  <strong>Atribución:</strong> Todas las imágenes utilizadas en este sitio fueron obtenidas de la página oficial de la Municipalidad de Cholchol (
                  <a
                    href="https://municholchol.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground"
                  >
                    municholchol.cl
                  </a>
                  )
                </p>
              </div>
            </footer>
          </SidebarInset>
        </SidebarProvider>
        <Toaster
          position="bottom-right"
          toastOptions={{
            classNames: {
              success: "!bg-green-50 !border-green-200 !text-green-800 [&_svg]:!text-green-500",
              error: "!bg-red-50 !border-red-200 !text-red-800 [&_svg]:!text-red-400",
            },
          }}
        />
      </body>
    </html>
  );
}
