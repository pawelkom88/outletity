import {useState} from "react";
import {auth} from "../firebase/config";
import {signOut} from "firebase/auth";

export default function useLogout() {
  const [error, setError] = useState(null);

  async function logUserOut() {
    setError(null);
    try {
      const logout = await signOut(auth);
      console.log(logout);
    } catch (error) {
      setError(error.message);
    }
  }

  return {error, logUserOut};
}
