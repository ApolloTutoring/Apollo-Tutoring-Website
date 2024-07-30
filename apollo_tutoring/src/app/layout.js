import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Apollo Tutoring Canada",
  description: "Get free tutoring for high-school courses such as math, chemistry and physics.",
  author: "Bhavya and Sajan"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
