import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./ui/globals.css";

const poppins = Poppins({ subsets: ["latin"],weight:["100","200","400","600","700","900"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
