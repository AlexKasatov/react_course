import { useState, useEffect } from "react";

const Vaccineselector = () => {
  const [vaccine, setVaccine] = useState("");

  useEffect(() => {
    if (vaccine) {
      console.log(vaccine);
      
      const putRequest = {
        method: "PUT",
        body: JSON.stringify({ name: vaccine }),
        headers: { "Content-type": "application/json" },
      };

      fetch("https://worldhealth.org/vaccines", putRequest)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            console.log(data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [vaccine]);

  function handleVaccineChange(e) {
    setVaccine(e.target.value);
  }

  return (
    <>
      <h2>Выберите вакцину</h2>
      <select onChange={handleVaccineChange}>
        <option value="pfizer">Пфайзер</option>
        <option value="moderna">Модерна</option>
        <option value="astrazeneca">АстраЗенека</option>
        <option value="sputnik">Спутник V</option>
      </select>
      <h3>{vaccine}</h3>
    </>
  );
};

export default Vaccineselector;
