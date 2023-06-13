import ContainerBlock from '@/components/ContainerBlock'
import FavoriteProjects from '@/components/FavoriteProjects'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <ContainerBlock
      title="MJ Linane - Web Developer and Teacher"
      description="This is my collection of best work."
    >
      <Hero />
      <FavoriteProjects />
      <LatestCode />
    </ContainerBlock>
  )
}
