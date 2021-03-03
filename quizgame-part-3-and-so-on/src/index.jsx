import React from "react";
import ReactDOM from "react-dom";
import { Match } from "./Match";


const App = () => {
        return (
                <div id="container">
                        <h1>Quiz Game</h1>
                        <Match />
                </div>
        );
};

ReactDOM.render(<App/>, document.getElementById("root"));