import React from 'react';
import './chips.styles.scss';

const Chips = ({ children, type }) => (
    <span className={!type ? 'chips chips--primary' : `chips chips--${type}`}>
        {children}
    </span>
);

export default Chips;
