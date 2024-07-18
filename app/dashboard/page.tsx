"use client"

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useSession } from "next-auth/react";
import Link from "next/link";
import User from "@/components/User";
import { useRouter } from 'next/navigation'
import '@/app/globals.css'

const Dashboard: React.FC = () => {
  const router = useRouter();
  return (
    <div className="page">
      This is the dashboard page content.
      <ul>
        <li>list of organizations

      <Link href="/dashboard/a" shallow className="button">Open this Organization</Link>
      <Link href="/dashboard/a" shallow className="button">Menu</Link>
      <Link href="/dashboard/a" shallow className="button red-button">Delete!</Link>

        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
