import React from "react";
import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <div className="App">
      <div className="BFFExplain">BFF = Best Friend Forever💓💓</div>
      <button className="informButton" onClick={onClickButton}>
        💛BFF 정보를 입력하세요~💚
      </button>
      {isOpen && (
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default App;
