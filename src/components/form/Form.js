import { useState } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Success from "../success/Success";

import styles from './Form.module.css';
import PropTypes from "prop-types";

const Form = ({ handleUpdate, reset, state }) => {
    const [success, setSuccess] = useState(false);

    const handleSuccess = (e) => {
        e.preventDefault();
        setSuccess(true);
    }

    const handleReset = () => {
        setSuccess(false);
        reset();
    }

    if (success) {
        return <Success onClick={handleReset} />;
    }

    return (
        <form onSubmit={handleSuccess} className={styles.form}>
            <Input
                value={state.name}
                onInput={(e) => handleUpdate('name', e.target.value)}
                id="input-1"
                label="Cardholder Name"
                placeholder="e.g. Jane Appleseed"
                requiredMessage="Can't be blank"
                required
            />
            <Input
                value={state.cardNumber}
                onInput={(e) => handleUpdate('cardNumber', e.target.value)}
                id="input-2"
                label="Card Number"
                maxLength="16"
                formatMessage="Wrong format, numbers only. Must be 16 digits"
                pattern="[0-9]{16}"
                requiredMessage="Can't be blank"
                required
                placeholder="e.g. 1234 5678 9123 0000"
            />
            <div className={styles.dataAndCvc}>
                <Input
                    value={state.month}
                    onInput={(e) => handleUpdate('month', e.target.value)}
                    style={{ flex: '0 0 20%', minWidth: '0'}}
                    id="input-3"
                    label="Exp. Date"
                    maxLength="2"
                    formatMessage="Must be 2 digits"
                    pattern="[0-9]{2}"
                    requiredMessage="Can't be blank"
                    required
                    placeholder="MM"
                />
                <Input
                    value={state.year}
                    onInput={(e) => handleUpdate('year', e.target.value)}
                    style={{ flex: '0 0 20%', minWidth: '0'}}
                    id="input-4"
                    label="(MM/YY)"
                    maxLength="2"
                    formatMessage="Must be 2 digits"
                    pattern="[0-9]{2}"
                    requiredMessage="Can't be blank"
                    required
                    placeholder="YY"
                />
                <Input
                    value={state.cvc}
                    onInput={(e) => handleUpdate('cvc', e.target.value)}
                    style={{ flex: '0 0 calc(60% - 40px)', minWidth: '0'}}
                    id="input-5" label="CVC"
                    maxLength="3"
                    formatMessage="Must be 3 digits"
                    pattern="[0-9]{3}"
                    requiredMessage="Can't be blank"
                    required
                    placeholder="e.g. 123"
                />
            </div>
            <Button>Confirm</Button>
        </form>
    );
}

export default Form;

Form.propTypes = {
    handleUpdate: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    state: PropTypes.shape({
        name: PropTypes.string,
        cardNumber: PropTypes.string,
        month: PropTypes.string,
        year: PropTypes.string,
        cvc: PropTypes.string
    }).isRequired
};