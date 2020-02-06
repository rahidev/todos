import React from 'react';

import Card from '../../layouts/card/card.component';
import Input from '../input/input.component';
import Button from '../button/button.component';

import './update-todo.styles.scss';

const UpdateTodo = () => (
    <Card styles={{ height: 'auto' }}>
        <div className="update-todo">
            <h1 className="update-todo__heading">Update Todo</h1>
            <Input placeholder="Todo" type="text" />
            <div className="update-todo__buttons">
                <Button type="danger">Cancel</Button>
                <Button type="warning">Update</Button>
            </div>
        </div>
    </Card>
);

export default UpdateTodo;
