import './index.css'
export default function QuestionPage(props) {

  return(
      <div className='ques-container'>
          {props.isChecked?
            <div>
                <h1 className='question'>{props.question}</h1>

                <div className='btn-contaienr'>

                  {props.answers.map(answer=>{
                    let color = {backgroundColor : 'transparent',opacity: '100%'}
                      if(props.selected === answer && props.selected === props.correctAnswer){
                        color = {backgroundColor:'#94D7A2'}
                      }else if(answer=== props.correctAnswer){
                        color = {backgroundColor:'#94D7A2', opacity: '60%'}
                      }else if(props.selected === answer && props.selected !== props.correctAnswer){
                        color = {backgroundColor: '#F8BCBC'}
                      }
                    return  <button 
                    style={color}
                    key = {answer}
                    className='ansBtn'
                    >
                    {answer}
                    </button>
                  })}
                </div>
                <hr className='line'></hr>
            </div>  

          : <div>
              <h1 className='question'>{props.question}</h1>
              <div className='btn-contaienr'>
                  {props.answers.map(answer=>{
                    let color = {backgroundColor :'transparent'}
                      if(answer=== props.selected){
                        color = {backgroundColor:"#94D7A2"}
                      }
                    return  <button 
                    onClick={()=>props.setAnswer(props.id, answer)} 
                    className= 'ansBtn' 
                    key={answer}
                    style={color}
                    >
                    {answer}
                    </button>
                  })}
                </div>
                <hr className='line'></hr>
          </div> 
          }
      </div>
  )

}