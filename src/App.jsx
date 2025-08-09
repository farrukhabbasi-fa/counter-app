// hooks
import { useState } from "react";
import Button from "@mui/material/Button";
import "./App.css";
import CustomAutoComplete from "./components/CustomAutoComplete";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if(count>0)
    {
      setCount(count - 1);
    }
  };


  return (
    <div class="container">
      <h1>Counter App</h1>
      <p id="count-display">Current Count: {count}</p>
      <Button
        id="increment-btn"
        onClick={() => handleIncrement()}
        variant="outlined"
      >
        Increment
      </Button>

      <Button variant="outlined" onClick={() => handleDecrement()}>
        Decrement
      </Button>
      <CustomAutoComplete />
    </div>
  );
};

export default App;
