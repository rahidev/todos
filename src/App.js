import React, { Component } from 'react';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';

import Container from './layouts/container/container.component';
import HomePage from './pages/homepage/homepage.component';
import NewTodoPage from './pages/new-todo-page/new-todo-page.component';
import UpdateTodoPage from './pages/update-todo-page/update-todo-page.component';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <Container>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/newTodo" component={NewTodoPage} />
                        <Route
                            exact
                            path="/updateTodo/:id"
                            component={UpdateTodoPage}
                        />
                    </Switch>
                </Container>
            </div>
        );
    }
}

export default App;
