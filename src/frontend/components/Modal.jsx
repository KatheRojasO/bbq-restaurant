import React from "react";
import ReactDom from "react-dom";
import UpdateForm from "./UpdateForm";

export default function Modal({ open, children, onClose, onUpdateItem, item}) {

  if (!open) return null;

  

  return ReactDom.createPortal(
    <>
      <div className="overlay-style">
        <div className="modal-style">
          <button onClick={onClose}> Close modal</button>
          {children}
          <UpdateForm onUpdateItem= {onUpdateItem} item={item}/>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
