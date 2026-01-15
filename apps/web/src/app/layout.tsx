import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/functions/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
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
  title: {
    default: "Better Auth Playground",
    template: "%s | Better Auth Playground",
  },
  description:
    "Um playground para experimentar melhores estratégias de autenticação com Better Auth.",
};

interface IRootLayout {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<IRootLayout>) {
  return (
    <html
      lang="pt-BR"
      className={cn(
        "antialiased scroll-smooth",
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <body>
        <ThemeProvider>
          {children}
          <Toaster visibleToasts={9} closeButton richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
