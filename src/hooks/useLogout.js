import useAuthContext from "./useAuthContext";
import {auth} from "../firebase/config";
import {signOut} from "firebase/auth";
import {actionObj} from "store/actions";
import {notifyUser} from "utilities/helpers";
import toast from "react-hot-toast";

export default function useLogout() {
  const {dispatch} = useAuthContext();
  function logUserOut() {
    try {
      signOut(auth).then(() => dispatch({type: actionObj.logout}));
    } catch (error) {
      notifyUser(toast.error, `Something went wrong : ${error.message}`);
    }
  }

  return {logUserOut};
}
