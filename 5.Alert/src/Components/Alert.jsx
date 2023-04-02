import React, { useState, useEffect } from "react";

const Alert = ({ alertColor, alertText, delay = false }) => {
  const [showAlert, setShowAlert] = useState(true);

  const alertCloseBtn = (e) => {
    setShowAlert(false);
  };

  useEffect(() => {
    delay &&
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
  });

  return (
    showAlert && (
      <div
        className={`alert alert-${alertColor} mt-3 position-relative w-100 `}
      >
        {alertText}
        <span className="position-absolute top-50 end-0 translate-middle">
          <button
            className={`btn btn-${alertColor} mx-auto`}
            onClick={alertCloseBtn}
          >
            X
          </button>
        </span>
      </div>
    )
  );
};

export default Alert;
