import React, { useState } from "react";

const Match = ({ question }) => {
  const [matched, setMatched] = useState({});
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);

  const handleLeftClick = (leftOption) => {
    if (selectedLeft === leftOption) {
      setSelectedLeft(null); // Deselect if the same left option is clicked again
    } else {
      setSelectedLeft(leftOption); // Select a new left option
      setSelectedRight(null); // Clear the right selection
    }
  };

  const handleRightClick = (rightOption) => {
    if (selectedLeft) {
      setMatched((prev) => ({
        ...prev,
        [selectedLeft]: rightOption,
      }));
      setSelectedRight(rightOption); // Select right option only if left is selected
    }
  };

  const getBackgroundColor = (option, side) => {
    if (side === "left") {
      if (selectedLeft === option) {
        return "#B0E0E6"; // Light color for selected left option
      }
      return "#ffffff"; // Default white background for unselected
    } else if (side === "right") {
      if (selectedRight === option && matched[selectedLeft] === option) {
        return "#B0E0E6"; // Light color for selected right option if it matches left
      }
      return "#ffffff"; // Default white background for unselected
    }
    return "#ffffff"; // Default for other cases
  };

  return (
    <div className="question">
      <h3>{question.question}</h3>
      <div className="matching">
        <div className="options-left">
          {question.optionsLeft.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleLeftClick(option)}
              style={{ backgroundColor: getBackgroundColor(option, "left") }}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="options-right">
          {question.optionsRight.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleRightClick(option)}
              style={{ backgroundColor: getBackgroundColor(option, "right") }}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Match;
