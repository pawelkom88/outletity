import {useEffect, useRef} from "react";

export default function useModalClose(element, callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    function handleKeyDown({key}) {
      if (key === element) {
        callbackRef.current(key);
      }
    }
    
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [element]);
}
