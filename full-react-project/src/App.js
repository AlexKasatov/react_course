import { useState } from "react";
import Shop from "./components/Shop";

function App() {
  const [validation, setValidation] = useState(false)

  const handleValidationClick = () => setValidation(prev => !prev)

  if(validation) {
    return (
      <>
      <h2>Вы Зашли Как Админ</h2>
      <Shop/>
      <button onClick={handleValidationClick}>Log Out</button>
      </>
    )
  }
  else {(
    <>
    <h2>Войдите в Аккаунт</h2>
    <button onClick={handleValidationClick}>Sign In</button>
    </>
  );}
}

export default App;
