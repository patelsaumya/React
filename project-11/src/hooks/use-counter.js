import {useEffect, useState} from "react";

// Function name should start with 'use', as it will be a React Hook
const useCounter = (forwards=true) => {
    // stateful logic (logic dependent on state)

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;