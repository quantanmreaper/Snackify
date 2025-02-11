/*{ This file helps to manage and provide snack data across the application } */
import { createContext, useState, useContext } from "react";

const SnackContext = createContext(); // ✅ Create context

export const SnackProvider = ({ children }) => {
  const [snacks, setSnacks] = useState([
    { id: 1, name: "Sev", price: 150, image: "/assets/images/sev.jpeg" },
    { id: 2, name: "Nuts", price: 100, image: "/assets/images/nuts.jpeg" },
    { id: 3, name: "Chakri", price: 120, image: "/assets/images/chakri.jpeg" },
    { id: 4, name: "Peanut Chiki", price: 80, image: "/assets/images/peanutchiki.jpeg" },
  ]);

  return (
    <SnackContext.Provider value={{ snacks, setSnacks }}>
      {children}
    </SnackContext.Provider>
  );
};

// Correctly export the custom hook
export const useSnacks = () => {
  const context = useContext(SnackContext);
  if (!context) {
    throw new Error("useSnacks must be used within a SnackProvider");
  }
  return context;
};
