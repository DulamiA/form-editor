import React from "react";
import "./PreviewContentWelcome.css";

const PreviewContent = ({
  previewTitle,
  previewDescription,
  previewButton,
}) => {
  return (
    <div className="preview-content">
      <label className="welcome-title">{previewTitle}</label>
      <label className="welcome-description">{previewDescription}</label>
      <div className="button-wrapper">
        <button className="welcome-button">{previewButton}</button>
        <div className="helper-wrapper">
          <div className="helper-text">
            <span>
              press <strong>Enter ↵</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewContent;
