// There will be only one store which will manage all app-wide states.
// You will always have 1 Redux Store, but then typically multiple different State Slices which manage totally different data

import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// const store = createStore(counterSlice.reducer);
const store = configureStore({
    // reducer: counterSlice.reducer
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
    // configure store makes a big reducer function, after taking into account all reducers defined in all slices
});

export default store;