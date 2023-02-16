import AnsBtn from "./AnsBtn"
import {nanoid} from 'nanoid'
import React from "react"

export default function Question(props){
    
    const [buttons, setButons] = React.useState({
        isCorrect : false,
        id :nanoid(),
        isSelected:false,
    })
    let randomOptions = props.allOptions.sort(()=>(Math.random()> .5)? 1 : -1)
    
 
    function handleClick(event,id){
        console.log(event.target.textContent)
        console.log(id)
       setButons(prevBtn=>{
        return id ===event.target.textContent? {...prevBtn, isSelected:!buttons.isSelected} : buttons
       })
    }
    console.log(buttons.isSelected)
    const answerBtn = randomOptions.map(option=>
        <AnsBtn
            options={option}
            id = {buttons.id}
            handleClick = {(event)=>handleClick(event,option)}
            isSelected = {buttons.isSelected}
        />
    )

    return(
        <section className='question-page'>
                <h1 key={props.correctAnswer} className="question">{props.question}</h1>
                {answerBtn}
                <hr className="line"></hr>
                </section>
    )
}