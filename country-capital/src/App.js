import React from "react";
import './App.css';
import CountryCapital from "./component/CountryCapital";


function App() {
 
  const data = {
  "India": "New Delhi",
  "Australia" : "Canberra",
  "Japan" : "Tokyo",
  "Germany" : "Berlin",
  "UAE" : "Abu Dhabi",
};

  return (
    <div className="App">
      <CountryCapital data={data} />
    </div>
  );
}

export default App;