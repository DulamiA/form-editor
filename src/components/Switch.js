import React, { useState } from 'react';
import './Switch.css';  // CSS for styling the switch

const Switch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={isToggled}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
