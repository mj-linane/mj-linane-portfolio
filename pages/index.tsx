import ContainerBlock from '@/components/ContainerBlock'
import FavoriteProjects from '@/components/FavoriteProjects'
import Hero from '@/components/Hero'
import LatestCode from '@/components/LatestCode'
import data from '@/constants/data'
import GetLatestRepos from '@/lib/GetLatestRepos'

type Repository = {
  id: string
}

type Props = {
  repositories: Repository[]
}

export default function Home({ repositories }: Props) {
  return (
    <ContainerBlock
      title="MJ Linane - Web Developer and Teacher"
      description="This is my collection of best work."
    >
      <Hero />
      <FavoriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  )
}

export async function getStaticProps() {
  const repositories = await GetLatestRepos(data)
  return {
    props: {
      repositories,
    },
  }
}
