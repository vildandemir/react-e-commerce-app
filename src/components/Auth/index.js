import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import Login from "./Login";
import Profile from "../Profile";

export default function Auth() {
  const { currentUser, authListener } = useAuth();

  useEffect(() => {
    authListener();
    console.log(currentUser);
  }, []);

  return <div>{currentUser ? <Profile /> : <Login />}</div>;
}
