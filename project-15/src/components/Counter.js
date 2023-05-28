import React, {Component} from "react";
import {useSelector, useDispatch, connect} from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from "../store/counter";


// class Counter extends Component {
//     incrementHandler() {
//         this.props.increment();
//     }
//     decrementHandler() {
//         this.props.decrement();
//     }
//     toggleCounterHandler() {
//
//     }
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     };
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({type: 'increment'}),
//         decrement: () => dispatch({type: 'decrement'})
//     };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter); // calling connect returns a new function, which we then execute by passing component as an argument
// // connect is a higher-order component
// // mapStateToProps and mapDispatchToProps will be executed by react-redux
// // when using connect, react-redux will still set up a subscription and manage that subscription for us


const Counter = () => {
    console.log('Counter running');

    const dispatch = useDispatch(); // returns a dispatch function
    // dispatch function can be called, which will dispatch an action against our Redux store

    // const counter = useSelector((state) => {
    //     // this function receives state managed by redux
    //     // return the part of the state which you want to extract
    //     return state.counter;
    // });
    // // when you use useSelector, react-redux will automatically set up a subscription to the redux store for this component
    // // if you ever would unmount this component, it would be removed from the DOM for whatever reason, react-redux would also automatically clear(remove) the subscription for you
    // // react-redux manages that subscription for you behind the scenes
    //
    // const show = useSelector(state => state.showCounter);
    // //  component will be re-evaluated whenever the data which we're accessing here, changes.

    const counter = useSelector(state => state.counter.counter);
    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        // dispatch({type: 'increment'});
        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        // dispatch({type: 'decrement'});
        dispatch(counterActions.decrement());
    }
    const increaseHandler = () => {
        // dispatch({type: 'increase', amount: 10}); // amount is payload (extra data)
        // dispatch(counterActions.increase({amount: 10})); // {type: SOME_UNIQUE_IDENTIFIER, payload: {amount: 10}}
        dispatch(counterActions.increase(10)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
        // dispatch({...counterActions.increase(), amount: 10}); // {type: SOME_UNIQUE_IDENTIFIER, payload: undefined, amount: 10}
    }
    const toggleCounterHandler = () => {
        // dispatch({type: 'toggle'});
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
