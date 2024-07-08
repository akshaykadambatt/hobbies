"use client"

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useSession } from "next-auth/react";
import db, { UserData } from '../store/db';
const Dashboard: React.FC = () => {
  const { data: session, status } = useSession()
  const [userData, setUserData] = useState<UserData | null>(null);
  console.log(session,userData)
  useEffect(() => {
    const loadUserData = async () => {
      if (session?.user && typeof session.user.id === 'string') {
        const storedUserData = await db.users.get(session.user.id);
        setUserData(storedUserData || null);
      } else {
        setUserData(null);
      }
    };

    loadUserData();
  }, [session]);

  useEffect(() => {
    if (session?.user) {
      const userData: UserData = {
        id: session.user.id || '',
        name: session.user.name || '',
        email: session.user.email || '',
        image: session.user.image || '',
        // Add other user data properties as needed
      };

      db.users.put(userData);
    }
  }, [session]);
  return (
    <div>
      Dashboard of {session?.user?.email} {userData?.email}
    </div>
  );
};

export default Dashboard;
