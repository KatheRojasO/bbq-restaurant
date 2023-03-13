import React from "react";
import ReactDom from "react-dom";
import UpdateForm from "./UpdateForm";

export default function Modal({
  open,
  children,
  onClose,
  onUpdateItem,
  item,
  options,
}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="overlay-style">
        <div className="modal-style">
          <button onClick={onClose}> x </button>
          {children}
          <UpdateForm
            onClick={onClose}
            onUpdateItem={onUpdateItem}
            item={item}
            options={options}
          />
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
