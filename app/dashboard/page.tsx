"use client"

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useSession } from "next-auth/react";
import Link from "next/link";
import User from "@/components/User";
import { useRouter } from 'next/navigation'
const Dashboard: React.FC = () => {
  const router = useRouter();
  const handleRouteChange = () => {
  };
  return (
    <div className="page">
      This is the dashboard page content.
      <div onClick={handleRouteChange}>letssooogooo</div>
      <Link href="/dashboard/addssds" shallow>Goto addssds</Link>
      <Link href="/dashboard/eeeeeee" shallow>Goto eeeeeeeeee</Link>
      <Link href="/dashboard/dfadfadf" shallow>Goto dfadfadf</Link>
      <Link href="/dashboard/a" shallow>Goto a</Link>
    </div>
  );
};

export default Dashboard;
