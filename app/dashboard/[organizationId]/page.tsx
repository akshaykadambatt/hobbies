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
      <div className="page-list">
      <PageCard favouredSize="card" layoutId="item-1" stacked>lets goooo 1</PageCard>
      <PageCard favouredSize="card" layoutId="item-2" stacked>lets goooo 2</PageCard>
      <PageCard favouredSize="card" layoutId="item-3" stacked>lets goooo 3</PageCard>
      <PageCard favouredSize="card">lets goooo</PageCard>
      <PageCard favouredSize="card">lets goooo</PageCard>
      <PageCard favouredSize="card">lets goooo</PageCard>
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
