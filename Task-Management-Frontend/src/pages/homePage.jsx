import { useEffect, useState } from "react";
import TaskForm from "../components/taskForm";
import TaskList from "../components/taskList";
import TaskFilters from "../components/TaskFilters";

const HomePage = () => {
    // let list = []; // react does not track the normal variables
    const [list, setList] = useState([]); // array : length can change, order of elements can change
    // A,B,C,D --> 2: C
    // C,A,B,D --> 2: B
    // de-coupling

    const getData = async () => {
        const resp = await fetch(`${import.meta.env.VITE_BACKEND_URL}/tasks`);
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
        <div>
            <h2>Welcome to Task Management Tool!</h2>
            <TaskForm getData={getData} />
            <TaskFilters />
            <TaskList list={list} />
        </div>
    );
};

export default HomePage;
