import { createContext, useContext } from "react";

export const Ctx = createContext();

export const useApp = () => {
  return useContext(Ctx);
};
