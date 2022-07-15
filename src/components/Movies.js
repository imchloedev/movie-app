import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Movies.module.css";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const API_URL =
    "https://api.themoviedb.org/3/trending/all/day?api_key=09cd6d519eaa550f9712a7241ec0b2b4&language=en-US";

  function getData() {
    axios
      .get(API_URL)
      .then((res) => {
        return res.data.results;
      })
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.wrapper}>
      {movies.map((movie) => (
        <div key={movie.id}>
          <div className={styles.movie_poster}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
