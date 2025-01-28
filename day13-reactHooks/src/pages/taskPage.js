// --> "hook" is a special `function` that is given to you by React
// and you can use it to talk with react

// --> "React Component" is a special `function`
// --> "event handler" is a special `function`

import { useState } from "react";

// ---------------------------------------------
// RE-RENDERING === Re-running the function
// ---------------------------------------------
function TaskPage() {
    console.log("TaskPage rendering / re-rendering started");
    // ** // normal variable which is not capable of re-rendering th component when the value is changed
    // let user = "Ajay";
    // ** // making a react component's state variable using useState Hook
    // it returns you the array,
    // the first item is the variable and second item is the function to change that variable
    const [user, setUser] = useState("Ajay");
    // use "user" whenever you want to SEE the value
    // use "setUser" whenever you want to CHANGE the value

    const handleReactInput = (e) => {
        // ** // you don't change the value directly like normal variable
        // user = e.target.value;

        // ** // instead you call the function "set..."
        setUser(e.target.value); // REACT says NOTED! :: from next time, I will use this new value
    };

    return (
        <div className="task-page">
            <h2>
                This is a task page from <ins>{user}</ins>
            </h2>
            <input className="user-input" onChange={handleReactInput} />
        </div>
    );
}

export default TaskPage;

// ---------------------------------------------

// const temp = (a) => {
//     console.log(a);
// }

// const rr = [10, 32, 42, 51];

// rr.forEach(temp);

// // temp is a callback function
// // which we are passing it to forEach method

// // you don't write () at the end of the name
