import React, { useState,useEffect } from 'react';
import './App.css';
import Gra from './gra.jsx';
import Wynik from './wynik.jsx';

function App() {
  const [gra, setgra] = useState(true); // Stan gry
  const [score, setscore] = useState(0); // Stan gry
  const [wynik, setwynik] = useState(" "); // Stan gry
  const [bot_wybor, setbot_wybor] = useState(" "); // Stan gry
  const [you_wybor, setyou_wybor] = useState(" "); // Stan gry

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const zmiengra1 = (nr) => {
  setgra(prevGra => !prevGra); // Zmiana stanu na przeciwny
  const bot = getRandomInt(1, 3);
  var w_l=" ";
  if(nr===bot)
  {
  w_l="DRAW"
  }
  else 
  {
  if(nr===1)
  {
 if(bot===2)
 {
w_l="YOU WIN"
setscore(score+1)
 }
 else
 {
 w_l="B0T WIN" 
 if(score>0)  {
  setscore(score-1)
   }
 }
  }
  else if(nr===2)
  {
    if(bot===1)
    {
   w_l="BOT WIN"
   if(score>0)  {
    setscore(score-1)
     }
    }
    else
    {
    w_l="YOU WIN" 
    setscore(score+1)
    }
  }
  else if(nr===3)
  {
    if(bot===2)
    {
   w_l="BOT WIN"
   if(score>0)  {
   setscore(score-1)
    }
   
    }
    else
    {
    w_l="YOU WIN" 
    setscore(score+1)
    }
  }
}
setwynik(w_l); // Ustaw stan wyniku gry
setbot_wybor(bot);
setyou_wybor(nr);
};





  const zmiengra = () => {
    setgra(prevGra => !prevGra); // Zmiana stanu na przeciwny
  };



  return (
    <>
      <div id='top'>
        <div id='left'>
          ROCK PAPER SCISSORS
        </div>
        <div id='right'>
          <div id='score_text' onClick={zmiengra}>SCORE</div> 
          <div id='score'>{score}</div>
        </div>
      </div>
      {gra ? <Gra 
    onClick1={() => zmiengra1(1)} 
    onClick2={() => zmiengra1(2)} 
    onClick3={() => zmiengra1(3)} 
      /> 
          : 
          <Wynik 
          onClick={zmiengra} 
          wynik={wynik} 
          wybor={bot_wybor}
          wybor2={you_wybor}
            />} 
    </>
  );
}

export default App;
