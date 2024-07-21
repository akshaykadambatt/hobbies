"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Link from "next/link";
import User from "@/components/User";
import { useRouter } from "next/navigation";
import "@/app/globals.css";
import { motion } from "framer-motion";
import PageCard from "@/components/PageCard";

const Dashboard: React.FC = () => {
  const router = useRouter();
  return (
    <div className="page container dashboard">
      <div className="heading mt-8">Hi, Akshay</div>
      <div className="mt-0 ml-3 mt-3 text-sm">Created on Jan 26th. No timestamp available.I have a lot of text inside me im sorrry that im so fat ill try
      my best to not be this fat again</div>
      <div className="heading mt-8">Organization One</div>
      <Link href="/dashboard/a" shallow>
      <div className="stacked-page-cards mt-6">
      <PageCard favouredSize="card" layoutId="item-1" stacked={true} inStack color="rgb(237, 246, 125)">lets goooo 1</PageCard>
      <PageCard favouredSize="card" layoutId="item-2" stacked={true} inStack color="rgb(242, 91, 226)">lets goooo 2</PageCard>
      <PageCard favouredSize="card" layoutId="item-3" stacked={true} inStack color="#ffc879">lets goooo 3</PageCard>
      </div>
      </Link>
      <div className="heading mt-10">Organization Two</div>
      <Link href="/dashboard/a" shallow>
      <div className="stacked-page-cards mt-6">
      <PageCard favouredSize="card" stacked={true} inStack color="rgb(243, 75, 75)">lets goooo 1</PageCard>
      <PageCard favouredSize="card" stacked={true} inStack color="rgb(98, 255, 135)">lets goooo 2</PageCard>
      <PageCard favouredSize="card" stacked={true} inStack color="rgb(128, 224, 255)">lets goooo 3</PageCard>
      </div>
      </Link>
      <div className="mb-9"></div>
      <Link href="/dashboard/a" shallow className="button">
                Open this Organization
              </Link>
              <Link href="/dashboard/a" shallow className="button red-button">
            Delete!
          </Link>
      
    </div>
  );
};

export default Dashboard;
