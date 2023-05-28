const redux = require('redux');

// Reducer functions should be Pure functions, i.e. "same input leads to same output"
// there should be no side effects inside the function
const counterReducer = (state={counter: 0}, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter+1
        };
    } else if (action.type === 'decrement') {
        return {
            counter: state.counter-1
        };
    }
    return state;
};

const store = redux.createStore(counterReducer);
// counterReducer will be responsible for changing the store
// this reducer function will be executed(called) by redux
// when the store is initialized, redux will execute the reducer function for the first time (so the reducer function will be called when the store is created). Hence, the state is undefined for 1st call to the reducer function
// The 1st call mentioned in the above comment does not trigger our subscription function.

// console.log(store.getState());

// this subscription function will soon be triggered whenever the state changes
const counterSubscriber = () => {
    const latestState = store.getState(); // will give us the latest state snapshot, after it was updated
    console.log(latestState);
};

store.subscribe(counterSubscriber); // redux will execute the subscriber function for us, whenever the state(data) in the store changed

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});