import React from 'react';

import './icon-button.styles.scss';

const IconButton = ({ handleClick, icon, ...restProps }) => (
    <button className="icon-button" onClick={handleClick} {...restProps}>
        <i className={icon}></i>
    </button>
);

export default IconButton;
