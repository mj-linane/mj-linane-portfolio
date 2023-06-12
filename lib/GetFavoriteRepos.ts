// GetFavoriteRepos.ts - Get favorite repos from the imported GetLatestRepos.ts
import data from '@/constants/data.js'
import Repository from '@/interfaces/repository'
import GetLatestRepos from '@/lib/GetLatestRepos'

type Props = {
  data: typeof data
}

export default async function GetFavoriteRepos({
  data,
}: Props): Promise<Repository[]> {
  const repos = await GetLatestRepos({ data })

  return repos.slice(0, 5)
}
