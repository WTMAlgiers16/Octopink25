import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const productSans = localFont({
  src: [
    {
      path: "../../public/fonts/Product Sans Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Product Sans Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Product Sans Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Product Sans Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-productsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Octopink25",
  description: "A Collaborative Initiative Against Breast Cancer",
  icons: "/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${productSans.className}`}
      >
        {children}
      </body>
    </html>
  );
}
