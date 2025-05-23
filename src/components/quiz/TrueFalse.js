import React, { useState } from "react";

const TrueFalse = ({ question }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleChange = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="question">
      <h3>{question.question}</h3>
      <div className="true-false">
        <label>
          <input
            type="radio"
            name={`truefalse-${question.question}`}
            value="True"
            checked={selectedAnswer === "True"}
            onChange={() => handleChange("True")}
          />
          True
        </label>
        <label>
          <input
            type="radio"
            name={`truefalse-${question.question}`}
            value="False"
            checked={selectedAnswer === "False"}
            onChange={() => handleChange("False")}
          />
          False
        </label>
      </div>
    </div>
  );
};

export default TrueFalse;
