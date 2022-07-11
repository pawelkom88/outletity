import {Navigate} from "react-router-dom";

export default function ProtectedRoute({user, children, redirectPath}) {
  if (!user) {
    return <Navigate to={redirectPath} />;
  }
  return children;
}
