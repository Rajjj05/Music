/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useClerk } from "@clerk/clerk-react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { openSignIn, openSignUp, signOut } = useClerk();

  const handleSignIn = () => openSignIn();
  const handleSignUp = () => openSignUp();
  const handleSignOut = () => signOut();

  return (
    <AuthContext.Provider value={{ handleSignIn, handleSignUp, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
