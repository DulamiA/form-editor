import React from "react";
import "./PreviewContentEmail.css";

const PreviewContentEmail = ({ previewTitle, previewDescription }) => {
  return (
    <div className="email-preview-content">
      <div className="content">
        <div className="counter-content">
          <span className="text-wrapper">1</span>
          <span className="boundary">
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="arrow-right"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
            </svg>
          </span>
        </div>
        <div className="email-content">
          <label className="email-title">{previewTitle}</label>
          <label className="email-description">{previewDescription}</label>
          <input type="text" placeholder="Type here..." />
        </div>
      </div>
    </div>
  );
};

export default PreviewContentEmail;
