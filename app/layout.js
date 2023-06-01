import "./globals.css";
import { Bangers, Quicksand, Roboto } from "next/font/google";
import Nav from "@/components/Nav";
import CartMobileIcon from "@/components/CartMobileIcon";
import CartProvider from "./context/CartContext";
import CartMobile from "@/components/CartMobile";
import CartDesktop from "@/components/CartDesktop";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Food delivery",
  description: "Food delivery",
};

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const bangers = Bangers({
  subsets: ["latin"],
  variable: "--font-bangers",
  weight: ["400"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body
          className={`${quicksand.variable} ${bangers.variable} ${roboto} font-quicksand`}
        >
          <Nav />
          <CartMobileIcon />
          <CartMobile />
          {children}
          <CartDesktop />
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
