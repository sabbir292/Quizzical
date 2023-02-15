import React from "react";
import Quizical from "./Quizical";
import QuizicalQuestions from "./QuizicalQuestions";

    
export default function App(){
    const [isQuizStarted, setIsQuizStarted] = React.useState(false)
   
    function startQuiz(){
        setIsQuizStarted(!isQuizStarted)
    }  
        return (
            <div>
                {isQuizStarted === false && <Quizical
                    isQuizStarted= {isQuizStarted}
                    handleClick = {startQuiz}
                />}
                {isQuizStarted && <QuizicalQuestions/>}
            </div>
            )
        }
       
