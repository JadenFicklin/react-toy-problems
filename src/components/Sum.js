import React, { useState } from "react";

function Sum() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const [display, setDisplay] = useState(0);

  const handleClick = () => {
    setDisplay(+firstNumber + +secondNumber);
  };

  return (
    <div className="puzzleBox sumPB">
      <h4> Sum </h4>
      <input
        className="inputLine"
        type="number"
        onChange={(e) => setFirstNumber(e.target.value)}
      />
      <input
        className="inputLine"
        type="number"
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <button className="confirmationButton" onClick={() => handleClick()}>
        Add{" "}
      </button>
      <span className="resultsBox"> Sum: {display}</span>
    </div>
  );
}

export default Sum;
