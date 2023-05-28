import React from "react";
import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink
                            to='/'
                            className={({isActive}) => isActive ? classes.active : undefined}
                            end // true by default (this link should only be considered active, if the currently active routes end with value of 'to' prop)
                    >Home</NavLink></li>
                    <li><NavLink
                            to='/products'
                            className={({isActive}) => isActive ? classes.active : undefined}
                            // end
                    >Products</NavLink></li>
                    {/* These NavLink(s) only work if this component is rendered inside the Router Provider */}
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;