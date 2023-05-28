import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContext from "../../store/auth-context";

const Navigation = () => {

    const authContextData = useContext(AuthContext);

    return (
        // <AuthContext.Consumer>
        //     {(contextData) => {
        //         return (
        //             <nav className={classes.nav}>
        //                 <ul>
        //                     {contextData.isLoggedIn && (
        //                         <li>
        //                             <a href="/">Users</a>
        //                         </li>
        //                     )}
        //                     {contextData.isLoggedIn && (
        //                         <li>
        //                             <a href="/">Admin</a>
        //                         </li>
        //                     )}
        //                     {contextData.isLoggedIn && (
        //                         <li>
        //                             <button onClick={props.onLogout}>Logout</button>
        //                         </li>
        //                     )}
        //                 </ul>
        //             </nav>
        //         )
        //     }}
        // </AuthContext.Consumer>

        <nav className={classes.nav}>
            <ul>
                {authContextData.isLoggedIn && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {authContextData.isLoggedIn && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {authContextData.isLoggedIn && (
                    <li>
                        <button onClick={authContextData.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
