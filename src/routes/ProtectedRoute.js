import {Navigate} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

import {notifyUser} from "utilities/helpers";

export default function ProtectedRoute({user, children, redirectPath}) {
  if (!user) {
    notifyUser(toast.error, "Only logged in users have access to this path");
    return (
      <>
        <Navigate to={redirectPath} />
        <Toaster />
      </>
    );
  }
  return children;
}
