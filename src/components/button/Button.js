import styles from './Button.module.css';
import PropTypes from "prop-types";

const Button = ({ children, onClick, className }) => (
    <button onClick={onClick} className={`${styles.button} ${className}`}>{children}</button>
);

export default Button;

Button.defaultProps = {
    className: ''
}

Button.propTypes = {
   className: PropTypes.string
};