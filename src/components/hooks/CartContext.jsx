import { createContext, useContext, useState } from "react";
import data from "../../data.json";

export const CartContext = createContext([]);

export const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState(data);

  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (product) => {
    setCartItems([
      ...cartItems,
      {
        name: product.name,
        id: product.id,
        image: product.image.thumbnail,
        price: product.price,
        quantity: 1,
      },
    ]);
  };

  const isProductInCart = (productId) => {
    return cartItems.findIndex((item) => item.id === productId) !== -1;
  };

  const incrementQuantity = (productId) =>
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId) item.quantity += 1;
        return item;
      })
    );

  const getCartItem = (productId) => {
    return cartItems.find((item) => item.id === productId);
  };

  const decrementQuantity = (productId) =>
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === productId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
    );

  const removeCartItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  let totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  let totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        products,
        totalQuantity,
        totalCost,
        addItemToCart,
        incrementQuantity,
        decrementQuantity,
        removeCartItem,
        getCartItem,
        isProductInCart,
        setCartItems,
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
// const [cartProducts, setCartProducts] = useState([]);
// function getProductQuantity(id) {
//   const quantity = cartProducts.find(
//     (product) => product.id === id
//   )?.quantity;

//   if (quantity === undefined) {
//     return 0;
//   }

//   return quantity;
// }

// function addToCart(id, name, image, price) {
//   const quantity = getProductQuantity(id);

//   if (quantity === 0) {
//     // Product is not in cart
//     setCartProducts([
//       ...cartProducts,
//       {
//         id: id,
//         // name: name,
//         // price: price,
//         quantity: 1,
//       },
//     ]);
//   } else {
//     // Product is in cart
//     setCartProducts((prev) =>
//       prev.map((product) =>
//         product.id === id
//           ? { ...product, quantity: product.quantity + 1 }
//           : product
//       )
//     );
//   }
// }

// function removeOneFromCart(id) {
//   const quantity = getProductQuantity(id);

//   if (quantity === 1) {
//     deleteFromCart(id);
//   } else {
//     setCartProducts((prev) =>
//       prev.map((product) =>
//         product.id === id
//           ? { ...product, quantity: product.quantity - 1 }
//           : product
//       )
//     );
//   }
// }

// function getTotalCost() {}

// const contextValue = {
//   items: cartProducts,
//   getProductQuantity,
//   addToCart,
//   removeOneFromCart,
//   deleteFromCart,
//   getTotalCost,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const count = action.payload.count;
//       const product = { ...action.payload.item, count };
//       return [...state, product];

//     case "INCREMENT":
//       const productInc = state.find(
//         (item) => item.id === action.payload.item.id
//       );
//       productInc.count = action.payload.count;
//       return [...state];

//     case "DECREMENT":
//       let productDec = state.find((item) => item.id === action.payload.item.id);
//       productDec.count = action.payload.count;

//       if (productDec.count === 0) {
//         const productFil = state.filter((item) => item.id !== productDec.id);
//         return [...productFil];
//       } else {
//         return [...state];
//       }

//     default:
//       return state;
//   }
// }
