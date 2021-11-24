import { useState } from "react";
import Shop from "./components/Shop";
import Products from "./components/Products";

function App() {
  const [admin, setAdmin] = useState(false);

  const handleAdminLogIn = () => setAdmin((prev) => !prev);

  if (admin) {
    return (
      <>
        <Shop />
        <button onClick={handleAdminLogIn}>Log Out</button>
      </>
    );
  } else {
    return (
      <>
        <h2>Войти</h2>
        <button onClick={handleAdminLogIn}>Log In</button>
        <Products/>
      </>
    );
  }
}

export default App;
