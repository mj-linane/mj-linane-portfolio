import React, { useEffect, useState } from "react";
import getLatestRepos from "@lib/GetLatestRepos.jsx";
import userData from "@constants/data.js";

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function asyncGetRepos() {
      try {
        await getLatestRepos(userData);
        setRepos(repositories);
      } catch (error) {
        console.log(error);
      }
    }

    asyncGetRepos();
  }, [repositories]);

  return (
    <section className='bg-neutral-200 -mt-40 dark:bg-neutral-900 pb-40'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10'>
          <h1 className='text-6xl lg:text-9xl max-w-lg font-typewriter tracking-wider font-bold text-neutral-300 my-20 md:my-0 dark:text-neutral-500 text-center lg:text-left'>
            recent projects
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className='mb-20 md:mb-0 px-8 py-4 border-2 border-black bg-purple-500 cursor-pointer uppercase font-typewriter tracking-wider font-semibold space-x-4 text-center dark:text-neutral-50'
          >
            {/*<svg*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*    width="16"*/}
            {/*    height="16"*/}
            {/*    fill="currentColor"*/}
            {/*    className="bi bi-arrow-up-right-square"*/}
            {/*    stroke="4"*/}
            {/*    strokeWidth="4"*/}
            {/*    viewBox="0 0 16 16"*/}
            {/*>*/}
            {/*    <path*/}
            {/*        fillRule="evenodd"*/}
            {/*        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"*/}
            {/*    />*/}
            {/*</svg>*/}
            <p>View GitHub</p>
          </a>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20'>
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, index) => (
            <GithubRepoCard latestRepo={latestRepo} key={index} />
          ))}
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  // noinspection JSUnresolvedVariable
  return (
    <div className='github-repo'>
      <h1 className='font-semibold text-xl dark:text-neutral-200 text-neutral-800'>
        {latestRepo.name}
      </h1>
      <p className='text-base font-normal my-4 text-neutral-500'>
        {latestRepo.description}
      </p>
      <div className='border-2 border-black bg-purple-500 hover:bg-black cursor-pointer h-10 w-fit px-4 mt-8 py-2'>
        <a
          href={latestRepo.clone_url}
          className='font-typewriter uppercase text-neutral-900 dark:text-neutral-50 tracking-wider'
        >
          <p>View Repository </p>
        </a>
      </div>
    </div>
  );
};
