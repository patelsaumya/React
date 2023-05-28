import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log('DemoOutput RUNNING');
    return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
}

// export default DemoOutput;
export default React.memo(DemoOutput); // React needs to store previous prop values and make comparison
/* React should look at the props which this component gets and check the new value for all those props
and compare it to the previous value those props got. And only if the value of a prop changed, the component
should be re-executed (re-evaluated). And if the (state of)parent component changed but the prop values
for that component here did not change, component execution will be skipped */
// Trade-off between performance cost of re-evaluating component and that of comparing props.