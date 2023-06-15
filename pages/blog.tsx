import Blog from '@/components/Blog'
import ContainerBlock from '@/components/ContainerBlock'
import { getAllPosts } from '@/lib/api'

import type PostType from '@/types/post'

type Props = {
  allPosts: PostType[]
}

export default function blog({ allPosts }: Props) {
  return (
    <ContainerBlock customMeta={{ title: 'Blog - MJ Linane' }}>
      <Blog allPosts={allPosts} />
    </ContainerBlock>
  )
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
