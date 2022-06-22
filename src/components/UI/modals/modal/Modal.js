import useKeyPress from "hooks/useKeyPress";
import {createPortal} from "react-dom";
import Backdrop from "../backdrop/Backdrop";
import React from "react";
import CloseBtn from "components/UI/close-button/CloseBtn";
import FocusLock from "react-focus-lock";
import "./Modal.scss";

export default function Modal({heading, children, toggle, size = "3"}) {
  useKeyPress("Escape", toggle);

  return createPortal(
    <Backdrop toggle={toggle}>
      <FocusLock>
        <div
          className="modal-container"
          onClick={e => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}>
          <CloseBtn toggle={toggle} />
          <h2 style={{fontSize: `clamp(${size - 1}rem, calc( 12px + 2.475vw ), ${size}rem)`}}>
            {heading}
          </h2>

          {children}
        </div>
      </FocusLock>
    </Backdrop>,
    document.getElementById("modal")
  );
}
