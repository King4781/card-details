import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.css';

const handleErrorMsg = (values) => {
    const { formatMessage, requiredMessage, value } = values;

    if (value) {
        return formatMessage;
    }

    return requiredMessage;
}

const Input = ({ label, id, style, formatMessage, requiredMessage, value, ...rest }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div style={style} className={styles.inputWrapper}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input
                onBlur={() => setFocused(true)}
                data-focused={focused.toString()}
                value={value}
                className={styles.input}
                id={id}
                {...rest}
            />
            <span className={styles.errorMessage}>{handleErrorMsg({ formatMessage, requiredMessage, value })}</span>
        </div>
    );
}


export default Input;

Input.defaultProps = {
    placeholder: '',
    type: 'text',
    style: {},
    value: '',
    formatMessage: '',
    requiredMessage: '',
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    formatMessage: PropTypes.string,
    requiredMessage: PropTypes.string,
    value: PropTypes.string
};