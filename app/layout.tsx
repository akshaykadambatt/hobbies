import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { useEffect } from "react";
import { Serwist } from "serwist";
const inter = Open_Sans({
  weight: ["300","400","500","600", "700","800"],
  subsets: ["latin"],
});

const APP_NAME = "Hobbies";
const APP_DEFAULT_TITLE = "Hobbies";
const APP_TITLE_TEMPLATE = "%s - Hobbies";
const APP_DESCRIPTION = "The daily log of your hobbies";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  manifest:"/manifest.webmanifest",
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
