import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserMenu from '../user-menu/user-menu.component';

import './header.styles.scss';

const Header = () => (
    <header className="header">
        <Link to="/">
            <h1 className="header__brand">Todos</h1>
        </Link>
        <nav className="header__nav">
            <NavLink
                to="/"
                exact
                className="header__nav-link"
                activeClassName="header__nav-link--active"
            >
                Home
            </NavLink>
            <NavLink
                to="/newTodo"
                className="header__nav-link"
                activeClassName="header__nav-link--active"
            >
                Create A New Todo
            </NavLink>
            <UserMenu className="header__nav-user-menu" />
        </nav>
    </header>
);

export default Header;
