import { useState } from "react";
import "./taskList.css"; //ES6
import PropTypes from "prop-types";
// require("./taskList.css") // CJS

// re-render === re-run the function
const TaskList = ({ list }) => {
    const [editTask, setEditTask] = useState(-1);
    const [editObject, setEditObject] = useState({});
    // console.log("🟡 : editObject:", editObject);
    // console.log("🟡 : editTask:", editTask); // 2

    const handleEditField = (key, value) => {
        // console.log(key, value);
        setEditObject((prev) => {
            const newObj = { ...prev };
            newObj[key] = value;
            return newObj;
        });
    };

    const handleEditData = async () => {
        const resp = await fetch(`http://localhost:1401/tasks/${editObject._id}`, {
            method: "PATCH",
            body: JSON.stringify(editObject),
            headers: {
                "content-type": "application/json",
            },
        });
        const respObj = await resp.json();
        if (respObj.status === "success") {
            console.log("success :: updated");
        } else {
            alert(respObj.message);
        }
    };

    return (
        <div className="task-list-main">
            <h3 className="task-list-title">Task List</h3>
            <div className="task-list-task-container">
                {list.map((elem, idx) => {
                    // key :: best: unique property on your own, good: index, worst: nothing as key
                    if (editTask === idx) {
                        return (
                            <div key={elem._id} className="task-card">
                                <h5>{idx}</h5>
                                <p>{elem.workTitle}</p>
                                <p>{elem.taskTitle}</p>
                                <div>
                                    <label>Assignee</label>
                                    <input
                                        value={editObject.assignee}
                                        onChange={(e) => {
                                            handleEditField("assignee", e.target.value);
                                        }}
                                    />
                                    {/* controlled  input*/}
                                </div>
                                <p>{elem.assignor}</p>
                                <p>{elem.deadline}</p>
                                <div>
                                    <label>Priority</label>
                                    <select
                                        name="priority"
                                        value={editObject.priority}
                                        onChange={(e) => {
                                            handleEditField("priority", e.target.value);
                                        }}
                                    >
                                        <option value="normal">Normal</option>
                                        <option value="low">Low</option>
                                        <option value="high">High</option>
                                        <option value="urgent">Urgent</option>
                                    </select>
                                    {/* controlled  input*/}
                                </div>
                                <p>{elem.status}</p>
                                <button onClick={handleEditData}>Submit Changes</button>
                                <button
                                    onClick={() => {
                                        setEditTask(-1);
                                        setEditObject({});
                                    }}
                                >
                                    Cancel
                                </button>
                            </div>
                        );
                    } else {
                        return (
                            <div key={idx} className="task-card">
                                <h5>{idx}</h5>
                                <p>{elem.workTitle}</p>
                                <p>{elem.taskTitle}</p>
                                <p>{elem.assignee}</p>
                                <p>{elem.assignor}</p>
                                <p>{elem.deadline}</p>
                                <p>{elem.priority}</p>
                                <p>{elem.status}</p>
                                <button
                                    onClick={() => {
                                        setEditObject(elem);
                                        setEditTask(idx);
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

// https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
TaskList.propTypes = {
    list: PropTypes.array,
};

export default TaskList;
