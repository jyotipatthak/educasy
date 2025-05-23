import React, { useState } from "react";

const MSQ = ({ question }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="question">
      <h3>{question.question}</h3>
      {question.options.map((option, index) => (
        <label key={index} className="option">
          <input
            type="checkbox"
            value={option}
            checked={selectedOptions.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default MSQ;
