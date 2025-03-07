import "@/assets/styles/main.scss";
import { Inter } from "next/font/google";

import Header from "./_layout/Header.jsx";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["Helvetica", "sans-serif"],
  subsets: ["latin"],
});

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
