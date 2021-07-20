import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedPercentage }) => (
  <div className={s.feed}>
    <span className={s.feedType}>Good: {good}</span>

    <span className={s.feedType}> Neutral: {neutral}</span>

    <span className={s.feedType}> Bad: {bad}</span>

    <span className={s.feedType}> Total: {total}</span>

    <span className={s.feedType}>
      Positive feedback: {positiveFeedPercentage}%
    </span>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedPercentage: PropTypes.number.isRequired,
};

export default Statistics;
