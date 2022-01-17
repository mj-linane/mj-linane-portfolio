import React from 'react';
import Image from 'next/image'
import userData from "@constants/data";
import {RoughNotationGroup} from "react-rough-notation";
import RainbowHighlight from "@components/RainbowHighlight";

export default function Projects() {
    return (
        <section className="bg-neutral-50 dark:bg-neutral-800">
            <div
                className="max-w-6xl mx-auto h-48 bg-neutral-50 dark:bg-neutral-800">
                <RoughNotationGroup show={true}>
                    <RainbowHighlight color={"#a855f7"}>
                        <h1 className="font-typewriter font-bold text-center md:text-9xl md:text-left z-10 tracking-wider py-20">
                            my projects.
                        </h1>
                    </RainbowHighlight>
                </RoughNotationGroup>
            </div>
            {/*Grid Starts Here*/}
            <div className="bg-neutral-200 dark:bg-neutral-900">
                <div
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pt-40 pb-40">
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

// single ProjectCard function
const ProjectCard = ({title, link, imgUrl, number}) => {
    return (
        <a href={link} className="bg-neutral-50 w-full block border-2 border-black box-shadow-md-black">
            <div className="relative overflow-hidden">
                <div className="h-72 object-cover">
                    <Image
                        src={imgUrl}
                        alt="portfolio item"
                        layout="fill"
                        quality={100}
                    >
                    </Image>
                </div>
                <h1 className="absolute top-10 left-10 font-bold text-xl font-typewriter bg-purple-500 px-2">
                    {title}
                </h1>
                <h1 className="dark:text-neutral-800 absolute bottom-10 left-10 font-typewriter font-bold text-xl">
                    {number < 10 ? `0${number}` : number}
                </h1>
            </div>
        </a>
    )
}