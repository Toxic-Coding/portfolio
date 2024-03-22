import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Muhammad Adil",
  description:
    "I'm a skilled web developer, experienced in creating and managing Shopify stores, developing websites with Next.js, React.js, and the MERN stack, and proficient in digital marketing strategies. Contact me for all your web development and digital marketing needs.",
  // icons: {
  //   icon: "/hero.png",
  //   apple: "/hero.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.png" sizes="128x128" />
        <Header />
        {children}
      </body>
    </html>
  );
}
