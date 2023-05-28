import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {hasError: false};
    }

    // Lifecycle method
    componentDidCatch(error) {
        // implementing this method makes the particular component an error boundary
        // no equivalent for the functional components
        // this method will be triggered whenever one of the child components throws(or generates) an error

        console.log(error);
        this.setState({hasError: true});

    }

    render() {
        if (this.state.hasError) {
            return <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;