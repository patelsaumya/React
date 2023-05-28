import {useReducer, useState} from "react";

const initialInputState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return {value: action.value, isTouched: state.isTouched};
    } else if (action.type === 'BLUR') {
        return {value: state.value, isTouched: true};
    } else if (action.type === 'RESET') {
        return {value: '', isTouched: false};
    }
    return initialInputState;
};

const useInput = (validateValue) => {
    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false);

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);


    // const valueIsValid = validateValue(enteredValue);
    // const hasError = !valueIsValid && isTouched;

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({type: 'INPUT', value: event.target.value});

        // setEnteredValue(event.target.value);
        // State updates are scheduled by React (those updates are not processed immediately)
    };

    // Blur event takes place when input loses focus
    const inputBlurHandler = (event) => {
        dispatch({type: 'BLUR'});

        // setIsTouched(true);
    }

    const reset = () => {
        dispatch({type: 'RESET'});

        // setEnteredValue('');
        // setIsTouched(false);
    }

    return {
        // value: enteredValue,
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput;