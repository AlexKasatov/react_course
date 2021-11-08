import { useState, useEffect } from "react";
import uuid from "react-uuid";

export default function GhibliButton() {
  const [films, setFilms] = useState();
  const [loader, setLoader] = useState(false);

  async function handlerButtonClick() {
    setLoader(true);
    try {
      const response = await fetch("https://ghibliapi.herokuapp.com/films");
      const data = await response.json();
      if (data) {
        setFilms(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false);
    }
  }

  return (
    <>
      <button onClick={handlerButtonClick} disabled={loader}>
        Загрузить список
      </button>
      <h1>Фильмы:</h1>
      <ul>
        {films &&
          films.map((film) => (
            <li id={uuid()} key={uuid()}>
              {film.title}
            </li>
          ))}
      </ul>
    </>
  );
}
