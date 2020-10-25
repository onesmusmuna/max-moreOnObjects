const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById("movie-list");

  // check if there are movies in array
  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  // clear the Movie List
  movieList.innerHTML = "";

  movies.forEach((movie) => {
    const movieEl = document.createElement("li");
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  // validation
  if (title.trim === "" || extraName.trim() === "" || extraValue.trim() === "") {
    return;
  }

  // create new movie
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  // store movie in array
  movies.push(newMovie);
  console.log(movies);
  renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);
