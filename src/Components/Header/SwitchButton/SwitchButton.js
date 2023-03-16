import React, { useState } from "react";
import "./SwitchButton.scss";

function SwitchButton() {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`switch-button ${isActive ? "active" : ""}`}
      onClick={handleToggle}
    >
      <div className="switch-background"></div>
      <div className="switch-knob"></div>
    </button>
  );
}

export default SwitchButton;
