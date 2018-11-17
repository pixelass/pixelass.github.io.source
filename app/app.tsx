import {hot} from "imhotep";
import React from "react";

class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <h1>Hello Github!</h1>
            </React.Fragment>
        );
    }
}

export default hot(module)(App);

