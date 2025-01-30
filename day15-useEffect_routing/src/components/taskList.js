import "./taskList.css";

const TaskList = ({ taskList }) => {
    console.log(taskList);

    return (
        <div className="task-list-main-container">
            <h3>Task List</h3>
            {taskList.map((elem) => {
                return (
                    <div className="task-list-card">
                        <h4>
                            {elem.workTitle} :: {elem.taskTitle}
                        </h4>
                        <p>Assignee :: {elem.assignee}</p>
                        <p>{elem.deadline}</p>
                        <p>Assignor :: {elem.assignor}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;
