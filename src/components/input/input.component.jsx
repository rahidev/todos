import React from 'react';

import './input.styles.scss';

const Input = ({ value, handleChange, ...restProps }) => (
    <input
        className="input"
        value={value}
        onChange={handleChange}
        {...restProps}
    />
);

export default Input;
