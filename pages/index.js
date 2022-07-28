import Head from "next/head";
import MovieList from "../src/components/MovieList";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home({ list }) {

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Netflix</title>
          <meta name="home" content="Movies" />
        </Head>
        <MovieList list={list} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const API_KEY = process.env.API_KEY;
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`);
  const data = res.data.results;

  return {
    props: {
      list: data,
    },
  };
}
