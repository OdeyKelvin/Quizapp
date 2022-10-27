import React, { useState } from 'react'
import Menu from './components/Menu';
import './App.css'
import login from './components/Helper'
import Quiz from './components/Quiz'
import FinishQuiz from './components/Finishquiz'

function App() {
const[username, setusername]=useState("")
const [submenu,setsubmenu]= useState('menupage')
const menufn=()=>{
 
}
	return (
		<div className="App">
        <header><h2>QUIZ  APP</h2> </header>
        
         <login.Provider value={{submenu,setsubmenu,username, setusername}}>
            
             {submenu==="menupage"&&<Menu/>}
              {submenu==="playing"&&<Quiz />}

{submenu==="true"&&<FinishQuiz/>}


        </login.Provider>
        
    
		</div>
	)
}
        // {submenu==="true"&&<FinishQuiz/>}

export default App;

