import React, { useState } from "react";

const FillBlanks = ({ question }) => {
  const [userAnswer, setUserAnswer] = useState(new Array(question.paragraph.split('%_%').length - 1).fill(''));

  const handleOptionClick = (option) => {
    const blankIndex = userAnswer.indexOf(""); // Find first blank space
    const alreadyChoosen = userAnswer.indexOf(option) > -1; // If options are already choosed blanks are filled, don't do anything

    if (alreadyChoosen || blankIndex === -1) return; // If all blanks are filled, don't do anything

    // Fill the blank with the selected option
    const newUserAnswer = [...userAnswer];
    newUserAnswer[blankIndex] = option;

    setUserAnswer(newUserAnswer);
  };

  const handleClearOption = (option) => {
    // Remove the option from the user answer and return it to the options menu
    const newUserAnswer = userAnswer.map((item, index) => (item === option ? '' : item));
    setUserAnswer(newUserAnswer);
  };

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const renderParagraph = () => {
    let paragraphs = question.paragraph.split('%_%')
    // Split the paragraph by %_% and insert the user-selected answers where the blanks are
    return paragraphs.map((part, index) => {
      if (index < paragraphs.length - 1) {
        return (
          <span
            key={index}>
            <span>{part}</span>
            {
              question.type === "FillBlanksNoOptions" ?

                <input
                  type="text"
                  placeholder="Fill in the blank"
                  value={userAnswer}
                  onChange={(e) => handleChange(e)}
                /> :
                <span
                  className="blank-space"
                  onClick={() => handleClearOption(userAnswer[index])}
                >
                  {userAnswer[index] || "___"}
                </span>
            }
          </span>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <div className="question">
      <h3>{question.question}</h3>
      <div className="paragraph">{renderParagraph()}</div>
      {
        question.type === "FillBlanksFromOptions" &&
        <div className="options">
          <h4>Select your options to fill the blanks:</h4>
          {question.options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => { handleOptionClick(option) }}
              style={{ backgroundColor: "#e0f7fa" }}
            >
              {userAnswer.indexOf(option) >= 0 ? "______" : option}
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default FillBlanks;
