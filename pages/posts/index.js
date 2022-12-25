import Head from "next/head";
import React, { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="Description"
          content="A list related to all programming related tutorial and posts!"
        />
      </Head>
      <AllPosts posts={posts} />;
    </Fragment>
  );
};

export default AllPostsPage;

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
