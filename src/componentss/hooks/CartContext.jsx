import { createContext, useContext, useReducer, useState } from "react";
import data from "../../data.json";

export const CartContext = createContext([]);

function reducer(state, action) {
  if (action.type === "ADD_ITEM_TO_CART") {
    return [...state, action.payload];
  }

  if (action.type === "INCREMENT") {
    return state.map((item) => {
      if (item.id === action.payload) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }

  if (action.type === "DECREMENT") {
    return state.map((item) => {
      if (item.id === action.payload && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  }

  if (action.type === "DELETE_ITEM") {
    return state.filter((item) => item.id !== action.payload);
  }
}

export const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [state, dispatch] = useReducer(reducer, []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Get Item from cart
  const getCartItem = (productId) => {
    return state.find((item) => item.id === productId);
  };

  // Check if item is in cart
  const isItemInCart = (productId) => {
    return state.findIndex((item) => item.id === productId) !== -1;
  };

  // Calculate the total quantity
  let totalCost = state.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate the total price
  let totalQuantity = state.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        state,
        products,
        totalQuantity,
        totalCost,
        isItemInCart,
        getCartItem,
        dispatch,
        isModalOpen,
        setIsModalOpen,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be called within cart provider");
  }
  return context;
};
