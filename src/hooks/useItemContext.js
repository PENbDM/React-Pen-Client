import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

export const useItemContext = () => {
  const context = useContext(ItemContext);

  if (!context) {
    throw Error("error");
  }

  return context;
};
