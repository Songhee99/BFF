import React from "react";
import "./Modal.css";
import { useRef } from "react";
import ModalContainer from "./ModalContainer.js";
import useOutSideClick from "../UseOutSideClick/UseOutSideClick";

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <div className="overlay">
        <div className="modalWrap" ref={modalRef}>
          <button className="closeButton" onClick={handleClose}>
            X
          </button>
          <form>
            <input type="text" placeholder="너의 BFF 이름❤️은 ?!!"></input>
            <input type="text" placeholder="너의 BFF 생일❤️은 ?!!"></input>
            <input type="text" placeholder="너의 BFF 전화번호❤️는 ?!!"></input>
            <input type="submit" value="⭐등록⭐"></input>
          </form>
        </div>
      </div>
    </ModalContainer>
  );
};

export default Modal;
