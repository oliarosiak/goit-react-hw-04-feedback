import { useState } from 'react';

import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './section/Section';
import Notification from './notification/Notification';
import Logo from './logo/Logo';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleFeedbackIncrement = (stateName) => {
    switch (stateName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  }

  const countTotalFeedback = () => { 
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => { 
    return Math.round((good / (countTotalFeedback())) * 100);
  }
  
  return (
    <div>
      <Logo cafeName='= Express Green Cafe =' cafeSlogan='Healthy Body! Healthy Mind!' />
      <Section title='Please leave your feedback'>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedbackIncrement} />
      </Section>
      <Section title='Statistics'>
        {countTotalFeedback() > 0
          ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />
          : <Notification message='There is no feedback yet' />
        }
      </Section>
    </div>
  );
}

export default App;