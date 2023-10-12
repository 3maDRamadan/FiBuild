import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Whatsapp from "./components/whatsapp/Whatsapp";
import Call from "./components/call/Call";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <head>
          <link rel="icon" href="./imgs/icon.jpg" />
        </head>
        <Nav />
        <Whatsapp />
        {children}
        <Call />
        <Footer />
      </body>
    </html>
  );
}
