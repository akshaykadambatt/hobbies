"use client"

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useSession } from "next-auth/react";
import db, { UserData } from '../store/db';
const Dashboard: React.FC = () => {
  
  return (
    <div className="page">
      This is the dashboard page content.
    </div>
  );
};

export default Dashboard;
