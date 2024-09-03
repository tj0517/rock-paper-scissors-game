import { useState } from 'react'
import './App.css'

function Gra({ onClick1, onClick2, onClick3 }) {

  return (
<div id='gra'>
<div className='element' id='paper' onClick={onClick3}>
<img  src='images/icon-paper.svg'/>
</div>
<div className='element' id='scissors' onClick={onClick2}>
<img  src='images/icon-scissors.svg'/>
</div>
<div className='element' id='rock' onClick={onClick1}>
<img  src='images/icon-rock.svg'/>
</div>
<img  id='back_triangle' src="images/bg-triangle.svg"/>
</div>
  )
}

  export default Gra;