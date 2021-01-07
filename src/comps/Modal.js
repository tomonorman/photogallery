import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClick = (event) => {
    if (event.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  }

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImg} alt="Large Pic"/>
    </div>
  )
}

export default Modal;