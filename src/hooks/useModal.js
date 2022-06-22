import {useState} from "react";

export default function useModal() {
  const [isShown, setIsShown] = useState(false);

  function toggle() {
    setIsShown(prevState => !prevState);
  }

  return {isShown, toggle};
}
