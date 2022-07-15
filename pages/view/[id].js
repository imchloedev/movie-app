import { useRouter } from "next/router";
import Head from "next/head";
import Movie from "../../src/components/Movie";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  const [item, setItem] = useState({});

  const API_URL = `http://api.themoviedb.org/3/movie/${id}?api_key=09cd6d519eaa550f9712a7241ec0b2b4&language=en-US`;

  function getData() {
    axios
      .get(API_URL)
      .then((res) => {
        setItem(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (id && id > 0) {
      getData();
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>{id}</title>
        <meta name="description"></meta>
      </Head>
      <Movie item={item} />
    </>
  );
};

export default Post;
