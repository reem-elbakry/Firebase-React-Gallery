import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const onClickHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  return (
    <div className="backdrop" onClick={onClickHandler}>
      <img src={selectedImg} alt="" />
    </div>
  );
};

export default Modal;
