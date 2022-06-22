import {createPortal} from "react-dom";
import Backdrop from "../backdrop/Backdrop";
import React from "react";
import "./Modal.scss";
import CloseBtn from "components/UI/close-button/CloseBtn";

export default function Modal({heading, children, toggle}) {
  return createPortal(
    <Backdrop toggle={toggle}>
      <div
        className="modal-container"
        onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
        <CloseBtn size={20} toggle={toggle} />
        <h2 className="modal-heading">{heading}</h2>
        {children}
      </div>
    </Backdrop>,
    document.getElementById("modal")
  );
}
