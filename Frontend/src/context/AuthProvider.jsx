import React, { createContext, useContext, useState } from 'react';

export const authContext = createContext();

export const useAuth = () => useContext(authContext);

export default function AuthProvider({ children }) {
  const initauthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState(
    initauthUser ? JSON.parse(initauthUser) : undefined
  );

  return (
    <authContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </authContext.Provider>
  );
}