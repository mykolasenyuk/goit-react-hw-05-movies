import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section';
import Notification from './Notification';






class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnIncrement = evt => {
    this.setState(prevState => {
      return {
        [evt]: prevState[evt] + 1,
      };
    });
  };

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, neutral, bad) =>
    Math.round((good * 100) / this.countTotalFeedback(good, neutral, bad));

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(good, bad, neutral);
    const positiveFeedPercentage = this.countPositiveFeedbackPercentage(
      good,
      neutral,
      bad,
    );

    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.btnIncrement}
          />
        </Section>

        <Section title="Statictics">
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedPercentage={positiveFeedPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
