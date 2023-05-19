import React from "react";
import Link from "next/link";

export default function SinglePost({ date, title }) {
  return (
    <article>
      <Link href={`/blog/${slug}`}>
        <div>
          <h2 className='text-3xl font-bold'>{title}</h2>
          <p className='text-gray-500'>{date}</p>
        </div>
      </Link>
    </article>
  );
}
