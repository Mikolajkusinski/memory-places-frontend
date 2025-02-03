import React from "react";
import "./PopupStyles.scss";
import { IconSquareRoundedArrowRight } from "@tabler/icons-react";

const MarkerPopup = ({ imageUrl, name, description }) => {
  return (
    <div className="popup">
      <div
        className="popup-background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-content-text">
              <h3 className="popup-title">{name}</h3>
              <p className="popup-description">{description}</p>
            </div>
            <button className="popup-goto-button">
              <IconSquareRoundedArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkerPopup;
