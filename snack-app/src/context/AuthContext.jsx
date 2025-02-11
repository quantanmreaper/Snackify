//This file will manage user authentication , loggin in and out of the app and also the session storage
import { createContext, useState, useContext, useEffect } from "react";

//  Create a context for authentication
const AuthContext = createContext();

//  Create a provider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores logged-in user info

  //  Function to log in a user
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Save user to localStorage
  };

  //  Function to log out a user
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user from localStorage
  };

  //  Check if user is already logged in when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//  Custom hook to easily use authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};
