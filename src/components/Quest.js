import React from 'react'

export default function Quest(props)
{
    
    function styler(option,index){
        if (props.showAnswers === true)
        {
            if(props.question.correct_answer === option)
            {
                return({backgroundColor: "#94D7A2"})
            }else if(props.question.selected_answer === index)
            {
                return({backgroundColor: "#F8BCBC"})
            }else{
                return({backgroundColor: "#F5F7FB"})
            }
        }else {
            return(props.question.selected_answer === index ? {backgroundColor: "#D6DBF5"} : {backgroundColor: "#F5F7FB"})
        }
    }
    

    
    const options = props.question.options.map((option,index) => <button
        key={index}
        dangerouslySetInnerHTML={{__html: option}}
        onClick={(event) => props.selectAnswer(event,props.id,index)}
        style={styler(option,index)}
        disabled={props.showAnswers}
        className='quiz-container-question-options-container-option'
        />)
        
    return(<div className='quiz-container-question' >
        <h1 className='quiz-container-question-title' dangerouslySetInnerHTML={{__html: props.question.question}}/>
        <div className='quiz-container-question-options-container'>{options}</div>
        <hr className='quiz-container-question-divider' />
    </div>)
}