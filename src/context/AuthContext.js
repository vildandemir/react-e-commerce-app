import { useContext, useState, createContext } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useToast } from "@chakra-ui/react";

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
});

//create your own context hook
export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const [signIn, setSignIn] = useState(false);

  //sign up
  function register(email, password) {
    clearErrors();
    if (!email || !password) {
      toast({
        description: "Credentials not valid",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setIsSubmitting(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  //sign in
  function login(email, password) {
    clearErrors();
    if (!email || !password) {
      toast({
        description: "Credentials not valid",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    setIsSubmitting(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  //logout
  function logout() {
    signOut(auth).finally(() => {
      setIsSubmitting(false);
    });
  }

  //get current user when user state changes
  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        clearInputs();
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  };

  const value = {
    currentUser,
    register,
    login,
    logout,
    authListener,
    email,
    setEmail,
    password,
    setPassword,
    hasAccount,
    setHasAccount,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    signIn,
    setSignIn,
    isSubmitting,
    setIsSubmitting,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
