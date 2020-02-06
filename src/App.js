import React from 'react';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';

import Container from './layouts/container/container.component';
import HomePage from './pages/homepage/homepage.component';
import NewTodo from './pages/new-todo/new-todo.component';

import './App.scss';

const App = () => (
    <div className="App">
        <Header />

        <Container>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/newTodo" component={NewTodo} />
            </Switch>
        </Container>
    </div>
);

export default App;
