import React, { useState, useEffect } from "react";

const Chuck = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value));
  }, []);

  return null;
};

export default Chuck;

