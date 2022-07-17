import {useState} from "react";
import useAuthContext from "hooks/useAuthContext";
import {auth} from "../firebase/config";
import toast from "react-hot-toast";
import {notifyUser} from "utilities/helpers";

export default function useAuth(method, action) {
  const {dispatch} = useAuthContext();
  const [userData, setUserData] = useState(null);

  async function handleUser(email, password, message) {
    try {
      const userCredential = await method(auth, email, password);
      setUserData(userCredential.user);
      dispatch({type: action, payload: userCredential.user});
      notifyUser(toast.success, message);
    } catch {
      notifyUser(toast.error, "Entered e-mail or password is not correct");
    }
  }

  return {handleUser, userData};
}
