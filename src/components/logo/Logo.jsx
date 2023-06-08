import PropTypes from "prop-types";
import css from './Logo.module.css';

const Logo = ({ cafeName, cafeSlogan }) => (
    <div className={css.wrapper}>
        <h1 className={css.header}>{cafeName}</h1>
        <p className={css.text}>{cafeSlogan}</p>
    </div>
);

Logo.propTypes = {
    cafeName: PropTypes.string.isRequired,    
    cafeSlogan: PropTypes.string.isRequired,    
};

export default Logo;