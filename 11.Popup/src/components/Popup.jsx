import React from "react";
import Alert from "react-bootstrap/Alert";

const Popup = ({ type, title, text, handlClose }) => {
  const popupContainer = {
    position: "absolute",
    top: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "1",
    background: "rgba(0,0,0,.1)",
  };

  const popupStyle = {
    position: "relative",
    width: "300px",
    zIndex: "10",
    margin: "40vh auto",
  };

  return (
    <div style={popupContainer}>
      <Alert
        style={popupStyle}
        variant={`${type}`}
        onClose={() => {
          handlClose(false);
        }}
        dismissible
      >
        <Alert.Heading>{title ? title : ""}</Alert.Heading>
        <p>{text ? text : ""}</p>
      </Alert>
    </div>
  );
};

export default Popup;
