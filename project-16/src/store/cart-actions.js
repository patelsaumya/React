import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";
import security from "../assets/config/security.json";

// (@reduxjs/toolkit) Action Creator: cartSlice.actions.addItemToCart(...) returns action object

// (custom) Action Creator (Thunk):
// Thunk -> A function that delays an action until later
// Action creator function that does not return the action itself but another function which eventually returns the action
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));
        const sendRequest = async () => {
            const response = await fetch(security.cartUrl, {
                method: 'PUT', // will override the existing cart (FIREBASE)
                // method: 'POST', // will push a new item to the existing cart
                // body: JSON.stringify(cart)
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            });
            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };
        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }));
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }));
        }
    };
};

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                security.cartUrl
            );
            if (!response) {
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();
            return data;
        }
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (err) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            }));
        }
    }
}