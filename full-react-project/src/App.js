import { useState, useRef } from "react";
import Shop from "./components/Shop";
import Products from "./components/Products";
import useMap from './hooks/useMap';

function App() {
  const [admin, setAdmin] = useState(false);
  const mapContainer = useRef(null)

  useMap(mapContainer, admin)

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
        <div ref={mapContainer}></div>
      </>
    );
  }
}

export default App;
