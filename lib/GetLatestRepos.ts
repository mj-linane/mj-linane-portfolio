import axios from 'axios'

import data from '@/constants/data'
import type Repository from '@/types/repository'

const GetLatestRepos = async (): Promise<Repository[]> => {
  const response = await axios.get<Repository[]>(
    `https://api.github.com/users/${data.githubUsername}/repos`
  )
  return response.data
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    .slice(0, 6)
}

export default GetLatestRepos
