import React from 'react';
import './References.css';

const References = () => (
  <div className="references-container">
    <h2 className="references-heading">References</h2>
    
    <p>Here are some useful resources to learn more about the Node.js File System:</p>

    <div className="section">
      <h3>URLs</h3>
      <ul>
        <li>
          <a href="https://www.geeksforgeeks.org/node-js-file-system" target="_blank" rel="noopener noreferrer">
            GeeksforGeeks: Node.js fs Module
          </a>
        </li>
        <li>
          <a href="https://mui.com/material-ui/customization/theming/" target="_blank" rel="noopener noreferrer">
            MUI: material-ui
          </a>
        </li>
        <li>
          <a href="https://medium.com/@martijn.koppejan1/adding-themes-to-your-react-app-material-ui-44d6a732a6ec" target="_blank" rel="noopener noreferrer">
          https://medium.com/: Theme Customizing
          </a>
        </li>
       
      </ul>
    </div>

    <div className="section">
      <h3>Books</h3>
      <ul>
        <li>
          <strong>React Up & Running</strong> by Stoyan Stefanov - This book provides a solid introduction to React and covers how to build interactive user interfaces. It touches on state management, which is essential for implementing features like theme switching.
        </li>
        <li>
          <strong>Learning React: Functional Web Development with React and Redux</strong> Alex Banks & Eve Porcello -This book dives deep into React, including advanced concepts like Redux for managing the state of your application. It's helpful for handling complex state logic, such as managing themes across large applications.
          </li>
          <li>
          <strong>React Design Patterns and Best Practices</strong> by Michele Bertoli - This book offers insights into React design patterns, which includes creating customizable and reusable components. You can use these patterns to create themeable components.
        </li>
      </ul>
    </div>
  </div>
);

export default References;
