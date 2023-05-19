import React from "react";
import ContainerBlock from "@components/ContainerBlock";
import Blog from "@components/blog/Blog";
import { getSortedPostsData } from '@lib/GetPostsData';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function blog({allPostsData}) {
  return (
    <ContainerBlock title='Blog - MJ Linane'>
      <Blog posts={allPostsData}/>
    </ContainerBlock>
  );
}
