import { useState, useEffect } from "react";
import Shop from "./components/Shop";
import { useTest } from "./custom-hooks/useTest";
import { useConsoleText } from "./custom-hooks/useConsoleText";
import useMoonPrism from "./custom-hooks/useMoonPrism.hook";
import useRequireVespene from "./custom-hooks/useRequireVespene";
import useHelloMessage from "./custom-hooks/useHelloMessage";

function useQuote() {
  useEffect(() => {
    console.log("Embrace the grind");
  });
}

function App() {
  const [login, setLogin] = useState(false);

  useQuote();
  useMoonPrism();
  useTest();
  useConsoleText();
  useRequireVespene();
  useHelloMessage("Asterix");

  if (login) {
    return (
      <>
        <Shop />
        <button className="btn" onClick={() => setLogin(false)}>
          Выйти
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>Нужно залогиниться!</h2>
        <button className="btn" onClick={() => setLogin(true)}>
          Войти
        </button>
      </>
    );
  }
}

export default App;
