import React, { createContext, ReactNode, useState } from "react";
import { AuthContextValue, User } from "../types/types";

export const AuthContext = createContext<AuthContextValue | null>(null);

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const getToken = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  // const getUser = localStorage.getItem('user') ? localStorage.getItem('user') : null;

  const [token, setToken] = useState<string | null>(getToken);
  const [user, setUser] = useState<User | null>(null);

  const handleSetToken = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const handleSetUser = (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const value: AuthContextValue = {
    user,
    token,
    handleSetToken,
    handleSetUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
