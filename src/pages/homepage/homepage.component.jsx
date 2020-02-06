import React, { Component } from 'react';

import UserGreet from '../../components/user-greet/user-greet.component';
import UserTodos from '../../components/user-todos/user-todos.component';

import './homepage.styles.scss';

class HomePage extends Component {
    state = {
        todos: [
            {
                id: 'kjdj',
                todo: 'Go For Shopping',
                isCompeleted: false
            },
            {
                id: 'kdsjd',
                todo: 'complate todo project',
                isCompeleted: false
            },
            {
                id: 'bshs',
                todo: 'Design A logo',
                isCompeleted: false
            },
            {
                id: 'bshhs',
                todo: 'Design A WebSite',
                isCompeleted: false
            }
        ]
    };

    render() {
        return (
            <div className="homepage">
                <UserGreet todosLength={this.state.todos.length} />
                <UserTodos todos={this.state.todos} />
            </div>
        );
    }
}

export default HomePage;
