import React, { useState } from "react";
import CalcButton from "../Components/Buttons";
import "./index.css";

function App() {
  const [calc, setCalc] = useState({
    initial: "0",
    Current: "0",
    operatorValue: "",
    final: "0",
    valCheck: true,
  });
  function Reset() {
    setCalc({
      initial: "0",
      Current: "0",
      operatorValue: "",
      final: "0",
      valCheck: true,
    });
  }
  function handleNumber(value) {
    if (calc.Current == 0) {
      setCalc({ ...calc, Current: value, final: value, valCheck: false });
    } else {
      setCalc({
        ...calc,
        Current: calc.Current + value,
        final: calc.Current + value,
      });
    }
  }

  function handleOperator(value) {
    if (calc.valCheck) {
      alert("Number is required");
    } else if (calc.initial == 0 && value != "=") {
      setCalc({
        ...calc,
        operatorValue: value,
        initial: calc.Current,
        final: value,
        Current: "0",
      });
    } else {
      doCalculation(value);
    }
  }

  function doCalculation(newOperatorValue) {
    console.log(
      "Calculating" + calc.initial + calc.Current + calc.operatorValue
    );
    let result = 0;
    switch (calc.operatorValue) {
      case "+":
        result = Number(calc.initial) + Number(calc.Current);
        break;
      case "-":
        result = Number(calc.initial) - Number(calc.Current);
        break;
      case "*":
        result = Number(calc.initial) * Number(calc.Current);
        break;
      case "/":
        result = Number(calc.initial) / Number(calc.Current);
        result = Math.round(result);
        break;
    }
    setCalc({
      ...calc,
      Current: 0,
      initial: result,
      operatorValue: newOperatorValue,
      final: result,
    });
  }

  function renderDisplay() {
    return calc.final;
  }
  return (
    <>
      <div className="display">{renderDisplay()}</div>
      <div className="calculator">
        <CalcButton value="7" callBack={handleNumber} />
        <CalcButton value="8" callBack={handleNumber} />
        <CalcButton value="9" callBack={handleNumber} />
        <CalcButton value="+" className1={true} callBack={handleOperator} />
        <CalcButton value="4" callBack={handleNumber} />
        <CalcButton value="5" callBack={handleNumber} />
        <CalcButton value="6" callBack={handleNumber} />
        <CalcButton value="-" className1={true} callBack={handleOperator} />
        <CalcButton value="1" callBack={handleNumber} />
        <CalcButton value="2" callBack={handleNumber} />
        <CalcButton value="3" callBack={handleNumber} />
        <CalcButton value="*" className1={true} callBack={handleOperator} />
        <CalcButton value="C" callBack={Reset} />
        <CalcButton value="0" callBack={handleNumber} />
        <CalcButton value="=" callBack={handleOperator} />
        <CalcButton value="/" className1={true} callBack={handleOperator} />
      </div>
    </>
  );
}

export default App;
