import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryan McGuiness - Software Engineer",
  description: "Software Engineer with over 4 years of professional experience developing full-stack software solutions, specializing in front-end technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
