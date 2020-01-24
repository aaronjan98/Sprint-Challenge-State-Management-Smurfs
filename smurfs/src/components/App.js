import React, { useState, createContext } from "react";
import "./App.css";
import SmurfCard from "./SmurfCard";

const App = () => {
  const [name, setName] = useState();

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfCard  name={name} />
      </div>
    );
}

export default App;
