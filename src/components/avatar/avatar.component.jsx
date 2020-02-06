import React from 'react';

import './avatar.styles.scss';

const Avatar = ({ imageUrl, styles }) => (
    <div className="avatar" style={styles}>
        <img src={imageUrl} className="avatar__img" alt="user profile pic" />
    </div>
);

export default Avatar;
