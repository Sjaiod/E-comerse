import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SAJID_ECOMmerce",
  description: "SAJID_ECOMmerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` scroll-smooth bg-gray-900 ${inter.className}`}>
      <Providers>
        {children}       
          </Providers>
        </body>
    </html>
  );
}
