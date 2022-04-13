import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "././App.css";
import AddTask from "./components/addTask";
import TaskDetails from "./components/TaskDetails";
import Example from "./components/App1";
import Example2 from "./components/App2";
import Example3 from "./components/App3";
import Example4 from "./components/App4";
import Example5 from "./components/App5";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar React",
      completed: false,
    },
    {
      id: "2",
      title: "Estudar JS",
      completed: true,
    },
  ]);
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get("http://localhost:3001/tasks");
      setTasks(data);
    };
    fetchTasks();
  }, []);
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Example5 />} />
        <Route path="/reducer" exact element={<Example4 />} />
        <Route path="/ref" exact element={<Example3 />} />
        <Route path="/effect" exact element={<Example2 />} />
        <Route path="/state" exact element={<Example />} />
        <Route
          path="/tasks"
          exact
          element={
            <>
              <Header />
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
              />
            </>
          }
        />
        <Route path="/:taskTitle" exact element={<TaskDetails />} />
      </Routes>
    </div>
  );
};

export default App;
