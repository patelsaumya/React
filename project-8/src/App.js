import React, {useState} from "react";
import './App.css';

const App = () => {
  const [string, setString] = useState('Hello World');
  const [array, setArray] = useState([1,2,3]);
  console.log('App RUNNING');
  const changeStringHandler = () => {
    setString('Bye World');
  }
  const changeArrayHandler = () => {
    setArray([4,5,6]);
    // setArray(array);
    // setArray([1,2,3]);
  }
  return (
    <React.Fragment>
        <div className='string'>
            String Value: {string}
        </div>
        <div className='array'>
            Array Value: {`[${array}]`}
        </div>
        <div className='buttons'>
            <button type='button' onClick={changeStringHandler}>Change String</button>
            <button type='button' onClick={changeArrayHandler}>Change Array</button>
        </div>
    </React.Fragment>
  );
};

export default App;