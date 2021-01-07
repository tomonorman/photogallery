import React from "react";

const Modal = ({selectedImg}) => {

  return (
    <div className="backdrop">
      <img src={selectedImg} alt="Large Pic"/>
    </div>
  )
}

export default Modal;