import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();
// Auth Context , so main sense of having this one to have global state which is user
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

//children represent componotns whatever this provider wrap
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    // initial value of user is null
    user: null,
  });
  // //!!!WHEN app first loads and AuthContextProvider renders we
  // running this effect func just once, inside we try get user from local Storage,
  // if user exist, we have value for user, email and token
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("AuthContextState", state);

  return (
    // we use operator ... to use all keys, all property of state
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
