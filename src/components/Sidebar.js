import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.css";
import Switch from "./Switch";

const Sidebar = ({
  formConfig,
  handleWelcomeTitleChange,
  handleWelcomeDescriptionChange,
  handleWelcomeButtonChange,
  handleEmailTitleChange,
  handleEmailDescriptionChange,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <nav className="sidebar">
      {location.pathname === "/welcome" || location.pathname === "/email" ? (
        <div className="customization-section">
          <div className="upper-content">
            <div className="settings-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19.14 12.94c.04-.3.06-.62.06-.94s-.02-.64-.06-.94l2.03-1.58c.18-.14.23-.39.12-.59l-1.92-3.32c-.11-.19-.35-.26-.56-.2l-2.39.96c-.5-.38-1.04-.7-1.63-.94L14.9 3.5c-.03-.21-.21-.37-.43-.37h-3.94c-.22 0-.4.16-.43.37l-.36 2.43c-.59.24-1.13.56-1.63.94l-2.39-.96c-.21-.08-.45.01-.56.2l-1.92 3.32c-.11.19-.06.45.12.59l2.03 1.58c-.04.3-.06.62-.06.94s.02.64.06.94l-2.03 1.58c-.18.14-.23.39-.12.59l1.92 3.32c.11.19.35.26.56.2l2.39-.96c.5.38 1.04.7 1.63.94l.36 2.43c.03.21.21.37.43.37h3.94c.22 0 .4-.16.43-.37l.36-2.43c.59-.24 1.13-.56 1.63-.94l2.39.96c.21.08.45-.01.56-.2l1.92-3.32c.11-.19.06-.45-.12-.59l-2.03-1.58zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
              </svg>
              <label>Settings</label>
            </div>
            <button onClick={handleBackClick} className="back-button">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 17"
                fill="#737373"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.59646 8.5L0 2.90354L2.40354 0.5L8 6.09646L13.5965 0.5L16 2.90354L10.4035 8.5L16 14.0965L13.5965 16.5L8 10.9035L2.40354 16.5L0 14.0965L5.59646 8.5Z"
                ></path>
              </svg>
            </button>
          </div>
          {location.pathname === "/welcome" && (
            <div className="form-content">
              <label>Title</label>
              <input
                type="textbox"
                value={formConfig.welcomeTitle}
                onChange={handleWelcomeTitleChange}
              />
              <label>Description</label>
              <input
                type="textbox"
                value={formConfig.welcomeDescription}
                onChange={handleWelcomeDescriptionChange}
              />
              <label>Button Text</label>
              <input
                type="textbox"
                value={formConfig.welcomeButton}
                onChange={handleWelcomeButtonChange}
              />
            </div>
          )}

          {location.pathname === "/email" && (
            <div className="form-content">
              <label>Title</label>
              <input
                type="textbox"
                value={formConfig.emailTitle}
                onChange={handleEmailTitleChange}
              />
              <label>Description</label>
              <input
                type="textbox"
                value={formConfig.emailDescription}
                onChange={handleEmailDescriptionChange}
              />
              <div className="validation-swtich">
                <label>Required</label>
                <Switch />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="button-container">
          <button
            onClick={() => navigate("/welcome")}
            className="sidebar-button"
          >
            Welcome Page
          </button>
          <button onClick={() => navigate("/email")} className="sidebar-button">
            Email Page
          </button>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;
