type Props = {
  title: string
  description: string
  year: string
  company: string
  companyLink: string
}

export default function ExperienceCard({
  title,
  description,
  year,
  company,
  companyLink,
}: Props) {
  return (
    <div className="relative border-4 border-black box-shadow-md-black p-4 bg-neutral-50 dark:bg-neutral-800 z-10 mx-4">
      <h1 className="absolute -top-10 lg:top-15 font-typewriter tracking-wider text-4xl text-neutral-500 font-bold dark:text-neutral-400">
        {year}
      </h1>
      <h1 className="font-semibold font-typewriter tracking-wider text-xl">
        {title}
      </h1>
      <a href={companyLink} className="text-neutral-500">
        {company}
      </a>
      <p className="text-neutral-600 dark:text-neutral-400 my-2">
        {description}
      </p>
    </div>
  )
}
