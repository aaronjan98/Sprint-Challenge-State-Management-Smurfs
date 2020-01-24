import React, { useState, createContext } from "react";
import "./App.css";
import SmurfCard from "./SmurfCard";
import { SmurfContext } from "../contexts/SmurfContext";

const App = () => {
  const [name, setName] = useState();
  const { Provider } = SmurfContext;
  console.log('Smurf Context:', SmurfContext);

    return (
      <div className="App">
        <Provider value={name}>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <SmurfCard/>
        </Provider>
      </div>
    );
}

export default App;
