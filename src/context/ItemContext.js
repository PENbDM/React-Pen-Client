import { createContext, useReducer } from "react";

export const ItemContext = createContext();

export const itemReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        items: action.payload,
      };
    case "GET_CART_ITEMS":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "SORT_CART_ITEMS":
      return {
        ...state,
        cartItems: action.payload,
      };
    case "POST_CART_ITEMS":
      return {
        ...state,
        cartItems: action.payload,
      };
    default:
      return state;
  }
};

export const ItemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(itemReducer, {
    items: null,
    cartItems: null,
  });

  return (
    <ItemContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};
