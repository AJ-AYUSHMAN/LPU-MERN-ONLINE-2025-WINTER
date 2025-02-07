import TaskForm from "../components/taskForm";
import TaskList from "../components/taskList";

const HomePage = () => {
    return (
        <div>
            <h2>Welcome to Task Management Tool!</h2>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default HomePage;
