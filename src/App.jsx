import React from "react";
import {nanoid} from "nanoid"
import QuestionPage from "./QuestionPage";
import Select from "./Select";


export default function App() {
    // const [quizStarted, setquizStarted] = React.useState(false)
    const [allQuestions, setAllQuestions] = React.useState([])
    const [isChecked,setIsChecked] = React.useState(false)
    const [score, setScore] = React.useState(0)
    const [categories, setCategories] = React.useState({
        number:'5',
        category : '&category=9',
        difficulty: '',
        type: ''
    })

    function startQuiz() {
        const Arr = []    

                fetch(`https://opentdb.com/api.php?amount=${categories.number}${categories.category}${categories.difficulty}${categories.type}`)
                    .then(res=> res.json())
                    .then(data=>{ 
                        // const results = data.results
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
                        btnColor : {backgroundColor: 'transparent'},
                        category : question.category,
                        type : question.type,
                        difficulty: question.difficulty
                        
                        // isChecked:{isChecked}
                    })
                })
                setAllQuestions(Arr)
                // console.log(results)
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
            return score
        }
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

function setNumber(event){
    
    setCategories(prev => ({
        ...prev, 
        number: event.target.value
    }))
}
function setCategory(event){
    
    setCategories(prev => ({
        ...prev, 
        category: event.target.value
    }))
}
function setDifficulty(event){
    
    setCategories(prev => ({
        ...prev, 
        difficulty: event.target.value
    }))
}
function setType(event){
    
    setCategories(prev => ({
        ...prev, 
        type: event.target.value
    }))
}
console.log(categories)
console.log(allQuestions)
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
                     <div onClick={home} className="home"><i className="uil uil-estate"></i>
                     </div>
                </div>
                :
                <div className='endBtn'>
                    <button
                        className='ansBtn check-ans'
                        onClick={checkAns}
                        >Check Answer
                    </button>
                    <div onClick={home} className="home"><i className="uil uil-estate"></i></div>
                </div>    
            }



        </div>:
  
        
            <section className='landing-page'>
                <h1 className='title'>QuizMania</h1>
                <p className='description'>Discover new facts and have fun with QuizMania's quizzes.</p>
                <Select 
                    setCategory={setCategory}
                    setDifficulty= {setDifficulty}
                    setType = {setType}
                    setNumber = {setNumber}
                />
                <button
                    className='start-quiz'
                    onClick={startQuiz}
                >Start quiz</button>
                <footer className="footer">
                    Copyright @sabbirHossain{new Date().getFullYear()}. made with Open Trivia Api
                </footer>
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

