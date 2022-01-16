import Link from 'next/link';
import Image from 'next/image';

export default function FavoriteProjects() {
    return (
        <section className="bg-neutral-200 dark:bg-neutral-900">
            <div className="max-w-6xl mx-auto">
                <header
                    className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
                    <h1 className="text-6xl lg:text-9xl max-w-lg font-typewriter tracking-wider font-bold text-neutral-300 my-20 md:my-0 dark:text-neutral-500 text-center lg:text-left">
                        favorite projects
                    </h1>
                    <Link href="/projects">
                        <a
                            className="mb-20 md:mb-0 px-8 py-4 border-2 border-black bg-purple-500 cursor-pointer uppercase font-typewriter tracking-wider font-semibold space-x-4 dark:text-neutral-50">
                            <p>View all</p>
                        </a>
                    </Link>
                </header>
                {/*grid starts here*/}
                <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40">
                    {/*single card*/}
                    <a href="https://mycodingclass.co"
                       className="w-full block col-span-3 border-2 border-black box-shadow-md-black">
                        <div className="relative overflow-hidden">
                            <Image
                                src="/mj-profile.jpg"
                                alt="mycodingclass.co"
                                layout="fill"
                                objectFit="cover"
                            />
                            <h1 className="absolute top-10 left-10 text-neutral-50 font-bold text-xl bg-purple-500 rounded-md px-2">
                                My Coding Class
                            </h1>
                            <h1 className="absolute bottom-10 left-10 dark:text-neutral-800 font-bold text-xl">
                                01
                            </h1>
                        </div>
                    </a>
                    {/*TODO: Add additional favorite project cards*/}
                </div>
            </div>
        </section>
    )
}