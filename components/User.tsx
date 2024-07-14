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
  const [name, setName] = useState<string|undefined>("");
  function run() {
    console.log('running');
    
    getUser("1").then((data) => {
      console.log("loaded from indexeddb", data);
      setName(data?.name)
    });
  }
  useEffect(() => {
    console.log("checking indexed db");
    
    getUser("1").then((data) => {
      console.log("loaded from indexeddb", data);
    });
    if (session?.user) {
    console.log("checking indexed db");
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
  return <div className="user">User Avatar: {userData?.email}
  <button onClick={() => run()}>run {name}</button>
  </div>;
};

export default User;
