import {  Button } from './Widget.styled'

export const FeedbackOptions = ({ onLeaveFeedback}) => {
    // console.log(buttonArrayForRender)
    return (<>
             <Button type="button" onClick={(event) => onLeaveFeedback(event, 'good')}>good</Button>
            <Button type="button" onClick={(event) => onLeaveFeedback(event, 'neutral')}>neutral</Button> 
             <Button type="button" onClick={(event) => onLeaveFeedback(event, 'bad')}>bad</Button> 
        
        {/* {buttonArrayForRender.map((value) => {
            // console.log(value)
            return <Button key={value} type="button" onClick={(event) => onLeaveFeedback(event, 'good')} >{value}</Button>
        })} */}
    </>
        
    )
}
