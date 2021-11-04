import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Йоу, {name}!</p>
    </>
  );
};

export default Form;
