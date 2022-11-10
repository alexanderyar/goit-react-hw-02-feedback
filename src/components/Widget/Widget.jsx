import React from 'react'

import PropTypes from 'prop-types'



import { WidgetWrapper } from './Widget.styled'
import { Statistics } from './Statistics'
import { FeedbackOptions } from './FeedbackOptions'
import { Section } from './SectionTitle'
import { Notification } from './Notification'




export class Widget extends React.Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0
}


    handleFeedbackIncrement = (event, status) => {
       
        this.setState((prevState) => {
            return {
                [status]: this.state[status] +1

                // [target.textContent]: prevState[target.textContent] + 1
                
               
            }
        })

    }

   
    countTotalFeedback = () => {
        
        const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
        return totalFeedback;
        }


    countPositiveFeedbackPercentage = () => {
        if (this.state.good === 0) {
            return
        }
        const percentage = (this.state.good * 100 / this.countTotalFeedback()).toFixed()
        return percentage
        

    }
  
    render() {
    
        return (
            <WidgetWrapper>
                
                <Section title="MADE WITH COMPONENT">
                     <Section title="Please leave feedback">
                
                    <FeedbackOptions onLeaveFeedback={this.handleFeedbackIncrement} />
                </Section>
                
                    {this.countTotalFeedback() ?
                <Section title="Statistics">
                    <Statistics
                    onCountTotalFeedback={this.countTotalFeedback}
                    onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
                        stateValue={this.state} />
                    </Section>
                :
                 <Notification message="There is no feedback"></Notification>
                    }
                    </Section>
                
           

        </WidgetWrapper>
    )
}

}

Widget.PropTypes = {
    status: PropTypes.string,


}

