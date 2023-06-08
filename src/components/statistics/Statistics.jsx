import PropTypes from "prop-types";
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className={css.list}>
        <li className={css.item}><span>Good: { good }</span></li>
        <li className={css.item}><span>Neutral: { neutral }</span></li>
        <li className={css.item}><span>Bad: { bad }</span></li>
        <li className={css.total}><span>Total: { total }</span></li>
        <li className={css.percentage}><span>Positive feedback: { positivePercentage }%</span></li>
    </ul>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};

export default Statistics;