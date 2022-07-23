import Head from "next/head";
import { useEffect } from "react";
import MovieList from "../src/components/MovieList";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";

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
  const API_URL =
  "http://api.themoviedb.org/3/movie/popular?api_key=09cd6d519eaa550f9712a7241ec0b2b4&language=en-US";
  const res = await axios.get(API_URL);
  const data = res.data.results;

  return {
    props: {
      list : data,
    }
  }
}