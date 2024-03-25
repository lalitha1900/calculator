import "./style.css";
import { useEffect } from "react";

export default function App() {
  function calc(value) {
    if (value === "C") {
      document.getElementById("input").value = "";
    } else if (value == "=") {
      if(eval(
        document.getElementById("input").value
      )==undefined)
      document.getElementById("output").innerHTML ="Error";
      else
      document.getElementById("output").innerHTML = eval(
        document.getElementById("input").value
      )

    } else {
      document.getElementById("input").value += value;
    }
    //document.getElementById("input").value += value;
  }
  return (
    <div class="App">
      <h1>React Calculator</h1>

      <input type="text" id="input" />
      <br />
      <br />
      <div id="output"></div>
      <br />
      <div id="buttons">
        <button name="7" onClick={(e) => calc(e.target.name)}>
          7
        </button>
        <button name="8" onClick={(e) => calc(e.target.name)}>
          8
        </button>
        <button name="9" onClick={(e) => calc(e.target.name)}>
          9
        </button>
        <button name="+" onClick={(e) => calc(e.target.name)}>
          +
        </button>
        <br />
        <button name="4" onClick={(e) => calc(e.target.name)}>
          4
        </button>
        <button name="5" onClick={(e) => calc(e.target.name)}>
          5
        </button>
        <button name="6" onClick={(e) => calc(e.target.name)}>
          6
        </button>
        <button name="-" onClick={(e) => calc(e.target.name)}>
          -
        </button>
        <br />
        <button name="1" onClick={(e) => calc(e.target.name)}>
          1
        </button>
        <button name="2" onClick={(e) => calc(e.target.name)}>
          2
        </button>
        <button name="3" onClick={(e) => calc(e.target.name)}>
          3
        </button>

        <button name="*" onClick={(e) => calc(e.target.name)}>
          *
        </button>
        <br />

        <button name="C" onClick={(e) => calc(e.target.name)}>
          C
        </button>

        <button name="0" onClick={(e) => calc(e.target.name)}>
          0
        </button>
        <button name="=" onClick={(e) => calc(e.target.name)}>
          =
        </button>
        <button name="/" onClick={(e) => calc(e.target.name)}>
          /
        </button>
        <br />
      </div>
      <br />
      <br />
    </div>
  );
}
