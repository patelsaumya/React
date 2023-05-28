import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartIsVisible: false, notification: null},
    reducers: {
        // "reducers" is a map of methods that represent all the different cases, the different actions we want to handle with that reducer
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;