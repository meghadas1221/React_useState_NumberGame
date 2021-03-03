import { useState } from "react";
import "./styles.css";

var arr = { "1": "One", "11": "Eleven", "111": "One Hundred Eleven" };

export default function App() {
  const [userInput, setUserInput] = useState("");

  function inputChangeHandler(event) {
    var numbers = event.target.value + 1;
    console.log(numbers);
    var numbersInWords = arr[numbers];
    setUserInput(numbersInWords);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={inputChangeHandler}></input>
      <div>{userInput}</div>
    </div>
  );
}
