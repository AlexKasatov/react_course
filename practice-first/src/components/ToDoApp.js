import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TodoList from "./TodoList";
import uuid from "react-uuid";

export default function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function handleTaskChange(event) {
    setTask(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setTodos([...todos, { task, id: uuid() }]);
    setTask("");
  }

  function handleTaskDelete(id) {
    const updatedTaskList = todos.filter((todosElement) => {
      return todosElement.id !== id;
    });
    setTodos(updatedTaskList);
  }

  return (
    <div>
      <TaskForm
        onFormSubmit={handleFormSubmit}
        onTaskChange={handleTaskChange}
        task={task}
      />
      <TodoList todos={todos} onTaskDelete={handleTaskDelete} />
    </div>
  );
}
