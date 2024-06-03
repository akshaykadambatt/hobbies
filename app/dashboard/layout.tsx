import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div>Logged in{children}</div>
  );
}
