import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "$/components/ClientLayout";


export const metadata: Metadata = {
  title: "Mini-Commerce",
  description: "mini-commerce provide leatest fasshion shoes cloth and modern stayle sport shoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MINI-com</title>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
