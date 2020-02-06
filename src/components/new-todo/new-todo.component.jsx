import React from 'react';

import Card from '../../layouts/card/card.component';
import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';

import './new-todo.styles.scss';

const NewTodo = () => (
    <Card styles={{ height: 'auto' }}>
        <div className="new-todo">
            <h1 className="new-todo__heading">Add A New Todo</h1>
            <Input placeholder="Todo" type="text" />
            <div className="new-todo__buttons">
                <Button type="danger">Cancel</Button>
                <Button type="primary">Add</Button>
            </div>
        </div>
    </Card>
);

export default NewTodo;
