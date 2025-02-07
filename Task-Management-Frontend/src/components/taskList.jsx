import { useEffect, useState } from "react";
import "./taskList.css"; //ES6
// require("./taskList.css") // CJS

// re-render === re-run the function
const TaskList = () => {
    // let list = []; // react does not track the normal variables
    const [list, setList] = useState([]); // array : length can change, order of elements can change
    // A,B,C,D --> 2: C
    // C,A,B,D --> 2: B

    const getData = async () => {
        const resp = await fetch("http://localhost:1401/tasks");
        const respBody = await resp.json();
        // list = respBody.data.tasks;
        const arrayOfTaskList = respBody.data.tasks;
        setList(arrayOfTaskList);
    };

    // getData(); // if you call the function directly, it will happen infinite times
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="task-list-main">
            <h3 className="task-list-title">Task List</h3>
            <div className="task-list-task-container">
                {list.map((elem, idx) => {
                    // key :: best: unique property on your own, good: index, worst: nothing as key
                    return (
                        <div key={idx} className="task-card">
                            <p>{elem.workTitle}</p>
                            <p>{elem.taskTitle}</p>
                            <p>{elem.assignee}</p>
                            <p>{elem.assignor}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TaskList;
