import './index.css'
export default function QuestionPage(props){

    const answerEls = props.answers.map(answer=>{
      function checkAns(){
        if(props.isChecked && answer.selected && answer.isCorrect){
          return '#94D7A2'
        }else if(props.isChecked && answer.selected && !answer.isCorrect){
          return '#F8BCBC'
        }else if(props.isChecked && !answer.selected && answer.isCorrect){
          return '#94D7A2'
        }
      }

      const styles = {backgroundColor :checkAns()}
      
        return (
                <button 
                    className={`ansBtn ${answer.selected? 'selected': ''}`}
                    onClick = {()=>props.handleClick(props.id,answer.id)}
                    key = {answer.id}
                    style = {styles}
                    >
                    {answer.text}
                </button>
        )
    })

    return(
        <section className='question-page'>
                <h1 className="question">{props.question}</h1>
                  <div className="ansBtn-container">
                    {answerEls}
                  </div>
                <hr className="line"></hr>
                </section>
    )
}