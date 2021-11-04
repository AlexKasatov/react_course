import { useState, useEffect } from "react";

const Darktheme = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("dark") === "true";
  });

  useEffect(() => {
    localStorage.setItem("dark", dark);
  }, [dark]);

  const className = dark ? "dark" : "light";

  function handleToggleClick() {
    setDark(!dark);
  }

  return (
    <div className={className}>
      <button onClick={handleToggleClick}>Переключить тему</button>
    </div>
  );
};

export default Darktheme;
