"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import db, { UserData } from "../app/store/db";
import { useGetDexieDB, useSetDexieDB } from "@/utils/useDexieDB";
import { Session } from "next-auth";
import { getUser, setUser } from "@/utils/dexieUtils";

const User: React.FC = () => {
  const { data: session, status } = useSession();
  const userData = useGetDexieDB<UserData>("users", "1");

  useEffect(() => {
    getUser("1").then((data) => {
      console.log("loaded from server", data);
    });
    if (session?.user) {
      setUser({
        id: "1", //Removed session.user.id || '' (for fast dexie query)
        name: session.user?.name || "",
        email: session.user?.email || "",
        image: session.user?.image || "",
      }).then((data)=>{
        console.log(data, "datatatatat");
        
      });
      // const updateName = async (session: Session) => {
      //     const userData1 = await useSetDexieDB<UserData>("users", {
      //         id: "1", //Removed session.user.id || '' (for fast dexie query)
      //         name: session.user?.name || "",
      //         email: session.user?.email || "",
      //         image: session.user?.image || "",
      //       });
      //   console.log("loaded from server", userData);
      //   };

      //   updateName(session);
    }
  }, [session]);
  return <div className="user">User Avatar: {userData?.email}</div>;
};

export default User;
