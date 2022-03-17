import React from "react"
import {RoughNotationGroup} from "react-rough-notation";
import RainbowHighlight from "@components/RainbowHighlight";
import userData from "@constants/data";

// TODO Build About Section
export default function About() {
    return (
        <section className="bg-neutral-50 dark:bg-neutral-800">
            <div
                className="max-w-6xl mx-auto h-48 bg-neutral-50 dark:bg-neutral-800">
                <RoughNotationGroup show={true}>
                    <RainbowHighlight color={"#a855f7"}>
                        <h1 className="font-typewriter font-bold text-center md:text-9xl md:text-left z-10 tracking-wider py-20">
                            about me.
                        </h1>
                    </RainbowHighlight>
                </RoughNotationGroup>
            </div>
            {/*<div className="max-w-6xl mx-auto h-48 bg-neutral-50 dark:bg-neutral-800">*/}
            {/*    <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">*/}
            {/*        about me.*/}
            {/*    </h1>*/}
            {/*</div>*/}
            <div className="bg-neutral-200 mt-10 pt-20 dark:bg-neutral-900">
                <div className="text-container max-w-6xl mx-auto py-20">
                    <p
                        className="font-typewriter leading-loose text-2xl md:text-4xl font-semibold mx-4"
                        style={{lineHeight: "3rem"}}
                    >
                        {userData.about.title} I&apos;m currently working on{""}
                        <a
                            className="font-typewriter font-bold bg-purple-500 px-2 py-1 text-neutral-50"
                            href={userData.about.currentProjectUrl}
                        >
                            {userData.about.currentProject}
                        </a>
                    </p>
                </div>
            </div>
            <div className="bg-neutral-200 dark:bg-neutral-900 px-4 pb-20">
                <div
                    className="pt-20 grid grid-cols-1 md:grid-cols-3 mx-w-6xl mx-auto gap-y-20 gap-x-20">
                    {/*social buttons*/}
                    <div className="inline-flex flex-col">
                        <div>
                            <h1 className="font-typewriter text-xl font-semibold text-neutral-700 dark:text-neutral-200">
                                Contact
                            </h1>
                            <p className="text-lg text-neutral-500 mt-4 dark:text-neutral-300">
                                For any sort of help / enquiry, send me an {" "}
                                <a
                                    href={`mailto:${userData.email}`}
                                    className="text-neutral-800 border-b-2 border-neutral-800 dark:border-neutral-300 font-bold dark:text-neutral-300"
                                >
                                    email
                                </a>
                                {" "} and I&apos;ll get back. I swear.
                            </p>
                        </div>
                        <div className="mt-8">
                            <h1 className="font-typewriter text-xl font-semibold text-neutral-700 dark:text-neutral-200">
                                Job Opportunities
                            </h1>
                            <p className="text-lg text-neutral-500 mt-4 dark:text-neutral-300">
                                I&apos;m looking for additional work, so if a
                                curious if my
                                skills and experience would be a good fit, check
                                out
                                my {" "}
                                <a
                                    href={userData.resumeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-neutral-800 border-b-2 border-neutral-800 dark:border-neutral-300 font-bold dark:text-neutral-300"
                                >
                                    CV
                                </a>
                                {" "} and I&apos;d love to chat with you about
                                what you are working on.
                            </p>
                        </div>
                        {/*social links*/}
                        {/*<h1 className="font-typewriter text-xl font-semibold text-neutral-700 mt-8 dark:text-neutral-50">*/}
                        {/*    Social links*/}
                        {/*</h1>*/}
                        {/*<div className="mt-4 ml-4">*/}
                        {/*    <div*/}
                        {/*        className="flex flex-row justify-start items-center">*/}
                        {/*        <a href={userData.socialLinks.twitter}>*/}
                        {/*            <div className="my-4">&rarr;</div>*/}
                        {/*            <p className="text-lg text-neutral-500 relative overflow-hidden dark:text-neutral-50">*/}
                        {/*                <div*/}
                        {/*                    className="absolute h-0 w-full bg-neutral-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300">*/}
                        {/*                    Twitter*/}
                        {/*                </div>*/}
                        {/*            </p>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className="flex flex-row justify-start items-center">*/}
                        {/*        <a href={userData.socialLinks.github}>*/}
                        {/*            <div className="my-4">&rarr;</div>*/}
                        {/*            <p className="text-lg-text-neutral-500 font-mono relative overflow-hidden dark:text-neutral-300">*/}
                        {/*                <div*/}
                        {/*                    className="absolute h-0 w-full bg-neutral-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300">*/}
                        {/*                    GitHub*/}
                        {/*                </div>*/}
                        {/*            </p>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*    <div*/}
                        {/*        className="flex flex-row justify-start items-center">*/}
                        {/*        <a href={userData.socialLinks.linkedin}>*/}
                        {/*            <div className="my-4">&rarr;</div>*/}
                        {/*            <p className="text-lg-text-neutral-500 relative overflow-hidden dark:text-neutral-300">*/}
                        {/*                <div*/}
                        {/*                    className="absolute h-0 w-full bg-neutral-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300">*/}
                        {/*                    LinkedIn*/}
                        {/*                </div>*/}
                        {/*            </p>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    {/*text area*/}
                    <div className="col-span-1 md:col-span-2">
                        {userData.about.description?.map((description, index) => (
                            <p
                                key={index}
                                className="text-xl text-neutral-700 mb-4 dark:text-neutral-300"
                            >
                                {description}
                            </p>
                        ))}

                        <h1 className="font-typewriter tracking-wider bg-purple-500 border-2 border-black box-shadow-black text-3xl px-2 py-1 inline-block font-bold text-neutral-50">
                            my tech stack
                        </h1>
                        {/* TODO add additional tech stack images*/}
                    </div>
                </div>
            </div>
        </section>
    )
}