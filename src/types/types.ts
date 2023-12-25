import React from "react";

export interface User {
  id: string;
  username: string;
}

export interface AuthContextValue {
  token: string | null;
  user: User | null;
  handleSetToken: (token: string) => void;
  handleSetUser: (user: User) => void;
}

export interface ResponseBody {
  message: string;
  data: any | null;
  errors: any;
}
