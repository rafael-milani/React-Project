import React, { useState } from "react";
import Button from "./Button";
import "./AddTask.css";

const App1 = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  function handleInputChange(e) {
    setInputData(e.target.value);
  }
  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };
  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        ClassName="add-task-input"
        type="text"
      />

      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default App1;
