import React from 'react';
import { getSortedPostsData } from '@lib/GetPostsData';

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = getSortedPostsData();
  const post = posts.find((post) => post.slug === params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </div>
  );
}