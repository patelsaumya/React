import React, {useMemo} from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
    const {items} = props;

    const sortedList = useMemo(() => {
        console.log('Sorting Items');

        // return value is stored (memoized)
        return items.sort((a,b) => a-b);
    }, [items]); // whenever one of the dependency changes, the stored value is updated

    console.log('DemoList RUNNING');

    return (
        <div className={classes.list}>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(DemoList);