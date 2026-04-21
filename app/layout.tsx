import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan McGuiness - Full Stack Engineer",
  description:
    "Full Stack Engineer with 5+ years of professional experience building performant, production-grade web applications across diverse industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
