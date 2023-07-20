import React, { useRef, useEffect } from "react";
import "./CustomAlert.css";

const CustomAlert = ({ message, onClose, show }) => {
  //useRef para controlar o alert/modal
  const alertRef = useRef(null);

  // useEffect e useRef controlando o alert/modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (alertRef.current && !alertRef.current.contains(event.target)) {
        onClose();
      }    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  //Logica para exibir ou não o alert / modal
  if (!show) {
    return null; 
    }

  //Return - O que sera rendenizado
  return (
    <div ref={alertRef} className="custom-alert">
      <h1 className="custom-alert-message">{message[0]}</h1>
      <p className="custom-alert-message2">{message[1]}</p>
    </div>
  );
};
export default CustomAlert;
