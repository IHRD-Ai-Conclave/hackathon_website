import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";

const inter = Roboto_Condensed({subsets:["latin"]})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden ">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
