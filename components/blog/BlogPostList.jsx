import React from "react";

export default function BlogPostList({ posts }) {
  return (
    <div className='bg-neutral-200 dark:bg-neutral-900 -mt-4 py-40'>
      <div className='border-4 border-black bg-neutral-50 box-shadow-md-black p-4 md:p-10 lg:p-20 max-w-6xl mx-auto'>
        <ul>
          {posts.map(({ id, date, title }) => (
            <li key={id} className='my-4'>
              <h2 className='text-3xl font-bold'>{title}</h2>
              <p className='text-gray-500'>{date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
