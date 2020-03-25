import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import CoronaCases from "./components/coronaCases";
import CoronaStates from "./components/coronaStates";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CoronaCases />
      <CoronaStates />
    </div>
  );
}

export default App;
