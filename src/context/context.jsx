import React, { createContext, useState } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [isnabarisopen, setisnabarisopen] = useState(false);
  const value = {
    isnabarisopen,
    setisnabarisopen,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
