import styles from './Movie.module.css';


export default function Movie({ item }) {
  const { title, poster_path, release_date, original_title, overview, original_language, popularity } = item;

  return (
    <div className={styles.wrapper}>
      <div className={styles.movie_poster}>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt={title}
        />
      </div>
      <div className={styles.movie_des}>
        <strong>{original_title}</strong>
        <p>{original_language}</p>
        <span>{release_date}</span>
        <p>{overview}</p>
        <p>{popularity}</p>
      </div>
    </div>
  );
}
