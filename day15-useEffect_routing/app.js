// ES6 ES Modules
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./src/pages/dashboard";
import DummyTodos from "./src/pages/dummyTodos";
import HomePage from "./src/pages/homePage";

const domElement = document.getElementById("dom-root");
const reactRoot = ReactDOM.createRoot(domElement);

const App = () => {
    return (
        // <React.Fragment>
        <>
            <HomePage />
            {/* <Dashboard /> */}
            {/* <DummyTodos /> */}
        </>
        // </React.Fragment>
    );
};

reactRoot.render(<App />);
