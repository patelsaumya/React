import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    // Controlled Component

    // In a controlled component, form data is handled by a React component.
    // The alternative is uncontrolled components, where form data is handled by the DOM itself.

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;