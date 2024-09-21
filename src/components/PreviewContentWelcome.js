import React from "react";
import "./PreviewContentWelcome.css";

const PreviewContent = ({
  previewTitle,
  previewDescription,
  previewButton,
  imagePreview,
}) => {
  return (
    <div className="preview-content">
      <div className="welcome-content">
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
      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Uploaded Preview" />
        </div>
      )}
    </div>
  );
};

export default PreviewContent;
