import React from "react";
import {nanoid} from "nanoid"
import QuestionPage from "./QuestionPage";


export default function App() {
    // const [quizStarted, setquizStarted] = React.useState(false)
    const [allQuestions, setAllQuestions] = React.useState([])
    const [isChecked,setIsChecked] = React.useState(false)
    const [score, setScore] = React.useState(0)

    function startQuiz() {
        const Arr = []    

                fetch("https://opentdb.com/api.php?amount=5")
                    .then(res=> res.json())
                    .then(data=>{ console.log(data.results)

                 data.results.map(question=>{
                    const answers = [...question.incorrect_answers,question.correct_answer]
                    // console.log(answers)
                    const suffledAnswers = sortArr(answers)
                   
                    Arr.push({
                        id : nanoid(),
                        question : question.question,
                        answers : suffledAnswers,
                        correctAnswer: question.correct_answer,
                        incorrectAnswers : question.incorrect_answers,
                        selected : '',
                        btnColor : {backgroundColor: 'transparent'}
                        // isChecked:{isChecked}
                    })
                })
                setAllQuestions(Arr)
            })
    }

// startQuiz()
console.log(allQuestions)

function sortArr(arr){
    return arr.sort(()=> Math.random()>.5? 1 : -1)
}

function setAnswer(id, answer){
    setAllQuestions(prevQuestion=>{
        const updatedQuestion =prevQuestion.map(question=>{
            if(question.id ===id){
                return{
                    ...question,
                    selected: answer
                }
            }else{
                return question
            }
        })
        return updatedQuestion
    })
}

function checkAns(){
    allQuestions.map(question=>{
        if(question.selected === question.correctAnswer){
          let score =  setScore(prev=> prev+1)
        }return score
    })
    setIsChecked(true)
}
function newQuiz(){
    startQuiz()
    setIsChecked(false)
    setScore(0)
}
function home(){
    window.location.reload(false)
}
return(
    <main className='main-container-landing'>
        {allQuestions.length>0 ? <div>
            {allQuestions && allQuestions.length && allQuestions.map(question=>{
                return <QuestionPage
                    id ={question.id}
                    question = {question.question}
                    answers = {question.answers}
                    correctAnswer = {question.correctAnswer}
                    incorrectAnswers = {question.incorrectAnswers}
                    selected = {question.selected}
                    isChecked = {isChecked}
                    key = {question.id}
                    setAnswer = {setAnswer}

                />
            })}

            {
                isChecked? 
                <div className='endBtn'>
                    <h2>You scored {score}/{allQuestions.length} correct answer</h2>
                    <button className='ansBtn check-ans' 
                    onClick={newQuiz}
                    >Play Again</button>
                     <div onClick={home} className="home"><i class="uil uil-estate"></i>
                     </div>
                </div>
                :
                <div className='endBtn'>
                    <button
                        className='ansBtn check-ans'
                        onClick={checkAns}
                        >Check Answer
                    </button>
                    <div onClick={home} className="home"><i class="uil uil-estate"></i></div>
                </div>    
            }



        </div>:
  
        
            <section className='landing-page'>
                <h1 className='title'>Quizzical</h1>
                <p className='description'>Some description if needed</p>
                <button
                    className='start-quiz'
                    onClick={startQuiz}
                >Start quiz</button>
            </section>
        

    }
    </main>
)
    
}






// api
// https://opentdb.com/api.php?amount=5

// **********IGNORE THE BELLOE CODES **************
// Reminder for myself.---

    //  Note : when you need to use the value of true and false it is better to use ternary above way, here you do not need to declare it that if for false you need to render this.

//      <div>
//      {!quizStarted && <Landing handleClick = {startQuiz}/>}
//      {quizStarted && <Question/>}
//   </div>

