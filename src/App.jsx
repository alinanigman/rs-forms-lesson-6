import * as yup from "yup";
import { useState, useRef } from "react";
import "./App.css";



function App() {
  const [stateCounter, setStateCounter] = useState(0);
  const refCounter = useRef(0);

  const incrementRefCounter = () => {
    refCounter.current += 1;
    console.log("refCounter = ", refCounter.current);
  };

  const incrementStateCounter = () => {
    setStateCounter(stateCounter + 1);
    console.log("stateCounter = ", stateCounter + 1);
  };

  return (
    <div className="App">
      <p>refCounter: {refCounter.current}</p>
      <button onClick={incrementRefCounter}>Прибавить refCounter</button>

      <p>stateCounter: {stateCounter}</p>
      <button onClick={incrementStateCounter}>Прибавить stateCounter</button>
    </div>
  );
}

export default App;
