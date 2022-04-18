import React from "react";
import Link from "next/link";

function PostList({ posts }) {
  return (
    <div>
      <h1>PosstList</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2 key={post.id}>
                {post.id} {post.title}
              </h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return { props: { posts: data } };
}
