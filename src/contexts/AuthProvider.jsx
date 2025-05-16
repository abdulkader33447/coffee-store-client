import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const AuthProvider = ({ children }) => {
  const userInfo = {
    createUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
