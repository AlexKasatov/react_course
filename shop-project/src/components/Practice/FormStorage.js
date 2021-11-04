import { useState, useEffect } from "react";

const Formstorage = () => {
  const [name, setName] = useState(() => {
    return localStorage.getItem(("name"));
  });

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
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

export default Formstorage;
