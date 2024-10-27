import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pet shop",
  description: "Created by Agaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
