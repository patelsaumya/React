import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    showCounter: true
};

// Reducer function must be Pure, Side-Effect Free, and Synchronous

// slice of a global state
const counterSlice = createSlice({
    name: 'counter', // identifier of that slice
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            // internal package does the work:-
            // clone the existing state -> create a new object -> keep all the state which we are not editing, and override the state which we are editing in an immutable way
            state.counter++; // this is translated into immutable code
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            // console.log(action);
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

// const counterReducer = (state=initialCounterState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter+1,
//             showCounter: state.showCounter
//         };
//
//         // you should never mutate(change) the existing state:
//         // state.counter++;
//         // return state;
//     } else if (action.type === 'decrement') {
//         return {
//             counter: state.counter-1,
//             showCounter: state.showCounter
//         };
//     } else if (action.type === 'increase') {
//         return {
//             counter: state.counter+action.amount,
//             showCounter: state.showCounter
//         };
//     } else if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         };
//     }
//     return state; // return value will overwrite the existing state
// };
//
// const store = createStore(counterReducer);

// counterSlice.actions.toggleCounter(); // returns an action object of this shape: {type: 'some auto-generated unique identifier'}
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;