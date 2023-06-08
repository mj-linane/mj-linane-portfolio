type LatestRepo = {
  name: string
  description: string
  clone_url: string
}

type Props = {
  latestRepo: LatestRepo
}

const LatestCodeCard = ({ latestRepo }: Props) => (
  <div className="github-repo">
    <h1 className="font-semibold text-xl dark:text-neutral-200 text-neutral-800">
      {latestRepo.name}
    </h1>
    <p className="text-base font-normal my-4 text-neutral-500">
      {latestRepo.description}
    </p>
    <div className="border-2 border-black bg-purple-500 hover:bg-black cursor-pointer h-10 w-fit px-4 mt-8 py-2">
      <a
        href={latestRepo.clone_url}
        className="font-typewriter uppercase text-neutral-900 dark:text-neutral-50 tracking-wider"
      >
        <p>View Repository </p>
      </a>
    </div>
  </div>
)

export default LatestCodeCard
