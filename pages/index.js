import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div>
      Home
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>posts</a>
      </Link>
    </div>
  );
}

export default Home;
