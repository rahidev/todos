import React from 'react';

import './card.styles.scss';

const Card = ({ children, styles }) => (
    <div className="card" style={styles}>
        {children}
    </div>
);

export default Card;
