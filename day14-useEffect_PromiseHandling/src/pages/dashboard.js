import TaskForm from "../components/taskForm";
import TaskList from "../components/taskList";
import "./dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1 className="title">Dashboard for Tasks</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default Dashboard;
