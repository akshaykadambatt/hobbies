"use client";
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import db, { UserData } from '../app/store/db';
import { useDexieDB } from '@/utils/useDexieDB';


const User: React.FC = () => {
    const { data: session, status } = useSession()
    const userData = useDexieDB<UserData>('users', '1');

  useEffect(() => {
    if (session?.user) {
      const userData: UserData = {
        id: '1', //Removed session.user.id || '' (for fast dexie query)
        name: session.user.name || '',
        email: session.user.email || '',
        image: session.user.image || '',
      };
      db.users.put(userData);
      console.log("loaded from server",userData)
    }
  }, [session]);
  return (
    <div className="user">
      User Avatar: {userData?.email}
    </div>
  );
};

export default User;