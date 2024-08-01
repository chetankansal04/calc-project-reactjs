import css from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={css.calculator}>
      <Display displayValue={calVal}></Display>
      <Buttons onButtonClick={onButtonClick}></Buttons>
    </div>
  );
}

export default App;
