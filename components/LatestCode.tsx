import React, { useEffect, useState } from 'react'

import LatestCodeCard from '@/components/LatestCodeCard'
import data from '@/constants/data'
import GetLatestRepos from '@/lib/GetLatestRepos'
import type Repository from '@/types/repository'

export default function LatestCode() {
  const [repos, setRepos] = useState<Repository[] | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const fetchedRepos = await GetLatestRepos()
        setRepos(fetchedRepos)
        setLoading(false)
      } catch (err) {
        setError(err as Error) // Typecast the error as Error type
        setLoading(false)
      }
    }

    fetchRepos().catch((err) => {
      // eslint-disable-next-line no-console
      console.error('Error fetching repos:', err)
    })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <section className="bg-neutral-200 -mt-40 dark:bg-neutral-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-typewriter tracking-wider font-bold text-neutral-300 my-20 md:my-0 dark:text-neutral-500 text-center lg:text-left">
            recent projects
          </h1>

          <a
            href={`https://github.com/${data.githubUsername}`}
            className="mb-20 md:mb-0 px-8 py-4 border-2 border-black bg-purple-500 cursor-pointer uppercase font-typewriter tracking-wider font-semibold space-x-4 text-center dark:text-neutral-50"
          >
            <p>View GitHub</p>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
        {/* Single github Repo */}

        {error && <p>{Error.toString()}</p>}
        {repos?.map((latestRepo, index) => (
          <LatestCodeCard latestRepo={latestRepo} key={index} />
        ))}
      </div>
    </section>
  )
}
