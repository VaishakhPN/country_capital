import React from "react";
import './App.css';
import CountryCapital from "./component/CountryCapital";


function App() {
 
  const data = {
  "India": "New Delhi",
  "Australia" : "Canberra",
  "Japan" : "Tokyo",
  "Russia" : "Moscow",
  "Germany" : "Berlin",
  "USA" : "Washington D.C",
  "UAE" : "Abu Dhabi",
};

  return (
    <div className="App">
      <CountryCapital data={data} />
    </div>
  );
}

export default App;