import Head from "next/head";
import React, { Fragment } from "react";
import PostContent from "../../components/posts/post-details/post-content";
import { getAllPosts, getPostData } from "../../helpers/posts-util";

const SinglePostPage = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="Description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export default SinglePostPage;

export async function getStaticProps(context) {
  const { params } = context;
  const slug = params.slug;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const pathsWithParams = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
