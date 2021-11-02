import "./App.css";
import React from "react";
import Films from "./components/films/Films";
import Header from "./components/header/Header";


function App() {
  return <div className="App">
    <Header/>
    <Films/>

  </div>;
}

export default App;
