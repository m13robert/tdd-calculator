import React, { useState } from "react";
import "./Calculator.css";
import Display from "../Display/Display";
import Keypad from "../Keypad/Keypad";

function Calculator() {
  const [state, setState] = useState({
    displayValue: "0",
    numbers: [],
    operators: [],
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

  return (
    <div className="calculator-container">
      <Display displayValue={state.displayValue} />
      <Keypad
        callOperator={callOperator}
        numbers={state.numbers}
        operators={state.operators}
        setOperator={setOperator}
        updateDisplay={updateDisplay}
      />
    </div>
  );
}

export default Calculator;
