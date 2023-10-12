import React, { useState, useEffect } from 'react';

const data = {
  India: "New Delhi",
  United_Arab_Emirates: "Abu Dhabi",
  United_States: "Washington D.C",
  Saudi_Arabia: "Riyadh",
  Japan: "Tokyo",
  Germany: "Berlin",
  Russia: "Moscow",
  China: "Beijing",
};

function shuffleObject(object) {
  const keys = Object.keys(object);
  const shuffledKeys = shuffleArray(keys);
  const shuffledValues = shuffleArray(keys.map(key => object[key]));

  return shuffledKeys.reduce((result, key, index) => {
    result[key] = shuffledValues[index];
    return result;
  }, {});
}

function shuffleArray(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}

function CountryCapital() {
  const [shuffledData, setShuffledData] = useState([]);
  const [clickedCountry, setClickedCountry] = useState(null);
  const [clickedCapital, setClickedCapital] = useState(null);

  useEffect(() => {
    setShuffledData(shuffleObject(data));
  }, []);

  const add = (selectedCountry, selectedCapital) => {
    setClickedCountry(selectedCountry);
    setClickedCapital(selectedCapital);
  };

  return (
    <div>
      <h1>Country Capital Game</h1>
      {Object.entries(shuffledData).map(([key, value]) => (
        <div className='buttoncontainer' key={key}>
          <button
            onClick={() => add(key, null)}
            className={clickedCountry === key ? 'blue-button' : ''}
          >
            {key}
          </button>
          <button
            onClick={() => add(null, value)}
            className={clickedCapital === value ? 'blue-button' : ''}
          >
            {value}
          </button>
        </div>
      ))}
    </div>
  );
}

export default CountryCapital;