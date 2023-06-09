import Image from 'next/image'

type Props = {
  name: string
  picture: string
}

export default function Avatar({ name, picture }: Props) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        alt={name}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full mr-4"
      />
    </div>
  )
}
