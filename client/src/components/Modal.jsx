import React from 'react';
import './Modal.css'; // You will need to style the modal

function Modal({ onClose, children }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
