import "./dummyTodos.css";
import { useState } from "react";

const DummyTodos = () => {
    // const getData = () => {
    //     const pr = fetch("https://dummyjson.com/todos");
    //     pr.then((res) => {
    //         const pr2 = res.json();
    //         pr2.then((data) => {
    //             console.log(data);
    //         });
    //     }).catch(() => {
    //         alert("Api call failed!");
    //     });
    // };

    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch("https://dummyjson.com/todos");
        const resObj = await res.json();
        setData(resObj.todos);
    };

    // Un-comment --> INFINITE
    // Comment --> ZERO

    // getData();

    console.log("-->", data);

    // useEffect --> sideEffect

    return (
        <div>
            <h2>Todos List from API</h2>
            <p>This is a dummy page to show todo's list by fetching API</p>
        </div>
    );
};

export default DummyTodos;
