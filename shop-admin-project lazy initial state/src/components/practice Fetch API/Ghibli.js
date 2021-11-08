import { useState, useEffect } from "react";

const Ghibli = () => {
  const [species, setSpecies] = useState();

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/species")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSpecies(data);
      });
  }, []);

  if(!species) {
      return null
  }

  return (
    <>
      <h1>{species.length} видов существ:</h1>
      <ul>
        {species.map((kind) => (
          <li key={kind.id}>{kind.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Ghibli;
