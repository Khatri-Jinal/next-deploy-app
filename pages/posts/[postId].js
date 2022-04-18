import React from "react";
import { useRouter } from "next/router";

function post({ post }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  console.log(post);
  if (router.isFallback) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h1>{post.data.title}</h1>
      <p>{post.data.body}</p>
    </div>
  );
}

export default post;

export async function getStaticPaths() {
  // const paths = data.map((post) => {
  //   return {
  //     params: { postId: `${post.data.id}` },
  //   };
  // });
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    //  paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: {
        data,
      },
    },
  };
}
