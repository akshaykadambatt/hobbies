import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ClientProvider from "../store/ClientProvider";
import { auth } from "@/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import ClientWrapper from "../store/ClientWrapper";
import User from "../../components/User";
import Image from "next/image";
import "@/app/dashboard/dashboard.css";
import Search from "@/components/Search";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
      <div className="header">
        <div className="group-one">
          <div className="logo">
            <Image
              src="/icons/android-chrome-144x144.png"
              priority
              alt="logo"
              width={35}
              height={35}
            />
          </div>
          <div className="title">Hello, Akshay</div>
        </div>
        <div className="group-two">
          <Search />
        </div>
        <div className="group-three">
          <div className="user">
            <User />
          </div>
          <div className="menu">---</div>
        </div>
      </div>
      <main>{children}</main>
    </ClientProvider>
  );
}
