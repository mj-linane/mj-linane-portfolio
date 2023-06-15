import axios from 'axios'

import Repository from '../types/repository'

import data from '../constants/data'

const GetLatestRepos = async (): Promise<Repository[]> => {
  const response = await axios.get<Repository[]>(
    `https://api.github.com/users/${data.githubUsername}/repos`
  )
  return response.data
}

export default GetLatestRepos
