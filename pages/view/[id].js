import { useRouter } from "next/router";
import Head from "next/head";
import Movie from "../../src/components/Movie";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Post = ({item}) => {

  return (
    <>
      <Head>
        <title>{item.id}</title>
        <meta name="description"></meta>
      </Head>
      <Movie item={item} />
    </>
  );
};

export default Post;

// 서버사이드 렌더링
// 내용이 실시간으로 바뀌지 않을 때 사용

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://api.themoviedb.org/3/movie/${id}?api_key=09cd6d519eaa550f9712a7241ec0b2b4&language=en-US`;

  const res = await axios.get(apiUrl);
  const data = res.data;


  return {
    props: {
      item: data
    }, // will be passed to the page component as props
  }
}