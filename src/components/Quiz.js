import React, {useContext,useEffect, useState } from 'react'
import {Questions}  from '../components/Questions'
import FinishQuiz from './Finishquiz'
import login from '../components/Helper'
import Menu from '../components/Menu';


function QUIZ(){
    const [currentIndex,setCurrentIndex]=useState(0)
    const [quizFinished, setquizFinished] = useState(false)
    const [score, setScore]=useState(0)
    const[Timer,setTimer] = useState(0)
    const {submenu,setsubmenu,username, setusername}=useContext(login)

useEffect(()=>{
    const timer = () => {
      setTimeout(() => { 
            setTimer(prevTimer => prevTimer + 1)
     }, 1000)
}
quizFinished ?  clearTimeout(timer) : timer()
    return clearTimeout(timer);
}, [Timer])

function handleAnswerClick(isCorrect) {
		// Check if the quiz is over here
 if (isCorrect){
     setScore((score) => ++score)
 }

    if (currentIndex === Questions.length-1) {
		// If yes, set the quizFinished variable to true
        setquizFinished(true);
        } else {
		// If no, increment the current index like always
		setCurrentIndex((value) => value + 1)
	    }
    }

	return (
        
        <>
            <div>
            </div>
                {
                    quizFinished ? 
                    (
                    <FinishQuiz score={score} Timer={Timer}/>
                // 				<div className="score-section">
//               You scored {score} out of {Questions.length}
				// </div>
			) : (
                <div className='quiz'>

               <div className="welcome-message">
           <header><h4>welcome,  {username}!</h4></header>    
           
               </div>
					<div className="question-section">
 

						<div className="question-count">
                   <div className="questionlenght">
                  <span>Question {currentIndex }</span>/{Questions.length} 
                   
                   </div>      
							
						</div>
						{/* You should change the "0" here to a state variable */}
						<div className="question-text">
							{Questions[currentIndex].questionText}
						</div>
					</div>
					{/* You should change the "0" here to a state variable */}

					<div className="answer-section">
						{Questions[currentIndex].answerOptions.map((answer) => {
							// Add onClick listener to this button
							return (
								<button
									onClick={()=>
                                    handleAnswerClick(answer.isCorrect)}
									key={answer.answerText}
								>
									{answer.answerText}
								</button>
							)
						})}
					</div>
            
                </div>

			)}
		</>
	)








}
export default QUIZ;