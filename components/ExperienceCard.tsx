type Props = {
    title: string;
    description: string;
    year: string;
    company: string;
    companyLink: string;
};

const ExperienceCard = ( experience : Props ) =>
    (
        <div className='relative border-4 border-black box-shadow-md-black p-4 bg-neutral-50 dark:bg-neutral-800 z-10 mx-4'>
            <h1 className='absolute -top-10 lg:top-15 font-typewriter tracking-wider text-4xl text-neutral-500 font-bold dark:text-neutral-400'>
                {experience.year}
            </h1>
            <h1 className='font-semibold font-typewriter tracking-wider text-xl'>
                {experience.title}
            </h1>
            <a href={experience.companyLink}
               className='text-neutral-500'>
                {experience.company}
            </a>
            <p className='text-neutral-600 dark:text-neutral-400 my-2'>
                {experience.description}
            </p>
        </div>
    );

ExperienceCard.defaultProps = {
    title: 'Title',
    description: 'Description',
    year: 'Year',
    company: 'Company',
    companyLink: 'https://www.google.com',
}

export default ExperienceCard;
