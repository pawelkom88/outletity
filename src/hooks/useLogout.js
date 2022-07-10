import {useState} from "react";
import {auth} from "../firebase/config";
import {signOut} from "firebase/auth";
import useAuthContext from "./useAuthContext";
import {actionObj} from "store/actions";

export default function useLogout() {
  const [error, setError] = useState(null);
  const {dispatch} = useAuthContext();

  function logUserOut() {
    setError(null);
    try {
      signOut(auth).then(() => dispatch({type: actionObj.logout}));
    } catch (error) {
      setError(error.message);
    }
  }

  return {error, logUserOut};
}
