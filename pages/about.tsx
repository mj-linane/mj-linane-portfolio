import AboutMe from '@/components/About'
import ContainerBlock from '@/components/ContainerBlock'

export default function about() {
  return (
    <ContainerBlock customMeta={{ title: 'About - MJ Linane' }}>
      <AboutMe />
    </ContainerBlock>
  )
}
