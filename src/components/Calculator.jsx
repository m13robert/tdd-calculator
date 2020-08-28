import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [state, setState] = useState({
    displayValue: 0,
    numbers: [],
    operator: [],
    selectedOperator: "",
    storedValue: "",
  });

  const callOperator = () => {
    console.log("call operator");
  };

  const setOperator = () => {
    console.log("set operator");
  };

  const updateDisplay = () => {
    console.log("update display");
  };

  return <div className="calculator-container"></div>;
}

export default Calculator;
