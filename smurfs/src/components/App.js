import React, { useState, createContext } from "react";
import "./App.css";
import SmurfForm from "../components/SmurfForm";
import SmurfCard from "./SmurfCard";
import { SmurfContext } from "../contexts/SmurfContext";

const App = () => {

const state = {
    smurfs: [],
    error: ''
  };

  const { Provider } = SmurfContext;
  console.log('Smurf Context:', SmurfContext);

    return (
      <div className="App">
        <Provider value={state.smurfs}>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <SmurfForm />
          <SmurfCard/>
        </Provider>
      </div>
    );
}

export default App;
