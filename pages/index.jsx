import ContainerBlock from "@components/ContainerBlock";
import Hero from "@components/Hero";
import LatestCode from "@components/LatestCode";
import FavoriteProjects from "@components/FavoriteProjects";
import getLatestRepos from "@lib/GetLatestRepos";
import userData from "@constants/data";


// noinspection JSUnusedGlobalSymbols
export default function Home({repositories}) {
    return (
        <ContainerBlock
            title="MJ Linane - Web Developer and Teacher"
            description="This is my collection of best work.">
            <Hero/>
            <FavoriteProjects/>
            <LatestCode repositories={repositories}/>
        </ContainerBlock>
    )
}

// noinspection JSUnusedGlobalSymbols
export const getServerSideProps = async () => {

    const repositories = await getLatestRepos(userData);

    return {
        props: {
            repositories,
        },
    };
};
