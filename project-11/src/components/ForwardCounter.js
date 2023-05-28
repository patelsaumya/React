import React from 'react';
import Card from './Card';
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
    // the state and effect (used in custom hook), will be tied to the component function which uses custom hook
    const counter = useCounter();

    return <Card>{counter}</Card>;
};

export default ForwardCounter;
