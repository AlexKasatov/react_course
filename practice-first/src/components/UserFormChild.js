import React from "react";

export default function UserFormChild({
  name,
  onFormSubmit,
  onNameChange,
}) {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="name">Имя: </label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <input type="submit" value="Сохранить" />
    </form>
  );
}
