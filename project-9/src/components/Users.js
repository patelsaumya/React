import React, {Component, useState} from 'react';
import User from './User';

import classes from './Users.module.css';

// Class Based Component
// cannot use React hooks in there
class Users extends Component {
    constructor() {
        super();
        this.state = {
            showUsers: true
        }; // property name is not upto you
    }

    componentDidUpdate() {
        if (this.props.users.length === 0) {
            throw new Error('No users provided!');
        }
    }

    toggleUsersHandler() {
        // this.state.showUsers = false; // WRONG

        // this.setState({showUsers: false}); // MERGES the new state object with the old state object
        this.setState((curState) => {
            return {showUsers: !curState.showUsers};
        });
    }

    render() {
        const usersList = (
            <ul>
                {this.props.users.map((user) => (
                    <User key={user.id} name={user.name} />
                ))}
            </ul>
        );
        // console.log(this);
        return (
            <div className={classes.users}>
                <button onClick={this.toggleUsersHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        );
    }
}

// Functional Based Component
// const Users = () => {
//     const [showUsers, setShowUsers] = useState(true); // one state-slice
//
//     const toggleUsersHandler = () => {
//         setShowUsers((curState) => !curState); // OVERRIDE the old state
//     };
//
//     const usersList = (
//         <ul>
//             {DUMMY_USERS.map((user) => (
//                 <User key={user.id} name={user.name} />
//             ))}
//         </ul>
//     );
//
//     return (
//         <div className={classes.users}>
//             <button onClick={toggleUsersHandler}>
//                 {showUsers ? 'Hide' : 'Show'} Users
//             </button>
//             {showUsers && usersList}
//         </div>
//     );
// };

export default Users;
