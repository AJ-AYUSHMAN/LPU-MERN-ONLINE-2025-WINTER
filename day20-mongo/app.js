const express = require("express");
require("./config/dbConfig.js");
// requiring a file (first time) runs that file line-by-line
//                  (second time onwards) will get the cached exports
const Task = require("./models/taskModel.js");

const PORT = 1401;

const app = express();

// by default:: express app does not read the body
app.use(express.json()); // middleware
// it reads the request body, serializes it as a js object and attach it to request

app.get("/", (req, res) => {
    res.send(`<h1>Server is running ...</h1>`);
});

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200);
        res.json({
            status: "success",
            data: {
                tasks,
            },
        });
    } catch (err) {
        console.log("Error in POST /tasks", err.message);
        res.status(500).json({ status: "fail", message: "Internal Server Error" });
    }
});

app.post("/tasks", async (req, res) => {
    try {
        // 1. get the data from request
        const taskInfo = req.body;

        // 2. validate the data :: now mongoose does that
        // 3. save the data in db :: MongoDB (online --> ATLAS) (offline is pain to setup :: in deployment we will mostly prefer online)
        const newTask = await Task.create(taskInfo);

        res.status(201); //created
        res.json({
            status: "success",
            data: {
                task: newTask,
            },
        });
    } catch (err) {
        console.log("Error in POST /tasks", err.message);
        if (err.name === "ValidationError") {
            res.status(400).json({ status: "fail", message: err.message });
        } else {
            res.status(500).json({ status: "fail", message: "Internal Server Error" });
        }
    }
});

app.listen(PORT, () => {
    console.log("------------------------------------------");
    console.log(`--------- http://localhost:${PORT}/ ---------`);
    console.log("------------------------------------------");
});
