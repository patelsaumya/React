import React from "react";
import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {

    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: restFirstName
    } = useInput(isNotEmpty);
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: restLastName
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: restEmail
    } = useInput(isEmail);

    const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

    const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
    const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

    const submitHandler = (event) => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        restFirstName();
        restLastName();
        restEmail();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='fname'>First Name</label>
                    <input
                        type='text'
                        id='fname'
                        value={firstNameValue}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    {firstNameHasError && <p className='error-text'>Please enter a first name.</p>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='lname'>Last Name</label>
                    <input
                        type='text'
                        id='lname'
                        value={lastNameValue}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {lastNameHasError && <p className='error-text'>Please enter a last name.</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='email2'>E-Mail Address</label>
                <input
                    type='text'
                    id='email2'
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
                {emailHasError && <p className='error-text'>Please enter a valid email address.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
