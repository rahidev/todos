import React from 'react';
import './todo.styles.scss';

const Todo = ({ todo, isCompleted }) => <div className="todo">{todo}</div>;

export default Todo;
