import React from "react"
import RainbowHighlight from "@components/RainbowHighlight";
import {RoughNotationGroup} from "react-rough-notation";

export default function Contact() {
    return (
        <section className="bg-neutral-50 dark:bg-neutral-800">
            <div
                className="max-w-6xl mx-auto h-48 bg-neutral-50 dark:bg-neutral-800">
                <RoughNotationGroup show={true}>
                    <RainbowHighlight color={"#a855f7"}>
                        <h1 className="font-typewriter font-bold text-center dark:text-neutral-50  md:text-9xl md:text-left z-10 tracking-wider py-20">
                            contact me.
                        </h1>
                    </RainbowHighlight>
                </RoughNotationGroup>
            </div>
            <div className="bg-neutral-200 dark:bg-neutral-900 -mt-4 py-40">
                {/*Form Container*/}
                <div
                    className="border-4 border-black bg-neutral-50 box-shadow-md-black p-4 md:p-10 lg:p-20 max-w-6xl mx-auto"
                >
                    {/*Form*/}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5">
                        <div
                            className="mx-4 flex flex-row items-center space-x-6">
                            <h1 className="font-typewriter text-neutral-800 font-semibold text-4xl">
                                Let&apos;s talk about what you are working on.
                            </h1>
                        </div>
                        <div
                            className="flex flex-row items-center space-x-6 border-4 border-black py-4 px-8">
                            {/*className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-purple-500 py-4 px-8">*/}
                            <form className="form p-4 flex flex-col w-full">
                                {/*<form className="form rounded-lg p-4 flex flex-col w-full">*/}
                                <label htmlFor="name"
                                       className="form-label text-sm text-neutral-800 uppercase mx-4 track-wide">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="form-input border-2 border-black box-shadow-black dark:bg-neutral-50 py-2 mt-2 px-1 mx-4"
                                    // className="rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-purple-500"
                                    name="name"
                                    id="name"
                                />
                                <label htmlFor="email"
                                       className="form-label text-sm text-neutral-800 uppercase mx-4 mt-4 track-wide">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    className="form-input border-2 border-black box-shadow-black dark:bg-neutral-50 py-2 mt-2 px-1 mx-4 "
                                    // className="rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-purple-500"
                                    name="email"
                                    id="email"
                                />
                                <label htmlFor="comment"
                                       className="form-label text-sm text-neutral-800 uppercase mx-4 mt-4 track-wide">
                                    Your Message
                                </label>
                                <input
                                    type="textarea"
                                    className="form-textarea border-2 border-black box-shadow-black dark:bg-neutral-50 py-2 mt-2 px-1 mx-4"
                                    name="comment"
                                />
                                <button
                                    type="submit"
                                    className="text-sm border-2 border-black bg-purple-500 hover:bg-black text-neutral-50 cursor-pointer h-10 uppercase mx-4 mt-8 py-2 tracking-wider"
                                    // className="bg-purple-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-sm font-bold"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}