// Modal.js
import React from "react";
import Signin from "../Admin/Signin/signin"; // Assuming Signin is in the same directory
import "./Modal.css";
const Modal = ({ show, onClose }) => {
  return (
    <div className={`modal ${show ? "modal-show" : ""}`}>
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <Signin />
      </div>
    </div>
  );
};

export default Modal;
