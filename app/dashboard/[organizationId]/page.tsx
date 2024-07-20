"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Link from "next/link";
import "@/app/globals.css";
import { AnimatePresence, motion } from "framer-motion";
const Dashboard: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(0);
  const items = [
    { id: 1, title: "title 1", subtitle: "subtitle 1" },
    { id: 2, title: "title 2", subtitle: "subtitle 2" },
    { id: 3, title: "title 3", subtitle: "subtitle 3" },
    { id: 4, title: "title 4", subtitle: "subtitle 4" },
    { id: 5, title: "title 5", subtitle: "subtitle 5" },
  ];
  return (
    <div className="page">
      This is the organization content. list all pages here pages open as modals
      <motion.div layoutId="i3">
      <motion.h1 layoutId="33" className="text-2xl m-9">My thing</motion.h1>
      <motion.div layoutId="333i" style={{borderRadius:"10px",height:"100px",width:"100px",border:"1.5px solid #000",margin:"10px 20px", display:"inline-block"}}>a</motion.div>
      <motion.div layoutId="333ii" style={{borderRadius:"10px",height:"100px",width:"100px",border:"1.5px solid #000",margin:"10px 20px", display:"inline-block"}}>b</motion.div>
      
      <motion.div layoutId="i3i">
        <Link href="/dashboard" className="button">
        Go Back
      </Link>
      </motion.div>
      
      </motion.div>
      {items.map((item) => (
        <motion.div
          layoutId={`${item.id}`}
          onClick={() => setSelectedId(item.id)}
        >
          
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}
      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={`${selectedId}`}>
            <motion.h5>{items[selectedId].subtitle}</motion.h5>
            <motion.h2>{items[selectedId].title}</motion.h2>
           
            <motion.button onClick={() => setSelectedId(0)}>
              close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default Dashboard;
