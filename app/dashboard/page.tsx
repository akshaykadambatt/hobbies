"use client"

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useSession } from "next-auth/react";
import Link from "next/link";
import User from "@/components/User";
const Dashboard: React.FC = () => {
  
  return (
    <div className="page">
      This is the dashboard page content.
      <Link href="/dashboard/addssds">aaaaaa</Link>
    </div>
  );
};

export default Dashboard;
