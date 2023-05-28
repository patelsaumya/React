import React, {useRef} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    // const nameInputRef = useRef();
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput((value) => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput((value) => value.includes('@'));

    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

    const formIsValid = enteredNameIsValid && enteredEmailIsValid;

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        // nameInputRef.current.value = ''; // not an ideal way, as we are directly manipulating DOM
        // React should be the only thing which is manipulating the DOM

        resetNameInput();
        resetEmailInput();
    }

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    value={enteredName}
                    // ref={nameInputRef}
                    type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
                {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email1'>Your E-Mail</label>
                <input
                    value={enteredEmail}
                    type='email'
                    id='email1'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailInputHasError && <p className='error-text'>Please enter a valid email.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid} >Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
