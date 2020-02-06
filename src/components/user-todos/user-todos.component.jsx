import React from 'react';
import Card from '../../layouts/card/card.component';
import Todo from '../todo/todo.component';
import IconButton from '../icon-button/icon-button.component';

import './user-todos.styles.scss';

const todos = [
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
];

const UserTodos = () => (
    <Card>
        <div className="user-todos">
            <h1 className="user-todos__title">You've 7 Task For Today!</h1>
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
