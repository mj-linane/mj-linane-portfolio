import ContainerBlock from "@components/ContainerBlock";
import FavoriteProjects from "@components/FavoriteProjects";
import Hero from "@components/Hero";
import LatestCode from "@components/LatestCode";
// import {getLatestRepos} from "@lib/api";
import userData from "@constants/data";
import getLatestRepos from '@lib/GetLatestRepos';

type Repository = {
    id: string;
}

type Props = {
    repositories: Repository[];
}

export default function Home({repositories} : Props) {
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

export async function getStaticProps() {
    const repositories = await getLatestRepos(userData);
    return {
        props: {
            repositories,
        },
    };
}
