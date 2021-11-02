import "./App.css";
import React, {useState} from "react";
import Films from "./components/films/Films";
import Header from "./components/header/Header";


function App() {

  const [searchQuery, setSearchQuery] = useState('');

  return <div className="App">
    <Header searchQuery={searchQuery}  setSearchQuery={setSearchQuery}  />
    <Films searchQuery={searchQuery} />

  </div>;
}

export default App;
