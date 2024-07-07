import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ClientProvider from '../store/ClientProvider';
import { auth } from "@/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import ClientWrapper from "../store/ClientWrapper";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <div>Logged in{children}</div>
    </ClientProvider>
  );
}
