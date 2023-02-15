import React from 'react'
import './index.css'
import Question from './Question'


export default function QuizicalQuestions(props){
    const [questions, setQuestions] = React.useState([])


    React.useEffect(()=>{
            fetch('https://opentdb.com/api.php?amount=5')
                .then(res => res.json())      
                .then(data=>setQuestions(data.results))
    },[])

    console.log(questions)
    const showQuestion = questions.map(question=> 
            <Question
                question = {question.question}
                correctAnswer = {question.correct_answer}
                incorrectAnswer = {question.incorrect_answers}
            />
    )


        return (
            <main className='main-container'>
                {showQuestion}
                <button className="check-ans start-quiz">Check Answer</button>
            </main> 
        )
    
}