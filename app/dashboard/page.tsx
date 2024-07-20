"use client"

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useSession } from "next-auth/react";
import Link from "next/link";
import User from "@/components/User";
import { useRouter } from 'next/navigation'
import '@/app/globals.css'
import { motion } from "framer-motion";

const Dashboard: React.FC = () => {
  const router = useRouter();
  return (
    <div className="page">
      This is the dashboard page content.
      <ul>
        <li>list of organizations
    <motion.div layoutId="i3">
      <motion.h1 layoutId="33">My thing</motion.h1>
      <motion.div layoutId="333i" style={{borderRadius:"10px",height:"100px",width:"100px",border:"1.5px solid #000", display:"inline-block"}}>a</motion.div>
      <motion.div layoutId="333ii" style={{borderRadius:"10px",height:"100px",width:"100px",border:"1.5px solid #000",marginLeft:"-50px", display:"inline-block"}}>b</motion.div>
      <motion.div layoutId="i3i">
        
      <Link href="/dashboard/a" shallow className="button">Open this Organization</Link>
      </motion.div>
    </motion.div>
      <Link href="/dashboard/a" shallow className="button">Menu</Link>
      <Link href="/dashboard/a" shallow className="button red-button">Delete!</Link>

        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
