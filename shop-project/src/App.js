import "./App.css";
import React, { useState } from "react";
import Shop from "./components/Shop";

function App() {
  const [auth, setAuth] = useState(false);
  function handleAuthClick() {
    auth === false ? setAuth(true) : setAuth(false);
  }
  if (auth === true) {
    return (
      <>
        <Shop /> <button onClick={handleAuthClick}>Выйти</button>
      </>
    );
  }

  return (
    <>
      <h2>Нужно залогиниться!</h2>
      <button onClick={handleAuthClick}>Войти</button>
    </>
  );
}

export default App;
