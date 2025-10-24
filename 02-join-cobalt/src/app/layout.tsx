import type { Metadata } from "next";
import { Manrope, Fira_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Join Cobalt",
  description: "A Special hero section with special learnings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${firaMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
