"use client";

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './userSlice';
import { User } from '../types';

interface ClientWrapperProps {
  user: User | undefined; // Replace with the appropriate type for user data
}

const ClientWrapper: React.FC<ClientWrapperProps> = ( {user} ) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the setUser action with the user data
    dispatch(setUser(user));
  }, [dispatch, user]);

  return null; // This component doesn't render any UI
};

export default ClientWrapper;
