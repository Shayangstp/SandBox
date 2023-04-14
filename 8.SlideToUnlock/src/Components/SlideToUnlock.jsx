import React, { useState } from "react";
import LockSlider from "./LockSlider";
import "./LockSlider.css";
import { AiFillLock } from "react-icons/ai";
import LockScreenImg from "../Assets/img.jpg";
import screenImg from "../Assets/img2.jpg";

const SlideToUnlock = () => {
  const [lock, setLock] = useState(true);
  const [slider, setSlider] = useState(0);
  const [uiProp, setUiProp] = useState(
    `url(${LockScreenImg}) center/cover no-repeat`
  );

  const handleSliderToUnlock = (e) => {
    setSlider(e.target.value);

    if (e.target.value >= 98) {
      setLock(false);
      setUiProp(`url(${screenImg}) center/cover no-repeat`);
    }
  };

  const lockHandler = () => {
    setLock(true);
    setSlider(0);
    setUiProp(`url(${LockScreenImg}) center/cover no-repeat`);
  };

  return (
    <div
      className="container d-flex flex-column align-items-center"
      style={{
        height: "70vh",
        width: "250px",
        marginTop: "15vh",
        border: "3px solid #000",
        borderRadius: "25px",
        transition: "0.1s ease",
        background: uiProp,
      }}
    >
      <h1 className="title">{lock ? "Slide to Unlock" : "Tap to Lock"}</h1>
      {lock ? (
        <LockSlider inputHandler={handleSliderToUnlock} inputValue={slider} />
      ) : (
        ""
      )}
      {lock ? "" : <AiFillLock className="unlockIcon" onClick={lockHandler} />}
    </div>
  );
};

export default SlideToUnlock;
