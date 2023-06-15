import Image from 'next/image'

type Props = {
  imageURL: string
  altText?: string
  title: string
  link: string
  number: number
}

export default function FavoriteProjectCard({
  imageURL,
  altText = '',
  title,
  link,
  number,
}: Props) {
  return (
    <a
      href={link}
      className="w-full block col-span-3 border-2 border-black box-shadow-md-black"
    >
      <div className="relative overflow-hidden h-80">
        <Image
          src={imageURL}
          alt={altText}
          className="object-cover"
          fill
          quality={100}
        />
        <h1 className="absolute top-10 left-10 text-neutral-50 font-bold font-typewriter text-xl bg-purple-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 dark:text-neutral-800 font-bold font-typewriter text-xl">
          {number}
        </h1>
      </div>
    </a>
  )
}
