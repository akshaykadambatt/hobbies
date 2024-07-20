"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import db, { UserData } from "../app/store/db";
import { useGetDexieDB, useSetDexieDB } from "@/utils/useDexieDB";
import { Session } from "next-auth";
import { getDexieUser, setDexieUser } from "@/utils/dexieUtils";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";
import "@/app/globals.css";
import { IoClose } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";

const Search: React.FC = () => {
  const [searchBanner, setSearchBanner] = useState(false);
  const controls = useAnimation();
  useEffect(() => {
    if (!searchBanner) {
      controls.start({ x: 0, y: 0,transition: { type: "spring", stiffness: 500, damping: 50, duration:.1 } });
    }
  }, [searchBanner, controls]);
  return (
    <motion.div
      whileTap={{ scale: 0.99 }}
      transition={{
        duration: .061
      }}
      drag
      animate={controls}
      whileDrag={{ scale: 0.99,opacity:".8", transition: { duration: 0, delay:0, } }}
      dragTransition={{ bounceStiffness: 1000, bounceDamping: 50 }}
      dragConstraints={{ left: -300, right: 300, top:-100,bottom:300 }}
      dragElastic={0.09}
      dragSnapToOrigin={!searchBanner}
      className={`search ${searchBanner ? "search-banner-true" : ""}`}
    >
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          onFocus={() => setSearchBanner(true)}
        />
        <div onClick={() => setSearchBanner(false)} className="close">
          <IoClose />
        </div>
      </div>
      {searchBanner && (
        <div className="search-banner-wrapper disable-scrollbars">
          <div className="delay-150 fade-up heading mt-5 text-2xl font-thin ml-3 animation-duration-[0.31s]">
            26 Results
          </div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          >Text inside the box</motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <motion.div
            viewport={{ once: true }}
            className="search-banner"
            initial={{
              opacity: 0,
              transform:
                "translateY(60px) scaley(0.8)  matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1)",
            }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          ></motion.div>
          <div className="delay-150 fade-up heading mt-5 pb-10 text-sm font-thin ml-3 animation-duration-[0.931s]">
            End of results
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Search;
