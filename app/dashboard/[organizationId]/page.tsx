"use client"

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useSession } from "next-auth/react";
import Link from "next/link";
const Dashboard: React.FC = () => {
  
  return (
    <div className="page">
      This is the organization content.
      <Link href="/dashboard">back</Link>
      </div>
  );
};

export default Dashboard;
