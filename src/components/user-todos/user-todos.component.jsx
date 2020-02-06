import React from 'react';
import Card from '../../layouts/card/card.component';
import Todo from '../todo/todo.component';
import IconButton from '../icon-button/icon-button.component';

import './user-todos.styles.scss';

const UserTodos = ({ todos }) => (
    <Card>
        <div className="user-todos">
            <h1 className="user-todos__title">
                You've {todos.length} Task For Today!
            </h1>
            <div className="user-todos__todos">
                {todos.map(({ id, ...restProps }) => (
                    <Todo key={id} {...restProps} />
                ))}
            </div>
            <div className="user-todos__pagination">
                <IconButton icon="fa fa-arrow-left" disabled />
                <IconButton icon="fa fa-arrow-right" />
            </div>
        </div>
    </Card>
);

export default UserTodos;
