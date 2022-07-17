import Head from "next/head";
import { useEffect } from "react";
import MovieList from "../src/components/MovieList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState([]);
  const API_URL =
    "http://api.themoviedb.org/3/movie/popular?api_key=09cd6d519eaa550f9712a7241ec0b2b4&language=en-US";

  function getData() {
    axios
      .get(API_URL)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setList(data.results);
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Netflix</title>
          <meta name="home" content="Movies" />
          <link rel="icon" href="/logoicon.png" />
        </Head>
        {isLoading && (
          <div className="loading_box">
            <div className="item item7">
              <div className="dot dot1"></div>
              <div className="dot dot2"></div>
              <div className="dot dot3"></div>
            </div>
          </div>
        )}
        <MovieList list={list} />
      </div>
    </>
  );
}
