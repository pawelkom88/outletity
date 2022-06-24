import {useState} from "react";
import useKeyPress from "hooks/useKeyPress";
import "./Hamburger.scss";

export default function Hamburger({menuIsOpen, openMobileMenu, closeMobileMenu}) {
  const [hasFocus, setFocus] = useState(false);

  function handleMobileMenu() {
    if (menuIsOpen && hasFocus) {
      closeMobileMenu();
    } else if (!menuIsOpen && hasFocus) {
      openMobileMenu();
    }
  }

  useKeyPress("Enter", handleMobileMenu);
  useKeyPress("Escape", closeMobileMenu);

  const isOpen = menuIsOpen ? "open" : "";
  const numberOfBars = new Array(3).fill("bar");

  return (
    <div
      role="button"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      id="hamburger"
      tabIndex="0"
      className="hamburger-menu"
      onClick={handleMobileMenu}
      aria-expanded={menuIsOpen ? true : false}
      aria-label="show navigation menu">
      {numberOfBars.map((_, i) => (
        <div key={i} className={`menu-bar${i} ${isOpen}`}></div>
      ))}
    </div>
  );
}
