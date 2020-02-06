import React from 'react';

import './button.styles.scss';

const Button = ({ children, type }) => (
    <button className={type ? `button button--${type}` : 'button'}>
        {children}
    </button>
);

export default Button;
