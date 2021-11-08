import React from "react";

//стейт-лесс компонент, дочерний компонент Email.js
//Практика Подьем Стейта №86
export default function EmailForm({email, onEmailChange}) {
  return (
    <form>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={onEmailChange}
      />
    </form>
  );
}
