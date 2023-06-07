import { RoughNotationGroup } from "react-rough-notation";

import userData from "@constants/data";

import ExperienceCard from "./ExperienceCard";
import RainbowHighlight from "./RainbowHighlight";

export default function Experience() {
  return (
    <section className='bg-neutral-50 dark:bg-neutral-800'>
      <div className='max-w-6xl mx-auto h-48'>
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={"#a855f7"}>
            <h1 className='font-typewriter font-bold text-center md:text-9xl md:text-left z-10 tracking-wider py-20'>
              my experience.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/*<div className="max-w-6xl mx-auto h-48 bg-neutral-50 dark:text-white dark:bg-neutral-800">*/}
      {/*    <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left z-10">*/}
      {/*        Experience*/}
      {/*    </h1>*/}
      {/*</div>*/}
      <div className='bg-neutral-200 dark:bg-neutral-900 -mt-4 py-20 lg:py-40'>
        <div className='grid grid-cols-1 dark:bg-neutral-900 max-w-xl mx-auto pt-20'>
          {/* Experience Card*/}
          {userData.experience.map((experience, index) => (
            <>
              <ExperienceCard
                key={index}
                title={experience.title}
                description={experience.description}
                year={experience.year}
                company={experience.company}
                companyLink={experience.companyLink}
              />
              {index === userData.experience.length - 1 ? null : (
                <div className='divider-container flex flex-col items-center -mt-2'>
                  <div className='w-4 h-4 bg-purple-500 rounded-full relative z-10'>
                    <div className='w-4 h-4 bg-purple-500 rounded-full relative z-10 animate-ping'></div>
                  </div>
                  <div className='w-1 h-24 bg-purple-500 rounded-full -mt-2 z-10'></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
