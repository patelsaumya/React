import {configureStore} from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
    // root reducer
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;

// Never mutate Redux state outside a Reducer

// Where should our logic (code) go ?
    // Synchronous, Side-Effect free code -> Prefer Reducers
    // Asynchronous, Side-Effect -> Action Creator or Component