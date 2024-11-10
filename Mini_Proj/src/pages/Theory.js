import React from 'react';
import './Aim.css'; 
const Theory = () => {
  return (
    <div className="theory-container">
      <h2 className="theory-heading">Theory of Theme Customizing Module</h2>
      <p>
      What is Theme Customization?

      </p>
      <ol className="theory-list">
        <li>
          <strong>Introduction to Theme Customizing Module:</strong>
          <span> Theme customization refers to the ability to modify the visual aspects of a user interface (UI) such as:</span>

</li>
        <li>
          <strong>Colors:</strong>
          <span> Background colors, text colors, button styles, etc.</span>
        </li>
        <li>
          <strong>Typography:</strong>
          <span> Font sizes, font families, line heights, etc.</span>
        </li>
        <li>
          <strong>Spacing:</strong>
          <span> Padding, margin, and layout of elements.</span>
        </li>
        <li>
          <strong>Breakpoints:</strong>
          <span> Responsiveness and adaptability of the theme to different screen sizes.</span>
        </li>
        <li>
          <strong>Mode:</strong>
          <span> Switching between light and dark mode.</span>
        </li>
        
      </ol>
      <p>
      React theme customization involves changing the styles of components dynamically based on user preferences. Themes typically consist of color schemes, font styles, spacing, and layout settings. 
      For example, you can offer users the ability to switch between Light Mode and Dark Mode, or even create completely custom themes with different color schemes, fonts, and other UI elements.
      </p>
    </div>
  );
};

export default Theory;
