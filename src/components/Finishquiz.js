import React, {useContext, useEffect, useState } from 'react'
import {Questions}  from '../components/Questions'
import '../App.css'
import login from '../components/Helper'


const FinishQuiz=({score, Timer})=>{
const {submenu,setsubmenu,username, setusername} = useContext(login)
const Restart = () => {
    setsubmenu("menupage")
    setusername(null)
}

return (<div className="finishquiz">


<div className='title'>

<h1>Finished Quiz</h1>
</div>

<div className='SCORE'>
You scored {score} out of {Questions.length}
</div>
<div>
Total Time: {Timer}s
</div>

<div className="resetbtn">
<button onClick={ Restart}>Restart Quiz</button>
</div>
</div>)
}
export default FinishQuiz;