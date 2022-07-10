import {AuthContext} from "../context/AuthContext";
import {useContext} from "react";

export default function useAuthContext() {
  // custom hook created in order to make pulling global contex out easier and do below check
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be inside an AuthContextProvider");
  }

  return context;
}
