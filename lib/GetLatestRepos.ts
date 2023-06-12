import axios, { AxiosResponse } from 'axios'

import data from '@/constants/data.js'
import Repository from '@/interfaces/repository'

type Props = {
  data: typeof data
}

type GitHubApiResponse = {
  total_count: number
  incomplete_results: boolean
  items: Repository[]
}

export default async function GetLatestRepos({
  data,
}: Props): Promise<Repository[]> {
  const userName = data.githubUsername

  try {
    const res: AxiosResponse<GitHubApiResponse> = await axios.get(
      `https://api.github.com/search/repositories?q=user:${userName}+sort:updated`
    )
    const repos = res.data.items

    return repos.slice(0, 6)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
    throw err
  }
}
