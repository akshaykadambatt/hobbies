"use client"

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useSession } from "next-auth/react";
import Link from "next/link";
import '@/app/globals.css'
const Dashboard: React.FC = () => {
  
  return (
    <div className="page">
      This is the organization content.
      list all pages here

      pages open as modals

      <Link href="/dashboard" className="button">Go Back</Link>
      </div>
  );
};

export default Dashboard;
