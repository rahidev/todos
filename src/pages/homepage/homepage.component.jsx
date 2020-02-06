import React from 'react';

import Card from '../../layouts/card/card.component';
import UserGreet from '../../components/user-greet/user-greet.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <UserGreet />
        <Card></Card>
    </div>
);

export default HomePage;
