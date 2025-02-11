import { createContext, useState, useContext } from "react";

//  Create a context for the cart
const CartContext = createContext();

//  Create a provider component to manage cart state
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Stores items in the cart

  //  Function to add an item to the cart and check the logic for adding a new and or old item
  const addToCart = (snack) => {
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const existingItem = prevCart.find((item) => item.id === snack.id);

      if (existingItem) {
        // If item exists, increase its quantity
        return prevCart.map((item) =>
          item.id === snack.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item does not exist, add it to the cart
        return [...prevCart, { ...snack, quantity: 1 }];
      }
    });
  };

  //  Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  //  Function to clear all items in the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

//  Custom hook to easily use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

    

