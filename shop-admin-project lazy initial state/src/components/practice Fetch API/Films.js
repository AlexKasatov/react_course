import React, {useState, useEffect} from "react"

export default function Films() {
  const [films, setFilms] = useState()

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(response => response.json())
    .then(data => setFilms(data)) 
  }, [])

  if (!films) {
    return null
  }

  return <h1>Студия Ghibli сняла {films.length} фильмов</h1>
}

