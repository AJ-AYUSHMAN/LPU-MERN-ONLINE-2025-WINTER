import "./taskForm.css";
import { useState } from "react";

const TaskForm = () => {
    const [workTitle, setWorkTitle] = useState("");
    const [taskTitle, setTaskTitle] = useState("");

    const handleWorkTitleChange = (e) => {
        setWorkTitle(e.target.value);
    };

    const handleTaskTitleChange = (e) => {
        setTaskTitle(e.target.value);
    };

    return (
        <div className="task-form">
            <h3>
                Task Form :: {workTitle} :: {taskTitle}
            </h3>
            <div className="form-input-container">
                <label>Work Title</label>
                <input
                    type="text"
                    name="work-title"
                    placeholder="Type here..."
                    value={workTitle}
                    onChange={handleWorkTitleChange}
                ></input>
            </div>
            <div className="form-input-container">
                <label>Task Title</label>
                <input
                    type="text"
                    name="task-title"
                    placeholder="Type here..."
                    value={taskTitle}
                    onChange={handleTaskTitleChange}
                ></input>
            </div>
        </div>
    );
};

export default TaskForm;

// {/*
//                 UN-CONTROLLED Component :: it is NOT controlled by REACT
//                 :: --> IT is controlled by DOM / HTMl / Browser

//                 <input type="text" name="task-title" placeholder="Type here..."></input>
//                 */}
