import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("useAuthContext must be used inside an useAuthContextProvider");
  }

  return context;
};

// if we wanna use this, we have to invoke the useAuthContext, and we dicstructure user from context obj
