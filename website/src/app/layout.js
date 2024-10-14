import { Inter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";

const inter = Roboto_Condensed({subsets:["latin"]})

export const metadata = {
  title: "Ai samasya hackathon",
  description: " Ai hackathon",
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
