import React from "react";
import ReactDOM from "react-dom/client";
import TaskPage from "./src/pages/taskPage";

const domRoot = document.getElementById("dom-root");
const reactRoot = ReactDOM.createRoot(domRoot);

const App = () => {
    console.log("App rendering / re-rendering started");
    return (
        <div>
            <h1>Hello from React App!</h1>
            <p>This is my first app as after installing everything on server</p>
            <TaskPage />
        </div>
    );
};

reactRoot.render(App());

// React Component vs React Element
// 1. basic : react element is JSX, but react component is a function which returns JSX (react element)
// 2. how is it useful? : Component (it reusable / allows us to write logic for UI)
