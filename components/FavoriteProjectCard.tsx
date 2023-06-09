import Image from 'next/image'

type Props = {
  imgUrl: string
  altText: string
  title: string
  link: string
  number: number
}

export default function FavoriteProjectCard(project: Props) {
  return (
    <a
      href={project.link}
      className="w-full block col-span-3 border-2 border-black box-shadow-md-black"
    >
      <div className="relative overflow-hidden h-80">
        <Image
          src={project.imgUrl}
          alt={project.altText}
          className="object-cover"
          fill
          quality={100}
        />
        <h1 className="absolute top-10 left-10 text-neutral-50 font-bold font-typewriter text-xl bg-purple-500 rounded-md px-2">
          {project.title}
        </h1>
        <h1 className="absolute bottom-10 left-10 dark:text-neutral-800 font-bold font-typewriter text-xl">
          {project.number}
        </h1>
      </div>
    </a>
  )
}

FavoriteProjectCard.defaultProps = {
  imgUrl: 'https://via.placeholder.com/300x200',
  altText: 'placeholder',
  title: 'Project Title',
  link: 'https://github.com',
  number: 1,
}
