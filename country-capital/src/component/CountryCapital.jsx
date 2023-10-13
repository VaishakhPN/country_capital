import { useState } from "react";
import "./CountryCapital.css"

function CountryCapital({data}) {

  const [selectedAns, setSelectedAns] = useState(null)
  const [prevAns, setPrevAns] = useState(null)

  const [buttonList,setButtonList] = useState(shuffle ([...Object.keys(data), ...Object.values(data)]));
  

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }
   console.log(buttonList);


   const handleAns = (e) => {
       const ans = e.target.value;

       if(!selectedAns) {
        setSelectedAns(ans)
       }else {
        if(data[selectedAns] === ans || data[ans] === selectedAns) {
          setButtonList(buttonList.filter(b => b !== ans && b !==selectedAns ));
          setSelectedAns(null);
          setPrevAns(null);
        } else {
          setPrevAns(selectedAns);
          setSelectedAns(ans);

          setTimeout(() => {
            setSelectedAns(null);
          setPrevAns(null);
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
      <h1>Country Capital Game</h1>
     }
      {
        buttonList.map((item) => {
       return <button key={item} className={`Buttons ${selectedAns === item ? "selected" : ''} 
       ${prevAns && (item === selectedAns || item === prevAns) ? "incorrect" : '' }`} 
       onClick={handleAns} value={item}>{item}</button>
        })
      }
    </div>
   )
  
 
}

export default CountryCapital