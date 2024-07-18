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

const Search: React.FC = () => {
  const [searchBanner, setSearchBanner] = useState(false);

  return (
    <div className={`search ${searchBanner ? "search-banner-true" : ""}`}>
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
        <>
          <div className="delay-150 fade-up heading mt-5 text-2xl font-thin ml-3 animation-delay-[2000ms]">
            Recents
          </div>
          <div className="delay-3350 fade-up search-banner animation-delay-[5000ms]"></div>
          <div className="delay-3350 fade-up search-banner animation-delay-[9000ms]"></div>
          <div className="delay-3350 fade-up search-banner animation-delay-[12000ms]"></div>
        </>
      )}
    </div>
  );
};

export default Search;
