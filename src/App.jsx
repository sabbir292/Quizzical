import React from "react";
import Quiz from "./Quiz";
import Landing from "./Landing";

export default function App(){
    const [quizStarted, setquizStarted] = React.useState(false)

    function startQuiz(){setquizStarted(!quizStarted)} 
   
    return (
           quizStarted? <Quiz /> : <Landing handleClick = {startQuiz}/>
            )
     }


// **********IGNORE THE BELLOE CODES **************
// Reminder for myself.---

    //  Note : when you need to use the value of true and false it is better to use ternary above way, here you do not need to declare it that if for false you need to render this.

//      <div>
//      {!quizStarted && <Landing handleClick = {startQuiz}/>}
//      {quizStarted && <Question/>}
//   </div>
       
