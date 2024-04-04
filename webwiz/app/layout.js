import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import NextTopLoader from 'nextjs-toploader';
import MyComponent from './login/Login'
import { ClerkProvider } from "@clerk/nextjs";
import {useUser } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tech Titans",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  let isLogin = false;
  
  return (
   <ClerkProvider>
     <html lang="en">
      <body className={inter.className}>
        <Header />
        <NextTopLoader />
        {isLogin?children : <MyComponent/>}
        <Footer />
      </body>
    </html>
   </ClerkProvider>
  );
}
