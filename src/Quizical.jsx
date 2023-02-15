import './index.css'

export default function Quizical(props){
           return (
                 <main className='main-container-landing'>
                     <section className='landing-page'>
                         <h1 className='title'>Quizzical</h1>
                         <p className='description'>Some description if needed</p>
                         <button 
                             className='start-quiz'
                             onClick={props.handleClick}
                         >Start quiz</button>
                     </section>
                 </main> 
               )
    }
