import styles from './Card.module.css';
import PropTypes from "prop-types";

const formatDate = (month, year) => {
    return `${month || '00'}/${year || '00'}`;
};

const formatCardNumber = (cardNumber) => {
    const digits = cardNumber.split('');
    return digits.reduce((acc, digit, index) => {
        const groupKey = Math.floor((index / 4) + 1);
        return {
            ...acc,
            [groupKey]: `${acc[groupKey] || ''}${digit}`
        };
    }, {});
};

const addTrailingZero = (number) => {
    if (!number) {
        return '0000';
    }

    if (number.length === 1) {
        return `${number}000`;
    }

    if (number.length === 2) {
        return `${number}00`;
    }

    if (number.length === 3) {
        return `${number}0`;
    }

    return number;
}

const FrontCard = ({ state }) => {
    const cardNumber = formatCardNumber(state.cardNumber);

    return (
        <div className={`${styles.card} ${styles.frontImg}`}>
            <div>
                <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
            </div>
            <div className={styles.cardNumbers}>
                <span>{addTrailingZero(cardNumber[1])}</span>
                <span>{addTrailingZero(cardNumber[2])}</span>
                <span>{addTrailingZero(cardNumber[3])}</span>
                <span>{addTrailingZero(cardNumber[4])}</span>
            </div>
            <div className={styles.cardDetails}>
                <span className={styles.cardName}>{state.name || 'Jane Appleseed'}</span>
                <span className={styles.cardDate}>{formatDate(state.month, state.year)}</span>
            </div>
        </div>
    );
};

export default FrontCard;

FrontCard.propTypes = {
    state: PropTypes.shape({
        name: PropTypes.string,
        cardNumber: PropTypes.string,
        month: PropTypes.string,
        year: PropTypes.string,
        cvc: PropTypes.string
    }).isRequired
};