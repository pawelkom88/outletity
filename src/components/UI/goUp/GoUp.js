import {useEffect, useState} from "react";
import "./GoUp.scss";

export default function GoUp() {
  const [showIcon, setShowIcon] = useState();

  const scrollHandler = () => {
    const footer = document.querySelector("footer");
    const {y: footerHeight} = footer.getBoundingClientRect();

    if (window.pageYOffset >= footerHeight) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  return (
    <>
      {showIcon && (
        <a href="#">
          <svg
            style={{position: "fixed", bottom: "4rem", right: "3rem", width: "50px"}}
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 100 100">
            <path d="M67.9 57.4c-.8.8-2 .8-2.8 0L50.4 42.7 34.9 58.2c-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8L49 38.5c.8-.8 2.1-.8 2.8 0l16.1 16.1c.8.8.8 2 0 2.8zM88 50c0 21-17 38-38 38S12 71 12 50s17-38 38-38 38 17 38 38zm-4 0c0-18.8-15.3-34-34-34-18.8 0-34 15.2-34 34s15.2 34 34 34c18.7 0 34-15.2 34-34z" />
            <path fill="#00F" d="M1224-1210V474H-560v-1684h1784m8-8H-568V482h1800v-1700z" />
          </svg>
        </a>
      )}
    </>
  );
}
