import React, { useState } from "react";

const MCQ = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="question">
      <h3>{question.question}</h3>
      {question.options.map((option, index) => (
        <label key={index} className="mcq-option">
          <input
            type="radio"
            className="mcq-radio"
            name={`mcq-${question.question}`}
            value={option}
            checked={selectedOption === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default MCQ;
