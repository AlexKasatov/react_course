import React from "react";

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <>
          <li key={todo.id}>{todo.task}</li>
          <button onClick={() => props.onTaskDelete(todo.id)}>
            Delete Task
          </button>
        </>
      ))}
    </ul>
  );
}
