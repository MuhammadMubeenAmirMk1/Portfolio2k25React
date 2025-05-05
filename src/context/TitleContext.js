import React, { createContext, useContext, useState } from "react";

const TitleContext = createContext();

export function TitleProvider({ children }) {
  const [title, setTitle] = useState("Home");
  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {children}
    </TitleContext.Provider>
  );
}

export const useTitle = () => useContext(TitleContext);
