"use client"

import React from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useSession } from "next-auth/react";
const Dashboard: React.FC = () => {
  const { data: session, status } = useSession()
  return (
    <div>
      Dashboard of {session?.user?.email}
    </div>
  );
};

export default Dashboard;
