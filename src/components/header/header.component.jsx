import React from 'react';
import { Link } from 'react-router-dom';
import UserMenu from '../user-menu/user-menu.component';

import './header.styles.scss';

const Header = () => (
    <header className="header">
        <Link to="/">
            <h1 className="header__brand">Todos</h1>
        </Link>
        <nav className="header__nav">
            <Link to="/newTodo" className="header__nav-link">
                Create A New Todo
            </Link>
            <UserMenu />
        </nav>
    </header>
);

export default Header;
