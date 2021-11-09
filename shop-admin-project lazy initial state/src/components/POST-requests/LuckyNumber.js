import { useState, useEffect } from "react";

const Luckynumber = () => {
  const [lucky, setLucky] = useState(0);

  function handleFormSubmit(e) {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ userNumber: lucky }),
      headers: { "Content-type": "application/json" },
    };

    fetch("https://imaginary-api.com/numbers", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
        }
      })
      .catch(error => {
          console.error(error);
      })

  }
  

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="number"
        value={lucky}
        name="lucky"
        onChange={(e) => setLucky(e.target.value)}
        placeholder="Введите свое счастливое число от 0 до 100"
        min="0"
        max="100"
      />
      <input type="submit" />
    </form>
  );
};

export default Luckynumber;
