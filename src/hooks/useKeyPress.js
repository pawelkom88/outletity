import {useEffect, useRef} from "react";

export default function useKeyPress(element, callback) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

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
