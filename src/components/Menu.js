import React, {useContext, useState } from 'react'
import '../App.css'
import login from '../components/Helper'

const Menu=({setTimer})=>{
 const[quizname,setquizname]=useState("")
//  console.log(submenu)
const {submenu, setsubmenu, username, setusername}=useContext(login)

 return(
<div className="Menu">

Enter Your Name:
<input
type="text"
placeholder="Ex. John Paul"
onChange={(e)=>{setusername(e.target.value)}}
/>
<button onClick={()=>{username ? 
    setsubmenu("playing") : alert('Please Input Your Name')
}}>Start Quiz</button>
</div>
 );   
}
export default Menu;