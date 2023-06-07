import Image from 'next/image'
import React from 'react'

export const ProjectCard = ({ title, link, imgUrl, number }) => (
  <a
    href={link}
    className="bg-neutral-50 w-full block border-2 border-black box-shadow-md-black"
  >
    <div className="relative h-80 overflow-hidden">
      <Image
        src={imgUrl}
        alt="portfolio item"
        fill
        quality={100}
        style={{
          objectFit: 'cover',
        }}
      ></Image>
      <h1 className="absolute top-10 left-10 font-bold text-xl font-typewriter bg-purple-500 px-2">
        {title}
      </h1>
      <h1 className="dark:text-neutral-800 absolute bottom-10 left-10 font-typewriter font-bold text-xl">
        {number < 10 ? `0${number}` : number}
      </h1>
    </div>
  </a>
)
