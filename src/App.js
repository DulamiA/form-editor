import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import PreviewContentWelcome from "./components/PreviewContentWelcome";
import PreviewContentEmail from "./components/PreviewContentEmail";
import "./App.css";

function App() {
  // Use state to store form data between the pages
  const [formConfig, setFormConfig] = useState({
    welcomeTitle: "Welcome to our form",
    welcomeDescription: "This is a description of the form",
    welcomeButton: "Start",
    emailTitle: "Add question title",
    emailDescription: "Add  question description (optional)"
  });

  // State to hold uploaded image preview URL
  const [imagePreview, setImagePreview] = useState(null);

  const handleWelcomeTitleChange = (e) => {
    setFormConfig({ ...formConfig, welcomeTitle: e.target.value });
  };

  const handleWelcomeDescriptionChange = (e) => {
    setFormConfig({ ...formConfig, welcomeDescription: e.target.value });
  };

  const handleWelcomeButtonChange = (e) => {
    setFormConfig({ ...formConfig, welcomeButton: e.target.value });
  };

  const handleEmailTitleChange = (e) => {
    setFormConfig({ ...formConfig, emailTitle: e.target.value });
  };

  const handleEmailDescriptionChange = (e) => {
    setFormConfig({ ...formConfig, emailDescription: e.target.value });
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar
          formConfig={formConfig}
          handleWelcomeTitleChange={handleWelcomeTitleChange}
          handleWelcomeDescriptionChange = {handleWelcomeDescriptionChange}
          handleWelcomeButtonChange = {handleWelcomeButtonChange}
          handleEmailTitleChange={handleEmailTitleChange}
          handleEmailDescriptionChange = {handleEmailDescriptionChange}
          setImagePreview={setImagePreview}
        />

        {/* Define routes for each page */}
        <div className="main-content">
          <div className="main-content1">
            <Routes>
              <Route
                path="/"
                element={
                  <PreviewContentWelcome
                    previewTitle={formConfig.welcomeTitle}
                    previewDescription={formConfig.welcomeDescription}
                    previewButton={formConfig.welcomeButton}
                    imagePreview={imagePreview}
                  />
                }
              />
              <Route
                path="/welcome"
                element={
                  <PreviewContentWelcome
                  previewTitle={formConfig.welcomeTitle}
                  previewDescription={formConfig.welcomeDescription}
                  previewButton={formConfig.welcomeButton}
                  imagePreview={imagePreview}
                  />
                }
              />
              <Route
                path="/email"
                element={
                  <PreviewContentEmail
                    previewTitle={formConfig.emailTitle}
                    previewDescription={formConfig.emailDescription}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
