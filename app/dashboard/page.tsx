"use client"

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useSession } from "next-auth/react";
import db, { UserData } from '../store/db';
const Dashboard: React.FC = () => {
  const { data: session, status } = useSession()
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    const loadUserData = async () => {
      const storedUserData = await db.users.get('1');
      setUserData(storedUserData || null);
      console.log("loaded from local",session,storedUserData)
    };

    loadUserData();

  }, []);

  useEffect(() => {
    if (session?.user) {
      const userData: UserData = {
        id: '1', //Removed session.user.id || '' (for fast dexie query)
        name: session.user.name || '',
        email: session.user.email || '',
        image: session.user.image || '',
        // Add other user data properties as needed
      };

      db.users.put(userData);
      console.log("loaded from server",session,userData)

    }
  }, [session]);
  return (
    <div>
      Dashboard of {session?.user?.email} {userData?.email}
    </div>
  );
};

export default Dashboard;
