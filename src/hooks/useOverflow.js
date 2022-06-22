import {useEffect} from "react";

export default function useOverflow(condition) {
  useEffect(() => {
    if (condition) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }, [condition]);
}
