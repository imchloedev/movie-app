import { useRouter } from "next/router";
import Head from "next/head";
import Movie from "../../src/components/Movie";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Post = ({ item }) => {
  return (
    <>
      <Head>
        <title>{item.title}</title>
        <meta name="description" content={item.overview}></meta>
      </Head>
      <Movie item={item} />
    </>
  );
};
 
export default Post;

// 서버사이드 렌더링
// id값에 따라 어떤 영화가 나올지 모름 --> 요청 때마다 달라진다 --> Server Side Rendering

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://api.themoviedb.org/3/movie/${id}?api_key=09cd6d519eaa550f9712a7241ec0b2b4&language=en-US`;

  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    }, // will be passed to the page component as props
  };
}
