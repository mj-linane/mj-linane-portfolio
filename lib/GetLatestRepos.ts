import axios from 'axios'

import data from '@/constants/data'

import type Repository from '@/types/repository'

const GetLatestRepos = async (): Promise<Repository[]> => {
  const response = await axios.get<Repository[]>(
    `https://api.github.com/users/${data.githubUsername}/repos`
  )
  return response.data
}

export default GetLatestRepos
