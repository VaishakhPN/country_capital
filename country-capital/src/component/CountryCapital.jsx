import { useState } from "react";
import "./CountryCapital.css"

function CountryCapital({data}) {

  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [prevAnswer, setPrevAnswer] = useState(null)

  const [buttonList,setButtonList] = useState(shuffle ([...Object.keys(data), ...Object.values(data)]));
  

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }
   console.log(buttonList);


   const handleAnswer = (e) => {
       const answer = e.target.value;

       if(!selectedAnswer) {
        setSelectedAnswer(answer)
       }else {
        if(data[selectedAnswer] === answer || data[answer] === selectedAnswer) {
          setButtonList(buttonList.filter(b => b !== answer && b !==selectedAnswer ));
          setSelectedAnswer(null);
          setPrevAnswer(null);
        } else {
          setPrevAnswer(selectedAnswer);
          setSelectedAnswer(answer);

          setTimeout(() => {
            setSelectedAnswer(null);
          setPrevAnswer(null);
          },1000);
        }
       }
   }

   if (buttonList.length === 0) {
    return<p>Congratulations</p>
   }

   return (
    <div>
     {
      <h1>Capital Game</h1>
     }
      {
        buttonList.map((item) => {
       return <button key={item} className={`Buttons ${selectedAnswer === item ? "selected" : ''} 
       ${prevAnswer && (item === selectedAnswer || item === prevAnswer) ? "incorrect" : '' }`} 
       onClick={handleAnswer} value={item}>{item}</button>
        })
      }
    </div>
   )
  
 
}

export default CountryCapital