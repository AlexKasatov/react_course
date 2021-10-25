import "./App.css";
import React, { useState } from "react";
import Shop from "./components/Shop";
import Counter from "./components/Practice/Counter";
import FastingApp from "./components/Practice/FastingApp";
import ItemsPractice from "./components/Practice/ItemsPractice";
import SitNext from "./components/Practice/SitNext";
import Scroll from "./components/Practice/Scroll";
import Multibrand from "./components/Practice/Multibrand";

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
      <Multibrand />
    </>
  );
}

export default App;
