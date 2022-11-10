import {  Button } from './Widget.styled'

export const FeedbackOptions = ({ onLeaveFeedback}) => {
    return (<>
             <Button type="button" onClick={(event) => onLeaveFeedback(event, 'good')}>good</Button>
            <Button type="button" onClick={(event) => onLeaveFeedback(event, 'neutral')}>neutral</Button> 
             <Button type="button" onClick={(event) => onLeaveFeedback(event, 'bad')}>bad</Button> 
        
       
    </>
        
    )
}
