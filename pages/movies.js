import axios from "axios";
import styles from "../src/components/Movies.module.css";

export default function movies({ movies }) {
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

export async function getStaticProps() {
  const API_KEY = process.env.API_KEY;
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`
  );
  const data = res.data.results;

  return {
    props: {
      movies: data,
    },
  };
}
