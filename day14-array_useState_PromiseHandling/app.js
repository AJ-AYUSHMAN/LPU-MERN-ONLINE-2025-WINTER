// ES6 ES Modules
import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./src/pages/dashboard";
import DummyTodos from "./src/pages/dummyTodos";

const domElement = document.getElementById("dom-root");
const reactRoot = ReactDOM.createRoot(domElement);

const App = () => {
    return (
        // <React.Fragment>
        <>
            <Dashboard />
            {/* <DummyTodos /> */}
        </>
        // </React.Fragment>
    );
};

reactRoot.render(<App />);
