import React, { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../helpers/posts-util";
import Head from "next/head";

// Contents of this page:-
// 1)  Hero section => Present ourselves
// 2)  Featured blog posts

const HomePage = ({ featuredPosts }) => {
  return (
    <Fragment>
      <Head>
        <title>Ujjwal' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Fragment>
  );
};

export default HomePage;

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      featuredPosts,
    },
  };
}
