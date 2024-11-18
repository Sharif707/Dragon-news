import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config.init";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  console.log(user);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const login = (email,password) => {
    return  signInWithEmailAndPassword(auth,email,password)
  }

  const logout = () => {
   return signOut(auth)
    };
  
 
  const authInfo = {
    user,
    setUser,
    createNewUser,
    login,
    logout,
    loading,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
