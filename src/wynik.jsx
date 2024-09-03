import { useState } from 'react'
import  './App.css'

function Wynik({onClick,wynik,wybor,wybor2}) {
let bot_element;
let you_element;

const paper=<div className='m' id='paper1'>
<img src='images/icon-paper.svg'/>   
</div>;

const rock=<div className='m' id='rock1'>
<img src='images/icon-rock.svg'/>   
</div>;

const scissors=<div className='m' id='scissors1'>
<img src='images/icon-scissors.svg'/>   
</div>;

if(wybor===1)
{
bot_element =rock;  
}
else if(wybor===2)
{
bot_element =scissors;  
}
else
{
bot_element =paper;  
}

if(wybor2===1)
{
you_element =rock;  
}
else if(wybor2===2)
{
you_element =scissors;  
}
else
{
you_element =paper;  
}


  return (
<div id='wynik_ekran'>
<div id='wynik_top'>
<div className='t'>YOU PICKED</div>
<div className='t'>BOT PICKED</div>
</div>
<div id='wynik_midle'>    
{you_element}
<div id='m_midle'>
{wynik}
<div id='button_again'onClick={onClick}>
PLAY AGAIN
</div>
</div>
{bot_element}

</div>
</div>
  )
}

  export default Wynik;