import React from "react";
import ReactDom from "react-dom";
import "../styles/Modal.css";
import Formulary from "./Formulary";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-style">
        <div className="modal-style">
          <button onClick={onClose}> Close modal</button>
          {children}
          <Formulary/>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
