import React from 'react';
import UpdateTodo from '../../components/update-todo/update-todo.component';

import './update-todo-page.styles.scss';

const UpdateTodoPage = props => {
    console.log(props);
    return (
        <div className="update-todo-page">
            <UpdateTodo />
        </div>
    );
};

export default UpdateTodoPage;
