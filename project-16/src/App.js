import React, {useEffect} from "react";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from "react-redux";
import {uiActions} from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions";
import security from "./assets/config/security.json";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);
    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);
    useEffect(() => {
        // const sendCartData = async () => {
        //     dispatch(uiActions.showNotification({
        //         status: 'pending',
        //         title: 'Sending...',
        //         message: 'Sending cart data!'
        //     }));
        //     const response = await fetch(security.cartUrl, {
        //         method: 'PUT', // will override the existing cart (FIREBASE)
        //         // method: 'POST', // will push a new item to the existing cart
        //         body: JSON.stringify(cart)
        //     });
        //     if (!response.ok) {
        //         throw new Error('Sending cart data failed.');
        //     }
        //     dispatch(uiActions.showNotification({
        //         status: 'success',
        //         title: 'Success!',
        //         message: 'Sent cart data successfully!'
        //     }));
        // }
        // if (isInitial) {
        //     isInitial = false;
        //     return;
        // }
        // sendCartData().catch((err) => {
        //     dispatch(uiActions.showNotification({
        //         status: 'error',
        //         title: 'Error!',
        //         message: 'Sending cart data failed!'
        //     }));
        // });

        if (isInitial) {
            isInitial = false;
            return;
        }
        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]); // dispatch function will never change (added it to dependencies array to silent the IDE)
    return (
        <React.Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </React.Fragment>
    );
}

export default App;
