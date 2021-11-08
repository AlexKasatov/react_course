import { useState, useEffect } from "react";

export default function GhibliNew() {
  const [films, setFilms] = useState();
  const [loader, setLoader] = useState(false);

  //   useEffect(() => {
  //     (async () => {
  //       const response = await fetch("https://ghibliapi.herokuapp.com/films");
  //       const data = await response.json();
  //       console.log(data);
  //       setFilms(data);
  //     })();
  //   }, []);

  //! обрати винмание
  //* рефакторинг useEffect async

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://ghibliapi.herokuapp.com/films");
        const data = await response.json();
        setFilms(data);
      } catch(error) {
         console.error(error);
      } finally {
        setLoader(true);
      }
    })();
  }, []);

  if (!films) {
    return null;
  }

  return (
    <>
      <h1>{films.length} фильм:</h1>
      <ul>
        {films.map((film) => (
          <li key="film.id">{film.title}</li>
        ))}
      </ul>
    </>
  );
}
