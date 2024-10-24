import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import RootLayoutContainer from "@/componentslayout/root-layout-container";
import { ThemeProvider } from "@/componentslayout/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CodeDam",
  description: "Show your awesome projects",

 
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >

          <Header />
          <RootLayoutContainer>
            {children}
          </RootLayoutContainer>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
