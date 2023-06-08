import { RoughNotationGroup } from 'react-rough-notation'

import { ProjectCard } from '@/components/ProjectCard'
import RainbowHighlight from '@/components/RainbowHighlight'

import userData from '@/constants/data'

export default function Projects() {
  return (
    <section className="bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-6xl mx-auto h-48 bg-neutral-50 dark:bg-neutral-800">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={'#a855f7'}>
            <h1 className="font-typewriter font-bold text-center md:text-9xl md:text-left z-10 tracking-wider py-20">
              my projects.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/*Grid Starts Here*/}
      <div className="bg-neutral-200 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pt-40 pb-40">
          {userData.projects.map((project, index) => (
            <ProjectCard
              title={project.title}
              link={project.link}
              imgUrl={project.imgUrl}
              number={index + 1}
              key={`${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
