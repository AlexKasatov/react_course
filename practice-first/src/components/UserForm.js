import React, { useState } from "react";
import UserFormChild from "./UserFormChild";

export default function UserForm() {
  const [name, setName] = useState("");
  const [storeName, setStoreName] = useState("")

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setStoreName([...storeName, {name}])
    setName("");
  }

  return (
    <div>
      <h2>Привет, {name}</h2>
      <UserFormChild
        name={name}
        onFormSubmit={handleFormSubmit}
        onNameChange={handleNameChange}
      />
    </div>
  );
}
