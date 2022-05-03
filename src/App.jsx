import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import JuegoPpt from "./components/JuegoPpt";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <JuegoPpt />
      </header>
    </div>
  );
}

export default App;
