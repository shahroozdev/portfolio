import type { Metadata } from "next";
import { Poppins ,Sora} from "next/font/google";
import "./globals.css";
import TopImg from "@/components/molecules/TopImg/TopImg";
import Nav from "@/components/molecules/Nav/Nav";
import Header from "@/components/molecules/Header";
import TransitionProvider from "@/lib/transitionProvider";
import TransitionDiv from "@/components/molecules/Transition/transitionDiv";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});
const sora = Sora({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M Shahrooz Altaf | WEB Developer",
  description: "A web developer and problem solver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`page bg-site text-white bg-cover bo-no-repeat ${sora.variable} font-sora relative`}>
      {/* <TransitionProvider > */}
      {/* <TransitionDiv/> */}
        <TopImg/>
        <Nav/>
        <Header/>
        {children}
        {/* </TransitionProvider> */}
      </body>
    </html>
  );
}
