import React from 'react';
import './Procedure.css';

const Procedure = () => {
  return (
    <div className="procedure-content">
      <h3>Procedure for Theme Customization</h3>
      <p>Follow these steps to complete the theme customization process:</p>
      <ol>
        <li>
          <strong>Understand Theme Structure:</strong> Familiarize yourself with the default theme structure and how it applies to different parts of the application.
        </li>
        <li>
          <strong>Select the Theme Toggle:</strong> Use the theme toggle button to choose between different themes such as light and dark modes, or other color schemes available.
        </li>
        <li>
          <strong>Modify the Theme Configuration:</strong> Choose your preferred color scheme, font, and layout by adjusting settings from the theme customization options.
        </li>
        <li>
          <strong>Preview Theme Changes:</strong> See a real-time preview of the changes you've made to the theme, such as background colors, text styles, and component appearance.
        </li>
        <li>
          <strong>Save the Theme Preferences:</strong> Save your theme preferences so they persist across sessions, even after the page reloads or when you navigate to other pages.
        </li>
        <li>
          <strong>Apply Changes Globally:</strong> Once saved, your customized theme will automatically be applied across the entire application, updating all components with the new styles.
        </li>
        <li>
          <strong>Check Theme Response:</strong> Ensure that all components correctly update based on the selected theme (e.g., text colors, background, buttons, etc.).
        </li>
        <li>
          <strong>Test Across Devices:</strong> Check your theme customization on various devices to ensure responsiveness and consistency in appearance.
        </li>
      </ol>
    </div>
  );
};

export default Procedure;
