import React, {useState, useCallback} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);
    // As long as the component stays attached to the DOM, state is only updated after that first initialization

    console.log('APP RUNNING');

    // const toggleParagraphHandler = () => {
    //     setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    // } // new function is created for every render

    const toggleParagraphHandler = useCallback(() => {
        // JavaScript Functions are Closures
        if (allowToggle) {
            setShowParagraph((prevShowParagraph) => !prevShowParagraph);
        }
    }, [allowToggle]); // reuses the same function during re-evaluation as long as values of all dependencies stays the same. If anyone of them differ then a new function is created.

    const allowToggleHandler = () => {
        setAllowToggle(true);
        // setAllowToggle(prevState => !prevState);
        // component gets re-evaluated whenever value of any state changes
    };

    return (
      <div className="app">
          <h1>Hi there!</h1>
          {/*{showParagraph && <p>This is new!</p>}*/}
          {/*<DemoOutput show={showParagraph} />*/}
          {/*<DemoOutput show={false} />*/} {/*Child component is re-evaluated whenever Parent component gets re-evaluated*/}
          <DemoOutput show={showParagraph} />
          <Button onClick={allowToggleHandler} id={1}>Allow Toggling!</Button>
          <br/><br/>
          <Button onClick={toggleParagraphHandler} id={2}>Toggle Paragraph!</Button>
          {/* Booleans, Strings, Numbers are primitive values (1===1) */}
          {/* Functions, Arrays, Objects are not primitives(reference) ([1,2,3]!==[1,2,3]) */}
      </div>
    );
}

export default App;
