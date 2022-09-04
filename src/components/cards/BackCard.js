import styles from './Card.module.css';
import PropTypes from "prop-types";

const BackCard = ({ state }) => (
    <div className={`${styles.card} ${styles.backImg}`}>
       <span className={styles.cardCvc}>{state.cvc || '000'}</span>
    </div>
);

export default BackCard;

BackCard.propTypes = {
    state: PropTypes.shape({
        name: PropTypes.string,
        cardNumber: PropTypes.string,
        month: PropTypes.string,
        year: PropTypes.string,
        cvc: PropTypes.string
    }).isRequired
};