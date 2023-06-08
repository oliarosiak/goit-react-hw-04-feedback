import React, { Component } from 'react';

import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';
import Logo from './logo/Logo';


class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedbackIncrement = (option) => {  
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1
      }
    });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;  
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => { 
    return Math.round((this.state.good / (this.countTotalFeedback())) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const stateKeys = Object.keys(this.state); 
    const onIncrement = this.handleFeedbackIncrement;
    const totalAmount = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Logo cafeName='= Express Green Cafe =' cafeSlogan='Healthy Body! Healthy Mind!' />
        <Section title='Please leave your feedback'>
          <FeedbackOptions options={stateKeys} onLeaveFeedback={onIncrement} />
        </Section>
        <Section title='Statistics'>
          {totalAmount > 0
            ? <Statistics good={good} neutral={neutral} bad={bad} total={totalAmount} positivePercentage={percentage} />        
            : <Notification message='There is no feedback yet' />
          }
        </Section>
      </div>
    );
  }
}

export default App;