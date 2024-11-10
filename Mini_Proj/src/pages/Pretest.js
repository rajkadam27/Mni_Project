import React, { useState } from 'react';
import './Pretest.css'; 

const Pretest = () => {
  const questions = [
    {
      question: "Which React hook is commonly used to manage the state of a theme in a React application?",
      options: ["useContext", "useState", "useEffect", "useReducer"],
      correctAnswer: 2, 
    },
    {
      question: "In React, how can you toggle between different themes (such as light and dark) dynamically?",
      options: ["By using useState to manage a theme variable and conditionally applying CSS classes.", "By using useEffect to change the theme when the component is mounted.", " By defining multiple components for different themes.", "By using the classList.toggle() method in the render function."],
      correctAnswer: 1, 
    },
    {
      question: "What CSS property is commonly used to define the background color of a theme?",
      options: [
        " font-color",
        "background-color",
        "background-image",
        "color.",
      ],
      correctAnswer: 2, 
    },
    {
      question: "In a light and dark theme toggle, how would you change the background color using React?",
      options: ["By dynamically updating the style property in JSX using style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}",
         "By using an external library to handle the theme change.",
          "By creating separate components for light and dark themes.",
           "By applying inline styles for each component individually."],
      correctAnswer: 1, 
    },
    {
      question: "What would be the correct way to manage the theme change across the entire application?",
      options: [
        "By setting a global state using useState and passing it down as props to child components.",
        "By changing the theme in each individual component independently.",
        "By using an external state management library like Redux to manage theme state.",
        "By directly modifying the CSS file using JavaScript."
      ],
      correctAnswer: 1, // "a) By setting a global state using useState and passing it down as props to child components."
    },
    {
      question: "Which method can be used to apply a CSS class conditionally in React based on the current theme?",
      options: [
        "classList.add()",
        "className={theme === 'dark' ? 'dark-theme' : 'light-theme'}",
        "style={{ className: theme === 'dark' ? 'dark-theme' : 'light-theme' }}",
        "ReactDOM.addClass()"
      ],
      correctAnswer: 2, // "b) className={theme === 'dark' ? 'dark-theme' : 'light-theme'}"
    },
    {
      question: "How can you make sure the user’s theme preference (light or dark) persists across page reloads?",
      options: [
        "By using localStorage to save the theme preference.",
        "By setting the theme preference in the sessionStorage.",
        "By using React’s useEffect to re-apply the theme every time the page reloads.",
        "By defining a static default theme in the CSS file."
      ],
      correctAnswer: 1, // "a) By using localStorage to save the theme preference."
    },
    {
      question: "Which of the following is a typical way to implement a theme toggle button in a React app?",
      options: [
        "Use a radio button input to toggle between themes.",
        "Use a button with onClick to toggle the state and change the theme.",
        "Use the useEffect hook to toggle the theme when the component is mounted.",
        "Use a dropdown to select a theme and update the theme state."
      ],
      correctAnswer: 2, // "b) Use a button with onClick to toggle the state and change the theme."
    },
    {
      question: "What does the useEffect hook do when implementing theme change in React?",
      options: [
        "It is used to initialize the theme when the component first mounts.",
        "It automatically toggles between themes at regular intervals.",
        "It listens for any changes in the theme and updates the localStorage.",
        "It applies inline styles dynamically when the theme state changes."
      ],
      correctAnswer: 1, // "a) It is used to initialize the theme when the component first mounts."
    },
    {
      question: "How would you ensure that a theme is applied to all components in a React app?",
      options: [
        "By using a ThemeProvider component to wrap the entire app and apply the theme globally.",
        "By manually adding CSS classes to each individual component.",
        "By using the style attribute for each component individually.",
        "By importing separate CSS files for light and dark themes into each component."
      ],
      correctAnswer: 1, // "a) By using a ThemeProvider component to wrap the entire app and apply the theme globally."
    }
  ];

  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: optionIndex });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const score = Object.keys(userAnswers).filter(
    (questionIndex) =>
      userAnswers[questionIndex] === questions[questionIndex].correctAnswer
  ).length;

  return (
    <div className="quiz-container">
      <h2 className="heading">Theme Customizing Pre-Test</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-block">
            <h3 className="question-text">{question.question}</h3>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option-block">
                <label
                  className={`option-label ${
                    submitted &&
                    userAnswers[questionIndex] === optionIndex &&
                    optionIndex !== question.correctAnswer
                      ? 'incorrect-option'
                      : submitted && optionIndex === question.correctAnswer
                      ? 'correct-option'
                      : ''
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    value={optionIndex}
                    onChange={() => handleAnswerChange(questionIndex, optionIndex)}
                    disabled={submitted}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}

        {!submitted ? (
          <button type="submit" className="submit-button">
            Submit Quiz
          </button>
        ) : (
          <div className="score-block">
            <h4>
              Your score: {score} out of {questions.length}
            </h4>
          </div>
        )}
      </form>
    </div>
  );
};

export default Pretest;
