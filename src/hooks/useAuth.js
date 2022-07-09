import {useState} from "react";
import {auth} from "../firebase/config";
import toast from "react-hot-toast";
import {notifyUser} from "utilities/helpers";

export default function useAuth(method) {
  const [userData, setUserData] = useState(null);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleUser(email, password, message) {
    isLoading(true);
    try {
      const userCredential = await method(auth, email, password);
      setUserData(userCredential.user);
      isLoading(false);
      setError(null);
      notifyUser(toast.success, message);
      // navigate somewhere
    } catch (error) {
      setError(error.message);
      isLoading(false);
    }
  }
  return {handleUser, userData, loading, error};
}
