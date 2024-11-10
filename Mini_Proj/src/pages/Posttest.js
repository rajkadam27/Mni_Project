import React, { useState } from 'react';
import './Posttest.css';

const Posttest = () => {
  const questions = [
    {
      question: "What is the correct way to toggle between light and dark theme in React?",
      options: [
        "a) Use CSS classes and toggle them directly in the component.",
        "b) Use React's context API to manage the theme globally.",
        "c) Modify the theme directly in the CSS file using JavaScript.",
        "d) Use a third-party package like 'react-theme-toggler'."
      ],
      correctAnswer: 1,
    },
    {
      question: "How can you store a user's theme preference to persist across page reloads?",
      options: [
        "a) Use localStorage to save the theme preference.",
        "b) Set the theme preference in sessionStorage.",
        "c) Set the theme in the global state of the app.",
        "d) Automatically reset the theme to the default theme on reload."
      ],
      correctAnswer: 0,
    },
    {
      question: "Which hook is commonly used to update the theme when the component mounts or reloads?",
      options: [
        "a) useEffect",
        "b) useState",
        "c) useContext",
        "d) useReducer"
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the correct CSS property to change the background color based on the theme?",
      options: [
        "a) background-color",
        "b) theme-background",
        "c) background",
        "d) color-background"
      ],
      correctAnswer: 0,
    },
    {
      question: "How would you apply a dynamic CSS class based on the current theme in React?",
      options: [
        "a) Use classList.add()",
        "b) Use className={theme === 'dark' ? 'dark-theme' : 'light-theme'}",
        "c) Use inline styles with React's style attribute.",
        "d) Use style={{ className: theme === 'dark' ? 'dark-theme' : 'light-theme' }}"
      ],
      correctAnswer: 1,
    },
    {
      question: "How would you ensure that a theme is applied across all components in a React application?",
      options: [
        "a) Manually add CSS classes to each component.",
        "b) Use a ThemeProvider component to manage and apply the theme globally.",
        "c) Use inline styles for each component.",
        "d) Create separate CSS files for each theme and import them into each component."
      ],
      correctAnswer: 1,
    },
    {
      question: "How can you dynamically switch between light and dark themes in a React app?",
      options: [
        "a) By using the useState hook to manage theme state and updating class names accordingly.",
        "b) By directly editing the CSS file using JavaScript.",
        "c) By reloading the page with a new theme.",
        "d) By using an external package to toggle the theme."
      ],
      correctAnswer: 0,
    },
    {
      question: "Which of the following React hooks is used to apply a theme change on component mount?",
      options: [
        "a) useState",
        "b) useEffect",
        "c) useContext",
        "d) useRef"
      ],
      correctAnswer: 1,
    },
    {
      question: "What is the best approach to handle a theme change using React's Context API?",
      options: [
        "a) Use Context to store the theme and wrap the application with a ThemeProvider.",
        "b) Use the useState hook in each component and pass the theme as props.",
        "c) Use sessionStorage to store the theme for each session.",
        "d) Create separate state for each component to store the theme."
      ],
      correctAnswer: 0,
    },
    {
      question: "How can you listen for changes to the theme and re-render the app accordingly?",
      options: [
        "a) By using the useState hook.",
        "b) By using the useEffect hook to detect changes in the theme state.",
        "c) By manually forcing a re-render using forceUpdate.",
        "d) By modifying the theme in the global window object."
      ],
      correctAnswer: 1,
    }
  ];
  
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: optionIndex,
    });
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
      <h2 className="heading">Theme Customizing Post-Test</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="question-block">
            <h3 className="question-text">{question.question}</h3>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option-block">
                <label
                  className={`option ${
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
                    onChange={() =>
                      handleAnswerChange(questionIndex, optionIndex)
                    }
                    disabled={submitted}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}

        {!submitted && (
          <button type="submit" className="submit-button">
            Submit Quiz
          </button>
        )}

        {submitted && (
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

export default Posttest;
