import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from "@components/RainbowHighlight";
import BlogPostList from "@components/blog/BlogPostList";

export default function Blog({ posts }) {
  return (
    <section className='bg-neutral-50 dark:bg-neutral-800'>
      <div className='max-w-6xl mx-auto h-48 bg-neutral-50 dark:bg-neutral-800'>
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={"#a855f7"}>
            <h1 className='font-typewriter font-bold text-center dark:text-neutral-50 md:text-9xl md:text-left z-10 tracking-wider py-20'>
              my blog.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      <BlogPostList posts={posts} />
    </section>
  );
}
