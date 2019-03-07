import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return <div>Hello world!</div>;
}

const loadedStates = ['complete', 'loaded', 'interactive'];

function run() {
    ReactDOM.render(<App />, document.getElementById("chart_container"));
}

if (loadedStates.includes(document.readyState) && document.body) {
    run();
} else {
    window.addEventListener('DOMContentLoaded', run, false);
}