import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section';
import Notification from './Notification';

export default function FeedbackHooks() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnIncrement = btn => {
    switch (btn) {
      case 'good':
        setGood(stateGood => stateGood + 1);
        break;
      case 'neutral':
        setNeutral(stateNeutral => stateNeutral + 1);
        break;
      case 'bad':
        setBad(stateBad => stateBad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good * 100) / countTotalFeedback());

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          btns={['good', 'neutral', 'bad']}
          onLeaveFeedback={btnIncrement}
        />
      </Section>

      <Section title="Statictics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
