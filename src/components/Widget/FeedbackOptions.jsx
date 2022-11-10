import { Button } from './Widget.styled'
import PropTypes from 'prop-types'

export const FeedbackOptions = ({ onLeaveFeedback}) => {
    return (<>
             <Button type="button" onClick={(event) => onLeaveFeedback(event, 'good')}>good</Button>
            <Button type="button" onClick={(event) => onLeaveFeedback(event, 'neutral')}>neutral</Button> 
             <Button type="button" onClick={(event) => onLeaveFeedback(event, 'bad')}>bad</Button> 
        
       
    </>
        
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func
}