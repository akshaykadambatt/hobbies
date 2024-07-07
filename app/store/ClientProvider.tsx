"use client";

import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from '../store/store';
import { signIn, auth, signOut } from "@/auth";
import { setUser } from './userSlice';
import { SessionProvider } from "next-auth/react";
interface ClientProviderProps {
  children: React.ReactNode;
}

const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  return <Provider store={store}>
    <SessionProvider>
    {children}
        </SessionProvider></Provider>;
};

export default ClientProvider;
