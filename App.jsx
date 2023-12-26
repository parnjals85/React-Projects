import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState("black");

  return (
    <>
    <h1>my favorite color is {count}</h1>
      <div id="boom">
        <button type="submit"
        Click={{setCount:"red"}}
          class="btn btn-primary"
          id="button"
          style={{ backgroundColor: "red" }}
        >
          Button
        </button>
        <input
          class="btn btn-primary"
          type="button"
          value="Input"
          style={{ background: "blue" }}
        />
        <input
          class="btn btn-primary"
          type="submit"
          value="Submit"
          style={{ background: "green" }}
        />
      
        <input
          class="btn btn-primary"
          type="reset"
          value="Reset"
          style={{ background: "lightcoral" }}
        ></input>
      </div>
    </>
  );
}

export default App;
