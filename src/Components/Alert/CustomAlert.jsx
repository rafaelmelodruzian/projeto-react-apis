import React, { useRef, useEffect } from "react";
import "./CustomAlert.css";

const CustomAlert = ({ message, onClose, show }) => {
  const alertRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (alertRef.current && !alertRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!show) {
    return null; // Retorna null para não renderizar o alerta quando show for false
  }

  return (
    <div ref={alertRef} className="custom-alert">
      <h1 className="custom-alert-message">{message[0]}</h1>
      <p className="custom-alert-message2">{message[1]}</p>
    </div>
  );
};

export default CustomAlert;
