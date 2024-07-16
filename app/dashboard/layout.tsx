import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ClientProvider from '../store/ClientProvider';
import { auth } from "@/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import ClientWrapper from "../store/ClientWrapper";
import User from "../../components/User";
import Image from "next/image";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <Image src="/icons/android-chrome-144x144.png" priority alt="logo" width={100} height={100} />
      Name
      <input type="text" placeholder="Search" />
      <User />
      Hamburger Menu
       
      <main>{children}</main>
    </ClientProvider>
  );
}
