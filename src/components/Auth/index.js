import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import Login from "./Login";
import Profile from "../Profile";

export default function Auth() {
  const { currentUser, authListener } = useAuth();

  //get current user when the component did mount
  useEffect(() => {
    authListener();
    console.log(currentUser);
  }, []);

  return <div>{currentUser ? <Profile /> : <Login />}</div>;
}
