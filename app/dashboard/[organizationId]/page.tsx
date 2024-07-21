"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Link from "next/link";
import "@/app/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import PageCard from "@/components/PageCard";
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
    <div className="page container organization">
      <div className="heading mt-0">First Organization</div>
      <div className="mt-0 ml-3 mt-3 text-sm">Created on Jan 26th. No timestamp available.</div>
      <div className="page-list mt-3">
      <PageCard favouredSize="card" layoutId="item-1" stacked color="#EDF67D">lets goooo 1</PageCard>
      <PageCard favouredSize="card" layoutId="item-2" stacked color="#CA7DF9">lets goooo 2</PageCard>
      <PageCard favouredSize="card" layoutId="item-3" stacked color="#724CF9">lets goooo 3</PageCard>
      <PageCard favouredSize="card" color="#F34B4B">lets goooo</PageCard>
      <PageCard favouredSize="card" color="#101419">lets goooo</PageCard>
      <PageCard favouredSize="card" color="#80E0FF">lets goooo</PageCard>
      </div>
      <div className="heading mt-7">First Organization</div>
      <div className="page-list mt-3">
      <PageCard favouredSize="card" color="#EDF67D">lets goooo 1</PageCard>
      <PageCard favouredSize="card" color="#CA7DF9">lets goooo 2</PageCard>
      <PageCard favouredSize="card" color="#724CF9">lets goooo 3</PageCard>
      <PageCard favouredSize="card" color="#F34B4B">lets goooo</PageCard>
      <PageCard favouredSize="card" color="#101419">lets goooo</PageCard>
      <PageCard favouredSize="card" color="#80E0FF">lets goooo</PageCard>
      </div>
      <div>
        <div>
          <Link href="/dashboard" className="button">
            Go Back
          </Link>
        </div>
      </div>
      {/* {items.map((item) => (
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
      </AnimatePresence> */}
    </div>
  );
};

export default Dashboard;
