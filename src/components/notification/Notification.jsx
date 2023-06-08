import PropTypes from "prop-types";
import css from './Notification.module.css';

const Notification = ({ message }) => (
    <div className={css.block}>
        <p className={css.text}>{message}</p>
    </div>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,    
};

export default Notification;