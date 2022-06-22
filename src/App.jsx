import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "././App.css";
import TaskDetails from "./components/TaskDetails";
import Exemple from "./components/App1";
import Example2 from "./components/App2";
import Example3 from "./components/App3";
import Example4 from "./components/App4";
import Example5 from "./components/App5";
import Exemple6 from "./components/App6";
import Exemple7 from "./components/App7";
import Exemple8 from "./components/App8";
import Exemple9 from "./components/App9";

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
        <Route path="/" exact element={<Exemple9 />} />
        <Route path="/simple" exact element={<Exemple8 />} />
        <Route path="/create" exact element={<Exemple7 />} />
        <Route path="/createctx" exact element={<Exemple6 />} />
        <Route path="/reducer" exact element={<Example5 />} />
        <Route path="/ref" exact element={<Example4 />} />
        <Route path="/effect" exact element={<Example3 />} />
        <Route path="/state" exact element={<Example2 />} />
        <Route
          path="/"
          exact
          element={
            <>
              <Header />
              <Exemple handleTaskAddition={handleTaskAddition} />
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
