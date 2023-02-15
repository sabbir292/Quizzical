import AnsBtn from "./AnsBtn"

export default function Question(props){
    const answerBtn = props.incorrectAnswer.map(ans=>
        <AnsBtn
            answer={ans}
        />
    )

    return(
        <section className='question-page'>
                <h1 className="question">{props.question}</h1>
                <button className="ansBtn">{props.correctAnswer}</button>
                {answerBtn}
                <hr className="line"></hr>
                </section>
    )
}