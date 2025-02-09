import type { Metadata } from "next";
import { Poppins} from "next/font/google";

import QueryProvider from "@/app/_components/container/query-provider";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "City Builder",
  description: "By briancgmendoza-dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
