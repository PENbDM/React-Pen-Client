import { useAuthContext } from "./useAuthContext";
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");
    //DISPATCH LOGOUT ACTION
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};
