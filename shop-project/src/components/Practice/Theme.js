import React, { useState, useEffect } from "react";

const Theme = () => {
  const [dark, setDark] = useState(true);

    useEffect(() => {
        localStorage.setItem("dark", dark)
    }, [dark])

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

export default Theme;
