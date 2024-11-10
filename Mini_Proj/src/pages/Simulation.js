import React, { useState, useEffect } from 'react';
import './Simulation.css'; 

function Simulation() {
  const [theme, setTheme] = useState('light'); // Default theme is light
  const [message, setMessage] = useState('Welcome to the Theme Change Simulator! Choose your theme below.');

  // Load the theme from localStorage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Change the theme and save it to localStorage
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme); // Persist theme in localStorage
    setMessage(`You have selected the ${selectedTheme} theme!`);
  };

  return (
    <div className={`theme-simulation-container ${theme}`}>
      {/* Theme Selection Section */}
      <div className="theme-selection-section">
        <h2>Theme Change Simulation</h2>
        <p>Choose your preferred theme below:</p>
        <select
          value={theme}
          onChange={(e) => handleThemeChange(e.target.value)}
          className="theme-select"
        >
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
          <option value="blue">Blue Theme</option>
          <option value="green">Green Theme</option>
          <option value="red">Red Theme</option>
        </select>
      </div>

      {/* Message Display Section */}
      <div className="message-section">
        <h3>{message}</h3>
      </div>

      {/* Steps Section */}
      <div className="steps-section">
        <h3>How it works:</h3>
        <ol>
          <li>Select a theme from the dropdown.</li>
          <li>Watch the page adjust its styles instantly.</li>
          <li>Your theme preference is saved across page reloads.</li>
        </ol>
      </div>

      {/* Theme Information */}
      <div className="theme-info-section">
        <h3>About Themes</h3>
        <p>The Light Theme provides a bright and vibrant interface, perfect for daytime usage.</p>
        <p>The Dark Theme offers a sleek, low-light experience, ideal for night-time or dark environments.</p>
        <p>The Blue Theme gives a refreshing, cool look with a tranquil blue color scheme.</p>
        <p>The Green Theme offers a calming and nature-inspired feel, with shades of green.</p>
        <p>The Red Theme brings a bold, energetic look with a warm red tone.</p>
      </div>
    </div>
  );
}

export default Simulation;
