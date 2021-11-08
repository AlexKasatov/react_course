const getFilms = () => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((resolve) => resolve.json())
    .then((data) => console.log(data));
};


const getFilmsOriginal = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((resolve) => resolve.json())
      .then(data => {
          var originLangData = data.map(element => {
             return element.original_title
          });
          console.log(originLangData)
      });
  };
  
