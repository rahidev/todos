import React from 'react';

import UserGreet from '../../components/user-greet/user-greet.component';
import UserTodos from '../../components/user-todos/user-todos.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <UserGreet />
        <UserTodos />
    </div>
);

export default HomePage;
