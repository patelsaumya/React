import React, {useState, useEffect, Component} from 'react';
import classes from './UserFinder.module.css';
import Users from './Users';
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
    static contextType = UsersContext; // this property can only be set once

    constructor() {
        super();
        this.state = {
            filteredUsers: [], // one state-slice
            searchTerm: ''
        };
    }

    componentDidMount() {
        this.setState({filteredUsers: this.context.users});
    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </React.Fragment>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm))
            });
        }
    }

}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState('');
//
//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);
//
//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };
//
//     return (
//         <React.Fragment>
//             <div className={classes.finder}>
//                 <input type='search' onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </React.Fragment>
//     );
// };

export default UserFinder;