import React from 'react'
import './index.css'
import { nanoid } from 'nanoid'
import QuestionPage from './QuestionPage'
import useForceUpdate from 'use-force-update'



export default function Quiz() {

    const [allQuestions, setAllQuestions] = React.useState([])
    const [isChecked, setIsChecked] = React.useState(false)
    const [score, setScore] = React.useState(0)
    const [gameOver, setGameOver] = React.useState(false)

    function extendAnswerObj(answer, isCorrect) {
        return {
            id: nanoid(),
            text: answer,
            isCorrect: isCorrect,
            selected: false
        }
    }

    React.useEffect(() => {

        async function setQuestion() {
            const response = await fetch('https://opentdb.com/api.php?amount=5')
            const data = await response.json()

            const results = data.results.map(result => {
                const answers = result.incorrect_answers.map(answer => {
                    return extendAnswerObj(answer, false)
                })
                answers.push(extendAnswerObj(result.correct_answer, true))
                answers.sort(() => Math.random() > .5 ? 1 : -1)
                return {
                    id: nanoid(),
                    question: result.question,
                    answers: answers
                }
            })
            setAllQuestions(results)
        }
        setQuestion()
    }, [gameOver])

    // ************************************************************

    function handleClick(questionID, answerID) {
        console.log(questionID, answerID)
        setAllQuestions(prevQuestion => {
            return prevQuestion.map(prevQuestion => {
                if (prevQuestion.id !== questionID) {
                    return { ...prevQuestion };
                }
                return {
                    ...prevQuestion,
                    answers: prevQuestion.answers.map(answer => {
                        return {
                            ...answer,
                            selected: answer.id === answerID
                        };
                    })
                };
            });
        });
    }

    function checkAns() {
        setScore(allQuestions.filter(question => {
            return question.answers.findIndex(answer => {
                return answer.selected && answer.isCorrect
            }) !== -1
        }).length)

        setIsChecked(!isChecked)
    }
 

    const QuestionEls = allQuestions.map(question => {
        return <QuestionPage
            question={question.question}
            answers={question.answers}
            id={question.id}
            key={question.id}
            handleClick={handleClick}
            isChecked={isChecked}
        />
    })

    return (
        <main className='main-container'>
            {QuestionEls}
            {isChecked && <h2>You scored {score}/{allQuestions.length} correct answer</h2>}

            {!isChecked && allQuestions.length > 0 && <button
                className='ansBtn check-ans'
                onClick={checkAns}
            >Check Answer
            </button>}

            {isChecked && allQuestions.length > 0 && <button className='ansBtn check-ans' onClick={()=> setGameOver(true)}>Play Again</button>}

        </main>
    )



}
